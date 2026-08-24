import Link from "next/link";
import HeroOrbit from "@/components/home/HeroOrbit";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { hero } from "@/data/home";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-16 sm:px-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:pb-24 md:pt-20"
    >
      <Reveal>
        <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.08em] text-brand-300">
          {hero.eyebrow}
        </p>
        <h1 className="mb-5 font-display text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-[54px]">
          {hero.headline.plain} <span className="gradient-text">{hero.headline.gradient}</span>
        </h1>
        <p className="mb-8 max-w-md text-base leading-relaxed text-zinc-200">{hero.lede}</p>
        <div className="mb-7 flex flex-wrap items-center gap-4">
          <Button href={hero.primaryCta.href} className="font-display uppercase tracking-[0.08em]">
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
        <Link
          href="/corpi"
          className="flex flex-col items-start gap-2 rounded-2xl border border-brand-500/60 bg-brand-500/10 px-4 py-3 text-sm text-white transition-colors hover:bg-brand-500/20 sm:flex-row sm:items-center sm:gap-2.5 sm:rounded-full sm:py-2"
        >
          <span className="flex items-center gap-2.5">
            <span className="shrink-0 rounded-full bg-brand-500 px-2 py-0.5 font-display text-[10px] font-semibold tracking-[0.08em]">
              {hero.corpiRibbon.pill}
            </span>
            <span className="text-zinc-300">{hero.corpiRibbon.text}</span>
          </span>
          <span className="whitespace-nowrap font-display font-semibold">
            {hero.corpiRibbon.cta}
          </span>
        </Link>
      </Reveal>
      <div className="flex min-w-0 items-center justify-center">
        <HeroOrbit />
      </div>
    </section>
  );
}
