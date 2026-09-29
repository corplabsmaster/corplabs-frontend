import PricingTable from "@/components/corprise/PricingTable";
import TierScorecard from "@/components/corprise/TierScorecard";
import { Price } from "@/components/currency/price";
import { PillarStrip } from "@/components/pillar-strip";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import {
  type ComparisonCard,
  corpriseRoute,
  faqHeading,
  foundingFive,
  hero,
  myInvois,
  pillarStripItems,
  pricing,
  processFlow,
  trustItems,
  usualRoute,
} from "@/data/corprise-content";
import { faqs } from "@/data/corprise-faqs";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  path: "/corprise",
  title: "Corprise — Monthly Odoo ERP for Malaysian SMEs",
  description:
    "Odoo ERP for Malaysian SMEs from RM 1,000 a month — implementation, hosting, MyInvois and ongoing refinements in one subscription. Live in 4–8 weeks.",
});

function RouteCard({ card, tone }: { card: ComparisonCard; tone: "muted" | "accent" }) {
  const accent = tone === "accent";
  return (
    <div className={cn("rounded-xl p-7 sm:p-9", accent ? "gradient-border" : "border border-line bg-surface-raised")}>
      <p
        className={cn(
          "font-display text-[11px] font-semibold uppercase tracking-[0.12em]",
          accent ? "text-gradient-1" : "text-zinc-500"
        )}
      >
        {card.label}
      </p>
      <div className="mt-5 flex flex-wrap items-baseline gap-2.5">
        <span
          className={cn(
            "font-display text-5xl font-bold leading-none tracking-tight sm:text-[3.5rem]",
            accent ? "text-white" : "text-zinc-400"
          )}
        >
          <Price rm={card.price} />
        </span>
        <span className={cn("text-sm", accent ? "text-zinc-200" : "text-zinc-500")}>
          {card.priceSuffix}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-200">{card.body}</p>
      <div className="mt-6 flex flex-col gap-2.5">
        {card.bullets.map((bullet) => (
          <div
            key={bullet}
            className={cn("flex items-start gap-2.5 text-[13.5px]", accent ? "text-zinc-300" : "text-zinc-200")}
          >
            <span
              aria-hidden
              className={cn("shrink-0 leading-relaxed", accent ? "text-gradient-1" : "font-mono text-zinc-500")}
            >
              {accent ? "✓" : "—"}
            </span>
            {bullet}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CorprisePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-brand-300">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
              {hero.headline.plain}
              <span className="gradient-text">{hero.headline.gradient}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-200">{hero.lede}</p>
          </div>
        </Reveal>

        <Reveal className="mt-9">
          <div className="grid gap-5 md:grid-cols-2">
            <RouteCard card={usualRoute} tone="muted" />
            <RouteCard card={corpriseRoute} tone="accent" />
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center gap-4">
            <Button href={hero.primaryCta.href} className="font-display uppercase tracking-[0.08em]">
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              className="font-display uppercase tracking-[0.08em]"
            >
              {hero.secondaryCta.label}
            </Button>
            <span className="text-[13px] text-zinc-500">{hero.noLockIn}</span>
          </div>
        </Reveal>
      </section>

      {/* Trust strip */}
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.label} className="bg-surface p-6 sm:p-7">
                <p className="font-display text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-[12.5px] leading-normal text-zinc-200">{item.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Scorecard */}
      <section id="scorecard" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal>
          <TierScorecard />
        </Reveal>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {pricing.title}
            </h2>
            <span className="font-mono text-xs text-zinc-500">{pricing.note}</span>
          </div>
        </Reveal>
        <div className="mt-8">
          <PricingTable />
        </div>
      </section>

      {/* MyInvois */}
      <section id="myinvois" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal>
          <div className="grid gap-10 rounded-2xl border border-line bg-surface-raised p-7 sm:p-11 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-brand-300">
                {myInvois.eyebrow}
              </p>
              <h2 className="mt-3.5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {myInvois.title}
              </h2>
              <p className="mt-3.5 text-sm leading-relaxed text-zinc-200">{myInvois.body}</p>
              <p className="mt-3.5 text-[11.5px] leading-normal text-zinc-500">{myInvois.trademarkNote}</p>
            </div>
            <div className="grid gap-3.5 sm:grid-cols-2">
              {myInvois.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4"
                >
                  <span aria-hidden className="text-sm text-gradient-1">✓</span>
                  <span className="text-[13.5px] leading-normal text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {processFlow.title}
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processFlow.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-line bg-surface-raised p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 font-display text-[13px] font-semibold text-on-brand">
                    {step.n}
                  </span>
                  <span className="font-mono text-[11.5px] text-brand-300">{step.duration}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-zinc-200">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founding Five */}
      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal>
          <div className="gradient-border flex flex-col items-start justify-between gap-10 rounded-2xl p-8 sm:p-12 lg:flex-row lg:items-center lg:gap-12">
            <div>
              <span className="inline-block rounded-full bg-[linear-gradient(90deg,var(--color-gradient-1),var(--color-gradient-2))] px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-surface">
                {foundingFive.badge}
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {foundingFive.title}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-200">{foundingFive.lede}</p>
              <div className="mt-5 flex flex-col gap-2.5">
                {foundingFive.perks.map((perk) => (
                  <div key={perk} className="flex items-start gap-2.5 text-[13.5px] text-zinc-300">
                    <span aria-hidden className="shrink-0 text-gradient-1">✓</span>
                    {perk}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-3 lg:w-auto lg:flex-none">
              <Button
                href={foundingFive.cta.href}
                className="w-full justify-center font-display uppercase tracking-[0.08em] lg:w-auto"
              >
                {foundingFive.cta.label}
              </Button>
              <span className="font-mono text-[11.5px] text-zinc-500">{foundingFive.note}</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {faqHeading.title}
            </h2>
          </Reveal>
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* Cross-pillar strip */}
      <div className="mt-20">
        <PillarStrip items={pillarStripItems} />
      </div>
    </>
  );
}
