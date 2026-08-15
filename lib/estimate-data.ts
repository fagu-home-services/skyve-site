/* Instant Estimate page — mock content. */

export const WIZARD_STEPS = [
  "Property Address",
  "Roof Type",
  "Project Type",
  "Roof Details",
  "Results",
] as const;

export const RECENT_SEARCHES = [
  "12345 NE 85th St, Kirkland, WA 98033",
  "4567 156th Ave SE, Bellevue, WA 98007",
  "8901 224th St SW, Edmonds, WA 98026",
];

export const AERIAL_BENEFITS = [
  "More accurate measurements",
  "No need for initial on-site visit",
  "Faster estimates",
  "Powered by advanced technology",
];

/** Aerial-data panel image (mock — replace with a real Skyve drone capture). */
export const AERIAL_IMAGE = "/images/home-day-4.webp";

export const ESTIMATE_STATS = [
  { icon: "radar", value: "99%+", label: "Aerial Accuracy" },
  { icon: "file", value: "10,000+", label: "Projects Analyzed" },
  { icon: "clock", value: "45 sec", label: "Average Time" },
  { icon: "shield", value: "100%", label: "Data Security" },
] as const;

export const INCLUDED = [
  { icon: "ruler", title: "Roof Measurements", desc: "Accurate aerial measurements" },
  { icon: "layers", title: "Material Options", desc: "Top quality materials and brands" },
  { icon: "hardhat", title: "Labor & Installation", desc: "Professional crew and installation" },
  { icon: "file", title: "Permits & Fees", desc: "All required permits and local fees" },
  { icon: "trash", title: "Cleanup & Disposal", desc: "Complete cleanup and disposal" },
  { icon: "shield", title: "Warranty Coverage", desc: "Workmanship and material warranty" },
] as const;

/* Ordered so even indices fill the left column, odd the right (matches reference). */
export const ESTIMATE_FAQ = [
  {
    q: "How accurate is the instant estimate?",
    a: "Our instant estimates land within 5–10% of the final invoice, using aerial measurements and local pricing data. A paid detailed estimate locks the exact price.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. Every estimate includes an itemized breakdown — materials, labor, permits, disposal — with our margin shown. What you see is what you pay.",
  },
  {
    q: "Do I need to schedule an inspection?",
    a: "Not for the instant estimate — we measure your roof from aerial data. For complex roofs or a locked price, we offer an on-site or drone inspection.",
  },
  {
    q: "How long is the estimate valid?",
    a: "Your instant estimate is valid for 30 days. Material prices can shift, so we re-confirm pricing when you're ready to move forward.",
  },
  {
    q: "What if I need a repair instead of replacement?",
    a: "We handle both. If your roof needs a targeted repair, choose 'Repair' in the wizard and we'll scope just the affected area.",
  },
  {
    q: "Can I finance my project?",
    a: "Yes. We offer flexible financing with monthly payment options — explore plans on our financing page or during checkout.",
  },
];

/* ============================================================
   DETAILED ESTIMATE PAGE
   ============================================================ */

export const DETAILED_HERO_IMAGE = "/images/home-day-2.webp";

export const DETAILED_HERO_FEATURES = [
  { icon: "drone", title: "Drone Inspection", desc: "High-resolution aerial photos & measurements" },
  { icon: "shield", title: "100% Transparent", desc: "No hidden fees. No surprises." },
  { icon: "file", title: "Detailed Breakdown", desc: "Materials, labor, permits and timeline." },
  { icon: "shield", title: "Workmanship Warranty", desc: "Industry-leading protection." },
] as const;

export const DETAILED_PRICE = "150";

export const DETAILED_INCLUDES = [
  "Drone Inspection (Aerial & Close-up)",
  "Precise Measurements",
  "Material & Labor Breakdown",
  "Permit & Fee Estimation",
  "Timeline & Project Plan",
  "Digital Report (PDF + Portal Access)",
  "30-Day Price Guarantee",
];

export const DETAILED_INCLUDED = [
  { icon: "drone", title: "Drone Inspection", desc: "Aerial photos and 3D measurements for maximum accuracy." },
  { icon: "layers", title: "Material Breakdown", desc: "Detailed list of materials, quantities, brands and warranty information." },
  { icon: "hardhat", title: "Labor & Installation", desc: "Clear breakdown of all labor, installation steps, and crew details." },
  { icon: "file", title: "Permits & Fees", desc: "We include all required permits and local fees in your estimate." },
  { icon: "clock", title: "Timeline", desc: "Expected start date, project duration and completion timeline." },
  { icon: "document", title: "Digital Report", desc: "Professional PDF report with photos, scope and investment summary." },
] as const;

export type InvestmentLevel = {
  badge: string;
  name: string;
  price: string;
  desc: string;
  features: string[];
  popular: boolean;
};

export const INVESTMENT_LEVELS: InvestmentLevel[] = [
  {
    badge: "Essential",
    name: "Quality & Value",
    price: "14,800",
    desc: "Reliable materials with solid performance and manufacturer warranty.",
    features: [
      "Architectural Asphalt Shingles",
      "30-Year Manufacturer Warranty",
      "Standard Underlayment",
      "Ridge Ventilation",
    ],
    popular: false,
  },
  {
    badge: "Preferred",
    name: "Best Balance",
    price: "18,900",
    desc: "Upgraded materials with better durability and longer protection.",
    features: [
      "Architectural Premium Shingles",
      "50-Year Manufacturer Warranty",
      "Upgraded Underlayment",
      "Enhanced Ventilation System",
    ],
    popular: false,
  },
  {
    badge: "Premium",
    name: "Maximum Protection",
    price: "24,750",
    desc: "Top-tier materials for maximum durability and curb appeal.",
    features: [
      "Designer Shingles or Metal Roofing",
      "Lifetime Manufacturer Warranty",
      "Premium Underlayment",
      "Advanced Ventilation System",
    ],
    popular: true,
  },
];

export const PROJECT_TIMELINE = [
  { day: "Day 1-2", title: "Final Inspection & Measurements", desc: "We confirm all measurements and finalize the scope.", icon: "ruler" },
  { day: "Day 3-5", title: "Permits & Material Ordering", desc: "We pull permits and order all materials.", icon: "file" },
  { day: "Day 7", title: "Project Start", desc: "Materials delivered and crew arrives on site.", icon: "wrench" },
  { day: "Day 7-10", title: "Installation", desc: "Roof installation completed with daily cleanup.", icon: "hammer" },
  { day: "Day 11", title: "Final Walkthrough", desc: "We inspect everything together and ensure you're 100% satisfied.", icon: "shield" },
] as const;

export const REPORT_SAMPLE = {
  title: "Detailed Roof Estimate",
  address: "12345 NE 88th St, Kirkland, WA 98033",
  preparedFor: "John & Jane Doe",
  date: "May 21, 2026",
  houseImage: "/images/1558036117-15d82a90b9b1.jpg",
  aerialImage: "/images/1632759145351-1d592919f522.jpg",
};
