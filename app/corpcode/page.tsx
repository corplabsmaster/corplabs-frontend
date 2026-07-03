import type { Metadata } from "next";
import { PillarStrip } from "@/components/pillar-strip";
import ProcessSteps from "@/components/corpcode/ProcessSteps";
import TechStack from "@/components/corpcode/TechStack";
import TierCards from "@/components/corpcode/TierCards";
import TierFinder from "@/components/corpcode/TierFinder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CtaBand } from "@/components/ui/cta-band";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs, finalCta, hero, pillars, tierFinder, valueProps } from "@/data/corpcode-content";

export const metadata: Metadata = {
  title: "Corpcode — Custom Software Builds",
  description:
    "From internal tools to full ERPs — Corpcode designs, builds, and maintains the systems off-the-shelf software can't touch. Paid discovery, fixed milestones, senior craft.",
  alternates: { canonical: "/corpcode" },
};

export default function CorpcodePage() {
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
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {hero.headline}
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

      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Why Corpcode" title="Built around your business" />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((prop, i) => (
            <Reveal key={prop.id} delay={i * 0.05} className="h-full">
              <Card className="h-full">
                <h3 className="font-display text-lg font-semibold text-white">
                  {prop.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {prop.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="tiers" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Engagement tiers"
            title="Four tiers, one process"
            lede="Public price floors, transparent scoping, and examples of what each tier ships."
          />
        </Reveal>
        <div className="mt-12">
          <TierCards />
        </div>
      </section>

      <section id="find-tier" className="mx-auto max-w-3xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Tier finder"
            title={tierFinder.heading}
            lede={tierFinder.subheading}
          />
        </Reveal>
        <Reveal className="mt-10">
          <TierFinder />
        </Reveal>
      </section>

      <section id="process" className="mx-auto max-w-4xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="From discovery to launch"
            lede="Paid discovery, fixed milestones, and a system your team can own."
          />
        </Reveal>
        <div className="mt-12">
          <ProcessSteps />
        </div>
      </section>

      <TechStack />

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
          title={finalCta.headline}
          lede={finalCta.body}
          primary={finalCta.primaryCta}
        />
      </Reveal>
    </>
  );
}
