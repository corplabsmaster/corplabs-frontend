/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/ui/reveal";
import { services, servicesHeading } from "@/data/home";

export default function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-24 sm:px-6">
      <Reveal>
        <div className="mb-9 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {servicesHeading.title}
          </h2>
          <span className="font-display text-xs font-semibold uppercase tracking-[0.08em] text-brand-300">
            {servicesHeading.hint}
          </span>
        </div>
      </Reveal>
      <Reveal>
        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="flex items-start gap-4 bg-surface p-6 transition-colors hover:bg-surface-raised sm:p-7"
            >
              <img src={s.icon} alt="" className="h-11 w-11 flex-none" />
              <div>
                <h3 className="mb-1.5 font-display text-base font-semibold text-white">
                  {s.name}
                </h3>
                <p className="text-[13px] leading-normal text-zinc-200">{s.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
