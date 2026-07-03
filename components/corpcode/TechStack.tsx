import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { techStack } from "@/data/corpcode-content";

export default function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Stack"
          title={techStack.heading}
          lede={techStack.intro}
        />
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.categories.map((category, i) => (
          <Reveal key={category.id} delay={i * 0.05} className="h-full">
            <Card className="h-full">
              <p className="font-medium text-white">{category.title}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.items.map(item => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-zinc-500">
        {techStack.outro}
      </p>
    </section>
  );
}
