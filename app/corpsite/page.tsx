import type { Metadata } from "next";
import { PillarStrip } from "@/components/pillar-strip";
import AddonsGrid from "@/components/corpsite/AddonsGrid";
import NgoProgramme from "@/components/corpsite/NgoProgramme";
import PlanSelector from "@/components/corpsite/PlanSelector";
import TierDetailCards from "@/components/corpsite/TierDetailCards";
import TierTable from "@/components/corpsite/TierTable";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/ui/cta-band";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs, footerCta, hero, pillars, sectionCopy } from "@/data/corpsite";

export const metadata: Metadata = {
  title: "Corpsite — Websites, Built Like Software",
  description:
    "Corpsite is how Corplabs delivers websites — modern stack, Cloudflare-native infra, optional AI via Corpi. Six tiers from RM 2,000 starter sites to enterprise platforms, every plan with a transparent monthly retainer.",
  alternates: { canonical: "/corpsite" },
};

export default function CorpsitePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-96 max-w-3xl rounded-full bg-brand-600/25 blur-3xl"
        />
        <Reveal className="mx-auto max-w-5xl px-4 pb-16 pt-24 text-center sm:px-6 sm:pt-28">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-300">
            {hero.eyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {hero.headline.line1}{" "}
            <span className="text-brand-300">{hero.headline.line2}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </section>

      <PillarStrip items={pillars} />

      <section id="tiers" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Six tiers. Transparent from day one."
            lede="Every plan includes a monthly retainer covering hosting, monitoring, and minor edits — no surprise invoices."
          />
        </Reveal>
        <Reveal className="mt-12">
          <TierTable />
        </Reveal>
        <div className="mt-12">
          <TierDetailCards />
        </div>
      </section>

      <section id="plan-selector" className="mx-auto max-w-3xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={sectionCopy.planSelector.eyebrow}
            title={sectionCopy.planSelector.heading}
            lede={sectionCopy.planSelector.subheading}
          />
        </Reveal>
        <Reveal className="mt-10">
          <PlanSelector />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Add-ons"
            title="Extend any tier"
            lede="Bolt-ons priced the same way as the tiers — a one-time setup and a clear monthly."
          />
        </Reveal>
        <div className="mt-12">
          <AddonsGrid />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal>
          <NgoProgramme />
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Common questions" />
        </Reveal>
        <Reveal className="mt-10">
          <FaqAccordion items={faqs} />
        </Reveal>
      </section>

      <Reveal>
        <CtaBand
          title={footerCta.headline}
          lede={footerCta.body}
          primary={footerCta.primaryCta}
          secondary={footerCta.secondaryCta}
        />
      </Reveal>
    </>
  );
}
