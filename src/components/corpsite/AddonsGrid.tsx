import React from "react";

import { addons, sectionCopy } from "../../data/corpsite";

const AddonsGrid: React.FC = () => {
  return (
    <section
      id="addons"
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corpsite-addons-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            {sectionCopy.addons.eyebrow}
          </span>
          <h2
            id="corpsite-addons-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4 fade-in"
          >
            {sectionCopy.addons.heading}
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed fade-in">
            {sectionCopy.addons.intro}
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {addons.map((addon) => (
            <li
              key={addon.id}
              className="flex flex-col p-6 rounded-xl border border-white-100/10 bg-black-900 fade-in"
            >
              <h3 className="text-base lg:text-lg font-intersemibold text-white-100 mb-2 leading-snug">
                {addon.name}
              </h3>
              <p className="text-sm font-worksanslight text-gray-200/80 mb-4 leading-relaxed flex-1">
                {addon.description}
              </p>
              <dl className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-white-100/5">
                <div>
                  <dt className="text-[10px] font-intersemibold tracking-widest uppercase text-gray-200/60 mb-0.5">
                    Setup
                  </dt>
                  <dd className="text-sm font-intersemibold text-white-100">
                    {addon.setup}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-intersemibold tracking-widest uppercase text-gray-200/60 mb-0.5">
                    Monthly
                  </dt>
                  <dd className="text-sm font-intersemibold text-white-100">
                    {addon.monthly}
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>

        <p className="text-xs font-worksanslight text-gray-200/60 text-center mt-8 max-w-3xl mx-auto">
          All prices in Malaysian Ringgit (RM), excluding 6% SST. Final figures
          confirmed at discovery.
        </p>
      </div>
    </section>
  );
};

export default AddonsGrid;
