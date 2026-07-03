import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/corpcode-content";

export default function ProcessSteps() {
  return (
    <ol className="space-y-4">
      {processSteps.map((step, i) => (
        <Reveal key={step.step} delay={i * 0.06}>
          <li className="flex gap-5 rounded-2xl border border-line bg-surface-raised p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
              {step.step}
            </span>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-xs font-medium uppercase tracking-widest text-brand-300">
                  {step.duration}
                </p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
