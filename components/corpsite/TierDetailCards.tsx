import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { tiers, type TierHighlight } from "@/data/corpsite";
import { cn } from "@/lib/utils";

const highlightLabels: Record<TierHighlight, string> = {
  "popular-solo": "Most popular · solo founders",
  "popular-startup": "Most popular · startups",
};

export default function TierDetailCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tiers.map((tier, i) => (
        <Reveal key={tier.id} delay={i * 0.05} className="h-full">
          <div
            className={cn(
              "flex h-full flex-col rounded-2xl border p-6",
              tier.highlight
                ? "border-brand-500 bg-brand-600/10"
                : "border-line bg-surface-raised"
            )}
          >
            {tier.highlight && (
              <p className="mb-3 inline-flex self-start rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                {highlightLabels[tier.highlight]}
              </p>
            )}
            <p className="font-display text-lg font-semibold text-white">
              <span aria-hidden className="mr-1.5">{tier.emoji}</span>
              {tier.name}
            </p>
            <p className="mt-2 text-sm text-zinc-200">
              <span className="font-semibold text-white">{tier.oneTime}</span> one-time ·{" "}
              {tier.monthly}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {tier.description}
            </p>
            <ul className="mt-4 flex-1 space-y-2">
              {tier.features.map(feature => (
                <li key={feature} className="flex gap-2 text-sm text-zinc-400">
                  <span aria-hidden className="text-brand-300">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              href={tier.ctaHref}
              variant={tier.highlight ? "primary" : "secondary"}
              size="sm"
              className="mt-6 self-start"
            >
              {tier.ctaLabel}
            </Button>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
