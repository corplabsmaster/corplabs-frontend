export type Competitor = "corprise" | "gold" | "silver" | "ready" | "freelance";

export interface ComparisonRow {
  attribute: string;
  values: Record<Competitor, string>;
}

export const competitorLabels: Record<Competitor, string> = {
  corprise: "Corprise",
  gold: "Odoo Gold Partner",
  silver: "Odoo Silver Partner",
  ready: "Odoo Ready / DIY",
  freelance: "Freelancer",
};

export const comparisonRows: ComparisonRow[] = [
  {
    attribute: "Upfront cost",
    values: {
      corprise: "RM 0 — first month only",
      gold: "RM 80k–300k",
      silver: "RM 40k–120k",
      ready: "RM 0 but no help",
      freelance: "RM 10k–60k",
    },
  },
  {
    attribute: "Monthly pricing",
    values: {
      corprise: "RM 1k–5k, predictable",
      gold: "Billed hourly",
      silver: "Billed hourly",
      ready: "No ongoing support",
      freelance: "Ad-hoc invoices",
    },
  },
  {
    attribute: "Time to go-live",
    values: {
      corprise: "4–8 weeks",
      gold: "6–12 months",
      silver: "4–8 months",
      ready: "Weeks to years",
      freelance: "Unpredictable",
    },
  },
  {
    attribute: "MyInvois / LHDN setup",
    values: {
      corprise: "Included in every tier",
      gold: "Billable scope",
      silver: "Billable scope",
      ready: "DIY",
      freelance: "If they know how",
    },
  },
  {
    attribute: "Ongoing refinements",
    values: {
      corprise: "Included monthly",
      gold: "New change request",
      silver: "New change request",
      ready: "DIY",
      freelance: "Ad-hoc",
    },
  },
  {
    attribute: "Contract commitment",
    values: {
      corprise: "3-month min, then monthly",
      gold: "Multi-year",
      silver: "Annual",
      ready: "None",
      freelance: "Unclear",
    },
  },
  {
    attribute: "Data ownership on exit",
    values: {
      corprise: "Clean handover, yours",
      gold: "Custom exit terms",
      silver: "Custom exit terms",
      ready: "Yours",
      freelance: "Depends on freelancer",
    },
  },
  {
    attribute: "AI + automation built in",
    values: {
      corprise: "Corpi + Claude included",
      gold: "Separate project",
      silver: "Separate project",
      ready: "Not available",
      freelance: "Rarely",
    },
  },
];
