import React, { useEffect, useRef, useState } from "react";

import { tierFinder, TierSlug } from "../../data/corpcode-content";

const TIER_ORDER: TierSlug[] = ["lite", "standard", "advanced", "enterprise"];

const tierIndex = (t: TierSlug | null): number =>
  t === null ? -1 : TIER_ORDER.indexOf(t);

const initialAnswers = (): (TierSlug | null)[] =>
  Array.from({ length: tierFinder.questions.length }, () => null);

const TierFinder: React.FC = () => {
  const [answers, setAnswers] = useState<(TierSlug | null)[]>(initialAnswers);
  const resultRef = useRef<HTMLDivElement>(null);

  const answeredCount = answers.filter((a) => a !== null).length;
  const allAnswered = answeredCount === tierFinder.questions.length;
  const result: TierSlug | null = allAnswered
    ? TIER_ORDER[Math.max(...answers.map(tierIndex))]
    : null;

  useEffect(() => {
    if (allAnswered && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [allAnswered]);

  const setAnswer = (qIndex: number, tier: TierSlug) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[qIndex] = tier;
      return next;
    });
  };

  const reset = () => {
    setAnswers(initialAnswers());
  };

  return (
    <section
      id="find-tier"
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corpcode-tierfinder-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            Tier Finder
          </span>
          <h2
            id="corpcode-tierfinder-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4 fade-in"
          >
            {tierFinder.heading}
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed fade-in">
            {tierFinder.subheading}
          </p>
        </div>

        {/* Progress meter */}
        <div className="mb-10 fade-in" aria-hidden="true">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-intersemibold tracking-widest text-gray-200 uppercase">
              Progress
            </span>
            <span className="text-xs font-intersemibold text-[#AEE0FC]">
              {answeredCount} / {tierFinder.questions.length}
            </span>
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {tierFinder.questions.map((q, i) => (
              <div
                key={q.id}
                className={`h-1.5 rounded-full transition-colors ${
                  answers[i] !== null ? "bg-[#424DE2]" : "bg-white-100/10"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Questions */}
        <ol className="flex flex-col gap-8">
          {tierFinder.questions.map((q, qIndex) => {
            const selectedTier = answers[qIndex];
            return (
              <li
                key={q.id}
                className="bg-black-900 border border-white-100/10 rounded-lg p-6 sm:p-8 fade-in"
              >
                <div className="mb-5">
                  <span className="text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase mb-1 block">
                    Question {qIndex + 1} of {tierFinder.questions.length}
                  </span>
                  <h3 className="text-lg lg:text-xl font-intersemibold text-white-100">
                    {q.prompt}
                  </h3>
                </div>

                <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <legend className="sr-only">{q.prompt}</legend>
                  {q.options.map((opt, oIndex) => {
                    const isSelected = selectedTier === opt.tier;
                    const optionId = `${q.id}-option-${oIndex}`;
                    return (
                      <label
                        key={optionId}
                        htmlFor={optionId}
                        className={`relative flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                          isSelected
                            ? "border-[#424DE2] bg-[#424DE2]/15 ring-2 ring-[#424DE2]"
                            : "border-white-100/10 bg-black-950 hover:border-[#424DE2]/60 hover:bg-white-100/5"
                        }`}
                      >
                        <input
                          id={optionId}
                          type="radio"
                          name={`tierfinder-${q.id}`}
                          value={opt.tier}
                          checked={isSelected}
                          onChange={() => setAnswer(qIndex, opt.tier)}
                          className="sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                            isSelected
                              ? "border-[#AEE0FC] bg-[#424DE2]"
                              : "border-white-100/30 bg-transparent"
                          }`}
                        >
                          {isSelected && (
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
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
                        <span className="text-sm sm:text-base font-worksanslight text-gray-200 leading-relaxed">
                          {opt.label}
                        </span>
                      </label>
                    );
                  })}
                </fieldset>
              </li>
            );
          })}
        </ol>

        {/* Result panel */}
        {result && (
          <div
            ref={resultRef}
            role="status"
            aria-live="polite"
            className="mt-10 p-8 rounded-lg border-2 border-[#424DE2] bg-[#424DE2]/10 fade-in visible"
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
              Recommended tier
            </span>
            <h3 className="text-xl lg:text-2xl font-interbold text-white-100 mb-3 leading-snug">
              Based on your answers,{" "}
              <span className="text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text">
                {tierFinder.tierLabels[result]}
              </span>{" "}
              looks like the right starting point.
            </h3>
            <p className="text-base font-worksanslight text-gray-200 leading-relaxed mb-2">
              {tierFinder.tierDescriptions[result]}
            </p>
            <p className="text-base font-worksanslight text-gray-200 leading-relaxed mb-6">
              A discovery call will confirm fit and produce a fixed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
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
    </section>
  );
};

export default TierFinder;
