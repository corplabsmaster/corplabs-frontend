import Link from "next/link";
import { cn } from "@/lib/utils";

const base = "rounded-2xl border border-line bg-surface-raised p-6";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn(base, className)}>{children}</div>;
}

/** Card that is entirely a link; hover highlights the border. */
export function LinkCard({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(base, "group block transition-colors hover:border-brand-500", className)}
    >
      {children}
    </Link>
  );
}
