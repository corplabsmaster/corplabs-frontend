import { LinkCard } from "@/components/ui/card";
import { PortfolioThumb } from "@/components/portfolio/PortfolioThumb";
import type { PortfolioProject } from "@/data/portfolio";

const kindLabel: Record<PortfolioProject["kind"], string> = {
  build: "New build",
  revamp: "Revamp",
};

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <LinkCard href={`/portfolio/${project.slug}`} className="flex flex-col gap-4 p-4">
      <PortfolioThumb image={project.image} name={project.name} />
      <div className="flex flex-col gap-1.5 px-1 pb-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-base font-semibold text-white group-hover:text-brand-200">
            {project.name}
          </h3>
          <span className="shrink-0 rounded-full border border-line px-2.5 py-0.5 font-display text-[10.5px] font-medium uppercase tracking-wider text-zinc-400">
            {kindLabel[project.kind]}
          </span>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
          {project.industry}
        </p>
        <p className="mt-1 text-[13.5px] leading-relaxed text-zinc-200">
          {project.summary}
        </p>
      </div>
    </LinkCard>
  );
}
