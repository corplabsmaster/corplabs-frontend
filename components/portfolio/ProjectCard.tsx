import { LinkCard } from "@/components/ui/card";
import { PortfolioThumb } from "@/components/portfolio/PortfolioThumb";
import { kindLabel } from "@/data/portfolio";
import type { PortfolioProject } from "@/lib/portfolio";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <LinkCard href={`/portfolio/${project.slug}`} className="flex flex-col gap-4 p-4">
      <div className="relative">
        <PortfolioThumb image={project.cardImage} name={project.name} />
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1.5">
          <span className="rounded-full border border-brand-600 bg-brand-950/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-brand-200 backdrop-blur-sm">
            {project.industry}
          </span>
          <span className="rounded-full border border-brand-600 bg-brand-950/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-brand-200 backdrop-blur-sm">
            {kindLabel[project.kind]}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 px-1 pb-1">
        <h2 className="font-display text-base font-semibold text-white group-hover:text-brand-200">
          {project.name}
        </h2>
        <p className="text-[13.5px] leading-relaxed text-zinc-200">
          {project.summary}
        </p>
      </div>
    </LinkCard>
  );
}
