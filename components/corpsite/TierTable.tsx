import { Price } from "@/components/currency/price";
import { cn } from "@/lib/utils";
import { siteTiers, tiersSection } from "@/data/corpsite";

/** Six-tier comparison table; scrolls horizontally on small screens. */
export default function TierTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-[900px] border-collapse text-left">
        <thead className="bg-surface-raised">
          <tr>
            {tiersSection.head.map((heading) => (
              <th
                key={heading}
                scope="col"
                className="px-7 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {siteTiers.map((tier) => (
            <tr
              key={tier.id}
              className={cn(
                "border-t border-white/[0.07] align-top",
                tier.popular && "bg-brand-600/10"
              )}
            >
              <td className="px-7 py-5">
                <div className="flex items-center gap-2">
                  <span className="font-display text-base font-semibold text-white">
                    {tier.name}
                  </span>
                  {tier.popular && (
                    <span className="rounded-full bg-[linear-gradient(90deg,var(--color-gradient-1),var(--color-gradient-2))] px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-wide text-surface">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-zinc-500">{tier.bestFor}</p>
              </td>
              <td className="px-7 py-5">
                <div className="font-display text-[15px] font-semibold text-white">
                  <Price rm={tier.oneTime} />
                </div>
                <div className="font-mono text-[11.5px] text-zinc-500">one-time</div>
              </td>
              <td className="whitespace-nowrap px-7 py-5 font-mono text-[13px] text-brand-300">
                <Price rm={tier.monthly} /> /mo
              </td>
              <td className="whitespace-nowrap px-7 py-5 font-mono text-[13px] text-zinc-200">
                {tier.pages}
              </td>
              <td className="px-7 py-5 text-[13px] leading-normal text-zinc-200">
                {tier.what}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
