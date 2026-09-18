import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/portfolio";

/**
 * No pillar filter — there's only one pillar with shipped work right now
 * (corpsite), so a filter UI would just dead-end on every other option.
 * Bring it back once a second pillar has projects to switch between.
 */
export function PortfolioGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
