import React from "react";

import type { Tier } from "../../data/corprise-tiers";

interface Props {
  tier: Tier;
  highlighted?: boolean;
}

const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0 mt-1">
    <path d="M3 8l3 3 7-7" stroke="#AEE0FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PricingCard: React.FC<Props> = ({ tier, highlighted = false }) => {
  const isPopular = tier.popular || highlighted;
  return (
    <article
      className={`relative flex flex-col p-6 sm:p-7 rounded-lg border h-full min-w-0 ${
        isPopular
          ? "border-[#424DE2] bg-[#424DE2]/10 ring-2 ring-[#424DE2]"
          : "border-white-100/10 bg-black-900"
      }`}
      aria-label={`${tier.name} tier`}
    >
      {tier.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-intersemibold bg-[#424DE2] text-white rounded-full whitespace-nowrap uppercase tracking-widest">
          Most Popular
        </span>
      )}

      <h3 className="text-lg font-intersemibold text-white-100 mb-1">{tier.name}</h3>
      <p className="text-sm font-worksanslight text-gray-200/80 mb-5 leading-snug">
        {tier.tagline}
      </p>

      <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1 mb-5 min-w-0">
        <span className="text-2xl lg:text-3xl font-interbold text-white-100 leading-none break-words">
          {tier.price}
        </span>
        {tier.period && (
          <span className="text-sm font-worksanslight text-gray-200">
            {tier.period}
          </span>
        )}
      </div>

      <p className="text-sm font-worksanslight text-gray-200 mb-6 leading-relaxed">
        {tier.bestFor}
      </p>

      <ul className="flex flex-col gap-2 mb-6">
        {tier.includedModules.map((mod) => (
          <li key={mod} className="flex gap-2 text-sm font-worksanslight text-gray-200 leading-snug">
            {checkIcon}
            <span className="min-w-0 break-words">{mod}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4 border-t border-white-100/10">
        <p className="text-xs font-worksanslight text-gray-200/80 mb-1">
          {tier.users}
        </p>
        <p className="text-xs font-worksanslight text-gray-200/80 mb-4 leading-snug">
          {tier.supportSla}
        </p>
        <a
          href={tier.ctaHref}
          className={`inline-flex w-full items-center justify-center px-4 py-2.5 rounded-full font-intersemibold text-sm transition-colors ${
            isPopular
              ? "bg-[#424DE2] text-white hover:bg-[#3340c4]"
              : "border border-white-100/30 text-white-100 hover:border-[#424DE2] hover:text-[#AEE0FC]"
          }`}
        >
          {tier.ctaLabel}
        </a>
      </div>
    </article>
  );
};

export default PricingCard;
