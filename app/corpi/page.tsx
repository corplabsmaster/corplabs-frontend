import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  faqs,
  faqsHeading,
  features,
  featuresHeading,
  finalCta,
  hero,
  onboarding,
  pricing,
  problem,
  whatYouGet,
  whatYouGetHeading,
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

      <section className="mx-auto max-w-5xl px-4 pt-12 sm:px-6">
        <Reveal>
          <SectionHeading title={problem.title} />
        </Reveal>
        {problem.paragraphs.map(paragraph => (
          <Reveal key={paragraph.slice(0, 24)}>
            <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-zinc-400">
              {paragraph}
            </p>
          </Reveal>
        ))}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {problem.stats.map((item, i) => (
            <Reveal key={item.stat} delay={i * 0.06} className="h-full">
              <Card className="flex h-full flex-col items-center p-10 text-center">
                <p className="font-display text-4xl font-bold text-brand-300">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm tracking-wide text-zinc-400">{item.label}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading title={featuresHeading} />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.05} className="h-full">
              <Card className="h-full p-8">
                <h3 className="font-display text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading title={whatYouGetHeading} />
        </Reveal>
        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-line">
            {whatYouGet.map((item, i) => (
              <div
                key={item.label}
                className={cn(
                  "flex flex-col px-8 py-5 sm:flex-row sm:items-center",
                  i !== whatYouGet.length - 1 && "border-b border-line",
                  i % 2 === 0 ? "bg-surface-raised" : "bg-surface"
                )}
              >
                <p className="font-medium text-white sm:w-1/3">{item.label}</p>
                <p className="mt-1 text-sm text-zinc-400 sm:mt-0 sm:w-2/3">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading title={onboarding.title} lede={onboarding.lede} />
        </Reveal>
        <ol className="mt-12 space-y-4">
          {onboarding.steps.map((step, i) => (
            <Reveal key={step.day} delay={i * 0.05}>
              <li className="flex gap-5 rounded-2xl border border-line bg-surface-raised p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-brand-300">
                    {step.day}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section id="pricing" className="mx-auto max-w-5xl scroll-mt-24 px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading title={pricing.title} />
        </Reveal>
        <Reveal className="mt-10">
          <div className="rounded-2xl border border-brand-500/50 bg-brand-600/10 p-6 text-center">
            <p className="font-display text-lg font-semibold text-white">
              {pricing.setupFee.title}
            </p>
            <p className="mt-1 text-sm text-zinc-400">{pricing.setupFee.body}</p>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {pricing.plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.06} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-8",
                  plan.recommended
                    ? "border-brand-500 bg-brand-600/10"
                    : "border-line bg-surface-raised"
                )}
              >
                {plan.recommended && (
                  <p className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </p>
                )}
                <p className="font-display text-lg font-semibold text-white">{plan.name}</p>
                <p className="mt-2">
                  <span className="font-display text-3xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-zinc-400">{plan.period}</span>
                </p>
                <p className="mt-3 flex-1 text-sm text-zinc-400">{plan.desc}</p>
                <p className="mt-4 text-xs text-zinc-500">{pricing.includesLine}</p>
                <Button
                  href={pricing.ctaHref}
                  variant={plan.recommended ? "primary" : "secondary"}
                  size="sm"
                  className="mt-6 self-start"
                >
                  {pricing.ctaLabel}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-zinc-500">{pricing.footnote}</p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading title={faqsHeading} />
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
