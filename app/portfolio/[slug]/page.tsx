import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroMedia } from "@/components/portfolio/HeroMedia";
import { ScreenshotGallery } from "@/components/portfolio/ScreenshotGallery";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { portfolioCaseStudyCopy, projects } from "@/data/portfolio";

export async function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

function getProject(slug: string) {
  return projects.find(p => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Corplabs Portfolio`,
    description: project.summary,
    alternates: { canonical: `/portfolio/${slug}` },
  };
}

const kindLabel = { build: "New website build", revamp: "Website revamp" } as const;

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects.filter(p => p.slug !== project.slug).slice(0, 2);

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
          <p className="mt-4 text-base leading-relaxed text-zinc-200">{project.summary}</p>
        </header>
      </Reveal>

      {/* Full-width hero — the client's own site video when it has one, else a large screenshot. */}
      <Reveal className="mt-10">
        <HeroMedia
          name={project.name}
          video={project.heroVideo}
          poster={project.heroPoster}
          image={project.heroImage}
        />
      </Reveal>

      {/* Intro narrative + a compact fact box, side by side on desktop. */}
      <Reveal className="mt-10 grid gap-6 lg:grid-cols-[1fr_260px]">
        <p className="text-[15.5px] leading-relaxed text-zinc-200">{project.intro}</p>
        <Card className="h-fit divide-y divide-line p-0">
          {[
            { label: "Industry", value: project.industry },
            { label: "Company type", value: project.companyType },
            { label: "Engagement", value: kindLabel[project.kind] },
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

      {/* One continuous timeline — challenge, solution, design, and the site
          itself — down the left edge, instead of four disconnected sections. */}
      <Reveal className="mt-10">
        <div className="relative pl-9 sm:pl-11">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-line sm:left-[19px]" />

          <div className="relative max-w-2xl pb-10">
            <span className="absolute -left-[22px] top-1 h-2.5 w-2.5 rounded-full bg-zinc-500 sm:-left-[26px]" />
            <h2 className="font-display text-base font-semibold text-white">The challenge</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-zinc-200">{project.challenge}</p>
          </div>

          <div className="relative max-w-2xl pb-12">
            <span className="absolute -left-[22px] top-1 h-2.5 w-2.5 rounded-full bg-brand-500 sm:-left-[26px]" />
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
          </div>

          <div className="relative max-w-2xl pb-12">
            <span className="absolute -left-[22px] top-1 h-2.5 w-2.5 rounded-full bg-zinc-500 sm:-left-[26px]" />
            <h2 className="font-display text-lg font-semibold text-white">Design</h2>
            <Card className="mt-3 divide-y divide-line p-0">
              {project.designTokens.map(({ label, value }) => (
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
              {project.styleTags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full bg-surface-raised px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wider text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <span className="absolute -left-[22px] top-1 h-2.5 w-2.5 rounded-full bg-zinc-500 sm:-left-[26px]" />
            <h2 className="font-display text-lg font-semibold text-white">More of the site</h2>
            <div className="mt-4">
              <ScreenshotGallery shots={project.screenshots} name={project.name} />
            </div>
          </div>
        </div>
      </Reveal>

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
