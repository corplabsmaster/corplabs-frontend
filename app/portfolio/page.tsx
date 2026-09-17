import type { Metadata } from "next";
import { Suspense } from "react";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CtaBand } from "@/components/ui/cta-band";
import { Reveal } from "@/components/ui/reveal";
import { portfolioHero } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Our Work — Corplabs Portfolio",
  description:
    "Real sites Corplabs has designed and built, across every pillar — click through from the case study to the live site.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-96 max-w-3xl rounded-full bg-brand-600/25 blur-3xl"
        />
        <Reveal className="mx-auto max-w-6xl px-4 pb-12 pt-20 sm:px-6 sm:pt-24">
          <p className="font-display text-xs font-semibold uppercase tracking-widest text-brand-300">
            {portfolioHero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            {portfolioHero.headlineLead}{" "}
            <span className="gradient-text">{portfolioHero.headlineGradient}</span>
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-zinc-200">{portfolioHero.lede}</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        {/* useSearchParams (for the ?pillar= deep link) needs a Suspense
            boundary so this page keeps statically rendering. */}
        <Suspense fallback={<div className="h-10" />}>
          <PortfolioGrid />
        </Suspense>
      </section>

      <CtaBand
        title="Want something like this?"
        lede="Every project here started as a free, no-obligation demo. Tell us about your business and we'll build one around it."
        primary={{ label: "Get a free demo", href: "/contact" }}
        secondary={{ label: "See Corpsite pricing", href: "/corpsite" }}
      />
    </>
  );
}
