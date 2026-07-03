import React from "react";
import { featureMatrix } from "@/data/corprise-features";
import { tiers } from "@/data/corprise-tiers";
import { cn } from "@/lib/utils";

function Availability({ value }: { value: boolean | string }) {
  if (value === true) {
    return <span aria-label="Included" className="text-brand-300">✓</span>;
  }
  if (value === false) {
    return <span aria-label="Not included" className="text-zinc-600">—</span>;
  }
  return <span className="text-xs text-zinc-300">{value}</span>;
}

export default function FeatureMatrix() {
  const categories = [...new Set(featureMatrix.map(row => row.category))];

  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-[820px] text-left text-sm">
        <thead className="bg-surface-raised text-xs uppercase tracking-wider text-zinc-400">
          <tr>
            <th scope="col" className="px-4 py-4 font-medium">Feature</th>
            {tiers.map(tier => (
              <th
                key={tier.id}
                scope="col"
                className={cn(
                  "px-4 py-4 text-center font-medium",
                  tier.popular && "bg-brand-600/10 text-brand-300"
                )}
              >
                {tier.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <React.Fragment key={category}>
              <tr className="border-t border-line bg-surface-raised/60">
                <th
                  colSpan={tiers.length + 1}
                  scope="colgroup"
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-brand-300"
                >
                  {category}
                </th>
              </tr>
              {featureMatrix
                .filter(row => row.category === category)
                .map(row => (
                  <tr key={row.feature} className="border-t border-line/60">
                    <th scope="row" className="px-4 py-3 text-left font-normal">
                      <span className="text-zinc-200">{row.feature}</span>
                      {row.description && (
                        <span className="mt-0.5 block text-xs text-zinc-500">
                          {row.description}
                        </span>
                      )}
                    </th>
                    {tiers.map(tier => (
                      <td
                        key={tier.id}
                        className={cn(
                          "px-4 py-3 text-center",
                          tier.popular && "bg-brand-600/5"
                        )}
                      >
                        <Availability value={row.availability[tier.id]} />
                      </td>
                    ))}
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
