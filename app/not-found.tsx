import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-32 text-center sm:px-6">
      <p className="font-display text-7xl font-bold text-brand-500">404</p>
      <h1 className="mt-6 font-display text-2xl font-semibold text-white">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-3 max-w-md text-zinc-400">
        The page you&apos;re looking for was moved, renamed, or never shipped.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Back to home</Button>
        <Button href="/solutions" variant="secondary">
          Explore solutions
        </Button>
      </div>
    </section>
  );
}
