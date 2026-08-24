import { Price } from "@/components/currency/price";
import { siteAddons } from "@/data/corpsite";

/** Eight add-ons in a hairline-divided grid (4-across on desktop). */
export default function AddonsGrid() {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {siteAddons.map((addon) => (
        <div
          key={addon.name}
          className="bg-surface p-6 transition-colors hover:bg-surface-raised"
        >
          <h3 className="font-display text-sm font-semibold leading-snug text-white">
            {addon.name}
          </h3>
          <div className="mt-2.5 font-mono text-xs text-brand-300">
            <Price rm={addon.setup} />
          </div>
          <div className="mt-0.5 font-mono text-[11.5px] text-zinc-500">
            <Price rm={addon.monthly} />
          </div>
        </div>
      ))}
    </div>
  );
}
