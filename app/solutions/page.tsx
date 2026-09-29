import Link from "next/link";
import { Price } from "@/components/currency/price";
import ProblemRouter from "@/components/solutions/ProblemRouter";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import {
  oneTeam,
  pillarLedger,
  pillarLedgerFinePrint,
  pillarLedgerHead,
  pillarLedgerHeading,
  pillarLedgerScrollHint,
  priceFloors,
  priceFloorsPanel,
  solutionsCta,
  solutionsHero,
} from "@/data/solutions";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/solutions",
  title: "Solutions — The Corplabs Lineup",
  description:
    "Compare Corplabs’ four offerings — AI WhatsApp agents, custom software, subscription Odoo ERP and websites — and find the one that fits your business.",
});

/** Shared column template for the Side-by-Side ledger header and rows. */
const ledgerCols =
  "grid grid-cols-[200px_minmax(0,1.3fr)_190px_150px_minmax(0,1fr)] gap-6";

export default function SolutionsPage() {
  return (
    <>
      {/* 1 — Hero split: message + public price floors */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-96 max-w-3xl rounded-full bg-brand-600/25 blur-3xl"
        />
        <Reveal className="mx-auto max-w-6xl px-4 pb-12 pt-20 sm:px-6 sm:pt-24">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-end">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-brand-300">
                {solutionsHero.eyebrow}
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                {solutionsHero.titleLead}{" "}
                <span className="gradient-text">{solutionsHero.titleGradient}</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-200">
                {solutionsHero.lede}
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              <div className="flex items-baseline justify-between border-b border-line pb-3">
                <span className="font-display text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                  {priceFloorsPanel.title}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">
                  {priceFloorsPanel.note}
                </span>
              </div>
              {priceFloors.map(f => (
                <div key={f.id} className="flex items-baseline justify-between gap-4">
                  <Link
                    href={f.href}
                    className="font-display text-sm font-medium text-white transition-colors hover:text-brand-300"
                  >
                    {f.name}
                  </Link>
                  <span className="font-mono text-[13px] text-brand-300"><Price rm={f.floor} /></span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2 — Interactive problem router */}
      <section id="router" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-20 sm:px-6">
        <Reveal>
          <ProblemRouter />
        </Reveal>
      </section>

      {/* 3 — Side-by-side ledger */}
      <section id="pillars" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-8 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {pillarLedgerHeading.title}
            </h2>
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-300">
              {pillarLedgerHeading.note}
            </span>
          </div>
          <p className="mt-4 text-xs text-zinc-500 md:hidden">{pillarLedgerScrollHint}</p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-line">
            <div className="min-w-[900px]">
              <div
                className={`${ledgerCols} border-b border-line bg-surface-raised px-7 py-4`}
              >
                {pillarLedgerHead.map(head => (
                  <span
                    key={head}
                    className="font-display text-[11px] font-semibold uppercase tracking-widest text-zinc-500"
                  >
                    {head}
                  </span>
                ))}
              </div>
              {pillarLedger.map(row => (
                <Link
                  key={row.id}
                  href={row.href}
                  className={`${ledgerCols} items-start border-b border-white/[0.07] px-7 py-6 transition-colors last:border-b-0 hover:bg-surface-raised`}
                >
                  <div>
                    <div className="font-display text-lg font-semibold text-white">
                      {row.name}
                    </div>
                    <div className="mt-0.5 text-[12.5px] text-brand-300">{row.tagline}</div>
                  </div>
                  <p className="text-[13.5px] leading-normal text-zinc-200">{row.what}</p>
                  <span className="whitespace-pre-line font-mono text-[13px] leading-relaxed text-white">
                    <Price rm={row.floor} />
                  </span>
                  <span className="font-mono text-[13px] text-zinc-200">{row.time}</span>
                  <div className="flex flex-col items-start gap-2.5">
                    <p className="text-[13.5px] leading-normal text-zinc-200">{row.bestWhen}</p>
                    <span className="font-display text-xs font-medium text-brand-300">
                      {row.cta} <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-3.5 text-xs text-zinc-500">{pillarLedgerFinePrint}</p>
        </Reveal>
      </section>

      {/* 4 — One team, no handoffs */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
            {oneTeam.map(item => (
              <div key={item.n} className="bg-surface p-8">
                <p className="font-mono text-xs text-gradient-1">{item.n}</p>
                <h3 className="mt-3.5 font-display text-lg font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-200">{item.blurb}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 5 — Closing CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-8 rounded-2xl border border-line bg-surface-raised p-8 sm:p-12 md:flex-row md:items-center md:justify-between md:gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {solutionsCta.title}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-200">
                {solutionsCta.lede}
              </p>
            </div>
            <div className="flex flex-none flex-col gap-3">
              <Button href={solutionsCta.primaryCta.href}>
                {solutionsCta.primaryCta.label}
              </Button>
              <Button href={solutionsCta.secondaryCta.href} variant="secondary">
                {solutionsCta.secondaryCta.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
