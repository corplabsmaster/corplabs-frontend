import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { tiers } from "@/data/corprise-tiers";
import { cn } from "@/lib/utils";

export default function PricingTiers() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tiers.map((tier, i) => (
        <Reveal key={tier.id} delay={i * 0.05} className="h-full">
          <div
            className={cn(
              "flex h-full flex-col rounded-2xl border p-6",
              tier.popular
                ? "border-brand-500 bg-brand-600/10"
                : "border-line bg-surface-raised"
            )}
          >
            {tier.popular && (
              <p className="mb-3 inline-flex self-start rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </p>
            )}
            <p className="font-display text-lg font-semibold text-white">{tier.name}</p>
            <p className="mt-2">
              <span className="font-display text-2xl font-bold text-white">
                {tier.price}
              </span>
              <span className="text-sm text-zinc-400">{tier.period}</span>
            </p>
            <p className="mt-1 text-sm font-medium text-brand-300">{tier.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{tier.bestFor}</p>
            <ul className="mt-4 flex-1 space-y-2">
              {tier.includedModules.map(module => (
                <li key={module} className="flex gap-2 text-sm text-zinc-400">
                  <span aria-hidden className="text-brand-300">✓</span>
                  {module}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-zinc-500">
              {tier.users} · {tier.supportSla}
            </p>
            <Button
              href={tier.ctaHref}
              variant={tier.popular ? "primary" : "secondary"}
              size="sm"
              className="mt-4 self-start"
            >
              {tier.ctaLabel}
            </Button>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
