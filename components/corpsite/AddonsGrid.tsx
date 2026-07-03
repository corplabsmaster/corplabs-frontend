import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { addons } from "@/data/corpsite";

export default function AddonsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {addons.map((addon, i) => (
        <Reveal key={addon.id} delay={i * 0.04} className="h-full">
          <Card className="h-full">
            <p className="font-medium text-white">{addon.name}</p>
            <p className="mt-1 text-sm text-brand-300">
              {addon.setup} setup · {addon.monthly}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {addon.description}
            </p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
