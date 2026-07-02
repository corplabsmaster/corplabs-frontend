import Link from "next/link";
import { pillars, site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-96 max-w-3xl rounded-full bg-brand-600/25 blur-3xl"
        />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-24 text-center sm:px-6 sm:pt-32">
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
            <Link
              href="/solutions"
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            >
              Explore the lineup
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-brand-500 hover:text-white"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <h2 className="sr-only">The Corplabs lineup</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map(pillar => (
            <Link
              key={pillar.id}
              href={pillar.href}
              className="group rounded-2xl border border-line bg-surface-raised p-6 transition-colors hover:border-brand-500"
            >
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
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
