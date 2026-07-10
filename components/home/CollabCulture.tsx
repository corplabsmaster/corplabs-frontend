/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/ui/reveal";
import { collab, culture } from "@/data/home";

export default function CollabCulture() {
  return (
    <section
      id="about-strip"
      className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-2 lg:gap-16"
    >
      <Reveal className="lg:border-r lg:border-white/10 lg:pr-16">
        <h2 className="mb-3.5 font-display text-2xl font-bold text-white sm:text-3xl">
          {collab.title}
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-zinc-200">{collab.lede}</p>
        <div className="flex flex-wrap gap-2.5">
          {collab.badges.map((b) => (
            <span
              key={b.label}
              className="flex items-center gap-2.5 rounded-full border border-line bg-surface-raised py-2.5 pl-3 pr-4"
            >
              <img src={b.icon} alt="" className="h-6 w-6" />
              <span className="font-display text-[13px] font-medium text-white">{b.label}</span>
            </span>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mb-3.5 font-display text-2xl font-bold text-white sm:text-3xl">
          {culture.title.plain}
          <span className="gradient-text">{culture.title.gradient}</span>
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-zinc-200">{culture.lede}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {culture.blocks.map((c) => (
            <div key={c.name} className="rounded-xl border border-line bg-surface-raised p-5">
              <h3 className="mb-1.5 font-display text-sm font-semibold text-white">{c.name}</h3>
              <p className="text-[12.5px] leading-normal text-zinc-200">{c.blurb}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
