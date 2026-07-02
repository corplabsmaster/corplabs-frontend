import React from "react";

import { tierDisclaimer, tiers } from "../../data/corpcode-content";

const TIER_ICONS: Record<string, React.ReactNode> = {
  lite: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tier-lite" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AEE0FC" />
          <stop offset="100%" stopColor="#E4D9FB" />
        </linearGradient>
      </defs>
      <path
        d="M12 3L4 8V16L12 21L20 16V8L12 3Z"
        stroke="url(#tier-lite)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  standard: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tier-standard" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AEE0FC" />
          <stop offset="100%" stopColor="#E4D9FB" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="url(#tier-standard)" strokeWidth="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="url(#tier-standard)" strokeWidth="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="url(#tier-standard)" strokeWidth="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="url(#tier-standard)" strokeWidth="1.5" />
    </svg>
  ),
  advanced: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tier-advanced" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AEE0FC" />
          <stop offset="100%" stopColor="#E4D9FB" />
        </linearGradient>
      </defs>
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        stroke="url(#tier-advanced)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="19" cy="19" r="2.5" stroke="url(#tier-advanced)" strokeWidth="1.4" />
    </svg>
  ),
  enterprise: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tier-enterprise" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AEE0FC" />
          <stop offset="100%" stopColor="#E4D9FB" />
        </linearGradient>
      </defs>
      <path d="M3 21V9L12 4L21 9V21" stroke="url(#tier-enterprise)" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 21H21" stroke="url(#tier-enterprise)" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="9" y="13" width="6" height="8" stroke="url(#tier-enterprise)" strokeWidth="1.4" />
    </svg>
  ),
};

const TierTable: React.FC = () => {
  return (
    <section
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corpcode-tiers-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            What we build
          </span>
          <h2
            id="corpcode-tiers-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4 fade-in"
          >
            Four tiers. Public starting prices.
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed fade-in">
            Final figures are confirmed after paid discovery. No guessing — pick the tier that matches your scope.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col p-8 rounded-lg border fade-in ${
                tier.popular
                  ? "border-[#424DE2] bg-[#424DE2]/10 ring-2 ring-[#424DE2]"
                  : "border-white-100/10 bg-black-900"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-intersemibold bg-[#424DE2] text-white rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}
              <div className="mb-4">{TIER_ICONS[tier.id]}</div>
              <h3 className="text-lg font-intersemibold text-white-100 mb-2">
                {tier.name}
              </h3>
              <div className="mb-2">
                <p className="text-xs font-worksanslight text-gray-200 uppercase tracking-widest mb-1">
                  Starts from
                </p>
                <span className="text-2xl lg:text-3xl font-interbold text-white-100 break-words">
                  {tier.startsFrom}
                </span>
              </div>
              <p className="text-sm font-worksanslight text-gray-200 mb-4 mt-2">
                {tier.bestFor}
              </p>
              <ul className="text-sm font-worksanslight text-gray-200 space-y-1 mb-6 flex-1">
                {tier.examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2">
                    <span className="text-[#AEE0FC] mt-0.5 flex-shrink-0">•</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact?intent=corpcode"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white-100/30 text-white-100 font-intersemibold text-sm hover:border-[#424DE2] hover:text-[#AEE0FC] transition-colors"
              >
                Talk to us
              </a>
            </div>
          ))}
        </div>

        <p className="text-xs font-worksanslight text-gray-200/70 text-center mt-8 max-w-3xl mx-auto">
          {tierDisclaimer}
        </p>
      </div>
    </section>
  );
};

export default TierTable;
