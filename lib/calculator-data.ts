import { liveHref } from "@/lib/launch-phase";
/* Calculator pages (/calculators/[calc]) — mock content.
   Static prototype: inputs are visual, estimate panel shows a sample result.
   Data-driven: add an object + register it in CALC_PAGES. */

const img = (id: string) => `/images/${id}.jpg`;

export type CalcField = { label: string; value: string; options?: string[]; unit?: string };

export type CalcData = {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  level: string;
  eyebrow: string;
  titleLines: string[];
  desc: string;
  image: string;
  stats: { icon: string; title: string; sub: string }[];
  rating: string;
  badge: { title: string; desc: string };
  steps: { n: number; title: string; desc: string }[];
  formTitle: string;
  addressLabel: string;
  topFields: CalcField[];
  complexity: { icon: string; label: string; desc: string }[];
  midFields: CalcField[];
  featuresLabel: string;
  features: { label: string; on: boolean }[];
  timeline: CalcField;
  nextButton: string;
  extrasRow: boolean;
  howItWorks?: { title: string; desc: string };
  whatAffects?: { title: string; items: { icon: string; title: string; desc: string }[] };
  whatsIncluded: string[];
  precise: { title: string; desc: string; button: string; href: string };
  estimate: { label: string; range: string; perSqFt: string; accuracy: string };
  summary: { label: string; value: string }[];
  materialsHeading: string;
  materials: { name: string; range: string; note: string; selected: boolean; image: string }[];
  breakdown: { total: string; segments: { label: string; amount: string; pct: number; color: string }[] };
  recentHeading: string;
  recent: { city: string; size: string; price: string; image: string }[];
  resources: { icon: string; title: string; desc: string; href: string }[];
};

const COMMON_STATS = [
  { icon: "document", title: "100% Free", sub: "No obligation" },
  { icon: "mappin", title: "Real Local Pricing", sub: "Washington Based" },
  { icon: "zap", title: "Instant Results", sub: "Accurate Estimates" },
];

const COMMON_MATERIALS_IMG = [img("1570129477492-45c003edd2be"), img("1576941089067-2de3c901e126"), img("1572120360610-d971b9d7767c")];

const COMMON_RESOURCES = [
  { icon: "document", title: "Roof Replacement Guide", desc: "Everything you need to know", href: "/learn/roof-replacement" },
  { icon: "layers", title: "Choosing Materials", desc: "Compare roofing options", href: "/learn/shingles" },
  { icon: "shield", title: "Understanding Warranties", desc: "Protect your investment", href: "/learn/roof-replacement" },
  { icon: "wallet", title: "Financing Options", desc: "Flexible payment solutions", href: "/financing" },
];

const COMMON_RECENT = [
  { city: "Kirkland, WA", size: "2,100 sq ft", price: "$22,800", image: img("1570129477492-45c003edd2be") },
  { city: "Bellevue, WA", size: "1,850 sq ft", price: "$19,600", image: img("1576941089067-2de3c901e126") },
  { city: "Redmond, WA", size: "2,400 sq ft", price: "$24,300", image: img("1564013799919-ab600027ffc6") },
  { city: "Sammamish, WA", size: "2,200 sq ft", price: "$22,100", image: img("1531971589569-0d9370cbe1e5") },
  { city: "Bothell, WA", size: "1,900 sq ft", price: "$20,400", image: img("1632759145351-1d592919f522") },
];

