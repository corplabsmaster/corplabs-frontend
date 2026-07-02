import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { CtaBand } from "@/components/ui/cta-band";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutIntro, milestone, missionVision, values, valuesIntro } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Corplabs is a dynamic technology company founded by a team of highly motivated and experienced technological enthusiasts, dedicated to transforming the technology industry through innovation and cutting-edge solutions.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-96 max-w-3xl rounded-full bg-brand-600/25 blur-3xl"
        />
        <Reveal className="mx-auto max-w-4xl px-4 pt-24 text-center sm:px-6 sm:pt-28">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {aboutIntro.title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            {aboutIntro.lede}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {missionVision.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08} className="h-full">
              <Card className="h-full p-10">
                <h2 className="font-display text-xl font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-3 leading-relaxed text-zinc-400">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal>
          <SectionHeading title={valuesIntro.title} lede={valuesIntro.body} />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.id} delay={i * 0.06} className="h-full">
              <Card className="h-full">
                <h3 className="font-display text-lg font-semibold text-brand-300">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {value.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <Reveal>
          <SectionHeading title={milestone.title} lede={milestone.body} />
        </Reveal>
      </section>

      <Reveal>
        <CtaBand
          title="Want to build with us?"
          lede="Tell us about your idea — we'll bring the team that ships it."
          primary={{ label: "Talk to us", href: "/contact" }}
          secondary={{ label: "See our solutions", href: "/solutions" }}
        />
      </Reveal>
    </>
  );
}
