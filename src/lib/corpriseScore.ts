import { tiers, tierById } from "../data/corprise-tiers";
import type { Tier, TierId } from "../data/corprise-tiers";

export interface ScorecardQuestion {
  id: string;
  prompt: string;
  helpText?: string;
  choices: ScorecardChoice[];
}

export interface ScorecardChoice {
  label: string;
  points: number;
}

export const scorecardQuestions: ScorecardQuestion[] = [
  {
    id: "team-size",
    prompt: "How many people are in your business today?",
    helpText: "Count full-time staff — founders, employees, regular contractors.",
    choices: [
      { label: "Just me", points: 0 },
      { label: "2–5 people", points: 1 },
      { label: "6–15 people", points: 3 },
      { label: "16–50 people", points: 5 },
      { label: "51+ people", points: 7 },
    ],
  },
  {
    id: "revenue",
    prompt: "What's your annual revenue range?",
    choices: [
      { label: "Under RM 500k", points: 0 },
      { label: "RM 500k – RM 2M", points: 2 },
      { label: "RM 2M – RM 10M", points: 4 },
      { label: "RM 10M – RM 50M", points: 6 },
      { label: "RM 50M+", points: 8 },
    ],
  },
  {
    id: "modules",
    prompt: "Which operations do you need Odoo to handle?",
    helpText: "Pick the answer that best matches the breadth you need at go-live.",
    choices: [
      { label: "Invoicing + contacts only", points: 0 },
      { label: "Full accounting + expenses", points: 2 },
      { label: "Sales, purchase, inventory, CRM", points: 3 },
      { label: "Adds HR, projects, helpdesk", points: 4 },
      { label: "Adds manufacturing or multi-entity", points: 5 },
    ],
  },
  {
    id: "integrations",
    prompt: "How many external systems must Odoo talk to?",
    helpText: "POS, ecommerce, payment gateways, logistics APIs, bank feeds…",
    choices: [
      { label: "None, standalone is fine", points: 0 },
      { label: "1–2 simple integrations", points: 1 },
      { label: "3–5 integrations", points: 3 },
      { label: "6+ or custom integrations", points: 5 },
    ],
  },
  {
    id: "myinvois",
    prompt: "Where are you on MyInvois / LHDN e-Invoicing?",
    choices: [
      { label: "Not yet mandated", points: 0 },
      { label: "Mandated soon — need help", points: 1 },
      { label: "Already issuing e-invoices", points: 2 },
      { label: "Complex — multi-entity, consolidated", points: 3 },
    ],
  },
  {
    id: "urgency",
    prompt: "When do you need to go live?",
    choices: [
      { label: "No rush — 6+ months", points: 0 },
      { label: "Within 3 months", points: 1 },
      { label: "Within 6–8 weeks", points: 2 },
      { label: "ASAP", points: 3 },
    ],
  },
  {
    id: "custom",
    prompt: "How custom are your workflows?",
    helpText: "Be honest — custom is expensive, standard is fast.",
    choices: [
      { label: "Pretty standard", points: 0 },
      { label: "Some tweaks needed", points: 1 },
      { label: "Several custom workflows", points: 2 },
      { label: "Heavy customisation / industry-specific", points: 4 },
    ],
  },
];

export interface ScorecardResult {
  totalPoints: number;
  recommendedTier: TierId;
  tierData: Tier;
}

export const scoreToTier = (answers: number[]): ScorecardResult => {
  const totalPoints = answers.reduce((sum, pts) => sum + (pts || 0), 0);
  const matched = tiers.find((tier) => {
    const lowerOk = totalPoints >= tier.minPoints;
    const upperOk = tier.maxPoints === null || totalPoints <= tier.maxPoints;
    return lowerOk && upperOk;
  });
  const recommendedTier: TierId = matched ? matched.id : "bespoke";
  return {
    totalPoints,
    recommendedTier,
    tierData: tierById(recommendedTier),
  };
};

export const answersToUrlParam = (answers: number[]): string =>
  answers.map((a) => (a === undefined || a === null ? "" : String(a))).join("-");

export const urlParamToAnswers = (param: string | null | undefined): number[] => {
  if (!param) return [];
  return param
    .split("-")
    .map((chunk) => {
      if (chunk === "") return NaN;
      const n = Number(chunk);
      return Number.isFinite(n) ? n : NaN;
    })
    .filter((n) => Number.isFinite(n));
};
