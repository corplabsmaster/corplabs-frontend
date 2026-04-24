import React from "react";

import { tiers } from "../../data/corprise-tiers";
import PricingCard from "./PricingCard";

const PricingTiers: React.FC = () => {
  return (
    <section
      id="pricing"
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corprise-pricing-heading"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            Pricing
          </span>
          <h2
            id="corprise-pricing-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
          >
            Five tiers. One monthly invoice.
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed">
            Every tier includes managed Odoo hosting, MyInvois, training, and monthly refinement hours. Not sure which fits? Use the scorecard below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 items-stretch">
          {tiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        <p className="text-xs font-worksanslight text-gray-200/70 text-center mt-8 max-w-3xl mx-auto">
          All prices in Malaysian Ringgit (RM), excluding 8% SST. 3-month minimum commitment, then month-to-month. Claude API usage above tier limits billed at cost + 15% margin.
        </p>
      </div>
    </section>
  );
};

export default PricingTiers;
