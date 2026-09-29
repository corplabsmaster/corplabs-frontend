/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { changelog, changelogHero } from "@/data/changelog";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/changelog",
  title: "Changelog — How corplabs.co Has Evolved",
  description:
    "How corplabs.co evolved — every major release of the site, with a browsable archive of the original Gatsby-era homepage.",
});

export default function ChangelogPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.08em] text-brand-300">
            {changelogHero.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {changelogHero.title.plain}
            <span className="gradient-text">{changelogHero.title.gradient}</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-zinc-200">{changelogHero.lede}</p>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6">
        <div className="relative pl-8 sm:pl-10">
          <div
            aria-hidden
            className="absolute bottom-2 left-[5px] top-2 w-px bg-[linear-gradient(180deg,var(--color-gradient-1),var(--color-gradient-2))] opacity-40 sm:left-[7px]"
          />
          <div className="flex flex-col gap-14">
            {changelog.map((entry, i) => (
              <Reveal key={entry.version} delay={i * 0.06}>
                <article className="relative">
                  <span
                    aria-hidden
                    className="absolute left-[-31px] top-1.5 h-3 w-3 rounded-full border-2 border-gradient-1 bg-surface sm:left-[-39px]"
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-brand-600 bg-brand-950/60 px-3 py-0.5 font-mono text-xs text-brand-200">
                      {entry.version}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">{entry.date}</span>
                    {entry.current && (
                      <span className="rounded-full bg-[linear-gradient(90deg,var(--color-gradient-1),var(--color-gradient-2))] px-2.5 py-0.5 font-display text-[10px] font-semibold uppercase tracking-wide text-surface">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-start">
                    <div>
                      <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {entry.title}
                      </h2>
                      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-zinc-200">
                        {entry.summary}
                      </p>
                      <ul className="mt-5 flex flex-col gap-2.5">
                        {entry.changes.map(change => (
                          <li
                            key={change}
                            className="flex items-start gap-3 text-[13.5px] leading-normal text-zinc-300"
                          >
                            <span
                              aria-hidden
                              className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[linear-gradient(90deg,var(--color-gradient-1),var(--color-gradient-2))]"
                            />
                            {change}
                          </li>
                        ))}
                      </ul>
                      {entry.link &&
                        (entry.link.external ? (
                          <Button
                            href={entry.link.href}
                            target="_blank"
                            rel="noreferrer"
                            variant="secondary"
                            size="sm"
                            className="mt-6"
                          >
                            {entry.link.label}
                          </Button>
                        ) : (
                          <Link
                            href={entry.link.href}
                            className="mt-6 inline-block font-display text-[13px] font-medium text-brand-300 transition-colors hover:text-white"
                          >
                            {entry.link.label}
                          </Link>
                        ))}
                    </div>

                    {entry.image && (
                      <div className="overflow-hidden rounded-xl border border-line bg-surface-raised">
                        <img
                          src={entry.image}
                          alt={entry.imageAlt ?? ""}
                          loading="lazy"
                          className="block w-full"
                        />
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
