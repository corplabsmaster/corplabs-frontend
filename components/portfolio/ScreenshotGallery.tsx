"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { animate as animateValue, motion, useMotionValue } from "motion/react";
import { DeviceFrame, type DeviceKind } from "@/components/portfolio/DeviceFrame";
import { Reveal } from "@/components/ui/reveal";
import type { ProjectScreenshot } from "@/lib/portfolio";

/** Re-exported under this file's existing name rather than importing
 * ProjectScreenshot directly everywhere below, to keep this diff small —
 * the point is there's one canonical shape now, not a second hand-copied
 * interface that can silently drift from it. */
export type Screenshot = ProjectScreenshot;

const deviceOrder: DeviceKind[] = ["desktop", "tablet", "mobile"];

const GAP = 24; // px — matches the track's flex gap below

/**
 * Track carousel geometry, in px. Every shot for a device sits in a fixed
 * `peek`-wide slot in one continuous strip; the current slot scales up to
 * `main` width in place. Stepping just re-targets the strip's x offset and
 * the scale/opacity of each slot, so the same DOM node visibly slides from
 * the peek position into the center instead of one screenshot being swapped
 * for another. Desktop keeps peek === main (no scale-up) with a `window`
 * narrower than a full row, so neighbors crop to a browser-chrome sliver —
 * that read fine and nobody asked to change it. Tablet and mobile instead
 * scale up from a smaller peek and give `window` room for the whole row, so
 * their bezel (rounded corners, notch) always shows whole — a partial phone
 * doesn't read as "a phone".
 */
/** DeviceFrame's rendered height for a given rendered width, matching its
 * chrome (browser dot-bar + border, or bezel border) plus the screenshot's
 * own aspect ratio. A scaled-up peek keeps its *unscaled* layout height
 * (CSS transform doesn't affect layout), so the carousel window needs this
 * explicit height — sized for the current shot at `main` width — or its
 * `overflow-hidden` clips the scaled-up frame's top and bottom. */
function frameHeight(device: DeviceKind, width: number): number {
  if (device === "desktop") return 28 + (width - 2) * (10 / 16); // dot-bar + border, then 16:10
  if (device === "tablet") return 14 + (width - 14) * (4 / 3); // bezel border, then 3:4
  return 14 + (width - 14) * (19 / 9); // mobile — bezel border, then 9:19
}

/** Ideal geometry, in px, for a viewport wide enough to fit it. `window` is
 * also the ceiling `windowWidth` starts at before the first real measurement.
 * The carousel scales `main`/`peek` down together (see `DeviceCarousel`) to
 * whatever width it actually gets, so neither ever overflows a narrow/mobile
 * container — only the desktop-sized ideal lives here. */
const carousel: Record<DeviceKind, { main: number; peek: number; window: number }> = {
  desktop: { main: 720, peek: 720, window: 1152 },
  tablet: { main: 380, peek: 160, window: 760 },
  mobile: { main: 320, peek: 140, window: 640 },
};

const lightboxWidthByDevice: Record<DeviceKind, string> = {
  desktop: "w-full max-w-4xl",
  tablet: "w-full max-w-xs",
  mobile: "w-full max-w-xs",
};

const lightboxSizesByDevice: Record<DeviceKind, string> = {
  desktop: "(min-width: 1024px) 800px, 90vw",
  tablet: "(min-width: 640px) 320px, 80vw",
  mobile: "(min-width: 640px) 320px, 80vw",
};

/** Alt text always disambiguates by device when there's no descriptive label,
 * so two unlabeled shots (e.g. tablet + mobile "just the homepage") don't read
 * identically to a screen reader. */
function altFor(name: string, shot: Screenshot): string {
  return shot.label ? `${name} — ${shot.label}` : `${name} — ${shot.device} view`;
}

/** Wraps an index forward (+1) or back (-1) within [0, length). Pure so the
 * carousel/lightbox keyboard/arrow navigation is unit-testable without mounting. */
export function cycleIndex(current: number, direction: 1 | -1, length: number): number {
  return (current + direction + length) % length;
}

/** One device's carousel — a single persistent strip of every shot for that
 * device, translated so the current one centers and scales up. Nothing
 * unmounts on step, so the slide is a real transform on real elements, not a
 * cut between two images. */
