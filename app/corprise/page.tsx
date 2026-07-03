import type { Metadata } from "next";
import CompetitorComparison from "@/components/corprise/CompetitorComparison";
import FeatureMatrix from "@/components/corprise/FeatureMatrix";
import PricingTiers from "@/components/corprise/PricingTiers";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  aiIntegration,
  finalCta,
  foundingFive,
  hero,
  myInvois,
  problems,
  processSteps,
  sectionHeadings,
  solutions,
  trustItems,
} from "@/data/corprise-content";
import { faqs } from "@/data/corprise-faqs";

export const metadata: Metadata = {
  title: "Corprise — Subscription-Priced Odoo ERP for Malaysian SMEs",
  description:
    "Corprise replaces RM 80,000+ Odoo implementations with a predictable monthly subscription from RM 1,000. Go live in weeks, MyInvois and Claude-powered AI automation included.",
};

export default function CorprisePage() {
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
          <p className="mx-auto mt-6 max-w-lg text-xs text-zinc-500">
            {hero.reassurance}
          </p>
        </Reveal>
      </section>

      <section aria-label="Trusted by" className="border-y border-line bg-surface-raised">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:grid-cols-5">
          {trustItems.map(item => (
            <div key={item.label} className="text-center">
              <p className="text-sm font-semibold text-white">{item.label}</p>
              <p className="mt-1 text-xs leading-snug text-zinc-500">{item.sublabel}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading {...sectionHeadings.problem} />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {problems.map((problem, i) => (
            <Reveal key={problem.id} delay={i * 0.06} className="h-full">
              <Card className="h-full">
                {problem.stat && (
                  <p className="font-display text-2xl font-bold text-brand-300">
                    {problem.stat}
                  </p>
                )}
                <h3 className="mt-2 font-display text-lg font-semibold text-white">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {problem.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading {...sectionHeadings.solution} />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {solutions.map((solution, i) => (
            <Reveal key={solution.id} delay={i * 0.06} className="h-full">
              <Card className="h-full border-brand-500/40">
                <h3 className="font-display text-lg font-semibold text-white">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {solution.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={myInvois.eyebrow} title={myInvois.title} lede={myInvois.body} />
        </Reveal>
        <Reveal className="mt-10">
          <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
            {myInvois.checklist.map(item => (
              <p key={item} className="flex gap-2 text-sm text-zinc-300">
                <span aria-hidden className="text-brand-300">✓</span>
                {item}
              </p>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-zinc-600">
            {myInvois.trademarkNote}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={aiIntegration.eyebrow}
            title={aiIntegration.title}
            lede={aiIntegration.lede}
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {aiIntegration.benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.05} className="h-full">
              <Card className="h-full">
                <h3 className="font-display text-lg font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {benefit.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading {...sectionHeadings.process} />
        </Reveal>
        <ol className="mt-12 space-y-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06}>
              <li className="flex gap-5 rounded-2xl border border-line bg-surface-raised p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                  {step.step}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <p className="text-xs font-medium uppercase tracking-widest text-brand-300">
                      {step.label} · {step.duration}
                    </p>
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading {...sectionHeadings.pricing} />
        </Reveal>
        <div className="mt-12">
          <PricingTiers />
        </div>
      </section>

      {/* TODO Phase 4: ScorecardWidget (interactive tier-recommendation quiz) */}
      <div id="scorecard" className="scroll-mt-24" />

      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading {...sectionHeadings.matrix} />
        </Reveal>
        <Reveal className="mt-12">
          <FeatureMatrix />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading {...sectionHeadings.compare} />
        </Reveal>
        <Reveal className="mt-12">
          <CompetitorComparison />
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-4 pt-20 sm:px-6">
        <Reveal>
          <div className="rounded-3xl border border-brand-500/50 bg-brand-600/10 p-8 text-center sm:p-12">
            <p className="inline-flex rounded-full bg-brand-600/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
              {foundingFive.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white">
              {foundingFive.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-400">
              {foundingFive.lede}
            </p>
            <ul className="mx-auto mt-8 max-w-xl space-y-3 text-left">
              {foundingFive.perks.map(perk => (
                <li key={perk} className="flex gap-3 text-sm text-zinc-300">
                  <span aria-hidden className="text-brand-300">✓</span>
                  {perk}
                </li>
              ))}
            </ul>
            <Button href={foundingFive.cta.href} className="mt-8">
              {foundingFive.cta.label}
            </Button>
            <p className="mt-4 text-xs text-zinc-500">{foundingFive.note}</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading {...sectionHeadings.faq} />
        </Reveal>
        <Reveal className="mt-10">
          <FaqAccordion items={faqs} />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface-raised px-6 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -bottom-24 mx-auto h-48 max-w-lg rounded-full bg-brand-600/30 blur-3xl"
            />
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">{finalCta.body}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</Button>
              <Button href={finalCta.secondaryCta.href} variant="secondary">
                {finalCta.secondaryCta.label}
              </Button>
            </div>
            <p className="mt-6 text-sm text-zinc-500">{finalCta.contactLine}</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
