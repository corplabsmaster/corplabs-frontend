import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { careersHeading, jobs } from "@/data/home";

export default function Careers() {
  return (
    <section id="careers" className="scroll-mt-24 bg-surface-raised py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-10">
            <h2 className="mb-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {careersHeading.title}
            </h2>
            <p className="text-[15px] text-zinc-200">{careersHeading.lede}</p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {jobs.map((job, i) => {
            const external = job.href.startsWith("http");
            const CardInner = (
              <>
                <div
                  className="mb-5 flex h-[120px] flex-col justify-between overflow-hidden rounded-md p-4"
                  style={{ background: job.thumb }}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-black/30 px-2.5 py-1 font-display text-[10px] font-semibold uppercase tracking-wide text-white">
                      {job.type}
                    </span>
                    <span className="font-mono text-[11px] text-white/90">{job.location}</span>
                  </div>
                  <span className="font-display text-3xl font-bold tracking-tight text-white/90">
                    {job.monogram}
                  </span>
                </div>
                <p className="mb-1.5 text-[13px] text-brand-200">{job.team}</p>
                <h3 className="mb-3.5 font-display text-lg font-medium text-white">{job.title}</h3>
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-surface-raised px-2.5 py-1 font-display text-[11px] font-medium text-brand-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="gradient-border w-full rounded px-3 py-2.5 text-center font-display text-[11px] uppercase tracking-[0.12em] text-zinc-300">
                  Learn More
                </div>
              </>
            );
            const cardClass =
              "block rounded-xl border-[1.5px] border-brand-500 bg-brand-950 p-7 transition-shadow hover:shadow-[0_0_0_1px_rgba(86,5,255,0.35),0_10px_40px_rgba(86,5,255,0.25)]";
            return (
              <Reveal key={job.title} delay={i * 0.06}>
                {external ? (
                  <a href={job.href} target="_blank" rel="noreferrer" className={cardClass}>
                    {CardInner}
                  </a>
                ) : (
                  <Link href={job.href} className={cardClass}>
                    {CardInner}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
