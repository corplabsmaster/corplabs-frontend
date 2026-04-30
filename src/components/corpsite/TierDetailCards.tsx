import React from "react";

import { sectionCopy, Tier, tiers } from "../../data/corpsite";
import PortfolioAnchorPlaceholder from "./PortfolioAnchorPlaceholder";

const TierDetailCards: React.FC = () => {
  return (
    <section
      id="details"
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corpsite-details-heading"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            {sectionCopy.tierDetails.eyebrow}
          </span>
          <h2
            id="corpsite-details-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4 fade-in"
          >
            {sectionCopy.tierDetails.heading}
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed fade-in">
            {sectionCopy.tierDetails.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <DetailCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface DetailCardProps {
  tier: Tier;
}

const DetailCard: React.FC<DetailCardProps> = ({ tier }) => {
  const isHighlighted = Boolean(tier.highlight);
  const highlightLabel =
    tier.highlight === "popular-solo"
      ? "Popular for solos"
      : tier.highlight === "popular-startup"
      ? "Popular for startups"
      : null;

  return (
    <article
      className={`relative flex flex-col p-8 rounded-xl border fade-in ${
        isHighlighted
          ? "border-[#424DE2] bg-[#424DE2]/10 ring-2 ring-[#424DE2]"
          : "border-white-100/10 bg-black-900"
      }`}
    >
      {highlightLabel && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-intersemibold bg-[#424DE2] text-white rounded-full whitespace-nowrap">
          {highlightLabel}
        </span>
      )}

      <header className="mb-5">
        <span className="inline-flex items-center gap-2 mb-2">
          <span aria-hidden="true" className="text-2xl">
            {tier.emoji}
          </span>
          <h3 className="text-xl font-intersemibold text-white-100">
            {tier.name}
          </h3>
        </span>
        <p className="text-sm font-worksanslight text-gray-200/80 leading-snug mb-4">
          {tier.description}
        </p>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-2xl lg:text-3xl font-interbold text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text">
            {tier.oneTime}
          </span>
          <span className="text-xs font-intersemibold tracking-widest uppercase text-gray-200/70">
            one-time
          </span>
        </div>
        <div className="flex flex-wrap items-baseline gap-x-2 mt-1">
          <span className="text-base font-intersemibold text-white-100">
            + {tier.monthly}
          </span>
          <span className="text-xs font-intersemibold tracking-widest uppercase text-gray-200/70">
            / month
          </span>
        </div>
      </header>

      <ul className="flex flex-col gap-2 mb-6 flex-1">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm font-worksanslight text-gray-200 leading-snug"
          >
            <span
              aria-hidden="true"
              className="text-[#AEE0FC] flex-shrink-0 mt-0.5"
            >
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <PortfolioAnchorPlaceholder tier={tier.id} />

      <a
        href={tier.ctaHref}
        className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full font-intersemibold text-sm transition-colors ${
          isHighlighted
            ? "bg-[#424DE2] text-white hover:bg-[#3340c4]"
            : "border border-white-100/30 text-white-100 hover:border-[#424DE2] hover:text-[#AEE0FC]"
        }`}
      >
        {tier.ctaLabel}
      </a>

      <p className="text-xs font-worksanslight text-gray-200/60 mt-3">
        {tier.delivery}
      </p>
    </article>
  );
};

export default TierDetailCards;
