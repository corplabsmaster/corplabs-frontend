import React from "react";

const SolutionsHero: React.FC = () => {
  return (
    <section
      className="text-gray-200 body-font bg-black-950 pt-[14vh] pb-16 px-5"
      aria-labelledby="solutions-hero-heading"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <span className="inline-block px-4 py-1 mb-6 text-xs font-intersemibold tracking-widest text-gray-200 uppercase rounded-full border border-white-100/20 bg-white-100/5">
          Solutions · The Corplabs lineup
        </span>
        <h1
          id="solutions-hero-heading"
          className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
        >
          Four pillars,{" "}
          <span className="text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text">
            one playbook.
          </span>
        </h1>
        <p className="text-base lg:text-lg font-worksanslight text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
          Pick the surface that solves your problem. Each pillar is built,
          deployed, and supported by the same Corplabs team — so you never get
          handed off between vendors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pillars"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
          >
            Explore the pillars
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white-100/30 text-white-100 font-intersemibold text-base hover:border-[#424DE2] hover:text-[#AEE0FC] transition-colors"
          >
            Book a discovery call
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
