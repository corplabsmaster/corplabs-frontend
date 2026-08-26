import type { Metadata } from "next";
import { ChatDemo } from "@/components/corpi/ChatDemo";
import { TrialCta } from "@/components/corpi/TrialCta";
import { WhatsAppDemo, WhatsAppDemoButton } from "@/components/corpi/WhatsAppDemo";
import { Price } from "@/components/currency/price";
import { PillarStrip } from "@/components/pillar-strip";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import {
  corpiChat,
  faqHeading,
  faqLede,
  faqs,
  features,
  featuresHeading,
  featuresHint,
  finalCta,
  liveDemo,
  hero,
  onboarding,
  pillars,
  pricing,
} from "@/data/corpi";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Corpi Intelligence — AI WhatsApp Sales Bot",
  description:
    "Corpi Intelligence by Corplabs is a done-for-you AI WhatsApp sales agent. Captures leads 24/7, replies in BM/EN/Chinese, and saves to your CRM automatically.",
  alternates: { canonical: "/corpi" },
};

export default function CorpiPage() {
  return (
    <>
      {/* 1 · Hero split ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-0 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-12 pt-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16 lg:pt-24">
          <Reveal>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-brand-300">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
              {hero.headline.plain}
              <span className="gradient-text">{hero.headline.gradient}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-200">
              {hero.lede}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <TrialCta
                href={hero.primaryCta.href}
                placement="corpi_hero"
                className="font-display uppercase tracking-widest"
              >
                {hero.primaryCta.label}
              </TrialCta>
              <Button
                href={hero.secondaryCta.href}
                variant="secondary"
                className="font-display uppercase tracking-widest"
              >
                {hero.secondaryCta.label}
              </Button>
              <a
                href={hero.microsite.href}
                target="_blank"
                rel="noreferrer"
                className="font-display text-[13px] font-medium text-brand-300 transition-colors hover:text-white"
              >
                {hero.microsite.label} ↗
              </a>
            </div>
            <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-line pt-7 sm:gap-8">
              {hero.stats.map((s) => (
                <div key={s.stat}>
                  <dt className="font-display text-2xl font-bold tracking-tight text-gradient-1 sm:text-3xl">
                    {s.stat}
                  </dt>
                  <dd className="mt-1 max-w-[180px] text-xs leading-snug text-zinc-200">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-3.5">
            <ChatDemo chat={corpiChat} bodyMinHeight="min-h-[430px]" />
            <p className="text-center text-xs text-zinc-500">{hero.chatCaption}</p>

            {/*
              * The replay above is the illustration; this is the demo. Same
              * agent, our own number, and the visitor picks the language.
              */}
            <div className="rounded-2xl border border-line bg-surface-raised p-5">
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-300">
                {liveDemo.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-lg font-semibold tracking-tight text-white">
                {liveDemo.title}
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-200">{liveDemo.body}</p>
              <WhatsAppDemo placement="corpi_hero" className="mt-4" />
              <p className="mt-3 text-[11.5px] leading-snug text-zinc-500">
                {liveDemo.note}{" "}
                <span className="font-mono text-zinc-400">{liveDemo.numberDisplay}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 · What Corpi Does ────────────────────────────────────────── */}
      <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {featuresHeading}
          </h2>
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-300">
            {featuresHint}
          </span>
        </Reveal>
        <Reveal className="mt-8">
          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.n}
                className="bg-surface p-8 transition-colors hover:bg-surface-raised"
              >
                <p className="font-mono text-[11.5px] text-gradient-1">{f.n}</p>
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-200">{f.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 3 · Live in Under Two Weeks ────────────────────────────────── */}
      <section id="onboarding" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {onboarding.title}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-200">
            {onboarding.lede}
          </p>
        </Reveal>
        <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div
            aria-hidden
            className="absolute left-[8%] right-[8%] top-4 hidden h-px bg-[linear-gradient(90deg,var(--color-gradient-1),var(--color-gradient-2))] opacity-45 lg:block"
          />
          {onboarding.steps.map((o, i) => (
            <Reveal key={o.n} delay={i * 0.08} className="relative">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-transparent bg-[linear-gradient(var(--color-surface),var(--color-surface))_padding-box,linear-gradient(135deg,var(--color-gradient-1),var(--color-gradient-2))_border-box] font-mono text-xs text-white">
                {o.n}
              </div>
              <p className="mt-5 font-mono text-[11.5px] tracking-wide text-brand-300">
                {o.day}
              </p>
              <h3 className="mt-1.5 font-display text-base font-semibold text-white">
                {o.title}
              </h3>
              <p className="mt-2 text-[13px] leading-normal text-zinc-200">{o.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4 · Pricing ────────────────────────────────────────────────── */}
      <section id="pricing" className="mt-20 scroll-mt-24 bg-surface-raised">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {pricing.title}
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-zinc-200">{pricing.lede}</p>
            <div className="mt-7 rounded-xl border border-line bg-surface p-6">
              <p className="font-display text-lg font-semibold text-white">
                <Price rm={pricing.setupCard.title} />
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-200">
                {pricing.setupCard.body}
              </p>
            </div>
            <p className="mt-4 text-xs leading-normal text-zinc-500">{pricing.finePrint}</p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3">
            {pricing.plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.08} className="h-full">
                <div
                  className={cn(
                    "flex h-full flex-col rounded-xl bg-surface p-6",
                    plan.recommended
                      ? "border-[1.5px] border-brand-500 shadow-[0_0_50px_-12px_var(--color-brand-500)]"
                      : "border border-line"
                  )}
                >
                  {plan.recommended && (
                    <span className="mb-3 self-start rounded-full bg-[linear-gradient(90deg,var(--color-gradient-1),var(--color-gradient-2))] px-2.5 py-1 font-display text-[10px] font-semibold uppercase tracking-wide text-surface">
                      Most Popular
                    </span>
                  )}
                  <p className="font-display text-lg font-semibold text-white">{plan.name}</p>
                  <p className="mb-3 mt-2.5 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold tracking-tight text-white">
                      <Price rm={plan.price} />
                    </span>
                    <span className="text-[13px] text-zinc-200">{plan.period}</span>
                  </p>
                  <p className="mb-5 flex-1 text-[13.5px] leading-relaxed text-zinc-200">
                    {plan.desc}
                  </p>
                  <Button
                    href={pricing.ctaHref}
                    variant={plan.recommended ? "primary" : "secondary"}
                    size="sm"
                    className="w-full font-display uppercase tracking-widest"
                  >
                    {pricing.ctaLabel}
                  </Button>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.24} className="sm:col-span-3">
              <div className="gradient-border flex flex-col gap-4 rounded-xl p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-base font-semibold text-white">
                    {pricing.trial.lead}
                  </p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-zinc-200">
                    {pricing.trial.body}
                  </p>
                </div>
                <TrialCta
                  href={pricing.trial.cta.href}
                  placement="corpi_pricing"
                  size="sm"
                  className="flex-none font-display uppercase tracking-widest"
                >
                  {pricing.trial.cta.label}
                </TrialCta>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 · FAQ ────────────────────────────────────────────────────── */}
      <section id="faq" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {faqHeading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-200">{faqLede}</p>
          </Reveal>
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* 6 · Closing CTA ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="gradient-border flex flex-col gap-8 rounded-2xl p-8 sm:p-14 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {finalCta.title}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-200">
                {finalCta.body}
              </p>
            </div>
            <div className="flex flex-none flex-wrap gap-3">
              <WhatsAppDemoButton
                starterId={finalCta.primaryCta.starterId}
                label={finalCta.primaryCta.label}
                placement="corpi_final_cta"
                className="uppercase tracking-widest"
              />
              <Button
                href={finalCta.secondaryCta.href}
                variant="secondary"
                className="font-display uppercase tracking-widest"
              >
                {finalCta.secondaryCta.label}
              </Button>
              <p className="w-full text-[13px] text-zinc-500">
                {finalCta.micrositeNote.pre}
                <a
                  href={finalCta.micrositeNote.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-brand-300 underline underline-offset-4 transition-colors hover:text-white"
                >
                  {finalCta.micrositeNote.label}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 7 · Cross-pillar strip ─────────────────────────────────────── */}
      <PillarStrip items={pillars} />
    </>
  );
}
