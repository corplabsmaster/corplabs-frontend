export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  stat?: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  mirrorsProblemId: string;
}

export interface ProcessStepItem {
  step: number;
  label: string;
  title: string;
  description: string;
  duration: string;
}

export const problems: ProblemItem[] = [
  {
    id: "cost",
    stat: "RM 80k+",
    title: "Implementation costs that break the bank",
    description:
      "Traditional Odoo Gold partners charge RM 80,000 to RM 300,000 upfront before you see a single login screen. That's a year of working capital gone before the ERP earns a ringgit back.",
  },
  {
    id: "timeline",
    stat: "6–12 months",
    title: "Timelines that outlast quarters",
    description:
      "Most implementations drag six to twelve months, with scope creep, missed deadlines, and consultants who disappear between sprints. By the time you go live, the business has already changed.",
  },
  {
    id: "lockin",
    stat: "5-year contracts",
    title: "Lock-in that outlasts relationships",
    description:
      "Multi-year contracts tie you to one partner, one support queue, and one pricing model — whether the work delivers value or not. You can't switch without losing everything.",
  },
];

export const solutions: SolutionItem[] = [
  {
    id: "subscription",
    mirrorsProblemId: "cost",
    title: "One subscription. Predictable from day one.",
    description:
      "Corprise replaces the upfront invoice with a monthly subscription from RM 1,000. Implementation, hosting, MyInvois compliance, training, and ongoing refinements — all included in the tier you choose.",
  },
  {
    id: "fast",
    mirrorsProblemId: "timeline",
    title: "Live in weeks, not quarters.",
    description:
      "Our scorecard maps you to a tier, our pre-built Malaysian SME playbooks cut discovery in half, and your first modules go live in 4 to 8 weeks. Every tier ships — bespoke only when the business genuinely demands it.",
  },
  {
    id: "flexible",
    mirrorsProblemId: "lockin",
    title: "Month-to-month. Yours to own.",
    description:
      "After a three-month minimum, you're month-to-month. Your data stays on your Odoo instance — we hand it over clean if you ever leave. No hostage customisations, no exit fees.",
  },
];

export const processSteps: ProcessStepItem[] = [
  {
    step: 1,
    label: "Step 01",
    title: "Score",
    duration: "10 minutes",
    description:
      "Answer seven questions about your business, team, and modules you need. The scorecard maps you to the tier and modules that fit — no sales call required.",
  },
  {
    step: 2,
    label: "Step 02",
    title: "Discovery",
    duration: "Week 1",
    description:
      "A 90-minute discovery workshop with your team. We confirm scope, map your existing workflows to Odoo, and agree on go-live milestones in writing.",
  },
  {
    step: 3,
    label: "Step 03",
    title: "Implement",
    duration: "Weeks 2–7",
    description:
      "We configure your modules, migrate your data, connect MyInvois, and train your team. You see weekly progress in a shared dashboard, not a 40-page status report.",
  },
  {
    step: 4,
    label: "Step 04",
    title: "Go-live & Refine",
    duration: "Week 8+",
    description:
      "Go-live day with a Corplabs engineer on site or on call. After launch, your subscription covers continuous refinement — new reports, new workflows, new modules as you grow.",
  },
];
