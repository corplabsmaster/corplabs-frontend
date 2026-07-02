import React from "react";

import { techStack } from "../../data/corpcode-content";

const TechStack: React.FC = () => {
  return (
    <section
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corpcode-stack-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            How we build
          </span>
          <h2
            id="corpcode-stack-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4 fade-in"
          >
            {techStack.heading}
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed fade-in">
            {techStack.intro}
          </p>
        </div>

        <dl className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 mb-12">
          {techStack.categories.map((cat) => (
            <div key={cat.id} className="fade-in">
              <dt className="text-base lg:text-lg font-interbold text-[#AEE0FC] mb-2 tracking-wide">
                {cat.title}
              </dt>
              <dd className="text-base font-worksanslight text-gray-200 leading-relaxed">
                {cat.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>

        <blockquote className="max-w-3xl mx-auto pl-5 border-l-2 border-[#424DE2] fade-in">
          <p className="text-base lg:text-lg font-worksanslight italic text-gray-200 leading-relaxed">
            {techStack.outro}
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default TechStack;
