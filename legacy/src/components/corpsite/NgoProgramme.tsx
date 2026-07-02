import React, { useState } from "react";

import { ngoProgramme } from "../../data/corpsite";

const NgoProgramme: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <section
      id="for-good"
      className="py-20 px-5 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #060226 0%, #0a0537 50%, #060226 100%)",
      }}
      aria-labelledby="corpsite-for-good-heading"
    >
      {/* Decorative dashed orbit */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="780"
          height="540"
          viewBox="0 0 780 540"
          fill="none"
          className="opacity-30"
        >
          <ellipse
            cx="390"
            cy="270"
            rx="370"
            ry="240"
            stroke="#AEE0FC"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <ellipse
            cx="390"
            cy="270"
            rx="290"
            ry="190"
            stroke="#424DE2"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            strokeDasharray="3 6"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#AEE0FC]/40 bg-[#AEE0FC]/10">
            <span aria-hidden="true">{ngoProgramme.emoji}</span>
            {ngoProgramme.badge}
          </span>
          <h2
            id="corpsite-for-good-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4 fade-in"
          >
            <span className="text-transparent bg-gradient-to-r from-[#AEE0FC] via-[#BFD8FA] to-[#E4D9FB] bg-clip-text">
              {ngoProgramme.heading}
            </span>
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed fade-in">
            {ngoProgramme.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <Block title={ngoProgramme.scope.title}>
            <ul className="flex flex-col gap-2">
              {ngoProgramme.scope.items.map((item) => (
                <BlockItem key={item}>{item}</BlockItem>
              ))}
            </ul>
          </Block>

          <Block title={ngoProgramme.eligibility.title}>
            <ul className="flex flex-col gap-2">
              {ngoProgramme.eligibility.items.map((item) => (
                <BlockItem key={item}>{item}</BlockItem>
              ))}
            </ul>
          </Block>
        </div>

        {/* Collapsible T&Cs */}
        <div className="rounded-xl border border-white-100/10 bg-black-900/80 mb-8 overflow-hidden fade-in">
          <button
            type="button"
            aria-expanded={showTerms}
            aria-controls="ngo-terms-panel"
            onClick={() => setShowTerms((prev) => !prev)}
            className="w-full flex items-center justify-between px-6 py-4 text-left"
          >
            <span className="text-base font-intersemibold text-white-100">
              {ngoProgramme.terms.title}
            </span>
            <span
              aria-hidden="true"
              className="text-[#AEE0FC] flex-shrink-0 text-lg font-interbold"
            >
              {showTerms ? "−" : "+"}
            </span>
          </button>
          {showTerms && (
            <div
              id="ngo-terms-panel"
              className="px-6 pb-5 border-t border-white-100/10"
            >
              <ul className="flex flex-col gap-2 pt-4">
                {ngoProgramme.terms.items.map((item) => (
                  <BlockItem key={item}>{item}</BlockItem>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Apply */}
        <div className="rounded-xl border border-[#424DE2]/40 bg-[#424DE2]/10 p-8 fade-in">
          <h3 className="text-lg lg:text-xl font-intersemibold text-white-100 mb-3">
            {ngoProgramme.apply.title}
          </h3>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed mb-3">
            {ngoProgramme.apply.intro}
          </p>
          <ol className="flex flex-col gap-2 mb-4 pl-5 list-decimal text-base font-worksanslight text-gray-200 leading-relaxed">
            {ngoProgramme.apply.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p className="text-sm font-worksanslight text-gray-200/80 mb-6">
            {ngoProgramme.apply.closing}
          </p>
          <a
            href={ngoProgramme.cta.href}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
          >
            {ngoProgramme.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
};

interface BlockProps {
  title: string;
  children: React.ReactNode;
}

const Block: React.FC<BlockProps> = ({ title, children }) => (
  <div className="rounded-xl border border-white-100/10 bg-black-900/80 p-6 fade-in">
    <h3 className="text-base font-intersemibold text-[#AEE0FC] tracking-wide mb-4">
      {title}
    </h3>
    {children}
  </div>
);

const BlockItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-2 text-sm font-worksanslight text-gray-200 leading-relaxed">
    <span aria-hidden="true" className="text-[#AEE0FC] flex-shrink-0 mt-0.5">
      —
    </span>
    <span>{children}</span>
  </li>
);

export default NgoProgramme;
