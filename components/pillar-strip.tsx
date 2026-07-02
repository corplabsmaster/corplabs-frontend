import Link from "next/link";
import { cn } from "@/lib/utils";

export interface PillarStripItem {
  id: string;
  name: string;
  blurb: string;
  href: string;
  isCurrent?: boolean;
}

/** Cross-pillar nav strip shown on each pillar page. */
export function PillarStrip({ items }: { items: PillarStripItem[] }) {
  return (
    <section className="border-y border-line bg-surface-raised">
      <div className="mx-auto grid max-w-6xl gap-px px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map(item =>
          item.isCurrent ? (
            <div key={item.id} className="rounded-xl bg-brand-600/10 p-4">
              <p className="text-sm font-semibold text-brand-300">
                {item.name} <span className="ml-1 text-xs font-normal">· you are here</span>
              </p>
              <p className="mt-1 text-xs text-zinc-400">{item.blurb}</p>
            </div>
          ) : (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "rounded-xl p-4 transition-colors hover:bg-surface-overlay"
              )}
            >
              <p className="text-sm font-semibold text-white">{item.name}</p>
              <p className="mt-1 text-xs text-zinc-400">{item.blurb}</p>
            </Link>
          )
        )}
      </div>
    </section>
  );
}
