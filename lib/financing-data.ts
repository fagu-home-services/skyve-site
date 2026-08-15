/* Financing page (/financing) — mock content. */

export const FINANCING_HERO_IMAGE = "/images/home-day-3.webp";

export const FINANCING_HERO_FEATURES = [
  { icon: "dollar", title: "Low Monthly Payments" },
  { icon: "percent", title: "Competitive Rates" },
  { icon: "clock", title: "Fast & Easy Approval" },
  { icon: "shield", title: "No Prepayment Penalties" },
] as const;

export const FINANCING_BENEFITS = [
  { icon: "wallet", title: "Affordable Payments", desc: "Low monthly payments make it easy to fit quality roofing into your budget." },
  { icon: "calendar", title: "Flexible Terms", desc: "Choose repayment terms that fit your financial situation." },
  { icon: "badge", title: "Quick Approval", desc: "Get approved in minutes with a soft credit check that won't impact your score." },
  { icon: "shield", title: "Peace of Mind", desc: "Enjoy long-term protection with predictable, manageable payments." },
] as const;

export const FINANCING_TERMS = [
  { months: 12, apr: 0.0 },
  { months: 24, apr: 6.99 },
  { months: 36, apr: 7.99 },
  { months: 60, apr: 8.99 },
];

export const LOAN_TERM_OPTIONS = [12, 24, 36, 48, 60];

export const PROJECT_TYPES = [
  "Roof Replacement",
  "Roof Repair",
  "Metal Roofing",
  "Siding",
  "Exterior Project",
];

export const FINANCING_PARTNERS = [
  "GreenSky",
  "GoodLeap",
  "Service Finance",
  "Fortiva",
  "Synchrony",
];

export const FINANCING_FAQ = [
  {
    q: "Will applying for financing affect my credit score?",
    a: "Checking your rate uses a soft credit pull that does not affect your score. A hard inquiry only happens if you formally accept a loan offer.",
  },
  {
    q: "Can I finance a roof repair or only replacement?",
    a: "Both. Financing is available for repairs, full replacements, and exterior projects — subject to a minimum project amount.",
  },
  {
    q: "What credit score do I need to qualify?",
    a: "Our lending partners work with a wide range of credit profiles. Many homeowners qualify with fair credit, and options improve with higher scores.",
  },
  {
    q: "What documents do I need?",
    a: "Typically just a government-issued ID and basic income information. The application takes only a few minutes to complete.",
  },
  {
    q: "How quickly will I get approved?",
    a: "Most applicants receive a decision within minutes of submitting the online application.",
  },
  {
    q: "Do you offer 0% interest financing?",
    a: "Yes — promotional 0% APR plans are available for qualified buyers on select terms. Ask us which promotions are currently active.",
  },
  {
    q: "Is there a penalty for paying off early?",
    a: "No. Our financing options have no prepayment penalties, so you can pay off your balance early and save on interest.",
  },
  {
    q: "Can I change my monthly payment due date?",
    a: "Yes — most lending partners let you adjust your due date to align with your pay schedule through their online portal.",
  },
];
