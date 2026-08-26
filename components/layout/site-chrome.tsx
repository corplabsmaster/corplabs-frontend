"use client";

import { usePathname } from "next/navigation";

/**
 * The Keystatic admin renders its own full-page application, so it must not sit
 * under the marketing header, footer and currency switcher. Header and Footer
 * are passed in as slots (rather than imported) so Footer stays a server
 * component.
 */
const CHROME_FREE_ROUTES = ["/keystatic"];

export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const bare = CHROME_FREE_ROUTES.some(route => pathname?.startsWith(route));

  if (bare) return <>{children}</>;

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
