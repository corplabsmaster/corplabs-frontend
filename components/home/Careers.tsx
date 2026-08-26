import Link from "next/link";
import { JobCard } from "@/components/careers/JobCard";
import { Reveal } from "@/components/ui/reveal";
import { careersHeading } from "@/data/home";
import { getJobs } from "@/lib/jobs";

/** Homepage teaser: the first few open roles, with the rest behind /careers. */
const HOME_LIMIT = 6;

export default async function Careers() {
  const jobs = await getJobs();
  const shown = jobs.slice(0, HOME_LIMIT);
  const remaining = jobs.length - shown.length;

  return (
    <section id="careers" className="scroll-mt-24 bg-surface-raised py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="mb-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {careersHeading.title}
              </h2>
              <p className="text-[15px] text-zinc-200">{careersHeading.lede}</p>
            </div>
            <Link
              href="/careers"
              className="font-display text-xs font-semibold uppercase tracking-widest text-brand-300 transition-colors hover:text-white"
            >
              {remaining > 0 ? `All ${jobs.length} roles →` : "All roles →"}
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {shown.map((job, i) => (
            <Reveal key={job.slug ?? job.title} delay={i * 0.06}>
              <JobCard job={job} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
