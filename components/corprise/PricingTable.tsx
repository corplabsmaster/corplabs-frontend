import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { pricing } from "@/data/corprise-content";
import { tiers } from "@/data/corprise-tiers";
import { cn } from "@/lib/utils";

/** Six-tier pricing table. Scrolls horizontally on narrow screens (min-w inner). */
export default function PricingTable() {
  return (
    <Reveal>
      <div className="overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <colgroup>
            <col className="w-[200px]" />
            <col className="w-[150px]" />
            <col />
            <col className="w-[130px]" />
            <col className="w-[210px]" />
          </colgroup>
          <thead>
            <tr className="border-b border-line bg-surface-raised">
              {pricing.tableHead.map((head) => (
                <th
                  key={head}
                  scope="col"
                  className="px-7 py-4 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier) => (
              <tr
                key={tier.id}
                className={cn(
                  "border-b border-white/[0.06] align-top last:border-b-0",
                  tier.popular && "bg-brand-600/10"
                )}
              >
                <th scope="row" className="px-7 py-6 text-left font-normal">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-lg font-semibold text-white">
                      {tier.name}
                    </span>
                    {tier.popular && (
                      <span className="rounded-full bg-[linear-gradient(90deg,var(--color-gradient-1),var(--color-gradient-2))] px-2 py-0.5 font-display text-[9.5px] font-semibold uppercase tracking-wide text-surface">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[12.5px] font-light text-brand-300">{tier.tagline}</p>
                </th>
                <td className="px-7 py-6">
                  <div className="font-display text-xl font-bold text-white">{tier.price}</div>
                  {tier.period && (
                    <div className="font-mono text-[11.5px] text-zinc-500">{tier.period}</div>
                  )}
                </td>
                <td className="px-7 py-6">
                  <div className="flex flex-wrap gap-1.5">
                    {tier.includedModules.map((module) => (
                      <span
                        key={module}
                        className="rounded-full border border-line bg-surface-raised px-2.5 py-1 font-display text-[11.5px] font-medium text-zinc-300"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-7 py-6 font-mono text-[12.5px] text-zinc-300">{tier.users}</td>
                <td className="px-7 py-6">
                  <p className="text-[12.5px] leading-normal text-zinc-300">{tier.supportSla}</p>
                  <Link
                    href={tier.ctaHref}
                    className="mt-2.5 inline-block font-display text-xs font-medium text-brand-300 transition-colors hover:text-brand-200"
                  >
                    {tier.ctaLabel} →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}
