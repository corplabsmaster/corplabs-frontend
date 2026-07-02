import React from "react";

import { sectionCopy, Tier, tiers } from "../../data/corpsite";

const TierTable: React.FC = () => {
  return (
    <section
      id="tiers"
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corpsite-tiers-heading"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            {sectionCopy.tierTable.eyebrow}
          </span>
          <h2
            id="corpsite-tiers-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4 fade-in"
          >
            {sectionCopy.tierTable.heading}
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed fade-in">
            {sectionCopy.tierTable.intro}
          </p>
        </div>

        {/* Mobile: stacked cards (< md) */}
        <div className="md:hidden flex flex-col gap-3">
          {tiers.map((tier) => (
            <MobileTierCard key={tier.id} tier={tier} />
          ))}
        </div>

        {/* Tablet & desktop: comparison table (md+) */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-white-100/10 bg-black-900">
          <table className="min-w-full text-left">
            <thead className="sticky top-0 z-10 bg-black-900">
              <tr className="border-b border-white-100/10">
                <th
                  scope="col"
                  className="sticky left-0 z-20 bg-black-900 px-5 py-4 text-xs font-intersemibold text-gray-200 tracking-widest uppercase min-w-[180px]"
                >
                  Tier
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-xs font-intersemibold text-gray-200 tracking-widest uppercase min-w-[120px]"
                >
                  One-time
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-xs font-intersemibold text-gray-200 tracking-widest uppercase min-w-[110px]"
                >
                  Monthly
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-xs font-intersemibold text-gray-200 tracking-widest uppercase min-w-[140px]"
                >
                  CMS
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-xs font-intersemibold text-gray-200 tracking-widest uppercase min-w-[80px]"
                >
                  Pages
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-xs font-intersemibold text-gray-200 tracking-widest uppercase min-w-[260px]"
                >
                  Best for
                </th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((tier) => {
                const isHighlighted = Boolean(tier.highlight);
                return (
                  <tr
                    key={tier.id}
                    className={`border-t border-white-100/5 ${
                      isHighlighted ? "bg-[#424DE2]/5" : ""
                    }`}
                  >
                    <th
                      scope="row"
                      className={`sticky left-0 z-10 px-5 py-5 text-sm font-worksanslight text-white-100 font-normal align-top ${
                        isHighlighted ? "bg-[#0a0537]" : "bg-black-900"
                      }`}
                    >
                      <span className="inline-flex items-center gap-2 font-intersemibold text-base text-white-100">
                        <span aria-hidden="true">{tier.emoji}</span>
                        {tier.name}
                      </span>
                      {tier.highlight && (
                        <span className="block mt-1 text-[10px] font-intersemibold tracking-widest uppercase text-[#AEE0FC]">
                          {tier.highlight === "popular-solo"
                            ? "Popular for solos"
                            : "Popular for startups"}
                        </span>
                      )}
                    </th>
                    <td className="px-4 py-5 align-top">
                      <span className="text-base font-interbold text-white-100">
                        {tier.oneTime}
                      </span>
                    </td>
                    <td className="px-4 py-5 align-top">
                      <span className="text-base font-intersemibold text-white-100">
                        {tier.monthly}
                      </span>
                      <span className="block text-[10px] tracking-widest uppercase text-gray-200/60 font-intersemibold">
                        / month
                      </span>
                    </td>
                    <td className="px-4 py-5 align-top text-sm font-worksanslight text-gray-200">
                      {tier.cms}
                    </td>
                    <td className="px-4 py-5 align-top text-sm font-worksanslight text-gray-200">
                      {tier.pages}
                    </td>
                    <td className="px-4 py-5 align-top text-sm font-worksanslight text-gray-200/80 leading-snug">
                      {tier.bestFor}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

interface MobileTierCardProps {
  tier: Tier;
}

const MobileTierCard: React.FC<MobileTierCardProps> = ({ tier }) => {
  const isHighlighted = Boolean(tier.highlight);
  return (
    <article
      className={`rounded-xl border p-5 ${
        isHighlighted
          ? "border-[#424DE2] bg-[#424DE2]/10 ring-1 ring-[#424DE2]/40"
          : "border-white-100/10 bg-black-900"
      }`}
    >
      <header className="mb-4">
        <span className="inline-flex items-center gap-2 text-base font-intersemibold text-white-100">
          <span aria-hidden="true">{tier.emoji}</span>
          {tier.name}
        </span>
        {tier.highlight && (
          <span className="block mt-1 text-[10px] font-intersemibold tracking-widest uppercase text-[#AEE0FC]">
            {tier.highlight === "popular-solo"
              ? "Popular for solos"
              : "Popular for startups"}
          </span>
        )}
      </header>
      <dl className="grid grid-cols-2 gap-x-3 gap-y-3 mb-3">
        <div>
          <dt className="text-[10px] font-intersemibold tracking-widest uppercase text-gray-200/70 mb-1">
            One-time
          </dt>
          <dd className="text-base font-interbold text-white-100">
            {tier.oneTime}
          </dd>
        </div>
        <div>
          <dt className="text-[10px] font-intersemibold tracking-widest uppercase text-gray-200/70 mb-1">
            Monthly
          </dt>
          <dd className="text-base font-intersemibold text-white-100">
            {tier.monthly}
            <span className="text-[10px] tracking-widest uppercase text-gray-200/60 font-intersemibold ml-1">
              / mo
            </span>
          </dd>
        </div>
        <div>
          <dt className="text-[10px] font-intersemibold tracking-widest uppercase text-gray-200/70 mb-1">
            CMS
          </dt>
          <dd className="text-sm font-worksanslight text-gray-200">
            {tier.cms}
          </dd>
        </div>
        <div>
          <dt className="text-[10px] font-intersemibold tracking-widest uppercase text-gray-200/70 mb-1">
            Pages
          </dt>
          <dd className="text-sm font-worksanslight text-gray-200">
            {tier.pages}
          </dd>
        </div>
      </dl>
      <p className="text-sm font-worksanslight text-gray-200/80 leading-snug">
        {tier.bestFor}
      </p>
    </article>
  );
};

export default TierTable;
