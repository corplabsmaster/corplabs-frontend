import React from "react";

import {
  comparisonRows,
  competitorLabels,
} from "../../data/corprise-comparisons";
import type { Competitor } from "../../data/corprise-comparisons";

const competitors: Competitor[] = [
  "corprise",
  "gold",
  "silver",
  "ready",
  "freelance",
];

const CompetitorComparison: React.FC = () => {
  return (
    <section
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corprise-compare-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            How we compare
          </span>
          <h2
            id="corprise-compare-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
          >
            Corprise vs. the usual options.
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed">
            A straight comparison of what you actually get for the money — not a marketing chart.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white-100/10 bg-black-900">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-white-100/10">
                <th
                  scope="col"
                  className="px-5 py-4 text-xs font-intersemibold text-gray-200 tracking-widest uppercase min-w-[180px]"
                >
                  Attribute
                </th>
                {competitors.map((c) => (
                  <th
                    key={c}
                    scope="col"
                    className={`px-4 py-4 text-left min-w-[160px] ${
                      c === "corprise" ? "bg-[#424DE2]/10" : ""
                    }`}
                  >
                    <span
                      className={`block text-xs font-intersemibold tracking-widest uppercase ${
                        c === "corprise" ? "text-[#AEE0FC]" : "text-gray-200/80"
                      }`}
                    >
                      {competitorLabels[c]}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr
                  key={row.attribute}
                  className="border-t border-white-100/5"
                >
                  <th
                    scope="row"
                    className="px-5 py-4 text-sm font-intersemibold text-white-100 align-top"
                  >
                    {row.attribute}
                  </th>
                  {competitors.map((c) => (
                    <td
                      key={c}
                      className={`px-4 py-4 align-top text-sm font-worksanslight leading-snug ${
                        c === "corprise"
                          ? "bg-[#424DE2]/5 text-white-100"
                          : "text-gray-200/80"
                      }`}
                    >
                      {row.values[c]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs font-worksanslight text-gray-200/60 text-center mt-6 max-w-3xl mx-auto">
          Figures based on public pricing guidance from Odoo S.A. partner pages and typical Malaysian implementation quotes (2024–2026). Your mileage may vary — ask for quotes.
        </p>
      </div>
    </section>
  );
};

export default CompetitorComparison;
