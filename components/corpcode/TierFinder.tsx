"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { finder, finderQuestions, tiers } from "@/data/corpcode-content";
import { cn } from "@/lib/utils";

/** Default: every question answered at its lowest option (index 0). */
const initialAnswers = (): number[] => finderQuestions.map(() => 0);

export default function TierFinder() {
  const [answers, setAnswers] = useState<number[]>(initialAnswers);

  // Highest answer wins — the recommended tier is the max option index.
  const recommended = tiers[Math.max(...answers)];

  const select = (questionIndex: number, optionIndex: number) =>
    setAnswers((prev) =>
      prev.map((value, i) => (i === questionIndex ? optionIndex : value)),
    );

  return (
    <div className="gradient-border overflow-hidden rounded-2xl">
      <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,420px)]">
        {/* Questions */}
        <div className="p-6 sm:p-10">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
              {finder.heading}
            </h2>
            <span className="shrink-0 font-mono text-xs text-zinc-500">
              {finder.answeredLabel}
            </span>
          </div>
          <p className="mt-1.5 text-sm text-zinc-200">{finder.subline}</p>

          <div className="mt-7 flex flex-col gap-6">
            {finderQuestions.map((q, qi) => (
              <div key={q.id}>
                <div className="mb-2.5 flex items-center gap-2.5">
                  <span className="font-mono text-[11px] text-gradient-1">
                    Q{qi + 1}
                  </span>
                  <span className="font-display text-[13.5px] font-medium text-zinc-300">
                    {q.prompt}
                  </span>
                </div>
                <div
                  role="group"
                  aria-label={q.prompt}
                  className="flex flex-wrap gap-2"
                >
                  {q.options.map((label, oi) => {
                    const active = answers[qi] === oi;
                    return (
                      <button
                        key={label}
                        type="button"
                        aria-pressed={active}
                        onClick={() => select(qi, oi)}
                        className={cn(
                          "rounded-full border px-3.5 py-2 font-display text-[12.5px] transition-colors",
                          active
                            ? "border-brand-500 bg-brand-500 font-medium text-white"
                            : "border-line bg-surface font-light text-zinc-200 hover:border-brand-500/60",
                        )}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendation */}
        <div className="flex flex-col justify-center gap-3 border-t border-line bg-surface p-6 sm:p-10 lg:border-l lg:border-t-0">
          <p className="font-mono text-[11px] tracking-wide text-zinc-500">
            {finder.resultLabel}
          </p>
          <p
            aria-live="polite"
            className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {recommended.name}
          </p>
          <p className="font-mono text-sm text-brand-300">
            {recommended.startsFrom} · {recommended.duration}
          </p>
          <p className="text-sm leading-relaxed text-zinc-200">
            {recommended.bestFor}
          </p>

          <div className="my-4 h-px bg-line" />

          <p className="font-mono text-[11px] tracking-wide text-zinc-500">
            {finder.nextStepLabel}
          </p>
          <p className="text-[13.5px] leading-relaxed text-zinc-200">
            {finder.nextStep}
          </p>
          <Button
            href={finder.cta.href}
            size="sm"
            className="mt-2 self-start font-display uppercase tracking-[0.08em]"
          >
            {finder.cta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
