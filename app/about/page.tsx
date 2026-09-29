import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import {
  aboutHero,
  closingCta,
  culture,
  cultureCards,
  facts,
  flagship,
  flagshipTiles,
  missionVision,
  storyHeading,
  timeline,
  values,
  valuesHeading,
} from "@/data/about";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/about",
  title: "About — A Kuala Lumpur Software Team Since 2015",
  description:
    "A Kuala Lumpur software team since 2015 — four products of our own, client work across Southeast Asia, and the same people from scoping to support.",
});

export default function AboutPage() {
  return (
    <>
      {/* 1 — Hero split */}
      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center lg:gap-20">
          <Reveal>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.08em] text-brand-300">
              {aboutHero.eyebrow}
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-balance text-white sm:text-5xl">
              {aboutHero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-zinc-300">
              {aboutHero.lead}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-200">
              {aboutHero.body}
            </p>
          </Reveal>

          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
            {facts.map((fact, i) => (
              <Reveal key={fact.stat} delay={i * 0.08}>
                <div className="rounded-xl border border-line bg-surface-raised px-6 py-5">
                  <div className="font-display text-[26px] font-bold tracking-tight text-white">
                    {fact.stat}
                  </div>
                  <div className="mt-1 text-[13px] leading-normal text-zinc-200">{fact.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2 — Story timeline */}
      <section id="story" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-24 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {storyHeading}
            </h2>
          </Reveal>

          <div className="relative pl-[34px]">
            <div
              aria-hidden
              className="absolute top-2 bottom-2 left-[5px] w-[1.5px] rounded-full bg-[linear-gradient(180deg,var(--color-gradient-1),var(--color-gradient-2))] opacity-45"
            />
            <div className="flex flex-col gap-10">
              {timeline.map((entry, i) => (
                <Reveal key={entry.year} delay={i * 0.08}>
                  <div className="relative">
                    <span
                      aria-hidden
                      className="absolute top-1.5 left-[-34px] h-[11px] w-[11px] rounded-full border-2 border-gradient-1 bg-surface"
                    />
                    <div className="font-mono text-[12.5px] tracking-[0.04em] text-brand-300">
                      {entry.year}
                    </div>
                    <h3 className="mt-1.5 font-display text-xl font-semibold text-white">
                      {entry.title}
                    </h3>
                    <p className="mt-2 max-w-[720px] text-[14.5px] leading-relaxed text-zinc-200">
                      {entry.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Mission & Vision */}
      <section id="mission" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-24 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {missionVision.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-surface-raised p-8 sm:p-12">
                <div className="font-display text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-300">
                  {item.title}
                </div>
                <p className="mt-4 text-xl leading-relaxed text-pretty text-white">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4 — Values */}
      <section id="values" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-24 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {valuesHeading.title}
            </h2>
            <p className="mt-3.5 text-[14.5px] leading-relaxed text-zinc-200">{valuesHeading.lede}</p>
          </Reveal>

          <div className="flex flex-col">
            {values.map((value, i) => (
              <Reveal key={value.n} delay={i * 0.06}>
                <div className="grid gap-x-7 gap-y-2 border-b border-white/[0.08] py-6 md:grid-cols-[64px_minmax(0,240px)_minmax(0,1fr)] md:items-baseline">
                  <div className="flex items-baseline gap-4 md:contents">
                    <span className="font-mono text-xs text-zinc-500">{value.n}</span>
                    <h3 className="font-display text-xl font-semibold text-white">{value.title}</h3>
                  </div>
                  <p className="text-[14.5px] leading-relaxed text-zinc-200">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Culture band */}
      <section id="culture" className="mt-24 scroll-mt-24 bg-surface-raised py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {culture.title.plain}
                  <span className="gradient-text">{culture.title.gradient}</span>
                </h2>
                <p className="mt-4 max-w-[560px] text-base leading-relaxed text-zinc-200">
                  {culture.body}
                </p>
              </Reveal>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {cultureCards.map((card, i) => (
                  <Reveal key={card.name} delay={i * 0.08} className="h-full">
                    <div className="h-full rounded-xl border border-line bg-surface p-5">
                      <h3 className="font-display text-sm font-semibold text-white">{card.name}</h3>
                      <p className="mt-1.5 text-[13px] leading-normal text-zinc-200">{card.blurb}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal className="flex justify-center">
              <div className="relative w-full max-w-[420px] [animation:float_7s_ease-in-out_infinite]">
                <div
                  aria-hidden
                  className="absolute left-1/2 top-[46%] aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(86,5,255,0.34)_0%,rgba(86,5,255,0.12)_48%,rgba(86,5,255,0)_74%)]"
                />
                <Image
                  src={culture.image}
                  alt=""
                  width={840}
                  height={560}
                  className="relative block h-auto w-full [mask-image:linear-gradient(180deg,#000_0%,#000_78%,rgba(0,0,0,0.4)_92%,transparent_100%)]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6 — HiTerra flagship band */}
      <section id="flagship" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
        <div className="dark-island grid gap-10 rounded-2xl bg-[linear-gradient(180deg,#000B42,#001F52)] p-8 sm:p-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
          <Reveal>
            <span className="inline-block rounded-full bg-hiterra/10 px-3.5 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-hiterra">
              {flagship.badge}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {flagship.title}
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-zinc-200">{flagship.body}</p>
            <a
              href={flagship.cta.href}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-hiterra px-7 py-3.5 font-display text-sm font-medium text-[#000B42] transition-opacity hover:opacity-90"
            >
              {flagship.cta.label}
            </a>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {flagshipTiles.map((tile, i) => (
              <Reveal key={tile.name} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-xl border border-hiterra/20 bg-[#000B42]/50 p-5">
                  <h3 className="font-display text-sm font-medium text-white">{tile.name}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-normal text-zinc-200">{tile.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Closing CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <Reveal>
          <div className="gradient-border flex flex-col items-start justify-between gap-8 rounded-2xl p-8 sm:p-12 lg:flex-row lg:items-center lg:gap-12">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {closingCta.title}
              </h2>
              <p className="mt-3 max-w-[600px] text-base leading-relaxed text-zinc-200">
                {closingCta.body}
              </p>
            </div>
            <div className="flex w-full flex-none flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                href={closingCta.primary.href}
                className="w-full justify-center font-display text-xs uppercase tracking-[0.08em] sm:w-auto"
              >
                {closingCta.primary.label}
              </Button>
              <Button
                href={closingCta.secondary.href}
                variant="secondary"
                className="w-full justify-center font-display text-xs uppercase tracking-[0.08em] sm:w-auto"
              >
                {closingCta.secondary.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
