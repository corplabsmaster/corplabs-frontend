import { Button } from "@/components/ui/button";
import { LinkCard } from "@/components/ui/card";
import { CtaBand } from "@/components/ui/cta-band";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { pillars, site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-96 max-w-3xl rounded-full bg-brand-600/25 blur-3xl"
        />
        <Reveal className="mx-auto max-w-6xl px-4 pb-20 pt-24 text-center sm:px-6 sm:pt-32">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-300">
            {site.tagline}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Bringing your ideas to life, one line of code at a time
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Corplabs designs, builds, and runs software for businesses across
            Malaysia and Singapore — from AI sales agents to full ERPs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button href="/solutions">Explore the lineup</Button>
            <Button href="/contact" variant="secondary">
              Talk to us
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The lineup"
            title="Four products. One team."
            lede="Every pillar is run by the same senior team, on the same playbook — pick one, or combine them."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.id} delay={i * 0.08}>
              <LinkCard href={pillar.href} className="h-full">
                <p className="font-display text-xl font-semibold text-white">
                  {pillar.name}
                </p>
                <p className="mt-1 text-sm font-medium text-brand-300">
                  {pillar.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {pillar.blurb}
                </p>
                <p className="mt-4 text-sm font-medium text-zinc-500 transition-colors group-hover:text-brand-300">
                  Learn more →
                </p>
              </LinkCard>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <CtaBand
          title="Have an idea? Let's make it real."
          lede="Tell us what you're building — we'll tell you the fastest way to ship it."
          primary={{ label: "Talk to us", href: "/contact" }}
          secondary={{ label: "See all solutions", href: "/solutions" }}
        />
      </Reveal>
    </>
  );
}
