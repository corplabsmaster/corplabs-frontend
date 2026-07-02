import React from "react";

import { scorecardQuestions } from "../../lib/corpriseScore";
import { useScorecard } from "../../hooks/useScorecard";
import { tiers } from "../../data/corprise-tiers";

const ScorecardWidget: React.FC = () => {
  const {
    currentIndex,
    answers,
    totalQuestions,
    isComplete,
    showResult,
    result,
    selectAnswer,
    goNext,
    goPrevious,
    goToQuestion,
    reset,
    progressPct,
  } = useScorecard();

  const question = scorecardQuestions[currentIndex];
  const selectedPoints = answers[currentIndex];
  const hasAnswered = typeof selectedPoints === "number";

  return (
    <section
      id="scorecard"
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corprise-scorecard-heading"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            Scorecard
          </span>
          <h2
            id="corprise-scorecard-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
          >
            Which Corprise tier fits your business?
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Seven questions, about ten minutes. Your recommendation loads instantly — share the URL to show your team.
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
                aria-label="Scorecard progress"
              >
                <div
                  className="h-full bg-gradient-to-r from-[#AEE0FC] via-[#BFD8FA] to-[#E4D9FB] transition-all duration-300"
                  style={{ width: `${progressPct}%` }}
                />
              </div>

              <h3 className="text-lg lg:text-xl font-intersemibold text-white-100 mb-2 leading-snug">
                {question.prompt}
              </h3>
              {question.helpText && (
                <p className="text-sm font-worksanslight text-gray-200/70 mb-6 leading-relaxed">
                  {question.helpText}
                </p>
              )}

              <fieldset className="flex flex-col gap-3 mb-8">
                <legend className="sr-only">{question.prompt}</legend>
                {question.choices.map((choice) => {
                  const isSelected = selectedPoints === choice.points;
                  return (
                    <label
                      key={choice.label}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
                        isSelected
                          ? "border-[#424DE2] bg-[#424DE2]/20 text-white"
                          : "border-white-100/10 bg-black-950 text-gray-200 hover:border-[#424DE2]/60"
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={choice.points}
                        checked={isSelected}
                        onChange={() => selectAnswer(currentIndex, choice.points)}
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
                        {choice.label}
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
                  {currentIndex === totalQuestions - 1 ? "See My Tier" : "Next"}
                </button>
              </div>
            </>
          )}

          {showResult && result && (
            <div className="text-center">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
                Your Recommendation
              </span>
              <h3 className="text-2xl lg:text-4xl font-interbold text-white-100 mb-3">
                {result.tierData.name}
              </h3>
              <p className="text-base font-worksanslight text-gray-200/80 mb-5">
                {result.totalPoints} points · {result.tierData.tagline}
              </p>
              <div className="flex items-baseline justify-center gap-1 mb-5">
                <span className="text-2xl lg:text-4xl font-interbold text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text">
                  {result.tierData.price}
                </span>
                {result.tierData.period && (
                  <span className="text-base font-worksanslight text-gray-200">
                    {result.tierData.period}
                  </span>
                )}
              </div>
              <p className="text-base font-worksanslight text-gray-200 mb-6 max-w-xl mx-auto leading-relaxed">
                {result.tierData.bestFor}
              </p>

              <div className="rounded-lg bg-black-950 border border-white-100/10 p-5 mb-6 text-left max-w-xl mx-auto">
                <p className="text-xs font-intersemibold text-[#AEE0FC] tracking-widest uppercase mb-3">
                  What&apos;s included
                </p>
                <ul className="flex flex-col gap-2">
                  {result.tierData.includedModules.map((mod) => (
                    <li
                      key={mod}
                      className="text-sm font-worksanslight text-gray-200 leading-snug"
                    >
                      — {mod}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                <a
                  href={result.tierData.ctaHref}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
                >
                  {result.tierData.ctaLabel}
                </a>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white-100/30 text-white-100 font-intersemibold text-base hover:border-[#424DE2] hover:text-[#AEE0FC] transition-colors"
                >
                  Start Over
                </button>
              </div>

              <details className="text-left max-w-xl mx-auto">
                <summary className="text-xs font-intersemibold text-gray-200/70 tracking-widest uppercase cursor-pointer hover:text-[#AEE0FC]">
                  See all tiers
                </summary>
                <div className="mt-4 flex flex-col gap-2">
                  {tiers.map((tier) => {
                    const isRecommended = tier.id === result.recommendedTier;
                    return (
                      <div
                        key={tier.id}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-worksanslight ${
                          isRecommended
                            ? "bg-[#424DE2]/10 border border-[#424DE2]/60 text-white-100"
                            : "bg-black-950 border border-white-100/10 text-gray-200"
                        }`}
                      >
                        <span>
                          {tier.name}
                          {isRecommended && (
                            <span className="ml-2 text-xs text-[#AEE0FC]">
                              ← You
                            </span>
                          )}
                        </span>
                        <span>{tier.price}</span>
                      </div>
                    );
                  })}
                </div>
              </details>
            </div>
          )}

          {!showResult && isComplete && (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => goToQuestion(totalQuestions - 1)}
                className="text-sm font-worksanslight text-[#AEE0FC] underline"
              >
                Jump to result
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScorecardWidget;
