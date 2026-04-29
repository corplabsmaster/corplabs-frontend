import React, { useState } from "react";

import { tierFinder, TierSlug } from "../../data/corpcode-content";

const TIER_ORDER: TierSlug[] = ["lite", "standard", "advanced", "enterprise"];

const tierIndex = (t: TierSlug | null): number =>
  t === null ? -1 : TIER_ORDER.indexOf(t);

const initialAnswers = (): (TierSlug | null)[] =>
  Array.from({ length: tierFinder.questions.length }, () => null);

const TierFinder: React.FC = () => {
  const [answers, setAnswers] = useState<(TierSlug | null)[]>(initialAnswers);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const totalQuestions = tierFinder.questions.length;
  const question = tierFinder.questions[currentIndex];
  const selectedTier = answers[currentIndex];
  const hasAnswered = selectedTier !== null;
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const allAnswered = answers.every((a) => a !== null);
  const progressPct = Math.round(
    (answers.filter((a) => a !== null).length / totalQuestions) * 100
  );

  const result: TierSlug | null =
    showResult && allAnswered
      ? TIER_ORDER[Math.max(...answers.map(tierIndex))]
      : null;

  const selectAnswer = (idx: number, tier: TierSlug) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[idx] = tier;
      return next;
    });
  };

  const goNext = () => {
    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentIndex((i) => Math.min(i + 1, totalQuestions - 1));
    }
  };

  const goPrevious = () => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
  };

  const reset = () => {
    setAnswers(initialAnswers());
    setCurrentIndex(0);
    setShowResult(false);
  };

  return (
    <section
      id="find-tier"
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corpcode-tierfinder-heading"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            Tier Finder
          </span>
          <h2
            id="corpcode-tierfinder-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
          >
            {tierFinder.heading}
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed max-w-2xl mx-auto">
            {tierFinder.subheading}
          </p>
        </div>

        <div className="rounded-xl border border-white-100/10 bg-black-900 p-6 sm:p-10">
          {!showResult && (
            <>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-intersemibold text-[#AEE0FC] tracking-widest uppercase">
                  Question {currentIndex + 1} of {totalQuestions}
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
                aria-label="Tier finder progress"
              >
                <div
                  className="h-full bg-gradient-to-r from-[#AEE0FC] via-[#BFD8FA] to-[#E4D9FB] transition-all duration-300"
                  style={{ width: `${progressPct}%` }}
                />
              </div>

              <h3 className="text-lg lg:text-xl font-intersemibold text-white-100 mb-6 leading-snug">
                {question.prompt}
              </h3>

              <fieldset className="flex flex-col gap-3 mb-8">
                <legend className="sr-only">{question.prompt}</legend>
                {question.options.map((opt, oIndex) => {
                  const isSelected = selectedTier === opt.tier;
                  const optionId = `${question.id}-option-${oIndex}`;
                  return (
                    <label
                      key={optionId}
                      htmlFor={optionId}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
                        isSelected
                          ? "border-[#424DE2] bg-[#424DE2]/20 text-white"
                          : "border-white-100/10 bg-black-950 text-gray-200 hover:border-[#424DE2]/60"
                      }`}
                    >
                      <input
                        id={optionId}
                        type="radio"
                        name={`tierfinder-${question.id}`}
                        value={opt.tier}
                        checked={isSelected}
                        onChange={() => selectAnswer(currentIndex, opt.tier)}
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

              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <button
                  type="button"
                  onClick={goPrevious}
                  disabled={currentIndex === 0}
                  className="px-6 py-2.5 rounded-full border border-white-100/30 text-white-100 font-intersemibold text-sm hover:border-[#424DE2] hover:text-[#AEE0FC] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!hasAnswered}
                  className="px-6 py-2.5 rounded-full bg-[#424DE2] text-white font-intersemibold text-sm hover:bg-[#3340c4] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  {isLastQuestion ? "See My Tier" : "Next"}
                </button>
              </div>
            </>
          )}

          {showResult && result && (
            <div
              role="status"
              aria-live="polite"
              className="text-center"
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
                Recommended tier
              </span>
              <h3 className="text-2xl lg:text-4xl font-interbold text-white-100 mb-3">
                <span className="text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text">
                  {tierFinder.tierLabels[result]}
                </span>
              </h3>
              <p className="text-base font-worksanslight text-gray-200 mb-2 max-w-xl mx-auto leading-relaxed">
                Based on your answers, {tierFinder.tierLabels[result]} looks like the right starting point.
              </p>
              <p className="text-base font-worksanslight text-gray-200 mb-2 max-w-xl mx-auto leading-relaxed">
                {tierFinder.tierDescriptions[result]}
              </p>
              <p className="text-base font-worksanslight text-gray-200/80 mb-8 max-w-xl mx-auto leading-relaxed">
                A discovery call will confirm fit and produce a fixed quote.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
                <a
                  href={`/contact?intent=corpcode&tier=${result}`}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
                >
                  Book a discovery call
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white-100/30 text-white-100 font-intersemibold text-base hover:border-[#424DE2] hover:text-[#AEE0FC] transition-colors"
                >
                  Not sure? Talk to us anyway
                </a>
              </div>

              <button
                type="button"
                onClick={reset}
                className="text-sm font-intersemibold text-gray-200 hover:text-[#AEE0FC] underline underline-offset-4 transition-colors"
              >
                Start over
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TierFinder;
