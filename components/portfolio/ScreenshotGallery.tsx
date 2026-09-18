"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { DeviceFrame, type DeviceKind } from "@/components/portfolio/DeviceFrame";
import { Reveal } from "@/components/ui/reveal";

export interface Screenshot {
  src: string;
  /** Not shown in the UI — kept only so alt text can be more specific than "{name} — {device} view". */
  label?: string;
  device: DeviceKind;
}

const deviceOrder: DeviceKind[] = ["desktop", "tablet", "mobile"];

/**
 * Peek carousel geometry, in px. `main` is the current shot's rendered
 * width; `peek` is the neighbor frames' width. Desktop's `window` is
 * deliberately narrower than a full row so the neighbors get cropped to a
 * recognizable browser-chrome sliver either side. Tablet and mobile instead
 * size `peek` down and give `window` enough room for the whole row — their
 * bezels (rounded corners, notch) only read as "a phone" or "a tablet" when
 * the full frame is visible, so those two never get clipped.
 */
const carousel: Record<
  DeviceKind,
  { main: number; peek: number; window: number; sizes: string; peekSizes: string }
> = {
  desktop: { main: 680, peek: 680, window: 1088, sizes: "680px", peekSizes: "680px" },
  tablet: { main: 360, peek: 200, window: 850, sizes: "360px", peekSizes: "200px" },
  mobile: { main: 300, peek: 170, window: 720, sizes: "300px", peekSizes: "170px" },
};

/** Slide-and-fade variants for the row when Next/Previous is pressed — the
 * direction (1 = forward, -1 = back) decides which side old/new content
 * moves to, so the swap reads as a continuous motion, not a jump-cut. */
const slideVariants = {
  enter: (dir: 1 | -1) => ({ x: dir * 40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: 1 | -1) => ({ x: dir * -40, opacity: 0 }),
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

/**
 * One big screenshot at a time per device (desktop/tablet/mobile), each
 * framed in its own browser/tablet/phone chrome. A device with more than one
 * shot (typically desktop, when the page is long) shows a crop of the
 * previous/next shot peeking in on either side, at the same frame size as
 * the current one — click a peek (or Previous/Next) to step the drawer.
 * Each device group reveals on its own, well apart, as the reader scrolls
 * to it. Clicking the current shot opens a full-size lightbox that steps
 * through every shot across every device.
 */
export function ScreenshotGallery({ shots, name }: { shots: Screenshot[]; name: string }) {
  const groups = deviceOrder
    .map(device => ({ device, items: shots.filter(s => s.device === device) }))
    .filter(g => g.items.length > 0);

  const [slidePos, setSlidePos] = useState<Partial<Record<DeviceKind, number>>>({});
  const [slideDir, setSlideDir] = useState<Partial<Record<DeviceKind, 1 | -1>>>({});
  const slideFor = (device: DeviceKind) => slidePos[device] ?? 0;
  const stepSlide = (device: DeviceKind, direction: 1 | -1, length: number) => {
    setSlideDir(prev => ({ ...prev, [device]: direction }));
    setSlidePos(prev => ({ ...prev, [device]: cycleIndex(prev[device] ?? 0, direction, length) }));
  };

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
        {groups.map(({ device, items }) => {
          const index = slideFor(device);
          const direction = slideDir[device] ?? 1;
          const shot = items[index];
          const prevShot = items.length > 1 ? items[cycleIndex(index, -1, items.length)] : null;
          const nextShot = items.length > 1 ? items[cycleIndex(index, 1, items.length)] : null;
          const geo = carousel[device];

          return (
            <Reveal key={device}>
              <div
                className="relative mx-auto overflow-hidden"
                style={{ maxWidth: geo.window, width: "100%" }}
              >
                <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                  <motion.div
                    key={index}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    className="flex items-center justify-center gap-6"
                  >
                    {prevShot && (
                      <button
                        type="button"
                        aria-label="Previous screenshot"
                        onClick={() => stepSlide(device, -1, items.length)}
                        className="shrink-0 opacity-40 transition-opacity hover:opacity-70"
                        style={{ width: geo.peek }}
                      >
                        <DeviceFrame device={device} src={prevShot.src} alt="" sizes={geo.peekSizes} />
                      </button>
                    )}

                    <div className="shrink-0" style={{ width: geo.main }}>
                      <button type="button" onClick={e => openLightbox(shot, e)} className="block w-full">
                        <DeviceFrame
                          device={device}
                          src={shot.src}
                          alt={altFor(name, shot)}
                          sizes={geo.sizes}
                        />
                      </button>
                    </div>

                    {nextShot && (
                      <button
                        type="button"
                        aria-label="Next screenshot"
                        onClick={() => stepSlide(device, 1, items.length)}
                        className="shrink-0 opacity-40 transition-opacity hover:opacity-70"
                        style={{ width: geo.peek }}
                      >
                        <DeviceFrame device={device} src={nextShot.src} alt="" sizes={geo.peekSizes} />
                      </button>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {items.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-5">
                  <button
                    type="button"
                    onClick={() => stepSlide(device, -1, items.length)}
                    className="font-display text-[13px] text-zinc-400 transition-colors hover:text-white"
                  >
                    ← Previous
                  </button>
                  <span className="font-mono text-[11px] text-zinc-500">
                    {index + 1} / {items.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => stepSlide(device, 1, items.length)}
                    className="font-display text-[13px] text-zinc-400 transition-colors hover:text-white"
                  >
                    Next →
                  </button>
                </div>
              )}
            </Reveal>
          );
        })}
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
