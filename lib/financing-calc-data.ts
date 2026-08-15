/* Financing Calculator (/calculators/financing) — mock content.
   Static prototype: inputs visual, results show a sample plan.
   Lender names shown as text placeholders (no logo art). */

const img = (id: string) => `/images/${id}.jpg`;

export const FC_HERO = {
  level: "Level 10",
  eyebrow: "Tools & Calculators",
  titleLines: ["Financing", "Calculator"],
  desc: "Explore financing options for your new roof project. See monthly payment estimates, total costs, and find a plan that fits your budget.",
  image: img("1600596542815-ffad4c1539a9"),
  stats: [
    { icon: "badge", title: "No Impact", sub: "Pre-qualification" },
    { icon: "users", title: "Multiple Lenders", sub: "Competitive rates" },
    { icon: "shield", title: "Secure & Private", sub: "100% Safe & Secure" },
  ],
  rating: "Trusted by 15,000+ homeowners",
  badge: { title: "Flexible Financing Options", desc: "Affordable monthly payments for quality roofing that protects your home and your future." },
};

export const FC_STEPS = [
  { n: 1, title: "Project Information", desc: "Tell us about your project" },
  { n: 2, title: "Choose Financing", desc: "Select a loan option" },
  { n: 3, title: "Review Your Plan", desc: "See your payment details" },
  { n: 4, title: "Get Pre-Qualified", desc: "No impact to your credit" },
];

export const FC_PROJECT_TYPES = [
  { icon: "home", label: "Roof Replacement", desc: "Complete tear-off & new roof" },
  { icon: "wrench", label: "Roof Repair", desc: "Partial repairs or restoration" },
  { icon: "layers", label: "Additional Work", desc: "Gutters, skylights, ventilation, etc." },
];

export const FC_FINANCING = {
  loanAmount: { label: "Loan Amount", value: "$24,800", options: ["$24,800", "$20,000", "$30,000"] },
  loanTerm: { label: "Loan Term", value: "10 Years (120 months)", options: ["5 Years (60 months)", "7 Years (84 months)", "10 Years (120 months)", "15 Years (180 months)"] },
  apr: { label: "Interest Rate (APR)", value: "7.99%", options: ["5.99%", "6.99%", "7.99%", "9.99%"] },
  frequency: [
    { label: "Monthly Payments", sub: "", on: true },
    { label: "Bi-Weekly Payments", sub: "(Every 2 weeks)", on: false },
  ],
};

export const FC_OPTIONS = [
  { label: "Include Tax in Loan Amount", on: true },
  { label: "Choose Fixed Interest Rate", on: true },
  { label: "Include Permits in Loan Amount", on: true },
  { label: "Add Deferred Payment Option", on: false },
  { label: "Include Discounts/Rebates", on: false },
  { label: "Include Extended Warranty", on: false },
];

export const FC_PAYMENT = {
  monthly: "$260",
  note: "Based on a loan amount of $24,800 for 120 months at 7.99% APR",
  metrics: [
    { label: "Loan Amount", value: "$24,800" },
    { label: "Interest Rate (APR)", value: "7.99%" },
    { label: "Loan Term", value: "120 Months" },
    { label: "Total of Payments", value: "$31,222" },
  ],
};

export const FC_BREAKDOWN = {
  center: "$260",
  segments: [
    { label: "Principal", amount: "$157.74", pct: 60.7, color: "var(--color-horizon-deep)" },
    { label: "Interest", amount: "$80.36", pct: 30.9, color: "var(--color-ridge)" },
    { label: "Taxes & Fees", amount: "$14.23", pct: 5.5, color: "var(--color-danger)" },
    { label: "Insurance (Optional)", amount: "$7.67", pct: 3.0, color: "var(--color-success)" },
  ],
  totalMonthly: "$260.00",
  totalPayments: "$31,222.40",
};

export const FC_AMORTIZATION = [
  { year: "1", payment: "$260.00", principal: "$1,425.41", interest: "$1,700.59", balance: "$23,374.59" },
  { year: "5", payment: "$260.00", principal: "$8,059.57", interest: "$3,454.43", balance: "$16,740.43" },
  { year: "10", payment: "$260.00", principal: "$16,240.85", interest: "$2,981.95", balance: "$8,559.15" },
  { year: "15", payment: "$260.00", principal: "$20,657.41", interest: "$1,865.39", balance: "$4,142.59" },
  { year: "20", payment: "$260.00", principal: "$22,280.45", interest: "$242.35", balance: "$0.00" },
];

export const FC_LENDERS = [
  { name: "GreenSky", desc: "Quick decisions" },
  { name: "Service Finance Company", desc: "Competitive rates" },
  { name: "GoodLeap", desc: "Better home financing" },
  { name: "Wisetack", desc: "Simple & fast approvals" },
];

export const FC_PREQUAL = [
  "Soft credit check - No impact to your score",
  "Fast decisions - Get approved in minutes",
  "Multiple options - Compare rates and terms",
  "No prepayment penalties",
  "Flexible payment options",
  "100% secure and private",
];

export const FC_INVEST = {
  title: "Invest in Your Home. Protect Your Future.",
  desc: "Financing makes it easy to get the roof your home deserves today, with affordable payments that fit your budget.",
  features: [
    { icon: "chart", title: "Increase Home Value", desc: "A new roof adds value and curb appeal." },
    { icon: "shield", title: "Prevent Costly Damage", desc: "Protect your home from leaks and structural issues." },
    { icon: "heart", title: "Peace of Mind", desc: "Enjoy worry-free protection for years to come." },
  ],
};

export const FC_HELP = {
  title: "Need Help Choosing the Right Plan?",
  desc: "Our roofing experts are here to help you find the best financing option for your project and budget.",
  button: "Talk to a Roofing Expert",
};

export const FC_RESOURCES = [
  { title: "Financing Options Guide", href: "/financing" },
  { title: "Understanding Loan Terms", href: "/financing" },
  { title: "Why Finance Your Roof?", href: "/financing" },
  { title: "Frequently Asked Questions", href: "/learn" },
];

export const FC_EXAMPLES = [
  { project: "$15,000 Project", monthly: "$157 /mo" },
  { project: "$20,000 Project", monthly: "$210 /mo" },
  { project: "$25,000 Project", monthly: "$262 /mo" },
  { project: "$30,000 Project", monthly: "$315 /mo" },
];
