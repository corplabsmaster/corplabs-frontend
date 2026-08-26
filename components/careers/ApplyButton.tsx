"use client";

import { Button } from "@/components/ui/button";
import { trackApplyClick } from "@/lib/analytics";

/**
 * Apply CTA on a job description. The JD page is a server component, so the
 * click handler needs its own client boundary; this keeps that boundary to a
 * single button rather than the whole page.
 */
export function ApplyButton({
  href,
  role,
  placement,
  className,
  children,
}: {
  href: string;
  /** Job title, reported as the `role` parameter. */
  role: string;
  placement: "top" | "bottom";
  className?: string;
  children: React.ReactNode;
}) {
  // Button renders an <a> for http(s) hrefs by itself; these open it safely.
  const external = href.startsWith("http");

  return (
    <Button
      href={href}
      className={className}
      onClick={() => trackApplyClick(role, placement)}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </Button>
  );
}