function DeviceCarousel({
  device,
  items,
  name,
  onOpen,
}: {
  device: DeviceKind;
  /** Each shot paired with its index in the full (all-devices) `shots` array,
   * so opening the lightbox doesn't need to re-find it by `src` — two shots
   * that happen to share an image file would otherwise resolve to whichever
   * one comes first, opening the wrong one. */
  items: Array<{ shot: Screenshot; globalIndex: number }>;
  name: string;
  onOpen: (globalIndex: number, e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const geo = carousel[device];
  const [index, setIndex] = useState(0);
  const windowRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(geo.window);
  const measuredOnce = useRef(false);

  // Scale main/peek/gap down together to whatever width the container
  // actually got — on a phone that's far less than the desktop-ideal
  // `geo.window`, and without this the "current" shot (not just the peeks)
  // renders wider than the screen and gets clipped.
  const fit = Math.min(1, windowWidth / geo.main);
  const main = geo.main * fit;
  const peek = geo.peek * fit;
  const gap = GAP * fit;
  const height = frameHeight(device, main);

  const step = peek + gap;
  const trackX = windowWidth / 2 - peek / 2 - index * step;
  const stepBy = (direction: 1 | -1) => setIndex(i => cycleIndex(i, direction, items.length));

  // The track's x lives in one MotionValue, read/written by both `drag` and
  // the snap animation below. Driving position through the `animate` prop
  // *and* `drag` at once (as this used to) makes Framer resolve drag's
  // elastic constraints against the element's undragged layout position,
  // not wherever `animate` last moved it — the track visibly snaps toward
  // ~20% of its position the instant a real drag starts. Sharing one
  // MotionValue removes the second, conflicting source of truth.
  const x = useMotionValue(trackX);

  useLayoutEffect(() => {
    const el = windowRef.current;
    if (!el) return;
    const measure = (width: number) => {
      setWindowWidth(width);
      if (!measuredOnce.current) {
        // First real measurement (replacing the desktop-ideal guess
        // `windowWidth` started at): snap the track instantly instead of
        // animating into place, since that guess was never actually shown.
        const initialFit = Math.min(1, width / geo.main);
        const initialPeek = geo.peek * initialFit;
        const initialStep = initialPeek + GAP * initialFit;
        x.set(width / 2 - initialPeek / 2 - index * initialStep);
        measuredOnce.current = true;
      }
    };
    measure(el.getBoundingClientRect().width);
    const observer = new ResizeObserver(([entry]) => measure(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- geo/x are stable for this device; only measuring on mount + resize
  }, []);

  useEffect(() => {
    const controls = animateValue(x, trackX, { duration: 0.9, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [trackX, x]);

  return (
    <>
      <div
        ref={windowRef}
        className="relative mx-auto overflow-hidden"
        style={{ maxWidth: geo.window, width: "100%", height }}
      >
        <motion.div
          className="flex h-full items-center"
          style={{ gap, x }}
          drag={items.length > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          dragMomentum={false}
          onDragEnd={(_, info) => {
            const threshold = peek / 4;
            if (info.offset.x < -threshold) stepBy(1);
            else if (info.offset.x > threshold) stepBy(-1);
          }}
        >
          {items.map(({ shot, globalIndex }, i) => {
            const isCurrent = i === index;
            return (
              <motion.button
                key={globalIndex}
                type="button"
                aria-label={isCurrent ? undefined : `Jump to screenshot ${i + 1}`}
                onClick={e => (isCurrent ? onOpen(globalIndex, e) : setIndex(i))}
                className="relative shrink-0"
                style={{ width: peek, zIndex: isCurrent ? 10 : 1 }}
                animate={{ scale: isCurrent ? main / peek : 1, opacity: isCurrent ? 1 : 0.4 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <DeviceFrame device={device} src={shot.src} alt={altFor(name, shot)} sizes={`${Math.round(main)}px`} />
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {items.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => stepBy(-1)}
            className="font-display text-[13px] text-zinc-400 transition-colors hover:text-white"
          >
            ← Previous
          </button>
          <span className="font-mono text-[11px] text-zinc-500">
            {index + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={() => stepBy(1)}
            className="font-display text-[13px] text-zinc-400 transition-colors hover:text-white"
          >
            Next →
          </button>
        </div>
      )}
    </>
  );
}

/**
 * One big screenshot at a time per device (desktop/tablet/mobile), each
 * framed in its own browser/tablet/phone chrome. A device with more than one
 * shot shows the rest of that device's shots peeking either side — click a
 * peek, Previous/Next, or step through and the strip physically slides.
 * Each device group reveals on its own, well apart, as the reader scrolls
 * to it. Clicking the current shot opens a full-size lightbox that steps
 * through every shot across every device.
 */
export function ScreenshotGallery({ shots, name }: { shots: Screenshot[]; name: string }) {
  const indexed = shots.map((shot, globalIndex) => ({ shot, globalIndex }));
  const groups = deviceOrder
    .map(device => ({ device, items: indexed.filter(({ shot }) => shot.device === device) }))
    .filter(g => g.items.length > 0);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const close = () => {
    setActiveIndex(null);
    triggerRef.current?.focus();
    triggerRef.current = null;
  };

  const openLightbox = (globalIndex: number, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget;
    setActiveIndex(globalIndex);
  };

  // Lock background scroll while the lightbox covers the viewport.
  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") {
        setActiveIndex(i => (i === null ? i : cycleIndex(i, 1, shots.length)));
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex(i => (i === null ? i : cycleIndex(i, -1, shots.length)));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, shots.length]);

  const activeShot = activeIndex === null ? null : shots[activeIndex];

  return (
    <>
      <div className="space-y-40 sm:space-y-48">
        {groups.map(({ device, items }) => (
          <Reveal key={device}>
            <DeviceCarousel device={device} items={items} name={name} onOpen={openLightbox} />
          </Reveal>
        ))}
      </div>

      {activeShot && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-10"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 font-display text-sm text-white/70 hover:text-white"
            onClick={close}
          >
            Close ✕
          </button>
          <div
            className={lightboxWidthByDevice[activeShot.device]}
            onClick={e => e.stopPropagation()}
          >
            <DeviceFrame
              device={activeShot.device}
              src={activeShot.src}
              alt={altFor(name, activeShot)}
              sizes={lightboxSizesByDevice[activeShot.device]}
              priority
            />
          </div>
          {shots.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                onClick={e => {
                  e.stopPropagation();
                  setActiveIndex(i => (i === null ? i : cycleIndex(i, -1, shots.length)));
                }}
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                onClick={e => {
                  e.stopPropagation();
                  setActiveIndex(i => (i === null ? i : cycleIndex(i, 1, shots.length)));
                }}
              >
                →
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
