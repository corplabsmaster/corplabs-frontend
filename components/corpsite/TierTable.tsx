import { tiers } from "@/data/corpsite";

/** Wide tier-comparison table; scrolls horizontally on small screens. */
export default function TierTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-[880px] text-left text-sm">
        <thead className="bg-surface-raised text-xs uppercase tracking-wider text-zinc-400">
          <tr>
            <th className="px-4 py-4 font-medium">Tier</th>
            <th className="px-4 py-4 font-medium">One-time</th>
            <th className="px-4 py-4 font-medium">Monthly</th>
            <th className="px-4 py-4 font-medium">CMS</th>
            <th className="px-4 py-4 font-medium">Pages</th>
            <th className="px-4 py-4 font-medium">Best for</th>
            <th className="px-4 py-4 font-medium">Delivery</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {tiers.map(tier => (
            <tr key={tier.id} className="align-top">
              <td className="whitespace-nowrap px-4 py-4 font-medium text-white">
                <span aria-hidden className="mr-1.5">{tier.emoji}</span>
                {tier.name}
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-zinc-200">{tier.oneTime}</td>
              <td className="whitespace-nowrap px-4 py-4 text-zinc-200">{tier.monthly}</td>
              <td className="px-4 py-4 text-zinc-400">{tier.cms}</td>
              <td className="px-4 py-4 text-zinc-400">{tier.pages}</td>
              <td className="px-4 py-4 text-zinc-400">{tier.bestFor}</td>
              <td className="px-4 py-4 text-zinc-400">{tier.delivery}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
