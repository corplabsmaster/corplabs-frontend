import { describe, expect, it } from "vitest";
import type { Job } from "@/lib/jobs";
import { isInternRole, jobPostingJsonLd } from "@/lib/structured-data";

const NOW = new Date("2026-10-21T00:00:00.000Z");

function job(overrides: Partial<Job> = {}): Job {
  return {
    team: "Marketing",
    title: "Growth Marketing Intern",
    thumb: "",
    // the original board has no Type column, so every row reads Full-time
    type: "Full-time",
    location: "Malaysia",
    monogram: "GM",
    tags: [],
    href: "/careers/growth-marketing-intern",
    slug: "growth-marketing-intern",
    postedAt: "2026-08-20T01:58:22.926Z",
    ...overrides,
  };
}

const build = (j: Job) =>
  jobPostingJsonLd(j, { slug: j.slug ?? "x", description: "JD", now: NOW });

describe("jobPostingJsonLd", () => {
  it("marks intern roles INTERN with the default MYR 800 monthly stipend", () => {
    const ld = build(job());
    expect(ld.employmentType).toBe("INTERN");
    expect(ld.baseSalary).toEqual({
      "@type": "MonetaryAmount",
      currency: "MYR",
      value: { "@type": "QuantitativeValue", value: 800, unitText: "MONTH" },
    });
  });

  it("lets the Notion salary override the default", () => {
    expect(build(job({ monthlySalary: 1200 })).baseSalary?.value.value).toBe(1200);
  });

  it("leaves non-intern roles without a salary unless one is set", () => {
    const ld = build(job({ title: "Senior Java Backend" }));
    expect(ld.employmentType).toBe("FULL_TIME");
    expect(ld).not.toHaveProperty("baseSalary");
  });

  it("closes at the end of the Notion closing day, Kuala Lumpur time", () => {
    expect(build(job({ closesAt: "2026-11-30" })).validThrough).toBe("2026-11-30T23:59:59+08:00");
    expect(build(job({ closesAt: "2026-11-30T10:00:00.000+08:00" })).validThrough).toBe(
      "2026-11-30T10:00:00.000+08:00"
    );
  });

  it("defaults validThrough to 60 days out", () => {
    expect(build(job()).validThrough).toBe("2026-12-20T00:00:00.000Z");
  });

  it("names the legal entity and the registered office", () => {
    const ld = build(job());
    expect(ld.hiringOrganization).toMatchObject({
      name: "Corplabs",
      legalName: "CPLABS SDN BHD",
      url: "https://www.corplabs.co",
      logo: "https://www.corplabs.co/logo-neg.png",
    });
    expect(ld.jobLocation.address).toMatchObject({
      streetAddress: "RA1006, One Residence, Jalan Chan Sow Lin",
      postalCode: "55200",
      addressCountry: "MY",
    });
    expect(ld.directApply).toBe(false);
  });

  it("adds telecommute fields only for remote roles", () => {
    expect(build(job())).not.toHaveProperty("jobLocationType");
    expect(build(job({ location: "Remote · Malaysia" }))).toMatchObject({
      jobLocationType: "TELECOMMUTE",
      applicantLocationRequirements: { "@type": "Country", name: "Malaysia" },
    });
  });
});

describe("isInternRole", () => {
  it("reads the title or the type, not substrings like 'internal'", () => {
    expect(isInternRole({ title: "Tech Developer Intern", type: "Full-time" })).toBe(true);
    expect(isInternRole({ title: "Designer", type: "Internship" })).toBe(true);
    expect(isInternRole({ title: "Internal Tools Engineer", type: "Full-time" })).toBe(false);
  });
});
