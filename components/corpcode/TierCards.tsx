import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { tierDisclaimer, tiers } from "@/data/corpcode-content";
import { cn } from "@/lib/utils";

export default function TierCards() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier, i) => (
          <Reveal key={tier.id} delay={i * 0.06} className="h-full">
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
              <p className="mt-1 text-sm font-medium text-brand-300">
                from {tier.startsFrom}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{tier.bestFor}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {tier.examples.map(example => (
                  <li key={example} className="flex gap-2 text-sm text-zinc-400">
                    <span aria-hidden className="text-brand-300">✓</span>
                    {example}
                  </li>
                ))}
              </ul>
              <Button
                href={`/contact?intent=corpcode&tier=${tier.id}`}
                variant={tier.popular ? "primary" : "secondary"}
                size="sm"
                className="mt-6 self-start"
              >
                Start a conversation
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-zinc-500">{tierDisclaimer}</p>
    </>
  );
}
