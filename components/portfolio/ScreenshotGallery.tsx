"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { DeviceFrame, type DeviceKind } from "@/components/portfolio/DeviceFrame";
import { Reveal } from "@/components/ui/reveal";

export interface Screenshot {
  src: string;
  /** Not shown in the UI — kept only so alt text can be more specific than "{name} — {device} view". */
  label?: string;
  device: DeviceKind;
}

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
const carousel: Record<DeviceKind, { main: number; peek: number; window: number; sizes: string }> = {
  desktop: { main: 680, peek: 680, window: 1088, sizes: "680px" },
  tablet: { main: 360, peek: 200, window: 850, sizes: "360px" },
  mobile: { main: 300, peek: 170, window: 720, sizes: "300px" },
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
  items: Screenshot[];
  name: string;
  onOpen: (shot: Screenshot, e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const geo = carousel[device];
  const [index, setIndex] = useState(0);
  const windowRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(geo.window);

  useEffect(() => {
    const el = windowRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setWindowWidth(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const step = geo.peek + GAP;
  const trackX = windowWidth / 2 - geo.peek / 2 - index * step;

  return (
    <>
      <div ref={windowRef} className="relative mx-auto overflow-hidden" style={{ maxWidth: geo.window, width: "100%" }}>
        <motion.div
          className="flex items-center"
          style={{ gap: GAP }}
          animate={{ x: trackX }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {items.map((shot, i) => {
            const isCurrent = i === index;
            return (
              <motion.button
                key={shot.src}
                type="button"
                aria-label={isCurrent ? undefined : `Jump to screenshot ${i + 1}`}
                onClick={e => (isCurrent ? onOpen(shot, e) : setIndex(i))}
                className="relative shrink-0"
                style={{ width: geo.peek, zIndex: isCurrent ? 10 : 1 }}
                animate={{ scale: isCurrent ? geo.main / geo.peek : 1, opacity: isCurrent ? 1 : 0.4 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <DeviceFrame device={device} src={shot.src} alt={altFor(name, shot)} sizes={geo.sizes} />
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {items.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => setIndex(i => cycleIndex(i, -1, items.length))}
            className="font-display text-[13px] text-zinc-400 transition-colors hover:text-white"
          >
            ← Previous
          </button>
          <span className="font-mono text-[11px] text-zinc-500">
            {index + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={() => setIndex(i => cycleIndex(i, 1, items.length))}
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
  const groups = deviceOrder
    .map(device => ({ device, items: shots.filter(s => s.device === device) }))
    .filter(g => g.items.length > 0);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const close = () => {
    setActiveIndex(null);
    triggerRef.current?.focus();
    triggerRef.current = null;
  };

  const openLightbox = (shot: Screenshot, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget;
    setActiveIndex(shots.findIndex(s => s.src === shot.src));
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
      <div className="space-y-32 sm:space-y-40">
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
