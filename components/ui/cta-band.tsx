import { Button } from "@/components/ui/button";

export function CtaBand({
  title,
  lede,
  primary,
  secondary,
}: {
  title: string;
  lede?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface-raised px-6 py-16 text-center sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-24 mx-auto h-48 max-w-lg rounded-full bg-brand-600/30 blur-3xl"
        />
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {lede && <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">{lede}</p>}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button href={primary.href}>{primary.label}</Button>
          {secondary && (
            <Button href={secondary.href} variant="secondary">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
