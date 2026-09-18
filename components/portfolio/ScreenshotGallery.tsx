"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DeviceFrame, type DeviceKind } from "@/components/portfolio/DeviceFrame";

export interface Screenshot {
  src: string;
  label: string;
  device: DeviceKind;
}

const widthByDevice: Record<DeviceKind, string> = {
  desktop: "w-[280px] sm:w-[360px]",
  tablet: "w-40 sm:w-48",
  mobile: "w-32 sm:w-40",
};

/**
 * All shots sit in one wrapping row, each framed in its own browser/tablet/
 * phone chrome so the device itself signals what it is — no grouping
 * headings needed. Clicking any tile opens a full-size lightbox that steps
 * through every shot.
 */
export function ScreenshotGallery({ shots, name }: { shots: Screenshot[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex(i => (i === null ? i : (i + 1) % shots.length));
      if (e.key === "ArrowLeft") setActiveIndex(i => (i === null ? i : (i - 1 + shots.length) % shots.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, shots.length]);

  return (
    <>
      <div className="flex flex-wrap items-start gap-4">
        {shots.map((shot, index) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group shrink-0 text-left transition-transform duration-300 hover:-translate-y-1 ${widthByDevice[shot.device]}`}
          >
            <DeviceFrame
              device={shot.device}
              src={shot.src}
              alt={`${name} — ${shot.label}`}
              sizes="360px"
            />
            {shot.label !== "Homepage" && (
              <p className="mt-2 text-[12px] text-zinc-400">{shot.label}</p>
            )}
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-10"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 font-display text-sm text-white/70 hover:text-white"
            onClick={() => setActiveIndex(null)}
          >
            Close ✕
          </button>
          <div
            className="relative h-full max-h-[85vh] w-full max-w-4xl"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={shots[activeIndex].src}
              alt={`${name} — ${shots[activeIndex].label}`}
              fill
              sizes="100vw"
              className="object-contain"
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
                  setActiveIndex(i => (i === null ? i : (i - 1 + shots.length) % shots.length));
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
                  setActiveIndex(i => (i === null ? i : (i + 1) % shots.length));
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
