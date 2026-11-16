import { officeAddress, site } from "@/data/site";
import type { Job } from "@/lib/jobs";
import type { PostVideo } from "@/lib/posts";

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

/** Monthly stipend published for intern roles unless the row overrides it. */
export const DEFAULT_INTERN_MONTHLY_MYR = 800;

/** How long a role without a "Closing Date" is advertised as open for. */
const DEFAULT_VALID_DAYS = 60;

export function isInternRole(job: Pick<Job, "title" | "type">): boolean {
  return /\bintern(ship)?\b/i.test(`${job.title} ${job.type}`);
}

/**
 * A Notion date is either a plain day ("2026-11-30") or a full timestamp. A
 * plain day means the role is open through that day in Kuala Lumpur.
 */
function closingTime(closesAt: string | undefined, now: Date): string {
  if (closesAt) {
    return /^\d{4}-\d{2}-\d{2}$/.test(closesAt) ? `${closesAt}T23:59:59+08:00` : closesAt;
  }
  return new Date(now.getTime() + DEFAULT_VALID_DAYS * 86_400_000).toISOString();
}

/**
 * JobPosting JSON-LD for a /careers/<slug> page — what makes the role
 * eligible for Google Jobs. Applications go through an external form, so
 * directApply is false.
 */
export function jobPostingJsonLd(
  job: Job,
  { slug, description, now = new Date() }: { slug: string; description: string; now?: Date }
) {
  const intern = isInternRole(job);
  const salary = job.monthlySalary ?? (intern ? DEFAULT_INTERN_MONTHLY_MYR : undefined);
  const remote = /\bremote\b/i.test(job.location);

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description,
    datePosted: job.postedAt,
    validThrough: closingTime(job.closesAt, now),
    employmentType: intern ? "INTERN" : job.type.toUpperCase().replace(/[\s-]+/g, "_"),
    hiringOrganization: {
      "@type": "Organization",
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      // Raster on purpose: Google's JobPosting guidance asks for a bitmap logo.
      logo: `${site.url}/logo-neg.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", ...officeAddress },
    },
    ...(remote && {
      jobLocationType: "TELECOMMUTE",
      applicantLocationRequirements: { "@type": "Country", name: "Malaysia" },
    }),
    ...(salary !== undefined && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "MYR",
        value: { "@type": "QuantitativeValue", value: salary, unitText: "MONTH" },
      },
    }),
    directApply: false,
    url: `${site.url}/careers/${slug}`,
  };
}

/** A site path ("/videos/…") → an absolute URL on the primary domain. */
export function absoluteUrl(pathOrUrl: string): string {
  return /^https?:\/\//i.test(pathOrUrl) ? pathOrUrl : `${site.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

/** Whole seconds → ISO 8601 duration: 30 → "PT30S", 95 → "PT1M35S". */
export function isoDuration(seconds: number): string {
  const s = Math.max(0, Math.round(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const rest = s % 60;
  return `PT${h ? `${h}H` : ""}${m ? `${m}M` : ""}${rest || (!h && !m) ? `${rest}S` : ""}`;
}

/**
 * VideoObject JSON-LD for a blog post's explainer video, nested as the
 * Article's `video`. Google's video rich results need name, description,
 * thumbnailUrl and uploadDate; contentUrl and duration make it indexable.
 * A video without a poster has no thumbnail, so it isn't marked up at all.
 */
export function videoObjectJsonLd(
  video: PostVideo | null,
  { title, description, uploadDate }: { title: string; description: string; uploadDate: string }
) {
  if (!video || !video.poster) return null;
  return {
    "@type": "VideoObject",
    name: title,
    description,
    thumbnailUrl: absoluteUrl(video.poster),
    uploadDate,
    contentUrl: absoluteUrl(video.src),
    ...(video.duration !== null && { duration: isoDuration(video.duration) }),
  };
}
