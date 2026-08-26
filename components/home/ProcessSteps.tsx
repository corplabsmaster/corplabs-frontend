"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ExecuteIcon, MaintainIcon, PlanIcon } from "@/components/home/ProcessIcons";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/home";
import { cn } from "@/lib/utils";

const icons = [PlanIcon, ExecuteIcon, MaintainIcon];

/**
 * The three steps: a row on desktop, a swipeable one-at-a-time slider below md.
 *
 * Stacked, the three cards ran to nearly three screens on a phone for what is
 * a single idea — so one markup serves both. The track is a scroll-snap flex
 * row that becomes a plain grid at md, where the flex, snap and overflow rules
 * all stop applying. That means no JS decides the layout, no measurement runs
 * on resize, and swiping is the browser's own scrolling rather than a
 * re-implementation of it.
 */
export function ProcessSteps() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Derive the active dot from scroll position; on desktop the track does not
  // scroll, so this simply never fires.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const width = track.clientWidth || 1;
        setActive(Math.round(track.scrollLeft / width));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-[16%] right-[16%] top-[19px] hidden h-px bg-[linear-gradient(90deg,var(--color-gradient-1),var(--color-gradient-2))] opacity-50 md:block"
        />
        <div
          ref={trackRef}
          tabIndex={0}
          aria-label="Our process, step by step"
          className={cn(
            "flex snap-x snap-mandatory gap-10 overflow-x-auto outline-none",
            // Hide the scrollbar: the dots below already say where you are.
            "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "md:grid md:grid-cols-3 md:overflow-visible"
          )}
        >
          {processSteps.map((step, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={step.n} delay={i * 0.08} className="w-full shrink-0 snap-center md:w-auto">
                <div className="relative text-center">
                  <div className="gradient-border mx-auto mb-6 flex h-10 w-10 items-center justify-center rounded-full font-mono text-[13px] text-white">
                    {step.n}
                  </div>
                  <div className="mx-auto mb-5 h-[120px] w-[120px]">
                    <Icon />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-white">{step.name}</h3>
                  <p className="mx-auto max-w-xs text-sm leading-normal text-zinc-200">
                    {step.blurb}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Dots — the slider's only affordance, so they are taps as well as state. */}
      <div className="mt-7 flex justify-center gap-2.5 md:hidden">
        {processSteps.map((step, i) => (
          <button
            key={step.n}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show step ${step.n}: ${step.name}`}
            aria-current={i === active}
            className={cn(
              "h-2.5 rounded-full transition-all",
              i === active ? "w-7 bg-brand-500" : "w-2.5 bg-zinc-600 hover:bg-brand-300"
            )}
          />
        ))}
      </div>
    </>
  );
}
