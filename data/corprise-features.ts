import type { TierId } from "./corprise-tiers";

export interface FeatureRow {
  category: string;
  feature: string;
  description?: string;
  availability: Record<TierId, boolean | string>;
}

const ALL: Record<TierId, boolean | string> = {
  starter: true,
  essential: true,
  growth: true,
  professional: true,
  scale: true,
  bespoke: true,
};

const FROM_ESSENTIAL: Record<TierId, boolean | string> = {
  starter: false,
  essential: true,
  growth: true,
  professional: true,
  scale: true,
  bespoke: true,
};

const FROM_GROWTH: Record<TierId, boolean | string> = {
  starter: false,
  essential: false,
  growth: true,
  professional: true,
  scale: true,
  bespoke: true,
};

const FROM_PROFESSIONAL: Record<TierId, boolean | string> = {
  starter: false,
  essential: false,
  growth: false,
  professional: true,
  scale: true,
  bespoke: true,
};

const FROM_SCALE: Record<TierId, boolean | string> = {
  starter: false,
  essential: false,
  growth: false,
  professional: false,
  scale: true,
  bespoke: true,
};

export const featureMatrix: FeatureRow[] = [
  {
    category: "Included in every tier",
    feature: "Odoo Community hosting",
    description: "Managed on a dedicated Malaysian VPS, 99.9% uptime SLA.",
    availability: ALL,
  },
  {
    category: "Included in every tier",
    feature: "MyInvois e-Invoice integration",
    description: "LHDN-compliant submission, validation, and archival.",
    availability: ALL,
  },
  {
    category: "Included in every tier",
    feature: "Discovery workshop",
    availability: ALL,
  },
  {
    category: "Included in every tier",
    feature: "Team training (2 sessions)",
    availability: ALL,
  },
  {
    category: "Included in every tier",
    feature: "Monthly refinement hours",
    availability: {
      starter: "2 hours",
      essential: "4 hours",
      growth: "8 hours",
      professional: "16 hours",
      scale: "24 hours",
      bespoke: "Custom",
    },
  },
  {
    category: "Modules",
    feature: "Invoicing, Contacts, MyInvois",
    availability: ALL,
  },
  {
    category: "Modules",
    feature: "Accounting & Expenses",
    availability: FROM_ESSENTIAL,
  },
  {
    category: "Modules",
    feature: "Sales, Purchase, Inventory, CRM",
    availability: FROM_GROWTH,
  },
  {
    category: "Modules",
    feature: "HR, Payroll (MY), Projects, Helpdesk",
    availability: FROM_PROFESSIONAL,
  },
  {
    category: "Modules",
    feature: "Manufacturing, Multi-company, Multi-currency",
    availability: FROM_SCALE,
  },
  {
    category: "Support",
    feature: "Response SLA",
    availability: {
      starter: "2 business days",
      essential: "1 business day",
      growth: "4 business hours",
      professional: "2 business hours",
      scale: "1 business hour",
      bespoke: "Contractual",
    },
  },
  {
    category: "Support",
    feature: "Dedicated success manager",
    availability: {
      starter: false,
      essential: false,
      growth: false,
      professional: false,
      scale: true,
      bespoke: true,
    },
  },
  {
    category: "Support",
    feature: "Custom integrations",
    availability: {
      starter: false,
      essential: false,
      growth: false,
      professional: false,
      scale: false,
      bespoke: true,
    },
  },
];
