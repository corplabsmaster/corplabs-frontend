import Link from "next/link";
import type { Job } from "@/lib/jobs";

/**
 * One role card, shared by the homepage careers section and /careers.
 * Notion-backed roles link to their own JD page; the static fallback roles
 * (rendered only when the Notion pipeline isn't configured) link to contact.
 */
export function JobCard({ job, headingAs: Heading = "h3" }: { job: Job; headingAs?: "h2" | "h3" }) {
  const external = job.href.startsWith("http");
  const className =
    "block rounded-xl border-[1.5px] border-brand-500 bg-brand-950 p-7 transition-shadow hover:shadow-[0_0_0_1px_rgba(86,5,255,0.35),0_10px_40px_rgba(86,5,255,0.25)]";

  const inner = (
    <>
      <div
        className="mb-5 flex h-[120px] flex-col justify-between overflow-hidden rounded-md p-4"
        style={{ background: job.thumb }}
      >
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-black/30 px-2.5 py-1 font-display text-[10px] font-semibold uppercase tracking-wide text-on-brand">
            {job.type}
          </span>
          <span className="font-mono text-[11px] text-on-brand/90">{job.location}</span>
        </div>
        <span className="font-display text-3xl font-bold tracking-tight text-on-brand/90">
          {job.monogram}
        </span>
      </div>
      <p className="mb-1.5 text-[13px] text-brand-200">{job.team}</p>
      <Heading className="mb-3.5 font-display text-lg font-medium text-white">{job.title}</Heading>
      <div className="mb-5 flex flex-wrap gap-1.5">
        {job.tags.map(tag => (
          <span
            key={tag}
            className="rounded-full border border-line bg-surface-raised px-2.5 py-1 font-display text-[11px] font-medium text-brand-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="gradient-border w-full rounded px-3 py-2.5 text-center font-display text-[11px] uppercase tracking-[0.12em] text-zinc-300">
        {job.slug ? "Read the role" : "Learn More"}
      </div>
    </>
  );

  if (external) {
    return (
      <a href={job.href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={job.href} className={className}>
      {inner}
    </Link>
  );
}
