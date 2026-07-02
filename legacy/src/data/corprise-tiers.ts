export type TierId =
  | "starter"
  | "essential"
  | "growth"
  | "professional"
  | "scale"
  | "bespoke";

export interface Tier {
  id: TierId;
  name: string;
  price: string;
  priceNumeric: number | null;
  period: string;
  tagline: string;
  bestFor: string;
  includedModules: string[];
  users: string;
  supportSla: string;
  highlight?: string;
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
  minPoints: number;
  maxPoints: number | null;
}

export const tiers: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "RM 1,000",
    priceNumeric: 1000,
    period: "/month",
    tagline: "Replace your spreadsheets.",
    bestFor: "Solo founders and micro-teams running the business on Excel and WhatsApp.",
    includedModules: ["Invoicing", "Contacts", "MyInvois e-Invoice"],
    users: "Up to 3 users",
    supportSla: "Email support · 2 business days",
    ctaLabel: "Start with Starter",
    ctaHref: "/contact?tier=starter",
    minPoints: 0,
    maxPoints: 5,
  },
  {
    id: "essential",
    name: "Essential",
    price: "RM 2,000",
    priceNumeric: 2000,
    period: "/month",
    tagline: "Accounting done right.",
    bestFor: "Growing SMEs ready to move bookkeeping out of Excel and into a real ledger.",
    includedModules: ["Accounting", "Invoicing", "Contacts", "MyInvois", "Expenses"],
    users: "Up to 10 users",
    supportSla: "Email + chat · 1 business day",
    ctaLabel: "Choose Essential",
    ctaHref: "/contact?tier=essential",
    minPoints: 6,
    maxPoints: 10,
  },
  {
    id: "growth",
    name: "Growth",
    price: "RM 3,000",
    priceNumeric: 3000,
    period: "/month",
    tagline: "Sell, buy, and account for it all.",
    bestFor: "Trading and services businesses that need sales, purchasing, and inventory in one place.",
    includedModules: [
      "Everything in Essential",
      "Sales",
      "Purchase",
      "Inventory",
      "CRM",
    ],
    users: "Up to 25 users",
    supportSla: "Priority chat · 4 business hours",
    highlight: "Most popular for Malaysian SMEs",
    ctaLabel: "Choose Growth",
    ctaHref: "/contact?tier=growth",
    popular: true,
    minPoints: 11,
    maxPoints: 16,
  },
  {
    id: "professional",
    name: "Professional",
    price: "RM 4,000",
    priceNumeric: 4000,
    period: "/month",
    tagline: "For teams running real operations.",
    bestFor: "Multi-department businesses with HR, projects, and operational complexity.",
    includedModules: [
      "Everything in Growth",
      "HR & Payroll (MY)",
      "Projects",
      "Timesheets",
      "Helpdesk",
    ],
    users: "Up to 50 users",
    supportSla: "Priority support · 2 business hours",
    ctaLabel: "Choose Professional",
    ctaHref: "/contact?tier=professional",
    minPoints: 17,
    maxPoints: 22,
  },
  {
    id: "scale",
    name: "Scale",
    price: "RM 5,000",
    priceNumeric: 5000,
    period: "/month",
    tagline: "Manufacturing, multi-entity, multi-country.",
    bestFor: "Established SMEs with manufacturing, multi-entity consolidation, or regional operations.",
    includedModules: [
      "Everything in Professional",
      "Manufacturing",
      "Multi-company",
      "Multi-currency",
      "Advanced reporting",
    ],
    users: "Up to 100 users",
    supportSla: "Dedicated success manager · 1 business hour",
    ctaLabel: "Choose Scale",
    ctaHref: "/contact?tier=scale",
    minPoints: 23,
    maxPoints: 28,
  },
  {
    id: "bespoke",
    name: "Bespoke",
    price: "Let's talk",
    priceNumeric: null,
    period: "",
    tagline: "When the playbook ends, we begin.",
    bestFor: "Enterprises with custom integrations, industry-specific workflows, or unique compliance needs.",
    includedModules: [
      "Everything in Scale",
      "Custom modules",
      "Custom integrations",
      "On-site engineers",
      "Dedicated infrastructure",
    ],
    users: "Unlimited users",
    supportSla: "Named engineering team · SLA on contract",
    ctaLabel: "Book a call",
    ctaHref: "/contact?tier=bespoke",
    minPoints: 29,
    maxPoints: null,
  },
];

export const tierById = (id: TierId): Tier => {
  const found = tiers.find((t) => t.id === id);
  if (!found) throw new Error(`Unknown tier: ${id}`);
  return found;
};
