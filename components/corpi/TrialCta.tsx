"use client";

import { Button } from "@/components/ui/button";
import { trackTrialSignupClick } from "@/lib/analytics";

/**
 * Links out to the Corpi microsite's signup. The /corpi page is a server
 * component, so this keeps the click handler's client boundary to the button
 * rather than the whole page — same shape as ApplyButton on job descriptions.
 */
export function TrialCta({
  href,
  placement,
  variant = "primary",
  size,
  className,
  children,
}: {
  href: string;
  placement: "corpi_hero" | "corpi_pricing";
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      href={href}
      variant={variant}
      size={size}
      className={className}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackTrialSignupClick(placement)}
    >
      {children}
    </Button>
  );
}
