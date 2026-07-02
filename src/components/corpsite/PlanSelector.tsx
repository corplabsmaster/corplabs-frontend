import React, { useEffect, useRef, useState } from "react";

import {
  budgetOptions,
  cmsOptions,
  computeRecommendation,
  emptyAnswers,
  featureOptions,
  goalOptions,
  pageOptions,
  parseAnswersFromSearch,
  Recommendation,
  sectionCopy,
  SelectorAnswers,
  selectorSteps,
  serializeAnswersToSearch,
  trafficOptions,
} from "../../data/corpsite";
import PlanSelectorResult from "./PlanSelectorResult";

const TOTAL_STEPS = selectorSteps.length;

const PlanSelector: React.FC = () => {
  const [answers, setAnswers] = useState<SelectorAnswers>(emptyAnswers);
  const [stepIndex, setStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const hydrated = useRef(false);

  // Hydrate from URL on mount.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const parsed = parseAnswersFromSearch(window.location.search);
    setAnswers(parsed);
    const params = new URLSearchParams(window.location.search);
    const step = params.get("step");
    if (step === "result") {
      setShowResult(true);
    } else if (step === "ngo") {
      // Force NGO branch via URL. computeRecommendation handles this when goal === "ngo".
      setShowResult(true);
    } else {
      const parsedNum = step ? parseInt(step, 10) : NaN;
      if (!Number.isNaN(parsedNum) && parsedNum >= 1 && parsedNum <= TOTAL_STEPS) {
        setStepIndex(parsedNum - 1);
      }
    }
    hydrated.current = true;
  }, []);

  // Sync URL whenever answers / step / showResult change (after hydration).
  useEffect(() => {
    if (!hydrated.current || typeof window === "undefined") return;
    const stepParam: number | "result" | "ngo" = showResult
      ? answers.goal === "ngo"
        ? "ngo"
        : "result"
      : stepIndex + 1;
    const search = serializeAnswersToSearch(answers, stepParam);
    const next = `${window.location.pathname}${search}${window.location.hash}`;
    if (next !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
      window.history.replaceState(null, "", next);
    }
  }, [answers, stepIndex, showResult]);

  // Focus management: move focus to step heading on step change, result heading on completion.
  useEffect(() => {
    if (showResult) {
      resultRef.current?.focus();
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      stepHeadingRef.current?.focus();
    }
  }, [stepIndex, showResult]);

  const recommendation: Recommendation | null = showResult
    ? computeRecommendation(answers)
    : null;

  const currentStep = selectorSteps[stepIndex];
  const isLast = stepIndex === TOTAL_STEPS - 1;
  const answeredCount = countAnswered(answers, stepIndex);

  const setSingle = (
    id: "goal" | "pages" | "cms" | "traffic" | "budget",
    value: string
  ) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const toggleFeature = (value: string) => {
    const opt = featureOptions.find((o) => o.value === value);
    if (!opt) return;
    const flag = opt.value;
    setAnswers((prev) => {
      const exists = prev.features.some((f) => f === flag);
      const features = exists
        ? prev.features.filter((f) => f !== flag)
        : [...prev.features, flag];
      return { ...prev, features };
    });
  };

  const goNext = () => {
    // NGO short-circuit on Q1.
    if (stepIndex === 0 && answers.goal === "ngo") {
      // TODO: track event — plan selector NGO branch
      setShowResult(true);
      return;
    }
    if (isLast) {
      // TODO: track event — plan selector submit
      setShowResult(true);
      return;
    }
    setStepIndex((i) => Math.min(i + 1, TOTAL_STEPS - 1));
  };

  const goBack = () => {
    if (showResult) {
      setShowResult(false);
      // Return user to last question they answered (or end).
      setStepIndex(TOTAL_STEPS - 1);
      return;
    }
    setStepIndex((i) => Math.max(i - 1, 0));
  };

  const reset = () => {
    setAnswers(emptyAnswers());
    setStepIndex(0);
    setShowResult(false);
  };

  const stepIsAnswered = isStepAnswered(currentStep.id, answers);
  const progressPct = Math.round(((stepIndex + (stepIsAnswered ? 1 : 0)) / TOTAL_STEPS) * 100);

  return (
    <section
      id="plan-selector"
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corpsite-plan-selector-heading"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            {sectionCopy.planSelector.eyebrow}
          </span>
          <h2
            id="corpsite-plan-selector-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
          >
            {sectionCopy.planSelector.heading}
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed max-w-2xl mx-auto">
            {sectionCopy.planSelector.subheading}
          </p>
        </div>

        <div className="rounded-xl border border-white-100/10 bg-black-900 p-6 sm:p-10">
          {!showResult && (
            <>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-intersemibold text-[#AEE0FC] tracking-widest uppercase">
                  {sectionCopy.planSelector.progressLabel} {stepIndex + 1} of{" "}
                  {TOTAL_STEPS}
                </span>
                <span className="text-xs font-worksanslight text-gray-200/70">
                  {progressPct}% complete
                </span>
              </div>

              <div
                className="w-full h-1.5 rounded-full bg-white-100/10 overflow-hidden mb-8"
                role="progressbar"
                aria-valuenow={progressPct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Plan Selector progress"
              >
                <div
                  className="h-full bg-gradient-to-r from-[#AEE0FC] via-[#BFD8FA] to-[#E4D9FB] transition-all duration-300"
                  style={{ width: `${progressPct}%` }}
                />
              </div>

              <h3
                ref={stepHeadingRef}
                tabIndex={-1}
                className="text-lg lg:text-xl font-intersemibold text-white-100 mb-2 leading-snug outline-none"
              >
                {currentStep.prompt}
              </h3>
              {currentStep.helpText && (
                <p className="text-sm font-worksanslight text-gray-200/70 mb-6 leading-relaxed">
                  {currentStep.helpText}
                </p>
              )}
              {!currentStep.helpText && <div className="mb-6" />}

              {/* Step body */}
              {currentStep.id === "goal" && (
                <SingleSelect
                  name="goal"
                  options={goalOptions}
                  selected={answers.goal}
                  onSelect={(v) => setSingle("goal", v)}
                />
              )}
              {currentStep.id === "pages" && (
                <SingleSelect
                  name="pages"
                  options={pageOptions}
                  selected={answers.pages}
                  onSelect={(v) => setSingle("pages", v)}
                />
              )}
              {currentStep.id === "cms" && (
                <SingleSelect
                  name="cms"
                  options={cmsOptions}
                  selected={answers.cms}
                  onSelect={(v) => setSingle("cms", v)}
                />
              )}
              {currentStep.id === "features" && (
                <MultiSelect
                  options={featureOptions}
                  selected={answers.features}
                  onToggle={toggleFeature}
                />
              )}
              {currentStep.id === "traffic" && (
                <SingleSelect
                  name="traffic"
                  options={trafficOptions}
                  selected={answers.traffic}
                  onSelect={(v) => setSingle("traffic", v)}
                />
              )}
              {currentStep.id === "budget" && (
                <SingleSelect
                  name="budget"
                  options={budgetOptions}
                  selected={answers.budget}
                  onSelect={(v) => setSingle("budget", v)}
                />
              )}

              <div className="flex flex-col sm:flex-row justify-between gap-3 mt-8">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={stepIndex === 0}
                  className="px-6 py-2.5 rounded-full border border-white-100/30 text-white-100 font-intersemibold text-sm hover:border-[#424DE2] hover:text-[#AEE0FC] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!stepIsAnswered}
                  className="px-6 py-2.5 rounded-full bg-[#424DE2] text-white font-intersemibold text-sm hover:bg-[#3340c4] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  {isLast || (stepIndex === 0 && answers.goal === "ngo")
                    ? "Show My Plan"
                    : "Next"}
                </button>
              </div>

              <p className="sr-only" aria-live="polite">
                {answeredCount} of {TOTAL_STEPS} questions answered.
              </p>
            </>
          )}

          {showResult && recommendation && (
            <div ref={resultRef} tabIndex={-1} className="outline-none">
              <PlanSelectorResult
                recommendation={recommendation}
                onReset={reset}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ─── Helpers ───────────────────────────────────────────────────────────────

interface SingleOption {
  value: string;
  label: string;
}

interface SingleSelectProps {
  name: string;
  options: SingleOption[];
  selected: string | null;
  onSelect: (value: string) => void;
}

const SingleSelect: React.FC<SingleSelectProps> = ({
  name,
  options,
  selected,
  onSelect,
}) => (
  <fieldset className="flex flex-col gap-3">
    <legend className="sr-only">Choose one</legend>
    {options.map((opt) => {
      const isSelected = selected === opt.value;
      return (
        <label
          key={opt.value}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
            isSelected
              ? "border-[#424DE2] bg-[#424DE2]/20 text-white"
              : "border-white-100/10 bg-black-950 text-gray-200 hover:border-[#424DE2]/60"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={isSelected}
            onChange={() => onSelect(opt.value)}
            className="sr-only"
          />
          <span
            className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
              isSelected ? "border-[#AEE0FC]" : "border-white-100/40"
            }`}
            aria-hidden="true"
          >
            {isSelected && (
              <span className="w-2 h-2 rounded-full bg-[#AEE0FC]" />
            )}
          </span>
          <span className="font-worksanslight text-base leading-snug">
            {opt.label}
          </span>
        </label>
      );
    })}
  </fieldset>
);

interface MultiSelectProps {
  options: { value: string; label: string }[];
  selected: string[];
  onToggle: (value: string) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selected,
  onToggle,
}) => (
  <fieldset className="flex flex-col gap-3">
    <legend className="sr-only">Choose any that apply</legend>
    {options.map((opt) => {
      const isSelected = selected.includes(opt.value);
      return (
        <label
          key={opt.value}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
            isSelected
              ? "border-[#424DE2] bg-[#424DE2]/20 text-white"
              : "border-white-100/10 bg-black-950 text-gray-200 hover:border-[#424DE2]/60"
          }`}
        >
          <input
            type="checkbox"
            value={opt.value}
            checked={isSelected}
            onChange={() => onToggle(opt.value)}
            className="sr-only"
          />
          <span
            className={`w-4 h-4 rounded-sm border-2 flex-shrink-0 flex items-center justify-center ${
              isSelected ? "border-[#AEE0FC] bg-[#424DE2]" : "border-white-100/40"
            }`}
            aria-hidden="true"
          >
            {isSelected && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5L4 7L8 3"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
          <span className="font-worksanslight text-base leading-snug">
            {opt.label}
          </span>
        </label>
      );
    })}
  </fieldset>
);

const isStepAnswered = (
  id: "goal" | "pages" | "cms" | "features" | "traffic" | "budget",
  answers: SelectorAnswers
): boolean => {
  if (id === "features") return true; // multi-select can be empty (none selected = valid)
  return answers[id] !== null;
};

const countAnswered = (answers: SelectorAnswers, stepIndex: number): number => {
  let count = 0;
  if (answers.goal !== null) count++;
  if (answers.pages !== null) count++;
  if (answers.cms !== null) count++;
  if (stepIndex >= 3) count++; // features step counts as answered once visited
  if (answers.traffic !== null) count++;
  if (answers.budget !== null) count++;
  return count;
};

export default PlanSelector;
