"use client";

import { useState } from "react";
import { Price } from "@/components/currency/price";
import { Button } from "@/components/ui/button";
import { scorecard, shortScorecardQuestions } from "@/data/corprise-content";
import { trackWizardComplete } from "@/lib/analytics";
import { scoreShortScorecard, shortScorecardDefaults } from "@/lib/corpriseScore";
import { useSettledOnce } from "@/lib/use-settled-once";
import { cn } from "@/lib/utils";

/** Three-question quick finder — same scoring as the full wizard, one answer per row. */
export default function TierScorecard() {
  const [answers, setAnswers] = useState<number[]>(() => [...shortScorecardDefaults]);
  const tier = scoreShortScorecard(answers).tierData;

  useSettledOnce(answers.join(","), () =>
    trackWizardComplete("corprise_scorecard", tier.name)
  );

  return (
    <div className="grid overflow-hidden rounded-2xl border border-line bg-surface-raised lg:grid-cols-[minmax(0,1.1fr)_minmax(0,420px)]">
      {/* Questions */}
      <div className="p-7 sm:p-11">
        <h2 className="font-display text-2xl font-bold tracking-tight text-white">
          {scorecard.title}
        </h2>
        <p className="mt-1.5 text-sm text-zinc-200">{scorecard.sub}</p>

        <div className="mt-7 flex flex-col gap-6">
          {shortScorecardQuestions.map((q, qi) => (
            <div key={q.prompt}>
              <p className="mb-2.5 font-display text-[13.5px] font-medium text-zinc-300">
                {q.prompt}
              </p>
              <div className="flex flex-wrap gap-2">
                {q.options.map((label, oi) => {
                  const active = answers[qi] === oi;
                  return (
                    <button
                      key={label}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        setAnswers((prev) => prev.map((v, i) => (i === qi ? oi : v)))
                      }
                      className={cn(
                        "rounded-full border px-3.5 py-2 font-display text-[12.5px] transition-colors",
                        active
                          ? "border-brand-500 bg-brand-500 font-medium text-white"
                          : "border-line bg-surface font-light text-zinc-200 hover:border-brand-500/60"
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

      {/* Result */}
      <div
        aria-live="polite"
        className="flex flex-col justify-center gap-2.5 border-t border-line bg-surface p-7 sm:p-11 lg:border-l lg:border-t-0"
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
            {scorecard.resultLabel}
          </span>
          {tier.popular && (
            <span className="rounded-full bg-[linear-gradient(90deg,var(--color-gradient-1),var(--color-gradient-2))] px-2.5 py-1 font-display text-[10px] font-semibold uppercase tracking-wide text-surface">
              Most Popular
            </span>
          )}
        </div>

        <p className="font-display text-4xl font-bold tracking-tight text-white">{tier.name}</p>
        <p className="font-display text-xl font-semibold text-brand-300">
          <Price rm={tier.price} />
          {tier.period}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-zinc-200">{tier.bestFor}</p>

        <div className="my-3.5 h-px bg-line" />

        <div className="mb-1 flex flex-wrap gap-2">
          {tier.includedModules.map((m) => (
            <span
              key={m}
              className="rounded-full border border-line bg-surface-raised px-2.5 py-1 font-display text-[11.5px] font-medium text-zinc-300"
            >
              {m}
            </span>
          ))}
        </div>
        <p className="font-mono text-xs text-zinc-500">
          {tier.users} · {tier.supportSla}
        </p>

        <Button
          href={tier.ctaHref}
          size="sm"
          className="mt-3.5 self-start font-display uppercase tracking-[0.08em]"
        >
          {tier.ctaLabel}
        </Button>
      </div>
    </div>
  );
}
