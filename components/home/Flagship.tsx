import { Reveal } from "@/components/ui/reveal";
import { hiterra } from "@/data/home";

/** HiTerra flagship band — the one place green is on-brand. */
export default function Flagship() {
  return (
    <section id="flagship" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-24 sm:px-6">
      <Reveal>
        <div className="grid items-center gap-10 rounded-2xl bg-[linear-gradient(180deg,#000B42,#001F52)] p-8 sm:p-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="mb-4 inline-block rounded-full bg-hiterra/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-hiterra">
              {hiterra.eyebrow}
            </span>
            <h2 className="mb-3.5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {hiterra.title}
            </h2>
            <p className="mb-7 text-base leading-relaxed text-zinc-200">{hiterra.lede}</p>
            <a
              href={hiterra.cta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-hiterra px-7 py-3.5 font-display text-sm font-medium text-[#000B42] transition-opacity hover:opacity-90"
            >
              {hiterra.cta.label}
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {hiterra.tiles.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-hiterra/20 bg-[rgba(0,11,66,0.5)] p-5 transition-colors hover:border-hiterra/45"
              >
                <h4 className="mb-1.5 font-display text-sm font-medium text-white">{t.name}</h4>
                <p className="text-[12.5px] leading-normal text-zinc-200">{t.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
