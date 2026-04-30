import React from "react";

import { featureMatrix } from "../../data/corprise-features";
import { tiers } from "../../data/corprise-tiers";

const renderCell = (value: boolean | string): React.ReactNode => {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center" aria-label="Included">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M4 9l3 3 7-8" stroke="#AEE0FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span
        className="inline-flex items-center justify-center text-gray-200/30"
        aria-label="Not included"
      >
        —
      </span>
    );
  }
  return (
    <span className="text-xs font-worksanslight text-white-100">{value}</span>
  );
};

const renderMobileValue = (value: boolean | string): React.ReactNode => {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-intersemibold text-[#AEE0FC]">
        <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M4 9l3 3 7-8" stroke="#AEE0FC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Included
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="text-xs font-worksanslight text-gray-200/40">
        Not included
      </span>
    );
  }
  return (
    <span className="text-xs font-worksanslight text-white-100">{value}</span>
  );
};

const FeatureMatrix: React.FC = () => {
  const categories = Array.from(new Set(featureMatrix.map((row) => row.category)));

  return (
    <section
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corprise-matrix-heading"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            What&apos;s included
          </span>
          <h2
            id="corprise-matrix-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
          >
            The full feature matrix.
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed">
            Every tier, every module, every SLA — in one table. No hidden gotchas.
          </p>
        </div>

        {/* Mobile: stacked cards (< md) */}
        <div className="md:hidden flex flex-col gap-8">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xs font-intersemibold text-[#AEE0FC] tracking-widest uppercase mb-3 px-1">
                {category}
              </h3>
              <div className="flex flex-col gap-3">
                {featureMatrix
                  .filter((row) => row.category === category)
                  .map((row) => (
                    <article
                      key={`mobile-${row.category}-${row.feature}`}
                      className="rounded-xl border border-white-100/10 bg-black-900 p-5"
                    >
                      <h4 className="text-base font-intersemibold text-white-100 mb-1 leading-snug">
                        {row.feature}
                      </h4>
                      {row.description && (
                        <p className="text-xs font-worksanslight text-gray-200/60 mb-4 leading-relaxed">
                          {row.description}
                        </p>
                      )}
                      <dl className="grid grid-cols-2 gap-x-3 gap-y-2.5">
                        {tiers.map((tier) => (
                          <div
                            key={`mobile-${row.feature}-${tier.id}`}
                            className={`flex flex-col gap-0.5 px-2.5 py-2 rounded-md ${
                              tier.popular
                                ? "bg-[#424DE2]/15 border border-[#424DE2]/40"
                                : "bg-black-950"
                            }`}
                          >
                            <dt className="text-[10px] font-intersemibold tracking-widest uppercase text-gray-200/70">
                              {tier.name}
                            </dt>
                            <dd>{renderMobileValue(row.availability[tier.id])}</dd>
                          </div>
                        ))}
                      </dl>
                    </article>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tablet & desktop: full table (md+) */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-white-100/10 bg-black-900">
          <table className="min-w-full text-left">
            <thead className="sticky top-0 z-10 bg-black-900">
              <tr className="border-b border-white-100/10">
                <th
                  scope="col"
                  className="sticky left-0 z-20 bg-black-900 px-5 py-4 text-xs font-intersemibold text-gray-200 tracking-widest uppercase min-w-[220px]"
                >
                  Feature
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.id}
                    scope="col"
                    className={`px-4 py-4 text-center min-w-[110px] ${
                      tier.popular ? "bg-[#424DE2]/10" : ""
                    }`}
                  >
                    <div className="text-xs font-intersemibold text-gray-200/80 tracking-widest uppercase">
                      {tier.name}
                    </div>
                    <div className="text-base font-interbold text-white-100 mt-1">
                      {tier.price}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <React.Fragment key={category}>
                  <tr>
                    <td
                      colSpan={tiers.length + 1}
                      className="px-5 py-3 text-xs font-intersemibold text-[#AEE0FC] tracking-widest uppercase bg-black-950"
                    >
                      {category}
                    </td>
                  </tr>
                  {featureMatrix
                    .filter((row) => row.category === category)
                    .map((row) => (
                      <tr
                        key={`${row.category}-${row.feature}`}
                        className="border-t border-white-100/5"
                      >
                        <th
                          scope="row"
                          className="sticky left-0 z-10 bg-black-900 px-5 py-4 text-sm font-worksanslight text-white-100 font-normal align-top"
                        >
                          <span className="block font-intersemibold">
                            {row.feature}
                          </span>
                          {row.description && (
                            <span className="block text-xs font-worksanslight text-gray-200/60 mt-1 leading-snug">
                              {row.description}
                            </span>
                          )}
                        </th>
                        {tiers.map((tier) => {
                          const value = row.availability[tier.id];
                          return (
                            <td
                              key={tier.id}
                              className={`px-4 py-4 text-center align-top ${
                                tier.popular ? "bg-[#424DE2]/5" : ""
                              }`}
                            >
                              {renderCell(value)}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FeatureMatrix;
