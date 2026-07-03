"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChoiceOption, WizardProgress } from "@/components/ui/wizard";
import {
  budgetOptions,
  cmsOptions,
  computeRecommendation,
  emptyAnswers,
  featureOptions,
  findTier,
  goalOptions,
  ngoProgramme,
  pageOptions,
  parseAnswersFromSearch,
  selectorSteps,
  serializeAnswersToSearch,
  trafficOptions,
  type Budget,
  type CmsNeed,
  type FeatureFlag,
  type Goal,
  type PageCount,
  type SelectorAnswers,
  type Traffic,
} from "@/data/corpsite";

const LAST = selectorSteps.length - 1;

function RecommendedTierCard({ tierId }: { tierId: Parameters<typeof findTier>[0] }) {
  const tier = findTier(tierId);
  return (
    <div className="rounded-2xl border border-brand-500 bg-brand-600/10 p-6 text-left">
      <p className="font-display text-lg font-semibold text-white">
        <span aria-hidden className="mr-1.5">{tier.emoji}</span>
        {tier.name}
      </p>
      <p className="mt-2 text-sm text-zinc-200">
        <span className="font-semibold text-white">{tier.oneTime}</span> one-time ·{" "}
        {tier.monthly}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{tier.description}</p>
      <ul className="mt-4 space-y-2">
        {tier.features.slice(0, 5).map((f) => (
          <li key={f} className="flex gap-2 text-sm text-zinc-400">
            <span aria-hidden className="text-brand-300">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <Button href={tier.ctaHref} size="sm" className="mt-6">
        {tier.ctaLabel}
      </Button>
    </div>
  );
}

export default function PlanSelector() {
  const [answers, setAnswers] = useState<SelectorAnswers>(emptyAnswers);
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Restore from the query string once, on mount.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const parsed = parseAnswersFromSearch(window.location.search);
    setAnswers(parsed);
    const stepRaw = new URLSearchParams(window.location.search).get("step");
    if (stepRaw === "result" || stepRaw === "ngo") {
      setShowResult(true);
      setStep(LAST);
    } else if (stepRaw !== null) {
      const n = Number(stepRaw);
      if (Number.isInteger(n) && n >= 0 && n <= LAST) setStep(n);
    }
    setHydrated(true);
  }, []);

  // Mirror state into the URL (shareable / reloadable).
  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    const stepParam = showResult ? (answers.goal === "ngo" ? "ngo" : "result") : step;
    const search = serializeAnswersToSearch(answers, stepParam);
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${search}#plan-selector`
    );
  }, [answers, step, showResult, hydrated]);

  const current = selectorSteps[step];

  const setSingle = <K extends keyof SelectorAnswers>(field: K, value: SelectorAnswers[K]) =>
    setAnswers((a) => ({ ...a, [field]: value }));

  const toggleFeature = (value: FeatureFlag) =>
    setAnswers((a) => ({
      ...a,
      features: a.features.includes(value)
        ? a.features.filter((f) => f !== value)
        : [...a.features, value],
    }));

  const canAdvance = (() => {
    switch (current.id) {
      case "goal":
        return answers.goal !== null;
      case "pages":
        return answers.pages !== null;
      case "cms":
        return answers.cms !== null;
      case "features":
        return true;
      case "traffic":
        return answers.traffic !== null;
      case "budget":
        return answers.budget !== null;
    }
  })();

  const goNext = () => {
    if (step === 0 && answers.goal === "ngo") return setShowResult(true);
    if (step === LAST) return setShowResult(true);
    setStep((s) => Math.min(s + 1, LAST));
  };
  const goPrevious = () => {
    if (showResult) return setShowResult(false);
    setStep((s) => Math.max(s - 1, 0));
  };
  const reset = () => {
    setAnswers(emptyAnswers());
    setStep(0);
    setShowResult(false);
  };

  const rec = computeRecommendation(answers);
  const pct = Math.round(((step + 1) / selectorSteps.length) * 100);

  const renderOptions = () => {
    switch (current.id) {
      case "goal":
        return goalOptions.map((o) => (
          <ChoiceOption
            key={o.value}
            name="ps-goal"
            label={o.label}
            selected={answers.goal === o.value}
            onSelect={() => setSingle("goal", o.value as Goal)}
          />
        ));
      case "pages":
        return pageOptions.map((o) => (
          <ChoiceOption
            key={o.value}
            name="ps-pages"
            label={o.label}
            selected={answers.pages === o.value}
            onSelect={() => setSingle("pages", o.value as PageCount)}
          />
        ));
      case "cms":
        return cmsOptions.map((o) => (
          <ChoiceOption
            key={o.value}
            name="ps-cms"
            label={o.label}
            selected={answers.cms === o.value}
            onSelect={() => setSingle("cms", o.value as CmsNeed)}
          />
        ));
      case "features":
        return featureOptions.map((o) => (
          <ChoiceOption
            key={o.value}
            multi
            name="ps-features"
            label={o.label}
            selected={answers.features.includes(o.value)}
            onSelect={() => toggleFeature(o.value)}
          />
        ));
      case "traffic":
        return trafficOptions.map((o) => (
          <ChoiceOption
            key={o.value}
            name="ps-traffic"
            label={o.label}
            selected={answers.traffic === o.value}
            onSelect={() => setSingle("traffic", o.value as Traffic)}
          />
        ));
      case "budget":
        return budgetOptions.map((o) => (
          <ChoiceOption
            key={o.value}
            name="ps-budget"
            label={o.label}
            selected={answers.budget === o.value}
            onSelect={() => setSingle("budget", o.value as Budget)}
          />
        ));
    }
  };

  return (
    <div className="rounded-2xl border border-line bg-surface-raised p-6 sm:p-10">
      {showResult && rec ? (
        <div role="status" aria-live="polite">
          {rec.ngoBranch ? (
            <div className="text-center">
              <p className="inline-flex rounded-full border border-brand-500/40 bg-brand-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
                {ngoProgramme.badge}
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold text-white">
                You&apos;re a fit for {ngoProgramme.heading}
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
                {ngoProgramme.intro}
              </p>
              <div className="mt-8 flex justify-center">
                <Button href={ngoProgramme.cta.href}>{ngoProgramme.cta.label}</Button>
              </div>
            </div>
          ) : (
            <>
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-300">
                Your recommended plan
              </p>
              <div className="mx-auto mt-6 max-w-md">
                <RecommendedTierCard tierId={rec.recommended} />
              </div>

              {rec.budgetFit && (
                <div className="mx-auto mt-4 max-w-md rounded-2xl border border-line bg-surface p-5">
                  <p className="text-sm font-medium text-white">
                    Budget-fit alternative: {findTier(rec.budgetFit).name}
                  </p>
                  {rec.diffNote && (
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {rec.diffNote}
                    </p>
                  )}
                </div>
              )}

              {rec.addCorpi && (
                <p className="mx-auto mt-4 max-w-md text-center text-sm text-zinc-400">
                  You flagged WhatsApp / sales automation — pair this with{" "}
                  <a href="/corpi" className="text-brand-300 underline underline-offset-4">
                    Corpi
                  </a>
                  .
                </p>
              )}
            </>
          )}

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={goPrevious}
              className="text-sm font-medium text-zinc-400 underline underline-offset-4 transition-colors hover:text-brand-300"
            >
              Back
            </button>
            <button
              type="button"
              onClick={reset}
              className="text-sm font-medium text-zinc-400 underline underline-offset-4 transition-colors hover:text-brand-300"
            >
              Start over
            </button>
          </div>
        </div>
      ) : (
        <>
          <WizardProgress
            label="Question"
            current={step + 1}
            total={selectorSteps.length}
            pct={pct}
          />
          <h3 className="font-display text-xl font-semibold leading-snug text-white">
            {current.prompt}
          </h3>
          {current.helpText && (
            <p className="mt-2 text-sm text-zinc-500">{current.helpText}</p>
          )}
          <fieldset className="mt-6 flex flex-col gap-3">
            <legend className="sr-only">{current.prompt}</legend>
            {renderOptions()}
          </fieldset>
          <div className="mt-8 flex flex-col justify-between gap-3 sm:flex-row">
            <Button variant="secondary" size="sm" onClick={goPrevious} disabled={step === 0}>
              Previous
            </Button>
            <Button size="sm" onClick={goNext} disabled={!canAdvance}>
              {step === LAST || (step === 0 && answers.goal === "ngo")
                ? "See my plan"
                : "Next"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
