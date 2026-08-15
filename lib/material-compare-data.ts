/* Roofing Material Comparison Tool (/calculators/material-comparison) — mock content.
   Static prototype: selections/table are visual with a sample comparison. */

const img = (id: string) => `/images/${id}.jpg`;

export const MC_HERO = {
  level: "Level 10",
  eyebrow: "Tools & Calculators",
  titleLines: ["Roofing Material", "Comparison Tool"],
  desc: "Compare roofing materials side-by-side to find the best option for your home, budget, and long-term goals.",
  image: img("1600596542815-ffad4c1539a9"),
  stats: [
    { icon: "document", title: "Unbiased Comparison", sub: "Real data, not sales pitches" },
    { icon: "badge", title: "Side-by-Side Analysis", sub: "Make confident decisions" },
    { icon: "chart", title: "Save & Share Results", sub: "Download or share your report" },
  ],
  rating: "Trusted by 15,000+ homeowners",
  badge: { title: "Find Your Perfect Roof", desc: "Every home is different. Compare materials based on cost, durability, appearance, and performance." },
};

export const MC_STEPS = [
  { n: 1, title: "Select Materials", desc: "Choose 2-4 materials to compare" },
  { n: 2, title: "Enter Project Details", desc: "Tell us about your roof and home" },
  { n: 3, title: "Compare Results", desc: "See side-by-side comparison" },
  { n: 4, title: "Get Your Report", desc: "Download or share your results" },
];

export const MC_MATERIALS = [
  { name: "Architectural Asphalt Shingles", tag: "Most popular • Great value", on: true, image: img("1570129477492-45c003edd2be") },
  { name: "Metal Roofing (Standing Seam)", tag: "Premium • Longest lifespan", on: true, image: img("1576941089067-2de3c901e126") },
  { name: "Cedar Shake", tag: "Natural beauty • Traditional look", on: false, image: img("1572120360610-d971b9d7767c") },
  { name: "Synthetic Shake", tag: "Premium look • Low maintenance", on: false, image: img("1558036117-15d82a90b9b1") },
  { name: "Slate Tile", tag: "Luxury • Extremely durable", on: false, image: img("1531971589569-0d9370cbe1e5") },
  { name: "Clay Tile", tag: "Mediterranean style • Very durable", on: false, image: img("1564013799919-ab600027ffc6") },
  { name: "TPO Roofing (Flat/Low-Slope)", tag: "Energy efficient • Commercial grade", on: false, image: img("1580587771525-78b9dba3b914") },
  { name: "EPDM Roofing (Flat/Low-Slope)", tag: "Affordable • Easy to install", on: false, image: img("1632759145351-1d592919f522") },
];

export const MC_PROJECT = [
  { label: "Location", value: "Washington", options: ["Washington", "Oregon", "California"] },
  { label: "Home Size (Roof Area)", value: "2,000 sq ft", options: ["1,500 sq ft", "2,000 sq ft", "2,500 sq ft", "3,000 sq ft"] },
  { label: "Roof Slope", value: "6/12 (Medium)", options: ["3/12 (Low)", "6/12 (Medium)", "9/12 (Steep)"] },
  { label: "Primary Priority", value: "Balanced (Cost & Quality)", options: ["Lowest Cost", "Balanced (Cost & Quality)", "Longest Lifespan", "Best Appearance"] },
];

export const MC_COLUMNS = [
  { name: "Architectural Asphalt Shingles", image: img("1570129477492-45c003edd2be") },
  { name: "Metal Roofing (Standing Seam)", image: img("1576941089067-2de3c901e126") },
  { name: "Cedar Shake", image: img("1572120360610-d971b9d7767c") },
  { name: "Synthetic Shake", image: img("1558036117-15d82a90b9b1") },
];

export const MC_ROWS = [
  { label: "Installed Cost (2,000 sq ft)", values: ["$8,200 - $12,000", "$18,000 - $28,000", "$23,000 - $35,000", "$16,000 - $24,000"] },
  { label: "Cost per Sq Ft", values: ["$4.10 - $6.00", "$9.00 - $14.00", "$11.50 - $17.50", "$8.00 - $12.00"] },
  { label: "Lifespan", values: ["20 - 30 Years", "40 - 70 Years", "30 - 50 Years", "40 - 60 Years"] },
  { label: "Warranty", values: ["25 - 50 Years", "30 - 50 Years", "30 Years", "50 Years"] },
  { label: "Maintenance", values: ["Medium", "Low", "High", "Low"] },
  { label: "Durability", values: ["Good", "Excellent", "Good", "Excellent"] },
  { label: "Wind Resistance", values: ["110 - 130 mph", "140 - 180 mph", "100 - 120 mph", "130 - 160 mph"] },
  { label: "Fire Resistance", values: ["Class A", "Class A", "Class C", "Class A"] },
  { label: "Energy Efficiency", values: ["Good", "Excellent", "Good", "Excellent"] },
];

export const MC_APPEARANCE = {
  label: "Appearance Options",
  values: [
    { stars: 4, label: "High" },
    { stars: 4, label: "High" },
    { stars: 5, label: "Very High" },
    { stars: 4, label: "High" },
  ],
};

export const MC_BEST_FOR = {
  label: "Best For",
  values: [
    "Budget-conscious homeowners",
    "Long-term investment & modern homes",
    "Natural look & traditional homes",
    "Premium look with low maintenance",
  ],
};

export const MC_OVERALL = {
  label: "Overall Rating",
  values: [
    { rating: "4.1 / 5.0", tag: "Great Value" },
    { rating: "4.7 / 5.0", tag: "Best Overall" },
    { rating: "4.2 / 5.0", tag: "Best Appearance" },
    { rating: "4.5 / 5.0", tag: "Best Balance" },
  ],
};

export const MC_INSIGHTS = [
  "Metal roofing offers the longest lifespan and best durability, but at a higher upfront cost.",
  "Architectural shingles provide the best value for most homeowners.",
  "Cedar shake delivers unmatched natural beauty but requires the most maintenance.",
  "Synthetic shake gives you the look of wood with lower maintenance.",
];

export const MC_RECOMMENDATION = {
  badge: "Best Overall",
  title: "Recommendation",
  desc: "Based on your priorities and project details, Metal Roofing (Standing Seam) is our top recommendation for your home.",
  points: [
    "Excellent longevity (40-70 years)",
    "Superior durability & weather resistance",
    "Low maintenance requirements",
  ],
};

export const MC_REPORT = [
  { icon: "document", label: "Detailed material comparison" },
  { icon: "dollar", label: "Cost breakdown & timeline" },
  { icon: "chart", label: "Pros & cons analysis" },
  { icon: "wrench", label: "Maintenance requirements" },
  { icon: "shield", label: "Warranty information" },
  { icon: "users", label: "Expert recommendations" },
];
