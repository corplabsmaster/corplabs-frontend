import React from "react";

import { solutions } from "../../data/corprise-content";

const checkIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" stroke="url(#solutionGrad)" strokeWidth="1.5" />
    <path
      d="M8 12l3 3 5-6"
      stroke="url(#solutionGrad)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SolutionSection: React.FC = () => {
  return (
    <section
      className="bg-black-950 py-20 px-5 relative overflow-hidden"
      aria-labelledby="corprise-solution-heading"
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient
            id="solutionGrad"
            x1="0"
            y1="0"
            x2="24"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#AEE0FC" />
            <stop offset="50%" stopColor="#BFD8FA" />
            <stop offset="100%" stopColor="#E4D9FB" />
          </linearGradient>
        </defs>
      </svg>

      <div
        className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-0"
        aria-hidden="true"
      >
        <svg width="760" height="760" viewBox="0 0 760 760" fill="none">
          <ellipse
            cx="380"
            cy="380"
            rx="360"
            ry="360"
            stroke="#424DE2"
            strokeOpacity="0.08"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            The Corprise Answer
          </span>
          <h2
            id="corprise-solution-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
          >
            Subscription-priced ERP, built for how Malaysian SMEs actually work.
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed">
            Every problem above has an answer baked into how Corprise is priced, delivered, and supported.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <article
              key={solution.id}
              className="flex flex-col p-8 rounded-lg border border-[#424DE2]/40 bg-[#424DE2]/5 h-full"
            >
              <div className="mb-4">{checkIcon}</div>
              <h3 className="text-lg font-intersemibold text-white-100 mb-3 leading-snug">
                {solution.title}
              </h3>
              <p className="text-base font-worksanslight text-gray-200 leading-relaxed">
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