export const ROOF_COST: CalcData = {
  slug: "roof-cost",
  metaTitle: "Roofing Cost Calculator — Instant WA Estimate",
  metaDesc: "Get an instant, accurate roof cost estimate based on real Washington pricing. Customize by material, size, slope, and complexity.",
  level: "Level 10",
  eyebrow: "Tools & Calculators",
  titleLines: ["Roofing Cost", "Calculator"],
  desc: "Get an instant, accurate estimate for your new roof based on real pricing in Washington. Customize your project and see pricing by material, size, and complexity.",
  image: img("1600596542815-ffad4c1539a9"),
  stats: COMMON_STATS,
  rating: "Trusted by 15,000+ homeowners",
  badge: { title: "Guaranteed Accuracy", desc: "Our estimates are based on real project data from 1,000+ actual roofing projects." },
  steps: [
    { n: 1, title: "Project Details", desc: "Tell us about your roof" },
    { n: 2, title: "Materials & Options", desc: "Choose your preferences" },
    { n: 3, title: "Results", desc: "See your instant estimate" },
  ],
  formTitle: "1. Project Details",
  addressLabel: "Property Location",
  topFields: [
    { label: "Roof Size (Approx.)", value: "2,000", unit: "sq ft" },
    { label: "Roof Slope", value: "6/12 (Medium)", options: ["3/12 (Low)", "6/12 (Medium)", "9/12 (Steep)", "12/12 (Very Steep)"] },
    { label: "Number of Stories", value: "2 Stories", options: ["1 Story", "2 Stories", "3 Stories"] },
  ],
  complexity: [
    { icon: "home", label: "Simple", desc: "Basic roof shape" },
    { icon: "layers", label: "Medium", desc: "Some valleys & dormers" },
    { icon: "grid", label: "Complex", desc: "Multiple levels & angles" },
    { icon: "star", label: "Very Complex", desc: "High complexity custom design" },
  ],
  midFields: [
    { label: "Current Roof Condition", value: "Replace Existing Roof", options: ["Replace Existing Roof", "New Construction", "Overlay Existing Roof"] },
    { label: "Number of Layers", value: "1 Layer (Tear-off)", options: ["1 Layer (Tear-off)", "2 Layers (Tear-off)", "No Tear-off"] },
  ],
  featuresLabel: "Additional Features",
  features: [
    { label: "Chimney (1)", on: true },
    { label: "Skylights (2)", on: true },
    { label: "Roof Ventilation", on: false },
    { label: "Roof Windows", on: false },
    { label: "Solar Prep", on: false },
    { label: "Ice & Water Shield", on: true },
    { label: "Upgraded Underlayment", on: false },
  ],
  timeline: { label: "Project Timeline", value: "Within 1-3 months", options: ["ASAP", "Within 1-3 months", "3-6 months", "Just researching"] },
  nextButton: "Next: Choose Materials & Options",
  extrasRow: false,
  howItWorks: { title: "How It Works", desc: "Our calculator uses real local pricing, material costs, labor rates, and project data from hundreds of completed roofing projects in Washington state." },
  whatsIncluded: [
    "Complete tear-off and disposal",
    "High-quality materials and underlayment",
    "Professional installation by certified crews",
    "Permits and inspection fees",
    "Workmanship warranty (10 years)",
    "Manufacturer warranty (up to lifetime)",
  ],
  precise: { title: "Get a Precise Estimate", desc: "This is an instant estimate. Get a free on-site inspection for precise pricing tailored to your home.", button: "Get Free Inspection", href: liveHref("/services/roof-inspection", "/contact") },
  estimate: { label: "Estimated Project Cost", range: "$18,400 - $24,800", perSqFt: "$9.20 - $12.40 per sq ft", accuracy: "High" },
  summary: [
    { label: "Roof Size", value: "2,000 sq ft" },
    { label: "Roof Slope", value: "6/12 (Medium)" },
    { label: "Stories", value: "2 Stories" },
    { label: "Complexity", value: "Medium" },
    { label: "Tear-off", value: "1 Layer" },
    { label: "Timeline", value: "Within 1-3 months" },
  ],
  materialsHeading: "Popular Material Choices",
  materials: [
    { name: "Architectural Shingles", range: "$18,400 - $22,800", note: "Most Popular", selected: true, image: COMMON_MATERIALS_IMG[0] },
    { name: "Metal Roofing", range: "$28,800 - $38,200", note: "Premium Choice", selected: false, image: COMMON_MATERIALS_IMG[1] },
    { name: "Cedar Shake", range: "$26,100 - $34,700", note: "Natural Beauty", selected: false, image: COMMON_MATERIALS_IMG[2] },
  ],
  breakdown: {
    total: "$21,600",
    segments: [
      { label: "Materials", amount: "$11,230", pct: 52, color: "var(--color-horizon-deep)" },
      { label: "Labor", amount: "$6,480", pct: 30, color: "var(--color-ridge)" },
      { label: "Disposal", amount: "$1,150", pct: 5, color: "var(--color-danger)" },
      { label: "Permits & Fees", amount: "$875", pct: 4, color: "var(--color-warning)" },
      { label: "Other Costs", amount: "$1,865", pct: 9, color: "var(--color-ink-50)" },
    ],
  },
  recentHeading: "Recent Projects in Your Area",
  recent: COMMON_RECENT,
  resources: COMMON_RESOURCES,
};

