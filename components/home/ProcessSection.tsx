import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Reveal } from "@/components/ui/reveal";
import { processHeading } from "@/data/home";

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
      <ProcessSteps />
    </section>
  );
}
