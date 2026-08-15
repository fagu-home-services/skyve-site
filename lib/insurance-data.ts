/* Insurance Claims Assistance page (/services/insurance-claims-assistance) — mock. */

const img = (id: string) => `/images/${id}.jpg`;

export const INSURANCE_HERO_IMAGE = "/images/storm-damage-2.webp";

export const WORK_FOR_YOU = {
  title: "We Work For You, Not The Insurance Company",
  items: [
    "Detailed roof inspections",
    "Documentation & photos",
    "Claim preparation",
    "Meet with adjuster",
    "Maximize your coverage",
    "Restore your home",
  ],
};

export const INSURANCE_BENEFITS = [
  { icon: "shield", title: "Maximize Coverage", desc: "We ensure all damage is documented so you get the coverage you deserve." },
  { icon: "file", title: "Expert Documentation", desc: "Detailed reports and photos that meet insurance requirements." },
  { icon: "message", title: "Claim Support", desc: "We guide you through the entire claims process from start to finish." },
  { icon: "users", title: "Meet With Adjuster", desc: "We meet with your adjuster to ensure accurate damage assessment." },
  { icon: "heart", title: "Reduce Stress", desc: "We handle the paperwork so you can focus on what matters most." },
  { icon: "home", title: "No Out-of-Pocket Surprises", desc: "We help prevent unexpected costs and uncovered expenses." },
] as const;

export const CLAIM_REASONS = [
  { label: "Hail Damage", image: img("1576941089067-2de3c901e126") },
  { label: "Wind Damage", image: img("1568605114967-8130f3a36994") },
  { label: "Storm Damage", image: img("1572120360610-d971b9d7767c") },
  { label: "Fallen Trees", image: img("1583608205776-bfd35f0d9f83") },
  { label: "Water Intrusion", image: img("1600585154340-be6161a56a0c") },
  { label: "Ice & Snow Damage", image: img("1531971589569-0d9370cbe1e5") },
];

export const INSURANCE_PROCESS = [
  { n: 1, title: "Free Inspection", desc: "We inspect your roof and identify all storm or damage-related issues." },
  { n: 2, title: "Documentation", desc: "We create a detailed report with photos and notes of all damage." },
  { n: 3, title: "Claim Preparation", desc: "We help you file your claim and provide all required documentation." },
  { n: 4, title: "Adjuster Meeting", desc: "We meet with your adjuster to ensure accurate damage evaluation." },
  { n: 5, title: "Approval & Review", desc: "We review the scope of work and ensure it covers all necessary repairs." },
  { n: 6, title: "Restoration", desc: "Once approved, we complete high-quality repairs and restore your roof." },
] as const;

export const DOCUMENT_EVERYTHING = [
  "High-resolution photos",
  "Detailed damage assessment",
  "Drone inspections",
  "Measurements & diagrams",
  "Code & manufacturer references",
  "Professional reporting",
];

export const CLAIM_SUPPORT_INCLUDES = [
  "Free roof inspection",
  "Damage documentation",
  "Claim filing assistance",
  "Communication with your insurer",
  "Adjuster meeting support",
  "Scope review & negotiations",
  "Project management",
  "Quality restoration",
];

export const INSURANCE_REVIEW = {
  name: "Brian K.",
  city: "Bellevue, WA",
  initials: "BK",
  quote: "Skyve made the entire insurance claim process so easy. They handled everything and got my roof fully covered. Highly recommend!!!",
};

export const COVERAGE = {
  title: "We Help You Get The Coverage You Deserve",
  intro: "Insurance companies have their own process. We know how to work within it to get the best outcome for you.",
  checklist: [
    "We know the local adjusters",
    "We understand insurance guidelines",
    "We fight for full & fair coverage",
    "We never cut corners",
  ],
  image: img("1564013799919-ab600027ffc6"),
};

export const INSURANCE_FAQ = [
  { q: "Do I really need a professional inspection for my claim?", a: "Yes. A documented professional inspection strengthens your claim and helps ensure all damage is covered." },
  { q: "Will you help me file my insurance claim?", a: "Absolutely. We guide you through filing and provide all the documentation your insurer requires." },
  { q: "What if the insurance adjuster misses damage?", a: "We meet the adjuster on-site and advocate for a complete, accurate assessment of all damage." },
  { q: "Do you meet with the insurance adjuster?", a: "Yes. We attend the adjuster meeting to make sure nothing gets overlooked." },
  { q: "How long does the claim process take?", a: "It varies by insurer, but most claims move from inspection to approval within a few weeks." },
  { q: "Do I pay anything upfront?", a: "The inspection and claim consultation are free. In most cases you only pay your policy deductible." },
];

export const INSURANCE_CTA_TRUST = [
  { icon: "badge", label: "No Obligation" },
  { icon: "search", label: "Free Inspection" },
  { icon: "heart", label: "We Work For You" },
] as const;

export const INSURANCE_CTA_IMAGE = "/images/hero-home-dusk-2.webp";
export const REPORT_IMAGE = "/images/roof-inspection-2.webp";
