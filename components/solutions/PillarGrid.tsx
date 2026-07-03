import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  solutionPillarCards,
  solutionsPillarsHeading,
  type SolutionPillarCard,
} from "@/data/solutions";

function PillarIcon({ id }: { id: SolutionPillarCard["id"] }) {
  const stroke = "var(--color-brand-300)";
  switch (id) {
    case "corpi":
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
          <path
            d="M8 12C8 9.79 9.79 8 12 8H44C46.21 8 48 9.79 48 12V34C48 36.21 46.21 38 44 38H22L14 46V38H12C9.79 38 8 36.21 8 34V12Z"
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M38 14L39.5 17.5L43 19L39.5 20.5L38 24L36.5 20.5L33 19L36.5 17.5L38 14Z"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="25" r="1.5" fill={stroke} />
          <circle cx="28" cy="25" r="1.5" fill={stroke} />
        </svg>
      );
    case "corpcode":
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
          <path d="M20 18L10 28L20 38" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36 18L46 28L36 38" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 14L24 42" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case "corprise":
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
          <path d="M10 46V20L28 10L46 20V46" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M8 46H48" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          <rect x="22" y="28" width="12" height="18" stroke={stroke} strokeWidth="2" />
          <path d="M16 26V32M16 36V42M40 26V32M40 36V42" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "corpsite":
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
          <rect x="8" y="12" width="40" height="32" rx="3" stroke={stroke} strokeWidth="2.5" />
          <path d="M8 20H48" stroke={stroke} strokeWidth="2.5" />
          <circle cx="13" cy="16" r="1.2" fill={stroke} />
          <circle cx="17" cy="16" r="1.2" fill={stroke} />
          <circle cx="21" cy="16" r="1.2" fill={stroke} />
          <path d="M14 28H30M14 33H38M14 38H26" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}

export default function PillarGrid() {
  return (
    <section id="pillars" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow={solutionsPillarsHeading.eyebrow}
          title={solutionsPillarsHeading.title}
          lede={solutionsPillarsHeading.lede}
        />
      </Reveal>
      <div className="mt-12 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {solutionPillarCards.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08} className="h-full">
            <Link
              href={p.href}
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface-raised p-8 transition-colors hover:border-brand-500"
            >
              <div className="mb-4">
                <PillarIcon id={p.id} />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
              <p className="mt-1 text-sm font-medium text-brand-300">{p.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {p.description}
              </p>
              {p.startsFrom && (
                <p className="mt-5 text-xs font-medium uppercase tracking-widest text-zinc-500">
                  {p.startsFrom}
                </p>
              )}
              <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-300 transition-colors group-hover:text-white">
                {p.ctaLabel} <span aria-hidden>→</span>
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
