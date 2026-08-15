import { liveHref } from "@/lib/launch-phase";
/* Roof Life Expectancy Calculator (/calculators/roof-life-expectancy) — mock content.
   Static prototype: inputs are visual, results show a sample estimate. */

const img = (id: string) => `/images/${id}.jpg`;

export const RL_HERO = {
  level: "Level 10",
  eyebrow: "Tools & Calculators",
  titleLines: ["Roof Life Expectancy", "Calculator"],
  desc: "Estimate how many years of life your roof has left based on material, installation quality, maintenance, and local weather conditions.",
  image: img("1600596542815-ffad4c1539a9"),
  stats: [
    { icon: "document", title: "100% Free", sub: "No signup needed" },
    { icon: "chart", title: "Real Data Driven", sub: "Industry & local data" },
    { icon: "zap", title: "Accurate Estimate", sub: "Personalized results" },
  ],
  rating: "Trusted by 15,000+ homeowners",
  badge: { title: "Know Your Roof. Plan Ahead.", desc: "Understand your roof's current health and estimated remaining life to make smarter decisions and avoid surprises." },
};

export const RL_STEPS = [
  { n: 1, title: "Roof Details", desc: "Tell us about your roof" },
  { n: 2, title: "Condition & Maintenance", desc: "Rate the current condition" },
  { n: 3, title: "Environment Factors", desc: "Local climate & exposure" },
  { n: 4, title: "Results", desc: "See your roof life estimate" },
];

export const RL_DETAILS = {
  row1: [
    { label: "Roofing Material", value: "Architectural Asphalt Shingles", options: ["Architectural Asphalt Shingles", "3-Tab Shingles", "Metal Roofing", "Cedar Shake", "Tile", "TPO / Flat"] },
    { label: "Roof Age (Years)", value: "8", unit: "years" },
    { label: "Installation Quality", value: "Professional Installation", options: ["Professional Installation", "DIY / Handyman", "Unknown"] },
  ],
  row2: [
    { label: "Number of Layers", value: "1 Layer", options: ["1 Layer", "2 Layers"] },
    { label: "Roof Pitch / Slope", value: "6/12 (Medium)", options: ["3/12 (Low)", "6/12 (Medium)", "9/12 (Steep)"] },
    { label: "Attic Ventilation", value: "Good", options: ["Poor", "Fair", "Good", "Excellent"] },
  ],
  exposure: [
    { icon: "cloud", label: "Protected", desc: "Surrounded by trees/buildings" },
    { icon: "home", label: "Normal", desc: "Typical residential exposure" },
    { icon: "sun", label: "Exposed", desc: "Open area, minimal trees" },
    { icon: "wind", label: "Extreme", desc: "High winds, coastal area" },
  ],
};

export const RL_CONDITION = {
  sliders: [
    { label: "Current Roof Condition", labels: ["Poor", "Fair", "Good", "Excellent"], active: 2 },
    { label: "Maintenance Frequency", labels: ["Poor", "Occasional", "Regular", "Excellent"], active: 2 },
  ],
  chips: [
    { label: "Roof Cleaning", on: true },
    { label: "Gutter Cleaning", on: true },
    { label: "Minor Repairs", on: true },
    { label: "Sealant / Caulking", on: false },
    { label: "None", on: false },
  ],
};

export const RL_ENVIRONMENT = [
  { label: "Location", value: "Washington", options: ["Washington", "Oregon", "California", "Other"] },
  { label: "Climate Severity", value: "Moderate", options: ["Mild", "Moderate", "Severe"] },
  { label: "Sun Exposure", value: "Moderate", options: ["Low", "Moderate", "High"] },
  { label: "Average Annual Rainfall", value: '30" – 50"', options: ['Under 30"', '30" – 50"', 'Over 50"'] },
  { label: "Average Annual Snowfall", value: '10" – 30"', options: ['Under 10"', '10" – 30"', 'Over 30"'] },
  { label: "Summer Temperatures", value: "70°F – 85°F", options: ["Under 70°F", "70°F – 85°F", "Over 85°F"] },
  { label: "Winter Temperatures", value: "20°F – 40°F", options: ["Under 20°F", "20°F – 40°F", "Over 40°F"] },
  { label: "Wind Exposure", value: "Moderate", options: ["Low", "Moderate", "High"] },
];

export const RL_EXPECTANCY = {
  remaining: "11 – 16 Years Remaining",
  condition: "Good Condition",
  metrics: [
    { label: "Current Roof Age", value: "8 Years" },
    { label: "Expected Total Lifespan", value: "20 – 25 Years" },
    { label: "Percentage of Life Used", value: "32%" },
  ],
};

export const RL_BREAKDOWN = {
  bars: [
    { label: "Material Expected Lifespan", value: "25 Years", pct: 100, color: "var(--color-sky)" },
    { label: "Age Deduction", value: "-8 Years", pct: 32, color: "var(--color-success)" },
    { label: "Condition Adjustment", value: "-3 Years", pct: 12, color: "var(--color-warning)" },
    { label: "Climate & Environmental Impact", value: "-3 Years", pct: 12, color: "var(--color-warning)" },
  ],
  remaining: "11 – 16 Years",
};

export const RL_FACTORS = [
  { icon: "layers", title: "Material Type", desc: "Architectural shingles typically last 20–25 years." },
  { icon: "calendar", title: "Maintenance", desc: "Regular maintenance can extend roof life by 3–5 years." },
  { icon: "cloud", title: "Climate", desc: "Moderate climate has a typical impact on roof aging." },
  { icon: "wind", title: "Ventilation", desc: "Good ventilation helps prevent moisture & heat damage." },
  { icon: "badge", title: "Installation Quality", desc: "Professional installation improves long-term performance." },
];

export const RL_SCORE = {
  value: 78,
  max: 100,
  label: "Good Condition",
  desc: "Your roof is performing well. Keep up with regular maintenance!",
};

export const RL_RECOMMENDED = [
  { icon: "search", title: "Schedule an Annual Roof Inspection", desc: "Catch small issues before they become costly problems." },
  { icon: "droplet", title: "Keep Gutters Clean", desc: "Proper drainage helps prevent water damage and extends roof life." },
  { icon: "cloud", title: "Check After Severe Weather", desc: "Inspect your roof after storms for potential damage." },
  { icon: "leaf", title: "Trim Overhanging Branches", desc: "Reduce debris and prevent damage from falling branches." },
];

export const RL_SIGNS = [
  "Curling or missing shingles",
  "Granule loss in gutters",
  "Water stains on ceilings or walls",
  "Moss or algae growth",
  "Cracked or brittle shingles",
];

export const RL_INSPECTION = {
  title: "Get a Professional Roof Inspection",
  desc: "Our experts will provide a detailed assessment and help you plan ahead with confidence.",
  button: "Get Free Inspection",
  href: liveHref("/services/roof-inspection", "/contact"),
  image: img("1632759145351-1d592919f522"),
};

export const RL_RESOURCES = [
  { icon: "calendar", title: "Roof Maintenance Guide", desc: "Learn how regular maintenance extends roof life.", href: "/learn/roof-repair" },
  { icon: "document", title: "Roof Replacement Guide", desc: "When to replace vs. repair your roof.", href: "/learn/roof-replacement" },
  { icon: "layers", title: "Roofing Materials Guide", desc: "Compare materials and their lifespans.", href: "/learn/shingles" },
  { icon: "cloud", title: "Storm Damage Guide", desc: "How storms can impact your roof's lifespan.", href: "/learn/storm-damage" },
];
