import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioThumb } from "@/components/portfolio/PortfolioThumb";
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

const kindLabel = { build: "New build", revamp: "Revamp" } as const;

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
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-20 sm:px-6">
      <Link
        href="/portfolio"
        className="font-display text-[13px] font-medium text-brand-300 transition-colors hover:text-white"
      >
        {portfolioCaseStudyCopy.backLabel}
      </Link>

      <Reveal>
        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-line px-2.5 py-0.5 font-display text-[11px] font-medium uppercase tracking-wider text-zinc-400">
              {kindLabel[project.kind]}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
              {project.industry}
            </span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-balance text-white sm:text-[40px]">
            {project.name}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-200">
            {project.summary}
          </p>
        </header>
      </Reveal>

      <Reveal className="mt-10">
        <PortfolioThumb image={project.image} name={project.name} className="aspect-[16/10]" />
      </Reveal>

      <Reveal className="mt-10">
        <h2 className="font-display text-lg font-semibold text-white">Where we came in</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-zinc-200">{project.brief}</p>
        <Button
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-7 font-display uppercase tracking-[0.08em]"
        >
          {portfolioCaseStudyCopy.liveSiteLabel}
        </Button>
      </Reveal>

      {related.length > 0 && (
        <footer className="mt-16 border-t border-line pt-10">
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

      <p className="mt-10 text-xs text-zinc-500">
        Want to see your business here?{" "}
        <Link href="/contact" className="text-brand-300 hover:text-white">
          Get a free demo →
        </Link>
      </p>
    </article>
  );
}
