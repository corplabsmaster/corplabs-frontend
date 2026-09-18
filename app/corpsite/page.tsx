import type { Metadata } from "next";
import Link from "next/link";
import AddonsGrid from "@/components/corpsite/AddonsGrid";
import NgoProgramme from "@/components/corpsite/NgoProgramme";
import PlanSelector from "@/components/corpsite/PlanSelector";
import TierTable from "@/components/corpsite/TierTable";
import { Price } from "@/components/currency/price";
import { PillarStrip } from "@/components/pillar-strip";
import { PortfolioThumb } from "@/components/portfolio/PortfolioThumb";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  addonsSection,
  faqSection,
  hero,
  ladderCopy,
  pillars,
  siteFaqs,
  siteTiers,
  tiersSection,
} from "@/data/corpsite";
import { projects as portfolioProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Corpsite — Websites, Built Like Software",
  description:
    "Corpsite is how Corplabs delivers websites — modern stack, Cloudflare-native infra, optional AI via Corpi. Six tiers from RM 2,000 starter sites to enterprise platforms, every plan with a transparent monthly retainer.",
  alternates: { canonical: "/corpsite" },
};

export default function CorpsitePage() {
  return (
    <>
      {/* 1 — Hero split: copy + the ladder */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-96 max-w-3xl rounded-full bg-brand-600/25 blur-3xl"
        />
        <Reveal className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)]">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-brand-300">
                {hero.eyebrow}
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
                {hero.headlineLead}{" "}
                <span className="gradient-text">{hero.headlineGradient}</span>
              </h1>
              <p className="mt-5 max-w-xl leading-relaxed text-zinc-200">
                {hero.lede}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
                <Button href={hero.secondaryCta.href} variant="secondary">
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-baseline justify-between border-b border-line pb-2.5">
                <span className="font-display text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                  {ladderCopy.heading}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">
                  {ladderCopy.scale}
                </span>
              </div>
              {siteTiers.map((tier) => (
                <Link
                  key={tier.id}
                  href="#tiers"
                  className="grid grid-cols-[1fr_auto] items-center gap-4 py-2.5"
                >
                  <div>
                    <div className="font-display text-sm font-medium text-white">
                      {tier.short}
                    </div>
                    <div className="relative mt-2 h-[5px] overflow-hidden rounded-full bg-white/[0.07]">
                      <div
                        className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,var(--color-gradient-1),var(--color-gradient-2))]"
                        style={{ width: `${tier.weight * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[12.5px] text-white">
                      <Price rm={tier.oneTime.replace("from ", "")} />
                    </div>
                    <div className="font-mono text-[11px] text-zinc-500">
                      <Price rm={tier.monthly} />/mo
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2 — Plan selector */}
      <section id="selector" className="mx-auto max-w-3xl scroll-mt-24 px-4 pt-16 sm:px-6">
        <Reveal>
          <PlanSelector />
        </Reveal>
      </section>

      {/* 3 — Tier table */}
      <section id="tiers" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-24 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {tiersSection.heading}
            </h2>
            <span className="font-mono text-xs text-zinc-500">{tiersSection.note}</span>
          </div>
        </Reveal>
        <Reveal className="mt-8">
          <TierTable />
        </Reveal>
        <p className="mt-4 text-xs text-zinc-500">{tiersSection.finePrint}</p>
      </section>

      {/* 4 — Add-ons */}
      <section id="addons" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-24 sm:px-6">
        <Reveal>
          <SectionHeading
            align="left"
            title={addonsSection.heading}
            lede={addonsSection.lede}
          />
        </Reveal>
        <Reveal className="mt-10">
          <AddonsGrid />
        </Reveal>
      </section>

      {/* 4.5 — Proof banner: real Corpsite builds, linking to the full portfolio */}
      {portfolioProjects.filter((p) => p.pillar === "corpsite").length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line bg-surface-raised px-6 py-16 text-center sm:px-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 max-w-lg rounded-full bg-brand-600/30 blur-3xl"
              />
              <div className="relative flex justify-center -space-x-4">
                {portfolioProjects
                  .filter((p) => p.pillar === "corpsite")
                  .slice(0, 3)
                  .map((p) => (
                    <PortfolioThumb
                      key={p.slug}
                      image={p.cardImage}
                      name={p.name}
                      className="aspect-square w-20 shrink-0 rounded-full border-4 border-surface-raised sm:w-24"
                      sizes="96px"
                    />
                  ))}
              </div>
              <h2 className="relative mx-auto mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Not sure what a Corpsite build actually looks like?
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-lg text-zinc-400">
                See real sites we&apos;ve shipped — no mockups, click straight through to the live pages.
              </p>
              <div className="relative mt-8 flex justify-center">
                <Button href="/portfolio" className="font-display uppercase tracking-[0.08em]">
                  See our work
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* 5 — NGO programme band */}
      <section id="ngo" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-24 sm:px-6">
        <Reveal>
          <NgoProgramme />
        </Reveal>
      </section>

      {/* 6 — FAQ */}
      <section id="faq" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:items-start">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {faqSection.heading}
            </h2>
          </Reveal>
          <Reveal>
            <FaqAccordion items={siteFaqs} />
          </Reveal>
        </div>
      </section>

      {/* 7 — Cross-pillar strip */}
      <PillarStrip items={pillars} />
    </>
  );
}
