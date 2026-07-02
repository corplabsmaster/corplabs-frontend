import React from "react";

import {
  findTier,
  ngoProgramme,
  Recommendation,
  sectionCopy,
  Tier,
} from "../../data/corpsite";

interface Props {
  recommendation: Recommendation;
  onReset: () => void;
}

const PlanSelectorResult: React.FC<Props> = ({ recommendation, onReset }) => {
  // NGO branch: route to the Corpsite for Good section.
  if (recommendation.ngoBranch) {
    return (
      <div role="status" aria-live="polite" className="text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#AEE0FC]/40 bg-[#AEE0FC]/10">
          <span aria-hidden="true">{ngoProgramme.emoji}</span>
          {ngoProgramme.badge}
        </span>
        <h3 className="text-xl lg:text-2xl font-interbold text-white-100 mb-3 leading-snug">
          You qualify for{" "}
          <span className="text-transparent bg-gradient-to-r from-[#AEE0FC] via-[#BFD8FA] to-[#E4D9FB] bg-clip-text">
            Corpsite for Good
          </span>
        </h3>
        <p className="text-base font-worksanslight text-gray-200 mb-6 max-w-xl mx-auto leading-relaxed">
          We award up to two free websites a year to registered NGOs in MY and
          SEA. Read the eligibility, T&Cs, and how to apply in the Corpsite for
          Good section below.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
          <a
            href="#for-good"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
            // TODO: track event — plan selector NGO branch CTA
          >
            See Corpsite for Good
          </a>
          <a
            href={ngoProgramme.cta.href}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white-100/30 text-white-100 font-intersemibold text-base hover:border-[#424DE2] hover:text-[#AEE0FC] transition-colors"
          >
            {ngoProgramme.cta.label}
          </a>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-intersemibold text-gray-200 hover:text-[#AEE0FC] underline underline-offset-4 transition-colors"
        >
          Start over
        </button>
      </div>
    );
  }

  const recommended = findTier(recommendation.recommended);
  const budgetFit = recommendation.budgetFit
    ? findTier(recommendation.budgetFit)
    : null;

  return (
    <div role="status" aria-live="polite" className="text-center">
      <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
        Recommended plan
      </span>
      <h3 className="text-xl lg:text-2xl font-interbold text-white-100 mb-2 leading-snug">
        Based on your answers,{" "}
        <span className="text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text">
          {recommended.name}
        </span>{" "}
        is your starting point.
      </h3>

      <p className="text-base font-worksanslight text-gray-200 mb-6 max-w-xl mx-auto leading-relaxed">
        {recommended.description}
      </p>

      <ResultTierCard tier={recommended} variant="recommended" />

      {budgetFit && (
        <>
          <p className="text-sm font-worksanslight text-gray-200/70 my-6 max-w-xl mx-auto">
            Tighter budget? Here&apos;s a budget-fit alternative — and what
            changes between the two:
          </p>
          <ResultTierCard
            tier={budgetFit}
            variant="budget"
            diffNote={recommendation.diffNote}
          />
        </>
      )}

      {recommendation.addCorpi && (
        <div className="mt-6 max-w-xl mx-auto rounded-xl border border-[#AEE0FC]/40 bg-[#AEE0FC]/5 p-5 text-left">
          <p className="text-xs font-intersemibold tracking-widest uppercase text-[#AEE0FC] mb-1">
            + Suggested add-on
          </p>
          <p className="text-base font-intersemibold text-white-100 mb-1">
            Corpi WhatsApp AI agent
          </p>
          <p className="text-sm font-worksanslight text-gray-200/80 leading-relaxed">
            You picked WhatsApp / sales automation. Pair Corpi with{" "}
            {recommended.name} — RM 4,500 setup, RM 1,800–3,500/month depending
            on volume.
          </p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8 mb-5">
        <a
          href={recommended.ctaHref}
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
          // TODO: track event — plan selector primary CTA click
        >
          Book a discovery call
        </a>
        <a
          href="/contact?intent=corpsite"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white-100/30 text-white-100 font-intersemibold text-base hover:border-[#424DE2] hover:text-[#AEE0FC] transition-colors"
        >
          Talk to us anyway
        </a>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="text-sm font-intersemibold text-gray-200 hover:text-[#AEE0FC] underline underline-offset-4 transition-colors"
      >
        Start over
      </button>
    </div>
  );
};

interface CardProps {
  tier: Tier;
  variant: "recommended" | "budget";
  diffNote?: string | null;
}

const ResultTierCard: React.FC<CardProps> = ({ tier, variant, diffNote }) => {
  const isRecommended = variant === "recommended";
  return (
    <div
      className={`max-w-xl mx-auto rounded-xl p-6 text-left border ${
        isRecommended
          ? "border-[#424DE2] bg-[#424DE2]/10 ring-2 ring-[#424DE2]"
          : "border-white-100/15 bg-black-900"
      }`}
    >
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <span className="inline-flex items-center gap-2 text-base font-intersemibold text-white-100">
          <span aria-hidden="true">{tier.emoji}</span>
          {tier.name}
        </span>
        <span
          className={`text-[10px] font-intersemibold tracking-widest uppercase ${
            isRecommended ? "text-[#AEE0FC]" : "text-gray-200/70"
          }`}
        >
          {isRecommended ? "Recommended" : "Budget-fit alternative"}
        </span>
      </div>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
        <span className="text-2xl lg:text-3xl font-interbold text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text">
          {tier.oneTime}
        </span>
        <span className="text-xs font-intersemibold tracking-widest uppercase text-gray-200/70">
          one-time
        </span>
        <span className="text-base font-intersemibold text-white-100">
          + {tier.monthly}
        </span>
        <span className="text-xs font-intersemibold tracking-widest uppercase text-gray-200/70">
          / month
        </span>
      </div>
      <p className="text-sm font-worksanslight text-gray-200 leading-relaxed mb-1">
        {tier.bestFor}
      </p>
      {diffNote && (
        <p className="text-sm font-worksanslight text-[#AEE0FC]/90 leading-relaxed mt-3 pt-3 border-t border-white-100/10">
          <span className="text-xs font-intersemibold tracking-widest uppercase text-[#AEE0FC] mr-2">
            Trade-off:
          </span>
          {diffNote}
        </p>
      )}
    </div>
  );
};

export { sectionCopy };
export default PlanSelectorResult;
