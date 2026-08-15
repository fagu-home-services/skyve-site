/* Roof Cleaning page (/services/roof-cleaning) — mock content. */

const img = (id: string) => `/images/${id}.jpg`;

export const CLEANING_BEFORE = img("1583608205776-bfd35f0d9f83");
export const CLEANING_AFTER = img("1568605114967-8130f3a36994");

export const CLEANING_HERO_STRIP = [
  { icon: "droplet", title: "Soft Wash System", sub: "Safe for shingles" },
  { icon: "leaf", title: "Eco-Friendly Solutions", sub: "Plant & pet safe" },
  { icon: "shield", title: "Protects Your Roof", sub: "Extends roof lifespan" },
  { icon: "home", title: "Boosts Curb Appeal", sub: "Instantly improves your home" },
] as const;

export const CLEANING_WHY = [
  { icon: "shield", title: "Prevent Damage", desc: "Remove harmful growth that can break down shingles." },
  { icon: "home", title: "Extend Roof Life", desc: "Regular cleaning helps your roof last years longer." },
  { icon: "star", title: "Boost Curb Appeal", desc: "A clean roof dramatically improves the look of your home." },
  { icon: "chart", title: "Increase Home Value", desc: "Well-maintained roofs add value and confidence for buyers." },
] as const;

export const CLEANING_INCLUDED = [
  { title: "Moss & Debris Removal", desc: "We remove moss, leaves, pine needles, and other debris by hand.", image: img("1531971589569-0d9370cbe1e5") },
  { title: "Soft Wash Cleaning", desc: "Low-pressure washing with eco-friendly solutions to break down stains.", image: img("1632759145351-1d592919f522") },
  { title: "Algae & Lichen Treatment", desc: "Specialized solutions kill algae, lichen, and bacteria at the root.", image: img("1572120360610-d971b9d7767c") },
  { title: "Rinse & Protect", desc: "We rinse your roof and apply a treatment that helps prevent future growth.", image: img("1576941089067-2de3c901e126") },
  { title: "Final Inspection", desc: "We inspect every detail to ensure your roof is clean, safe, and protected.", image: img("1600585154340-be6161a56a0c") },
];

export const CLEANING_SAFE = [
  "Low-pressure soft wash",
  "Eco-friendly cleaning solutions",
  "Safe for plants, pets, and landscaping",
  "No harsh chemicals",
  "Protects shingles & roof components",
];

export const CLEANING_PROCESS = [
  { n: 1, title: "Inspection", desc: "We inspect your roof and identify problem areas." },
  { n: 2, title: "Debris Removal", desc: "We remove all loose debris by hand for a thorough clean." },
  { n: 3, title: "Soft Wash Cleaning", desc: "We apply eco-friendly solutions and gently clean your roof." },
  { n: 4, title: "Treat & Protect", desc: "We apply a treatment to kill remaining growth and help prevent regrowth." },
  { n: 5, title: "Rinse", desc: "We rinse your roof using low-pressure water to protect your shingles." },
  { n: 6, title: "Final Inspection", desc: "We ensure everything looks great and your roof is protected." },
] as const;

export const CLEANING_GALLERY = [
  { label: "Moss Removal", before: img("1583608205776-bfd35f0d9f83"), after: img("1568605114967-8130f3a36994") },
  { label: "Algae Removal", before: img("1572120360610-d971b9d7767c"), after: img("1576941089067-2de3c901e126") },
  { label: "Lichen Removal", before: img("1531971589569-0d9370cbe1e5"), after: img("1600585154340-be6161a56a0c") },
  { label: "Stain Removal", before: img("1632759145351-1d592919f522"), after: img("1570129477492-45c003edd2be") },
  { label: "Debris Removal", before: img("1605276374104-dee2a0ed3cd6"), after: img("1583608205776-bfd35f0d9f83") },
];

export type CleaningPlan = {
  name: string;
  short: string;
  price: string;
  tagline: string;
  features: string[];
  popular: boolean;
};

export const CLEANING_PLANS: CleaningPlan[] = [
  {
    name: "Standard Roof Cleaning",
    short: "Standard",
    price: "299",
    tagline: "Perfect for light to moderate moss and algae.",
    features: ["Soft wash cleaning", "Moss removal", "Algae treatment", "Rinse & protect"],
    popular: false,
  },
  {
    name: "Deep Roof Cleaning",
    short: "Deep Clean",
    price: "399",
    tagline: "Recommended for heavy moss, algae, and stains.",
    features: ["Everything in Standard", "Deep moss removal", "Roof stain treatment", "Extended protection"],
    popular: false,
  },
  {
    name: "Premium Roof Cleaning",
    short: "Premium",
    price: "499",
    tagline: "Best protection and longest lasting results.",
    features: ["Everything in Deep Clean", "Premium protective treatment", "Gutter cleaning add-on", "1-Year growth warranty"],
    popular: true,
  },
];

export const CLEANING_ADDONS = [
  { name: "Gutter Cleaning", price: "Starting at $149" },
  { name: "Gutter Brightening", price: "Starting at $99" },
  { name: "Moss Guard Treatment", price: "Starting at $99" },
];

export const CLEANING_REVIEWS = [
  { name: "Debbie M.", city: "Bellevue, WA", initials: "DM", quote: "Skyve made our roof look brand new! The team was professional, on time, and super careful with our landscaping." },
  { name: "James T.", city: "Kirkland, WA", initials: "JT", quote: "Huge difference! All the moss is gone and our roof looks amazing. Highly recommend their service." },
  { name: "Linda P.", city: "Redmond, WA", initials: "LP", quote: "Great experience from start to finish. They explained everything and the results exceeded our expectations." },
];

export const CLEANING_FAQ = [
  { q: "Is roof cleaning safe for my shingles?", a: "Yes. We use a low-pressure soft wash that cleans without damaging your shingles." },
  { q: "How often should I have my roof cleaned?", a: "Most Washington roofs benefit from a cleaning every 2–3 years, sooner with heavy moss." },
  { q: "Will cleaning remove moss permanently?", a: "Cleaning removes it and our treatment slows regrowth; periodic maintenance keeps it away." },
  { q: "Do you use high pressure to clean roofs?", a: "No. High pressure damages shingles — we use a safe soft-wash system." },
  { q: "Is your cleaning process eco-friendly?", a: "Yes. Our solutions are plant-, pet-, and landscape-safe with no harsh chemicals." },
];

export const CLEANING_CTA_IMAGE = "/images/roof-cleaning-2.webp";
