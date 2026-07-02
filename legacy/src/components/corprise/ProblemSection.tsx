import React from "react";

import { problems } from "../../data/corprise-content";
import ProblemCard from "./ProblemCard";

const ProblemSection: React.FC = () => {
  return (
    <section
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corprise-problem-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            The Problem
          </span>
          <h2
            id="corprise-problem-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
          >
            ERP shouldn&apos;t cost a year of working capital.
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed">
            Malaysian SMEs need the same ERP enterprises use, without the enterprise invoice. Here&apos;s what today&apos;s options actually cost you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
