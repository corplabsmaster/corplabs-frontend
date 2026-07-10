import { ExecuteIcon, MaintainIcon, PlanIcon } from "@/components/home/ProcessIcons";
import { Reveal } from "@/components/ui/reveal";
import { processHeading, processSteps } from "@/data/home";

const icons = [PlanIcon, ExecuteIcon, MaintainIcon];

export default function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-24 sm:px-6">
      <Reveal>
        <h2 className="mb-13 text-center font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {processHeading.pre}
          <span className="gradient-text">{processHeading.gradientA}</span>
          <span className="font-sans font-light">{processHeading.amp}</span>
          <span className="gradient-text">{processHeading.gradientB}</span>
        </h2>
      </Reveal>
      <div className="relative grid gap-10 md:grid-cols-3">
        <div
          aria-hidden
          className="absolute left-[16%] right-[16%] top-[19px] hidden h-px bg-[linear-gradient(90deg,var(--color-gradient-1),var(--color-gradient-2))] opacity-50 md:block"
        />
        {processSteps.map((step, i) => {
          const Icon = icons[i];
          return (
          <Reveal key={step.n} delay={i * 0.08}>
            <div className="relative text-center">
              <div className="gradient-border mx-auto mb-6 flex h-10 w-10 items-center justify-center rounded-full font-mono text-[13px] text-white">
                {step.n}
              </div>
              <div className="mx-auto mb-5 h-[120px] w-[120px]">
                <Icon />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-white">{step.name}</h3>
              <p className="mx-auto max-w-xs text-sm leading-normal text-zinc-200">
                {step.blurb}
              </p>
            </div>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}
