"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { routerIntro, routerPicks } from "@/data/solutions";

/**
 * #router — pick a problem statement on the left, the matching pillar
 * (name, price floor, why, CTA) resolves on the right. Default = index 0.
 */
export default function ProblemRouter() {
  const [picked, setPicked] = useState(0);
  const pick = routerPicks[picked];

  return (
    <div className="gradient-border grid overflow-hidden rounded-2xl md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
      {/* Left — problem statements */}
      <div className="p-6 sm:p-10">
        <h2 className="font-display text-2xl font-bold tracking-tight text-white">
          {routerIntro.title}
        </h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-200">
          {routerIntro.lede}
        </p>
        <fieldset className="mt-7">
          <legend className="sr-only">{routerIntro.optionsLabel}</legend>
          <div className="flex flex-col gap-2.5">
            {routerPicks.map((p, i) => {
              const active = i === picked;
              return (
                <button
                  key={p.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setPicked(i)}
                  className={cn(
                    "flex items-center gap-3.5 rounded-xl border px-4 py-3.5 text-left text-sm leading-snug transition-colors",
                    active
                      ? "border-brand-500 bg-brand-500/15 text-white"
                      : "border-line bg-surface text-zinc-200 hover:border-brand-500/60 hover:text-white"
                  )}
                >
                  <span className="font-mono text-[11px] opacity-55">{p.n}</span>
                  <span>{p.label}</span>
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      {/* Right — resolved pillar */}
      <div className="flex flex-col justify-center gap-3.5 border-t border-line bg-surface p-6 sm:p-10 md:border-l md:border-t-0">
        <p className="font-display text-xs font-semibold uppercase tracking-widest text-zinc-500">
          {routerIntro.resultEyebrow}
        </p>
        <p className="font-display text-3xl font-bold tracking-tight text-white">
          {pick.name}
        </p>
        <p className="font-mono text-[13px] text-brand-300">{pick.floor}</p>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-200">{pick.why}</p>
        <Button href={pick.href} size="sm" className="mt-2 self-start">
          {pick.cta}
        </Button>
      </div>
    </div>
  );
}
