/* Gutter Replacement page (/exteriors/gutter-replacement) — mock content.
   Manufacturer names shown as text placeholders (no logo art). */
import type { MaterialPage } from "./material-pages";

const img = (id: string) => `/images/${id}.jpg`;

export const GUTTER_REPLACEMENT: MaterialPage = {
  slug: "gutter-replacement",
  eyebrow: "Gutter Replacement",
  breadcrumbParent: { label: "Exterior Services", href: "/services" },
  titleLines: ["Upgrade Your Gutters.", "Protect What Matters."],
  sub: "Old or damaged gutters can't do their job. We replace your worn-out gutters with durable, high-performance systems that protect your home from water damage for years to come.",
  heroImage: img("1605276374104-dee2a0ed3cd6"),
  whyCard: {
    title: "Why Replace Your Gutters?",
    items: [
      "Prevent water damage & foundation issues",
      "Eliminate leaks, cracks & sagging",
      "Improve curb appeal & home value",
      "Better drainage & overflow protection",
      "Stronger, longer-lasting materials",
      "Professional installation & warranty",
      "Satisfaction guaranteed",
    ],
  },
  brandsHeading: "We Replace Gutters With Premium Products From Trusted Brands",
  brands: ["LeafFilter", "Amerimax", "CertainTeed", "K-Style", "Rainway"],
  features: [
    { icon: "shield", title: "Protect Your Home", desc: "Failing gutters can cause costly damage to your roof, walls, landscaping, and foundation.", checklist: ["Stop water damage", "Prevent mold & rot", "Protect your foundation"], image: img("1605276374104-dee2a0ed3cd6") },
    { icon: "badge", title: "Modern & Reliable", desc: "New gutters perform better and look great.", checklist: ["Stronger materials", "Seamless systems", "Built for all weather"], image: img("1605146769289-440113cc3d00") },
    { icon: "wrench", title: "Low Maintenance", desc: "Today's gutter systems are designed to last with less upkeep.", checklist: ["Rust & corrosion resistant", "Clog-resistant options", "Easy to clean"], image: img("1564013799919-ab600027ffc6") },
    { icon: "chart", title: "Increase Home Value", desc: "New gutters enhance appearance and give buyers peace of mind.", checklist: ["Better curb appeal", "Long-term protection", "Smart investment"], image: img("1583608205776-bfd35f0d9f83") },
  ],
  typesHeading: "Gutter Replacement Options",
  types: [
    { title: "Seamless Gutters", desc: "Custom-fit seamless gutters for superior performance.", checklist: ["No leaks at seams", "Clean, modern look", "Custom lengths"], image: img("1605276374104-dee2a0ed3cd6") },
    { title: "Aluminum Gutters", desc: "Lightweight, rust-resistant, and built to last.", checklist: ["Affordable", "Multiple colors", "Corrosion resistant"], image: img("1605146769289-440113cc3d00") },
    { title: "Copper Gutters", desc: "Premium look with unmatched durability.", checklist: ["Timeless beauty", "Extremely durable", "Increases home value"], image: img("1583608205776-bfd35f0d9f83") },
    { title: "Downspout Replacement", desc: "Upgrade old downspouts for better drainage.", checklist: ["Better water flow", "Leak-free connections", "Multiple styles"], image: img("1564013799919-ab600027ffc6") },
    { title: "Gutter Guards", desc: "Replace and protect with high-performance guards.", checklist: ["Block leaves & debris", "Reduce cleaning", "Prevent clogs"], image: img("1572120360610-d971b9d7767c") },
    { title: "Fascia & Soffit Repair", desc: "Replace damaged fascia and soffit while we're at it.", checklist: ["Prevent wood rot", "Improve appearance", "Complete protection"], image: img("1600585154340-be6161a56a0c") },
  ],
  colorsHeading: "",
  colors: [],
  comparison: { title: "", columns: [], rows: [] },
  processTitle: "Our Gutter Replacement Process",
  processIntro: "",
  process: [
    { n: 1, icon: "search", title: "Inspection", desc: "We inspect your current system and identify issues." },
    { n: 2, icon: "trash", title: "Remove Old Gutters", desc: "Carefully remove old gutters and dispose of materials." },
    { n: 3, icon: "wrench", title: "Repair & Prep", desc: "We repair fascia if needed and prepare for new installation." },
    { n: 4, icon: "hammer", title: "Install New Gutters", desc: "Precision installation of your new gutter system." },
    { n: 5, icon: "shield", title: "Final Inspection", desc: "We test all systems and ensure proper water flow." },
    { n: 6, icon: "badge", title: "Clean Up", desc: "We leave your home clean and your new gutters working perfectly." },
  ],
  processImage: img("1605276374104-dee2a0ed3cd6"),
  processTagline: "Better Gutters. Stronger Protection. Lasting Peace of Mind.",
  processCardText: "Professional replacements with top-quality materials and expert craftsmanship.",
  warranty: { title: "", text: "", tiers: [] },
  projectsHeading: "Recent Gutter Replacement Projects",
  projects: [
    img("1605276374104-dee2a0ed3cd6"),
    img("1605146769289-440113cc3d00"),
    img("1564013799919-ab600027ffc6"),
    img("1583608205776-bfd35f0d9f83"),
  ],
  review: {
    name: "Sarah J.",
    city: "Kirkland, WA",
    initials: "SJ",
    quote: "Skyve replaced our old, leaking gutters and the difference is night and day. Great team, great quality, very professional!",
  },
  ctaTitle: "Ready To Replace Your Gutters?",
  ctaSubtitle: "Get a free inspection and estimate for a gutter system that will protect your home for years to come.",
  ctaTrust: [
    { icon: "badge", label: "No Obligation Estimate" },
    { icon: "zap", label: "Fast & Easy Process" },
    { icon: "shield", label: "Licensed & Insured" },
    { icon: "mappin", label: "Gutter Replacement Experts" },
  ],
};

export const GUTTER_REPLACE_WHY = [
  { icon: "droplet", label: "Multiple leaks or cracks" },
  { icon: "droplet", label: "Water overflowing or pooling" },
  { icon: "wind", label: "Sagging or pulling away" },
  { icon: "wrench", label: "Frequent clogs or backups" },
  { icon: "shield", label: "Rust, holes, or corrosion" },
  { icon: "clock", label: "Old age (15–20+ years)" },
];

export const GUTTER_REPLACE_DIFFERENCE = [
  { feature: "Premium Materials", others: "cross" as const },
  { feature: "Seamless Installation", others: "dash" as const },
  { feature: "Custom Gutter Options", others: "dash" as const },
  { feature: "Fascia & Soffit Repair", others: "dash" as const },
  { feature: "Gutter Guards Available", others: "dash" as const },
  { feature: "Workmanship Warranty", others: "dash" as const },
  { feature: "Licensed & Insured", others: "dash" as const },
  { feature: "Clean & Respectful", others: "dash" as const },
];
