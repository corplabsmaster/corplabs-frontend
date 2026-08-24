import type { Metadata } from "next";
import TierFinder from "@/components/corpcode/TierFinder";
import { PillarStrip } from "@/components/pillar-strip";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import {
  faqHeading,
  faqs,
  finalCta,
  hero,
  pillars,
  processHeading,
  processSteps,
  specSheet,
  specSheetLabel,
  techStack,
  tierDisclaimer,
  tiers,
  tiersHeading,
} from "@/data/corpcode-content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Corpcode — Custom Software Builds",
  description:
    "From internal tools to full ERPs — Corpcode designs, builds, and maintains the systems off-the-shelf software can't touch. Paid discovery, fixed milestones, senior craft.",
  alternates: { canonical: "/corpcode" },
};

const GRADIENT_PILL =
  "bg-[linear-gradient(90deg,var(--color-gradient-1),var(--color-gradient-2))]";

export default function CorpcodePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="border-b border-line">
        <Reveal className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-end lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-brand-300">
              {hero.eyebrow}
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-200">
              {hero.lede}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href={hero.primaryCta.href}
                className="font-display uppercase tracking-[0.08em]"
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="secondary"
                className="font-display uppercase tracking-[0.08em]"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Spec sheet */}
          <div className="rounded-xl border border-line bg-surface-raised p-6 sm:p-7">
            <p className="mb-4 font-mono text-[11px] tracking-wide text-zinc-500">
              {specSheetLabel}
            </p>
            <dl>
              {specSheet.map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline justify-between gap-5 border-b border-white/10 py-2.5"
                >
                  <dt className="text-[13px] text-zinc-200">{row.k}</dt>
                  <dd className="text-right font-mono text-[12.5px] text-white">
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </section>

      {/* ── Tiers ────────────────────────────────────────────────────── */}
      <section id="tiers" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {tiersHeading.title}
            </h2>
            <p className="mt-2 text-base text-zinc-200">{tiersHeading.lede}</p>
          </div>
          <span className="font-mono text-xs text-zinc-500">{tiersHeading.note}</span>
        </Reveal>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 0.08} className="h-full">
              <div
                className={cn(
                  "flex h-full flex-col rounded-xl bg-surface-raised p-7",
                  tier.popular
                    ? "border-2 border-brand-500 shadow-[0_0_50px_-12px_rgba(86,5,255,0.55)]"
                    : "border border-line",
                )}
              >
                <div className="mb-5 flex items-center justify-between gap-2">
                  <span className="font-mono text-[11.5px] text-zinc-500">
                    {tier.n}
                  </span>
                  {tier.popular && (
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 font-display text-[10px] font-semibold uppercase tracking-wide text-surface",
                        GRADIENT_PILL,
                      )}
                    >
                      Most Common
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {tier.name}
                </h3>
                <p className="mt-1 font-mono text-sm text-brand-300">
                  {tier.startsFrom}
                </p>
                <p className="mt-1.5 font-mono text-xs text-zinc-500">
                  {tier.duration}
                </p>
                <p className="mt-4 text-[13.5px] leading-relaxed text-zinc-300">
                  {tier.bestFor}
                </p>
                <div className="mt-auto flex flex-col gap-2 pt-4">
                  {tier.examples.map((example) => (
                    <div
                      key={example}
                      className="flex items-center gap-2.5 text-[13px] text-zinc-200"
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "h-[5px] w-[5px] flex-none rounded-full",
                          GRADIENT_PILL,
                        )}
                      />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-4 text-xs text-zinc-500">{tierDisclaimer}</p>
      </section>

      {/* ── Finder ───────────────────────────────────────────────────── */}
      <section id="finder" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal>
          <TierFinder />
        </Reveal>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section id="process" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {processHeading}
          </h2>
        </Reveal>
        <Reveal className="mt-10 divide-y divide-line overflow-hidden rounded-xl border border-line">
          {processSteps.map((step) => (
            <div
              key={step.n}
              className="grid gap-x-8 gap-y-3 bg-surface p-7 sm:p-9 md:grid-cols-[88px_minmax(0,220px)_minmax(0,1fr)] md:items-start"
            >
              <div className="font-display text-4xl font-bold leading-none text-white/10 sm:text-5xl">
                {step.n}
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-1.5 font-mono text-xs text-brand-300">
                  {step.duration}
                </p>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-zinc-200">
                {step.desc}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ── Stack ────────────────────────────────────────────────────── */}
      <section id="stack" className="mt-20 bg-surface-raised">
        <Reveal className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {techStack.heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-200">
              {techStack.intro}
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-zinc-500">
              {techStack.outro}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {techStack.groups.map((group) => (
              <div key={group.id}>
                <div className="mb-3 border-b border-line pb-2.5 font-display text-[13px] font-semibold text-white">
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[11.5px] text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section id="faq" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {faqHeading}
            </h2>
          </Reveal>
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-8 rounded-2xl border border-line bg-surface-raised p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {finalCta.headline}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-200">
                {finalCta.body}
              </p>
            </div>
            <Button
              href={finalCta.cta.href}
              className="shrink-0 self-start font-display uppercase tracking-[0.08em] md:self-auto"
            >
              {finalCta.cta.label}
            </Button>
          </div>
        </Reveal>
      </section>

      <PillarStrip items={pillars} />
    </>
  );
}
