"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ExecuteIcon, MaintainIcon, PlanIcon } from "@/components/home/ProcessIcons";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/home";
import { cn } from "@/lib/utils";

const icons = [PlanIcon, ExecuteIcon, MaintainIcon];

function ArrowButton({
  direction,
  disabled,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        "flex h-11 w-11 flex-none items-center justify-center rounded-full border border-line text-zinc-300 transition-colors",
        disabled
          ? "opacity-30"
          : "hover:border-brand-500 hover:text-white active:bg-surface-raised"
      )}
    >
      <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path
          d={direction === "prev" ? "M12.5 4 6.5 10l6 6" : "M7.5 4l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

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
    const clamped = Math.max(0, Math.min(i, processSteps.length - 1));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  }, []);

  const atStart = active === 0;
  const atEnd = active === processSteps.length - 1;

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

      {/*
        * Arrows as well as dots. Dots alone read as a position indicator rather
        * than a control, so nothing on screen says the panel moves — the arrows
        * are the part that says "there is more this way".
        */}
      <div className="mt-7 flex items-center justify-center gap-4 md:hidden">
        <ArrowButton
          direction="prev"
          disabled={atStart}
          onClick={() => goTo(active - 1)}
          label={atStart ? "Previous step" : `Previous step: ${processSteps[active - 1].name}`}
        />

        <div className="flex gap-2.5">
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

        <ArrowButton
          direction="next"
          disabled={atEnd}
          onClick={() => goTo(active + 1)}
          label={atEnd ? "Next step" : `Next step: ${processSteps[active + 1].name}`}
        />
      </div>
    </>
  );
}
