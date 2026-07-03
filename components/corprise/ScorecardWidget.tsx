"use client";

import { Button } from "@/components/ui/button";
import { ChoiceOption, WizardProgress } from "@/components/ui/wizard";
import { scorecardQuestions } from "@/lib/corpriseScore";
import { useScorecard } from "@/hooks/useScorecard";

export default function ScorecardWidget() {
  const sc = useScorecard();
  const question = scorecardQuestions[sc.currentIndex];
  const selected = sc.answers[sc.currentIndex];
  const hasAnswered = typeof selected === "number";
  const isLast = sc.currentIndex === sc.totalQuestions - 1;

  return (
    <div className="rounded-2xl border border-line bg-surface-raised p-6 sm:p-10">
      {sc.showResult && sc.result ? (
        <div role="status" aria-live="polite" className="text-center">
          <p className="inline-flex rounded-full border border-brand-500/40 bg-brand-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
            Recommended tier · {sc.result.totalPoints} points
          </p>
          <h3 className="mt-4 font-display text-3xl font-bold text-white">
            {sc.result.tierData.name}
          </h3>
          <p className="mt-2 text-lg text-zinc-200">
            <span className="font-semibold text-white">{sc.result.tierData.price}</span>
            {sc.result.tierData.period}
          </p>
          <p className="mt-1 text-sm font-medium text-brand-300">
            {sc.result.tierData.tagline}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
            {sc.result.tierData.bestFor}
          </p>
          <ul className="mx-auto mt-6 flex max-w-md flex-wrap justify-center gap-2">
            {sc.result.tierData.includedModules.map((m) => (
              <li
                key={m}
                className="rounded-full border border-line px-3 py-1 text-xs text-zinc-300"
              >
                {m}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={sc.result.tierData.ctaHref}>
              {sc.result.tierData.ctaLabel}
            </Button>
            <Button href="/contact?product=corprise" variant="secondary">
              Book a discovery call
            </Button>
          </div>
          <button
            type="button"
            onClick={sc.reset}
            className="mt-6 text-sm font-medium text-zinc-400 underline underline-offset-4 transition-colors hover:text-brand-300"
          >
            Start over
          </button>
        </div>
      ) : (
        <>
          <WizardProgress
            label="Question"
            current={sc.currentIndex + 1}
            total={sc.totalQuestions}
            pct={sc.progressPct}
          />
          <h3 className="font-display text-xl font-semibold leading-snug text-white">
            {question.prompt}
          </h3>
          {question.helpText && (
            <p className="mt-2 text-sm text-zinc-500">{question.helpText}</p>
          )}

          <fieldset className="mt-6 flex flex-col gap-3">
            <legend className="sr-only">{question.prompt}</legend>
            {question.choices.map((choice) => (
              <ChoiceOption
                key={choice.label}
                name={`scorecard-${question.id}`}
                label={choice.label}
                selected={selected === choice.points}
                onSelect={() => sc.selectAnswer(sc.currentIndex, choice.points)}
              />
            ))}
          </fieldset>

          <div className="mt-8 flex flex-col justify-between gap-3 sm:flex-row">
            <Button
              variant="secondary"
              size="sm"
              onClick={sc.goPrevious}
              disabled={sc.currentIndex === 0}
            >
              Previous
            </Button>
            <Button
              size="sm"
              onClick={sc.goNext}
              disabled={!hasAnswered || (isLast && !sc.isComplete)}
            >
              {isLast ? "See my tier" : "Next"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
