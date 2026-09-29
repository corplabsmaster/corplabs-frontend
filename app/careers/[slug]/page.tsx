import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ApplyButton } from "@/components/careers/ApplyButton";
import { JobBody } from "@/components/careers/JobBody";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";
import { getJob, getJobs } from "@/lib/jobs";
import { fitTitle, pageMetadata } from "@/lib/metadata";
import { blocksToPlainText } from "@/lib/notion-blocks";

// Must be a literal — Next statically analyses segment config. Matches
// JOB_PAGE_REVALIDATE in lib/notion-blocks.ts (Notion signs file URLs for ~1h).
export const revalidate = 1800;

/**
 * A role's full job description, rendered from its Notion page. Roles posted
 * after the last deploy still resolve — dynamicParams lets them render on
 * first request rather than waiting for a rebuild.
 */
export async function generateStaticParams() {
  const jobs = await getJobs();
  return jobs.filter(job => job.slug).map(job => ({ slug: job.slug as string }));
}

const APPLY_FALLBACK = "/contact?intent=careers";

/** Meta descriptions stay within 135 chars; the trailing "…" is the 135th. */
function summarize(text: string, max = 134): string {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= max) return flat;
  return `${flat.slice(0, flat.lastIndexOf(" ", max))}…`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = await getJob(slug);
  if (!found) return {};
  const { job, blocks } = found;
  const description =
    summarize(blocksToPlainText(blocks)) ||
    `${job.title} at Corplabs — ${job.type}, ${job.location}.`;

  return pageMetadata({
    path: `/careers/${slug}`,
    title: fitTitle(`${job.title} — Careers`),
    description,
    openGraph: { type: "article", title: job.title },
  });
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = await getJob(slug);
  if (!found) notFound();

  const { job, blocks } = found;
  const applyHref = job.applyUrl || APPLY_FALLBACK;
  const plain = blocksToPlainText(blocks);

  // JobPosting structured data — this is what puts the role into Google Jobs.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: plain || `${job.title} at Corplabs.`,
    datePosted: job.postedAt,
    employmentType: job.type.toUpperCase().replace(/[\s-]+/g, "_"),
    hiringOrganization: {
      "@type": "Organization",
      name: site.name,
      sameAs: site.url,
    },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: job.location, addressCountry: "MY" },
    },
    directApply: !job.applyUrl,
    url: `${site.url}/careers/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 pb-24 pt-16 sm:px-6">
        <Reveal>
          <Link
            href="/careers"
            className="font-display text-xs font-semibold uppercase tracking-widest text-brand-300 transition-colors hover:text-white"
          >
            ← All roles
          </Link>

          <h1 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            {job.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            {[job.team, job.type, job.location].filter(Boolean).map(meta => (
              <span
                key={meta}
                className="rounded-full border border-line bg-surface-raised px-3 py-1 font-display text-[11.5px] font-medium text-brand-200"
              >
                {meta}
              </span>
            ))}
          </div>

          <div className="mt-7">
            <ApplyButton
              href={applyHref}
              role={job.title}
              placement="top"
              className="font-display uppercase tracking-widest"
            >
              Apply for this role
            </ApplyButton>
          </div>
        </Reveal>

        <Reveal className="mt-10 border-t border-line pt-8">
          <JobBody blocks={blocks} />
        </Reveal>

        <Reveal className="mt-14">
          <div className="gradient-border flex flex-col gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-bold tracking-tight text-white">
                Think this is you?
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-zinc-200">
                Send us your CV and a line about what you&apos;ve built.
              </p>
            </div>
            <ApplyButton
              href={applyHref}
              role={job.title}
              placement="bottom"
              className="flex-none font-display uppercase tracking-widest"
            >
              Apply now
            </ApplyButton>
          </div>
        </Reveal>
      </article>
    </>
  );
}
