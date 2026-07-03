import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ngoProgramme } from "@/data/corpsite";

function ChecklistCard({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <Card className="h-full">
      <p className="font-medium text-white">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map(item => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-zinc-400">
            <span aria-hidden className="text-brand-300">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default function NgoProgramme() {
  return (
    <div className="rounded-3xl border border-line bg-surface-raised p-6 sm:p-10">
      <p className="inline-flex rounded-full bg-brand-600/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
        {ngoProgramme.badge}
      </p>
      <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
        <span aria-hidden className="mr-2">{ngoProgramme.emoji}</span>
        {ngoProgramme.heading}
      </h3>
      <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">{ngoProgramme.intro}</p>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <ChecklistCard title={ngoProgramme.scope.title} items={ngoProgramme.scope.items} />
        <ChecklistCard
          title={ngoProgramme.eligibility.title}
          items={ngoProgramme.eligibility.items}
        />
        <ChecklistCard title={ngoProgramme.terms.title} items={ngoProgramme.terms.items} />
      </div>

      <div className="mt-8">
        <p className="font-medium text-white">{ngoProgramme.apply.title}</p>
        <p className="mt-2 text-sm text-zinc-400">{ngoProgramme.apply.intro}</p>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-zinc-400">
          {ngoProgramme.apply.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-zinc-500">{ngoProgramme.apply.closing}</p>
        <Button href={ngoProgramme.cta.href} className="mt-6">
          {ngoProgramme.cta.label}
        </Button>
      </div>
    </div>
  );
}
