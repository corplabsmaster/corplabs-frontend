"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface Screenshot {
  src: string;
  label: string;
  /** "portrait" gets a taller, narrower tile (mobile views); "wide" spans two columns. */
  orientation?: "wide" | "portrait";
}

/**
 * Bento-style, clickable screenshot grid. Wide shots span two columns,
 * portrait (mobile) shots span two rows — so a phone screenshot and a
 * desktop screenshot don't fight for the same box shape. Clicking any
 * tile opens a full-size lightbox with keyboard/click-to-dismiss.
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
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {shots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={cn(
              "group relative overflow-hidden rounded-xl border border-line bg-surface-raised text-left",
              shot.orientation === "portrait" ? "row-span-2 aspect-[9/17]" : "col-span-2 aspect-[16/10] sm:col-span-2"
            )}
          >
            <Image
              src={shot.src}
              alt={`${name} — ${shot.label}`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-6 font-mono text-[10.5px] uppercase tracking-wider text-white opacity-0 transition-opacity group-hover:opacity-100">
              {shot.label}
            </span>
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
