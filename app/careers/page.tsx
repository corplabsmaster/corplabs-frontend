import { JobCard } from "@/components/careers/JobCard";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getJobs } from "@/lib/jobs";
import { pageMetadata } from "@/lib/metadata";

// Literal required by Next's segment config analysis; matches the JD pages.
export const revalidate = 1800;

export const metadata = pageMetadata({
  path: "/careers",
  title: "Careers — Jobs & Internships in Kuala Lumpur",
  description:
    "Jobs and internships at Corplabs, in Kuala Lumpur or remote across Malaysia — building AI agents, custom software, ERP and websites.",
});

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.08em] text-brand-300">
            Careers
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Build things that <span className="gradient-text">ship.</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-zinc-200">
            We&apos;re a small team in Kuala Lumpur turning ideas into working software for
            businesses across Southeast Asia. If you like owning a problem end to end,
            you&apos;ll like it here.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {jobs.length === 0 ? (
          <Reveal>
            <p className="text-[15px] leading-relaxed text-zinc-200">
              No open roles right now — but we always read a good introduction.
            </p>
          </Reveal>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {jobs.map((job, i) => (
              <Reveal key={job.slug ?? job.title} delay={i * 0.06}>
                <JobCard job={job} headingAs="h2" />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <Reveal>
          <div className="gradient-border flex flex-col gap-6 rounded-2xl p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-white">
                Nothing fits, but you want in?
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-200">
                Tell us what you&apos;re good at and what you&apos;d want to build. We keep
                good introductions on file.
              </p>
            </div>
            <Button
              href="/contact?intent=careers"
              className="flex-none font-display uppercase tracking-widest"
            >
              Introduce yourself
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
