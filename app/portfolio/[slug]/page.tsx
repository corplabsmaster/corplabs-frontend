import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroMedia } from "@/components/portfolio/HeroMedia";
import { ScreenshotGallery } from "@/components/portfolio/ScreenshotGallery";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { kindLabel, portfolioCaseStudyCopy } from "@/data/portfolio";
import { fitTitle, pageMetadata } from "@/lib/metadata";
import { getAllProjects, getProject } from "@/lib/portfolio";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return pageMetadata({
    path: `/portfolio/${slug}`,
    title: fitTitle(`${project.name} — Corplabs Portfolio`),
    description: project.summary,
  });
}

/** Falls back to the raw URL for a blank/schemeless value instead of
 * throwing — `liveUrl` is required in the Keystatic admin form, but that
 * validation doesn't run against a hand-edited YAML file. */
function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // One read instead of two — getProject(slug) would re-read this exact
  // file a second time right after getAllProjects() already parsed it.
  const allProjects = await getAllProjects();
  const project = allProjects.find(p => p.slug === slug) ?? null;
  if (!project) notFound();

  const related = allProjects.filter(p => p.slug !== project.slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-5xl px-4 pb-24 pt-20 sm:px-6">
      <Link
        href="/portfolio"
        className="font-display text-[13px] font-medium text-brand-300 transition-colors hover:text-white"
      >
        {portfolioCaseStudyCopy.backLabel}
      </Link>

      <Reveal>
        <header className="mt-6 max-w-2xl">
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance text-white sm:text-[40px]">
            {project.name}
          </h1>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-brand-600 bg-brand-950/60 px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-brand-200">
              {project.industry}
            </span>
            <span className="rounded-full border border-brand-600 bg-brand-950/60 px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-brand-200">
              {kindLabel[project.kind]}
            </span>
          </div>
          <p className="mt-4 text-base leading-relaxed text-zinc-200">{project.summary}</p>
        </header>
      </Reveal>

      {/* Full-width hero — the client's own site video when it has one, else a large screenshot. */}
      <Reveal className="mt-10">
        <HeroMedia name={project.name} hero={project} />
      </Reveal>

      {/* Intro narrative + a compact fact box, side by side on desktop. */}
      <Reveal className="mt-10 grid gap-6 lg:grid-cols-[1fr_260px]">
        <p className="text-[15.5px] leading-relaxed text-zinc-200">{project.intro}</p>
        <Card className="h-fit divide-y divide-line p-0">
          {[
            { label: "Industry", value: project.industry },
            { label: "Company type", value: project.companyType },
            { label: "Engagement", value: kindLabel[project.kind] },
            {
              label: "Live site",
              value: (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-300 transition-colors hover:text-white"
                >
                  {hostname(project.liveUrl)} ↗
                </a>
              ),
            },
          ].map(({ label, value }) => (
            <div key={label} className="px-5 py-3">
              <dt className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-500">
                {label}
              </dt>
              <dd className="mt-1 text-[13.5px] font-medium leading-snug text-white">{value}</dd>
            </div>
          ))}
        </Card>
      </Reveal>

      {/* The timeline — challenge, solution, stack, and the site itself —
          down the left edge. Each step reveals on its own as the reader
          scrolls to it; only the connecting rail is static. */}
      <div className="relative mt-10 pl-9 sm:pl-11">
        <div
          aria-hidden
          className="absolute bottom-2 left-[15px] top-2 w-px bg-[linear-gradient(180deg,var(--color-gradient-1),var(--color-gradient-2))] opacity-40 sm:left-[19px]"
        />

        <Reveal className="relative max-w-2xl pb-10">
          <span aria-hidden className="absolute -left-[26px] top-1 h-3 w-3 rounded-full bg-brand-500 sm:-left-[30px]" />
          <span className="mb-1 block font-mono text-xs text-zinc-500">01</span>
          <h2 className="font-display text-base font-semibold text-white">The challenge</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-zinc-200">{project.challenge}</p>
        </Reveal>

        <Reveal className="relative max-w-2xl pb-12">
          <span
            aria-hidden
            className="absolute -left-[26px] top-1 h-3 w-3 rounded-full border-2 border-gradient-1 bg-surface sm:-left-[30px]"
          />
          <span className="mb-1 block font-mono text-xs text-zinc-500">02</span>
          <h2 className="font-display text-lg font-semibold text-white">The stack</h2>
          <Card className="mt-3 divide-y divide-line p-0">
            {project.stack.map(({ label, value }) => (
              <div
                key={label}
                className="grid grid-cols-[100px_1fr] gap-4 px-5 py-3 sm:grid-cols-[130px_1fr] sm:px-6"
              >
                <dt className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-500">
                  {label}
                </dt>
                <dd className="text-[13.5px] leading-snug text-zinc-200">{value}</dd>
              </div>
            ))}
          </Card>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stackTags.map(tag => (
              <span
                key={tag}
                className="rounded-full bg-surface-raised px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wider text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative max-w-2xl pb-12">
          <span
            aria-hidden
            className="absolute -left-[26px] top-1 h-3 w-3 rounded-full border-2 border-gradient-1 bg-surface sm:-left-[30px]"
          />
          <span className="mb-1 block font-mono text-xs text-zinc-500">03</span>
          <h2 className="font-display text-base font-semibold text-white">The solution</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-white">{project.solution}</p>
          <Button
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 font-display uppercase tracking-[0.08em]"
          >
            {portfolioCaseStudyCopy.liveSiteLabel}
          </Button>
        </Reveal>

        <Reveal className="relative">
          <span
            aria-hidden
            className="absolute -left-[26px] top-1 h-3 w-3 rounded-full border-2 border-gradient-1 bg-surface sm:-left-[30px]"
          />
          <div className="mt-5">
            <ScreenshotGallery shots={project.screenshots} name={project.name} />
          </div>
        </Reveal>
      </div>

      {related.length > 0 && (
        <footer className="mt-16 max-w-2xl border-t border-line pt-10">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-zinc-500">
            {portfolioCaseStudyCopy.relatedLabel}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {related.map(p => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className="rounded-xl border border-line p-4 transition-colors hover:border-brand-500"
              >
                <p className="font-display text-sm font-semibold text-white">{p.name}</p>
                <p className="mt-1 text-xs text-zinc-400">{p.industry}</p>
              </Link>
            ))}
          </div>
        </footer>
      )}

      <p className="mt-10 max-w-2xl text-xs text-zinc-500">
        Want to see your business here?{" "}
        <Link href="/contact" className="text-brand-300 hover:text-white">
          Get a free demo →
        </Link>
      </p>
    </article>
  );
}
