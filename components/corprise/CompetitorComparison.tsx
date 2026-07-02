import {
  comparisonRows,
  competitorLabels,
  type Competitor,
} from "@/data/corprise-comparisons";
import { cn } from "@/lib/utils";

const order: Competitor[] = ["corprise", "gold", "silver", "ready", "freelance"];

export default function CompetitorComparison() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-[880px] text-left text-sm">
        <thead className="bg-surface-raised text-xs uppercase tracking-wider text-zinc-400">
          <tr>
            <th scope="col" className="px-4 py-4 font-medium">&nbsp;</th>
            {order.map(competitor => (
              <th
                key={competitor}
                scope="col"
                className={cn(
                  "px-4 py-4 font-medium",
                  competitor === "corprise" && "bg-brand-600/10 text-brand-300"
                )}
              >
                {competitorLabels[competitor]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {comparisonRows.map(row => (
            <tr key={row.attribute} className="align-top">
              <th
                scope="row"
                className="whitespace-nowrap px-4 py-3 text-left font-medium text-zinc-200"
              >
                {row.attribute}
              </th>
              {order.map(competitor => (
                <td
                  key={competitor}
                  className={cn(
                    "px-4 py-3 text-zinc-400",
                    competitor === "corprise" && "bg-brand-600/5 text-zinc-200"
                  )}
                >
                  {row.values[competitor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
