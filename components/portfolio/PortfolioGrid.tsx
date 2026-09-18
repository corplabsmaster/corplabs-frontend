"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { pillars } from "@/data/site";
import { portfolioFilterCopy, projects, type ProjectPillarId } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type FilterValue = ProjectPillarId | "all";

/** Pure so it's testable without mounting the component. */
export function filterProjects(pillar: FilterValue) {
  if (pillar === "all") return projects;
  return projects.filter(p => p.pillar === pillar);
}

export function PortfolioGrid() {
  // Deep-links like /portfolio?pillar=corpsite (used by the Corpsite page's
  // "see our work" card) pre-select a filter; falls back to "all".
  const searchParams = useSearchParams();
  const initial = searchParams.get("pillar");
  const isValidPillar = (v: string | null): v is ProjectPillarId =>
    pillars.some(p => p.id === v);

  const [active, setActive] = useState<FilterValue>(
    isValidPillar(initial) ? initial : "all"
  );

  const filtered = useMemo(() => filterProjects(active), [active]);

  const chips: { label: string; value: FilterValue }[] = [
    { label: portfolioFilterCopy.all, value: "all" },
    ...pillars.map(p => ({ label: p.name, value: p.id })),
  ];

  return (
    <div>
      <div role="group" aria-label="Filter by pillar" className="flex flex-wrap gap-2">
        {chips.map(chip => {
          const isActive = active === chip.value;
          return (
            <button
              key={chip.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(chip.value)}
              className={cn(
                "rounded-full border px-3.5 py-2 font-display text-[12.5px] transition-colors",
                isActive
                  ? "border-brand-500 bg-brand-500 font-medium text-on-brand"
                  : "border-line bg-surface font-light text-zinc-200 hover:border-brand-500/60"
              )}
            >
              {chip.label}
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-sm text-zinc-400">
          Nothing here yet for this pillar — check back soon.
        </p>
      )}
    </div>
  );
}
