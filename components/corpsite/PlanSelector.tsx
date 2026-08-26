"use client";

import { useEffect, useState } from "react";
import { Price } from "@/components/currency/price";
import { Button } from "@/components/ui/button";
import { WizardProgress } from "@/components/ui/wizard";
import { trackWizardComplete } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import {
  NGO_GOAL_INDEX,
  emptySiteAnswers,
  recommendSiteTier,
  selectorCopy,
  siteSteps,
} from "@/data/corpsite";

const LAST = siteSteps.length - 1;

/** A single full-width, radio-dot option row. */
function OptionRow({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "flex w-full items-center gap-3.5 rounded-xl border px-5 py-3.5 text-left text-sm font-light transition-colors",
        selected
          ? "border-brand-500 bg-brand-500/15 text-white"
          : "border-line bg-surface text-zinc-200 hover:border-brand-500/60"
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-3.5 w-3.5 flex-none rounded-full",
          selected ? "border-4 border-brand-400" : "border-[1.5px] border-zinc-500"
        )}
      />
      <span>{label}</span>
    </button>
  );
}

export default function PlanSelector() {
  const [answers, setAnswers] = useState<(number | null)[]>(emptySiteAnswers);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(false);

  const current = siteSteps[step];
  const answered = answers[step] !== null;
  const isNgoGoal = answers[0] === NGO_GOAL_INDEX;
  const pct = Math.round(((step + 1) / siteSteps.length) * 100);

  const select = (optionIndex: number) =>
    setAnswers((prev) => {
      const next = prev.slice();
      next[step] = optionIndex;
      return next;
    });

  const goNext = () => {
    if (!answered) return;
    if (step === 0 && isNgoGoal) return setResult(true);
    if (step === LAST) return setResult(true);
    setStep((s) => Math.min(s + 1, LAST));
  };
  const goBack = () => {
    if (result) return setResult(false);
    setStep((s) => Math.max(s - 1, 0));
  };
  const reset = () => {
    setAnswers(emptySiteAnswers());
    setStep(0);
    setResult(false);
  };

  const nextLabel =
    step === LAST || (step === 0 && isNgoGoal)
      ? selectorCopy.seePlanLabel
      : selectorCopy.nextLabel;

  const { tier, note } = recommendSiteTier(answers);

  const shownTier = result ? tier.name : undefined;
  useEffect(() => {
    if (shownTier) trackWizardComplete("corpsite_plan_selector", shownTier);
  }, [shownTier]);

  return (
    <div className="gradient-border rounded-2xl p-6 sm:p-10">
      {result ? (
        <div role="status" aria-live="polite">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-brand-300">
            {selectorCopy.resultEyebrow}
          </p>

          <div className="mt-6 rounded-xl border border-brand-500 bg-surface p-6 sm:p-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {tier.name}
              </h3>
              <div className="flex-none sm:text-right">
                <p className="font-display text-lg font-bold text-white">
                  <Price rm={tier.oneTime} />
                </p>
                <p className="font-mono text-xs text-zinc-500">
                  + <Price rm={tier.monthly} /> {selectorCopy.monthlySuffix}
                </p>
              </div>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-200">
              {tier.what}
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-zinc-300"
                >
                  <span aria-hidden className="text-gradient-1">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button href="/contact" size="sm" className="mt-6">
              {tier.cta}
            </Button>
          </div>

          {note && (
            <div className="mt-4 rounded-xl border border-line bg-surface p-5 sm:px-6">
              <p className="font-display text-sm font-medium text-white">
                {note.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-200">
                {note.body}
              </p>
            </div>
          )}

          <div className="mt-7 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={goBack}
              className="text-sm text-zinc-300 underline underline-offset-4 transition-colors hover:text-brand-300"
            >
              {selectorCopy.backLabel}
            </button>
            <button
              type="button"
              onClick={reset}
              className="text-sm text-zinc-300 underline underline-offset-4 transition-colors hover:text-brand-300"
            >
              {selectorCopy.startOverLabel}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <WizardProgress
            label={selectorCopy.progressLabel}
            current={step + 1}
            total={siteSteps.length}
            pct={pct}
          />
          <h3 className="font-display text-2xl font-bold leading-snug text-white">
            {current.prompt}
          </h3>
          <p className="mt-1.5 text-sm text-zinc-500">{current.help}</p>

          <div
            role="radiogroup"
            aria-label={current.prompt}
            className="mt-6 flex flex-col gap-2.5"
          >
            {current.options.map((option, i) => (
              <OptionRow
                key={option.label}
                label={option.label}
                selected={answers[step] === i}
                onSelect={() => select(i)}
              />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={goBack}
              disabled={step === 0}
            >
              {selectorCopy.previousLabel}
            </Button>
            <Button size="sm" onClick={goNext} disabled={!answered}>
              {nextLabel}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
