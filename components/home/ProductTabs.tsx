"use client";

import Link from "next/link";
import { useState } from "react";
import { ChatDemo } from "@/components/corpi/ChatDemo";
import { Price } from "@/components/currency/price";
import { Button } from "@/components/ui/button";
import { corpiChat } from "@/data/corpi";
import {
  homePillars,
  miniFinders,
  productsHeading,
  type PillarKind,
} from "@/data/home";
import { cn } from "@/lib/utils";

/* ── Mini finder (3-question teaser) ───────────────────────────────────── */

function MiniFinder({ kind }: { kind: Exclude<PillarKind, "corpi"> }) {
  const finder = miniFinders[kind];
  const [answers, setAnswers] = useState<number[]>(() =>
    kind === "rise" ? [1, 1, 0] : [0, 0, 0]
  );
  const rec = finder.recommend(answers);

  return (
    <div className="gradient-border rounded-2xl p-6 sm:p-8">
      <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.08em] text-brand-300">
        {finder.title}
      </p>
      <div className="flex flex-col gap-4">
        {finder.questions.map((q, qi) => (
          <div key={q.prompt}>
            <p className="mb-2 font-display text-[13px] font-medium text-zinc-300">{q.prompt}</p>
            <div className="flex flex-wrap gap-2">
              {q.options.map((label, oi) => {
                const active = answers[qi] === oi;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() =>
                      setAnswers((a) => a.map((v, i) => (i === qi ? oi : v)))
                    }
                    className={cn(
                      "rounded-full border px-3.5 py-2 font-display text-[12.5px] transition-colors",
                      active
                        ? "border-brand-500 bg-brand-500 font-medium text-on-brand"
                        : "border-line bg-surface font-light text-zinc-200 hover:border-brand-500/60"
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-xl border border-line bg-surface p-5">
        <div className="mb-1 flex items-center justify-between">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
            Our Recommendation
          </span>
          {rec.popular && (
            <span className="rounded-full bg-[linear-gradient(90deg,var(--color-gradient-1),var(--color-gradient-2))] px-2.5 py-0.5 font-display text-[10px] font-semibold uppercase tracking-wide text-surface">
              Most Popular
            </span>
          )}
        </div>
        <p className="font-display text-2xl font-bold text-white">{rec.name}</p>
        <p className="mb-2.5 mt-0.5 font-display text-lg font-semibold text-brand-300">
          <Price rm={rec.price} />
        </p>
        <p className="mb-4 text-[13px] leading-normal text-zinc-200">{rec.detail}</p>
        <div className="flex flex-wrap items-center gap-4">
          <Button href="#contact" size="sm" className="font-display uppercase tracking-[0.08em]">
            {rec.cta}
          </Button>
          <Link
            href={finder.fullWizard.href}
            className="text-[13px] text-brand-300 underline underline-offset-4 transition-colors hover:text-white"
          >
            {finder.fullWizard.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Tabbed showcase ───────────────────────────────────────────────────── */

export default function ProductTabs() {
  const [tab, setTab] = useState(0);
  const pillar = homePillars[tab];

  return (
    <section id="products" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-24 sm:px-6">
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {productsHeading.title}
        </h2>
        <Link
          href={productsHeading.hintHref}
          className="font-display text-xs font-semibold uppercase tracking-[0.08em] text-brand-300 transition-colors hover:text-brand-200"
        >
          {productsHeading.hint}
        </Link>
      </div>

      <div className="flex gap-2 overflow-x-auto border-b border-line" role="tablist">
        {homePillars.map((p, i) => (
          <button
            key={p.name}
            role="tab"
            aria-selected={i === tab}
            onClick={() => setTab(i)}
            className={cn(
              "-mb-px flex shrink-0 items-center gap-2.5 border-b-2 px-4 py-4 font-display text-[15px] transition-colors sm:px-5",
              i === tab
                ? "border-brand-400 font-semibold text-white"
                : "border-transparent font-light text-zinc-400 hover:text-zinc-200"
            )}
          >
            <span className="font-mono text-[11px] tracking-wide opacity-60">{p.index}</span>
            <span>{p.name}</span>
            {p.isNew && (
              <span className="rounded-full bg-[#424DE2] px-2 py-0.5 font-display text-[10px] font-semibold text-on-brand">
                New
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="grid items-start gap-10 pt-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div>
          <h3 className="mb-1.5 font-display text-2xl font-bold text-white sm:text-3xl">
            {pillar.title}
          </h3>
          <p className="mb-4 font-mono text-[12.5px] text-brand-300"><Price rm={pillar.price} /></p>
          <p className="mb-6 max-w-md text-[15px] leading-relaxed text-zinc-200">
            {pillar.blurb}
          </p>
          <ul className="mb-7 flex flex-col gap-3">
            {pillar.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-zinc-300">
                <span
                  aria-hidden
                  className="h-2 w-2 flex-none rounded-full bg-[linear-gradient(90deg,var(--color-gradient-1),var(--color-gradient-2))]"
                />
                {f}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-5">
            <Button href="#contact" className="font-display uppercase tracking-[0.08em]">
              {pillar.cta.label}
            </Button>
            <Link
              href={pillar.pageHref}
              className="font-display text-[13px] font-medium text-brand-300 transition-colors hover:text-white"
            >
              Full details →
            </Link>
          </div>
        </div>

        <div className="min-h-[420px]">
          {pillar.kind === "corpi" ? (
            <ChatDemo key={tab} chat={corpiChat} className="max-w-sm" location="home_tabs" />
          ) : (
            <MiniFinder key={pillar.kind} kind={pillar.kind} />
          )}
        </div>
      </div>
    </section>
  );
}
