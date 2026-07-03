import { site } from "@/data/site";

/**
 * Organization JSON-LD for the homepage. Mirrors the schema the old Gatsby
 * SEO component emitted, corrected to valid schema.org shape (@context/@type).
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: "Cplabs",
    url: site.url,
    logo: `${site.url}/logo.svg`,
    description: site.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "sales",
      areaServed: ["MY", "SG"],
      availableLanguage: ["en", "ms", "zh"],
    },
    sameAs: [
      site.social.twitter,
      site.social.instagram,
      site.social.linkedin,
      site.social.facebook,
    ],
  };
}
