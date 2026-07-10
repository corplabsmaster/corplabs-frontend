import Link from "next/link";
import PlanetIllustration from "@/components/home/PlanetIllustration";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { hero } from "@/data/home";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-16 sm:px-6 md:grid-cols-2 md:pb-24 md:pt-20"
    >
      <Reveal>
        <p className="mb-4 font-medium text-xs uppercase tracking-[0.08em] text-brand-300">
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
          className="inline-flex items-center gap-2.5 rounded-full border border-brand-500/60 bg-brand-500/10 px-4 py-2 text-sm text-white transition-colors hover:bg-brand-500/20"
        >
          <span className="rounded-full bg-brand-500 px-2 py-0.5 font-display text-[10px] font-semibold tracking-[0.08em]">
            {hero.corpiRibbon.pill}
          </span>
          <span className="text-zinc-300">{hero.corpiRibbon.text}</span>
          <span className="font-display font-semibold">{hero.corpiRibbon.cta}</span>
        </Link>
      </Reveal>
      <div className="flex min-w-0 justify-center [animation:float_4s_ease-in-out_infinite]">
        <PlanetIllustration />
      </div>
    </section>
  );
}
