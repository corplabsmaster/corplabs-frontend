import type { Metadata } from "next";
import PillarGrid from "@/components/solutions/PillarGrid";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/ui/cta-band";
import { Reveal } from "@/components/ui/reveal";
import { solutionsCta, solutionsHero } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Solutions — The Corplabs Lineup",
  description:
    "Corplabs delivers four pillars: Corpi (AI WhatsApp agents), Corpcode (custom software builds), Corprise (subscription-priced ERP), and Corpsite (websites). One team, one playbook.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-96 max-w-3xl rounded-full bg-brand-600/25 blur-3xl"
        />
        <Reveal className="mx-auto max-w-5xl px-4 pt-24 text-center sm:px-6 sm:pt-28">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-300">
            {solutionsHero.eyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {solutionsHero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            {solutionsHero.lede}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={solutionsHero.primaryCta.href}>
              {solutionsHero.primaryCta.label}
            </Button>
            <Button href={solutionsHero.secondaryCta.href} variant="secondary">
              {solutionsHero.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </section>

      <PillarGrid />

      <Reveal>
        <CtaBand
          title={solutionsCta.title}
          lede={solutionsCta.lede}
          primary={solutionsCta.primaryCta}
          secondary={solutionsCta.secondaryCta}
        />
      </Reveal>
    </>
  );
}
