"use client";

import { useEffect, useRef, useState } from "react";
import { DeviceFrame, type DeviceKind } from "@/components/portfolio/DeviceFrame";
import { Reveal } from "@/components/ui/reveal";

export interface Screenshot {
  src: string;
  label?: string;
  device: DeviceKind;
}

const deviceOrder: DeviceKind[] = ["desktop", "tablet", "mobile"];

const inlineMaxWidth: Record<DeviceKind, string> = {
  desktop: "max-w-3xl",
  tablet: "max-w-sm",
  mobile: "max-w-xs",
};

const inlineSizes: Record<DeviceKind, string> = {
  desktop: "(min-width: 1024px) 768px, 100vw",
  tablet: "(min-width: 640px) 384px, 90vw",
  mobile: "(min-width: 640px) 320px, 80vw",
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
 * shot (typically desktop, when the page is long) gets Previous/Next
 * controls to step through them, like a drawer — instead of cramming every
 * shot into a row of small thumbnails. Each device group reveals on its own
 * as the reader scrolls to it. Clicking the current shot opens a full-size
 * lightbox that steps through every shot across every device.
 */
export function ScreenshotGallery({ shots, name }: { shots: Screenshot[]; name: string }) {
  const groups = deviceOrder
    .map(device => ({ device, items: shots.filter(s => s.device === device) }))
    .filter(g => g.items.length > 0);

  const [slidePos, setSlidePos] = useState<Partial<Record<DeviceKind, number>>>({});
  const slideFor = (device: DeviceKind) => slidePos[device] ?? 0;
  const stepSlide = (device: DeviceKind, direction: 1 | -1, length: number) =>
    setSlidePos(prev => ({ ...prev, [device]: cycleIndex(prev[device] ?? 0, direction, length) }));

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
      <div className="space-y-10">
        {groups.map(({ device, items }) => {
          const index = slideFor(device);
          const shot = items[index];
          return (
            <Reveal key={device} className={`mx-auto ${inlineMaxWidth[device]}`}>
              <button type="button" onClick={e => openLightbox(shot, e)} className="group block w-full">
                <DeviceFrame
                  device={device}
                  src={shot.src}
                  alt={altFor(name, shot)}
                  sizes={inlineSizes[device]}
                />
              </button>
              {shot.label && (
                <p className="mt-3 text-center text-[13px] text-zinc-400">{shot.label}</p>
              )}
              {items.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-5">
                  <button
                    type="button"
                    aria-label="Previous"
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
                    aria-label="Next"
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
