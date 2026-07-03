"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChoiceOption, WizardProgress } from "@/components/ui/wizard";
import { tierFinder, type TierSlug } from "@/data/corpcode-content";

const TIER_ORDER: TierSlug[] = ["lite", "standard", "advanced", "enterprise"];
const tierIndex = (t: TierSlug | null): number =>
  t === null ? -1 : TIER_ORDER.indexOf(t);

const initialAnswers = (): (TierSlug | null)[] =>
  Array.from({ length: tierFinder.questions.length }, () => null);

export default function TierFinder() {
  const [answers, setAnswers] = useState<(TierSlug | null)[]>(initialAnswers);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const total = tierFinder.questions.length;
  const question = tierFinder.questions[currentIndex];
  const selected = answers[currentIndex];
  const isLast = currentIndex === total - 1;
  const allAnswered = answers.every((a) => a !== null);
  const pct = Math.round((answers.filter((a) => a !== null).length / total) * 100);

  const result: TierSlug | null =
    showResult && allAnswered ? TIER_ORDER[Math.max(...answers.map(tierIndex))] : null;

  const select = (tier: TierSlug) =>
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = tier;
      return next;
    });

  const goNext = () =>
    isLast ? setShowResult(true) : setCurrentIndex((i) => Math.min(i + 1, total - 1));
  const goPrevious = () => setCurrentIndex((i) => Math.max(i - 1, 0));
  const reset = () => {
    setAnswers(initialAnswers());
    setCurrentIndex(0);
    setShowResult(false);
  };

  return (
    <div className="rounded-2xl border border-line bg-surface-raised p-6 sm:p-10">
      {result ? (
        <div role="status" aria-live="polite" className="text-center">
          <p className="inline-flex rounded-full border border-brand-500/40 bg-brand-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
            Recommended tier
          </p>
          <h3 className="mt-4 font-display text-3xl font-bold text-white">
            {tierFinder.tierLabels[result]}
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
            Based on your answers, {tierFinder.tierLabels[result]} looks like the right
            starting point. {tierFinder.tierDescriptions[result]}
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-zinc-500">
            A discovery call will confirm fit and produce a fixed quote.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={`/contact?intent=corpcode&tier=${result}`}>
              Book a discovery call
            </Button>
            <Button href="/contact" variant="secondary">
              Not sure? Talk to us anyway
            </Button>
          </div>
          <button
            type="button"
            onClick={reset}
            className="mt-6 text-sm font-medium text-zinc-400 underline underline-offset-4 transition-colors hover:text-brand-300"
          >
            Start over
          </button>
        </div>
      ) : (
        <>
          <WizardProgress
            label="Question"
            current={currentIndex + 1}
            total={total}
            pct={pct}
          />
          <h3 className="font-display text-xl font-semibold leading-snug text-white">
            {question.prompt}
          </h3>
          <fieldset className="mt-6 flex flex-col gap-3">
            <legend className="sr-only">{question.prompt}</legend>
            {question.options.map((opt) => (
              <ChoiceOption
                key={opt.label}
                name={`tierfinder-${question.id}`}
                label={opt.label}
                selected={selected === opt.tier}
                onSelect={() => select(opt.tier)}
              />
            ))}
          </fieldset>
          <div className="mt-8 flex flex-col justify-between gap-3 sm:flex-row">
            <Button
              variant="secondary"
              size="sm"
              onClick={goPrevious}
              disabled={currentIndex === 0}
            >
              Previous
            </Button>
            <Button size="sm" onClick={goNext} disabled={selected === null}>
              {isLast ? "See my tier" : "Next"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