export const ROOF_REPLACEMENT_CALC: CalcData = {
  slug: "roof-replacement",
  metaTitle: "Roof Replacement Calculator — Complete WA Estimate",
  metaDesc: "Estimate a complete roof replacement based on your home's size, roof complexity, and material selection. Real Washington pricing, 100% free.",
  level: "Level 10",
  eyebrow: "Tools & Calculators",
  titleLines: ["Roof Replacement", "Calculator"],
  desc: "Get an instant, accurate estimate for a complete roof replacement based on your home's size, roof complexity, and material selection.",
  image: img("1600596542815-ffad4c1539a9"),
  stats: COMMON_STATS,
  rating: "Trusted by 15,000+ homeowners",
  badge: { title: "Guaranteed Accuracy", desc: "Our estimates are based on real project data from 1,000+ roof replacements across Washington." },
  steps: [
    { n: 1, title: "Home & Roof Details", desc: "Tell us about your home" },
    { n: 2, title: "Choose Materials", desc: "Select your roofing system" },
    { n: 3, title: "Additional Options", desc: "Customize your project" },
    { n: 4, title: "Results", desc: "See your complete estimate" },
  ],
  formTitle: "1. Home & Roof Details",
  addressLabel: "Property Address",
  topFields: [
    { label: "Total Roof Area (Approx.)", value: "2,000", unit: "sq ft" },
    { label: "Number of Stories", value: "2 Stories", options: ["1 Story", "2 Stories", "3 Stories"] },
    { label: "Roof Pitch / Slope", value: "6/12 (Medium)", options: ["3/12 (Low)", "6/12 (Medium)", "9/12 (Steep)", "12/12 (Very Steep)"] },
  ],
  complexity: [
    { icon: "home", label: "Simple", desc: "Basic roof shape few penetrations" },
    { icon: "layers", label: "Medium", desc: "Some valleys & dormers" },
    { icon: "grid", label: "Complex", desc: "Multiple valleys & roof transitions" },
    { icon: "star", label: "Very Complex", desc: "High complexity custom design" },
  ],
  midFields: [
    { label: "Current Roof", value: "Remove Existing Roof (Tear-off)", options: ["Remove Existing Roof (Tear-off)", "New Construction", "Overlay Existing Roof"] },
    { label: "Roof Deck Condition", value: "In Good Condition (No structural issues)", options: ["In Good Condition (No structural issues)", "Minor Repairs Needed", "Full Deck Replacement"] },
  ],
  featuresLabel: "Roof Features",
  features: [
    { label: "Chimney (1)", on: true },
    { label: "Skylights (2)", on: true },
    { label: "Roof Ventilation", on: true },
    { label: "Roof Windows", on: false },
    { label: "Solar Panels (Remove & Reinstall)", on: false },
    { label: "Ice & Water Shield", on: false },
  ],
  timeline: { label: "Project Timeline", value: "Within 1-3 months", options: ["ASAP", "Within 1-3 months", "3-6 months", "Just researching"] },
  nextButton: "Next: Choose Materials",
  extrasRow: true,
  whatAffects: {
    title: "What Affects Roof Replacement Costs?",
    items: [
      { icon: "home", title: "Roof Size & Complexity", desc: "Larger and more complex roofs require more materials and labor." },
      { icon: "layers", title: "Material Choice", desc: "Different materials have different costs and lifespans." },
      { icon: "ruler", title: "Accessibility", desc: "Easy access lowers costs; difficult access increases labor time." },
      { icon: "mappin", title: "Local Market", desc: "Local labor rates and material costs vary by region." },
    ],
  },
  whatsIncluded: [
    "Complete tear-off and disposal",
    "New underlayment and ice & water shield",
    "Drip edge, flashing & ventilation",
    "Installation of selected roofing material",
    "Permits and inspection fees",
    "Clean up and magnetic sweep",
    "Workmanship warranty (10 years)",
    "Manufacturer warranty (up to lifetime)",
  ],
  precise: { title: "Ready for a Precise Estimate?", desc: "Get a free, no-obligation inspection and exact quote for your roof replacement.", button: "Get Free Inspection", href: liveHref("/services/roof-inspection", "/contact") },
  estimate: { label: "Estimated Replacement Cost", range: "$18,200 - $28,700", perSqFt: "$9.10 - $14.35 per sq ft", accuracy: "High" },
  summary: [
    { label: "Roof Area", value: "2,000 sq ft" },
    { label: "Stories", value: "2 Stories" },
    { label: "Roof Pitch", value: "6/12 (Medium)" },
    { label: "Complexity", value: "Medium" },
    { label: "Tear-off", value: "Remove & Dispose" },
    { label: "Roof Deck Condition", value: "Good Condition" },
    { label: "Timeline", value: "Within 1-3 months" },
  ],
  materialsHeading: "Popular Roofing Choices",
  materials: [
    { name: "Architectural Shingles", range: "$18,200 - $24,600", note: "Most Popular", selected: true, image: COMMON_MATERIALS_IMG[0] },
    { name: "Metal Roofing", range: "$24,900 - $37,900", note: "Premium Choice", selected: false, image: COMMON_MATERIALS_IMG[1] },
    { name: "Cedar Shake", range: "$28,100 - $42,700", note: "Natural Beauty", selected: false, image: COMMON_MATERIALS_IMG[2] },
  ],
  breakdown: {
    total: "$23,450",
    segments: [
      { label: "Materials", amount: "$11,900", pct: 51, color: "var(--color-horizon-deep)" },
      { label: "Labor", amount: "$6,450", pct: 28, color: "var(--color-ridge)" },
      { label: "Disposal", amount: "$1,200", pct: 5, color: "var(--color-danger)" },
      { label: "Permits & Fees", amount: "$1,100", pct: 5, color: "var(--color-warning)" },
      { label: "Other Costs", amount: "$2,800", pct: 11, color: "var(--color-ink-50)" },
    ],
  },
  recentHeading: "Recent Roof Replacements in Your Area",
  recent: COMMON_RECENT,
  resources: COMMON_RESOURCES,
};

export const CALC_PAGES: Record<string, CalcData> = {
  "roof-cost": ROOF_COST,
  "roof-replacement": ROOF_REPLACEMENT_CALC,
};

export const getCalc = (slug: string) => CALC_PAGES[slug];
