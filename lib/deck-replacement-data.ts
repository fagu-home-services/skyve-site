/* Deck Replacement page (/exteriors/deck-replacement) — mock content.
   Manufacturer names shown as text placeholders (no logo art). */
import type { MaterialPage } from "./material-pages";

const img = (id: string) => `/images/${id}.jpg`;

export const DECK_REPLACEMENT: MaterialPage = {
  slug: "deck-replacement",
  eyebrow: "Deck Replacement",
  breadcrumbParent: { label: "Exterior Services", href: "/services" },
  titleLines: ["Replace. Renew.", "Enjoy For Years To Come."],
  sub: "Old, damaged decks can be unsafe and reduce your home's value. We replace worn-out decks with beautiful, long-lasting decks built for today's lifestyle.",
  heroImage: img("1531971589569-0d9370cbe1e5"),
  whyCard: {
    title: "Why Replace With Skyve?",
    items: [
      "Improve safety & structural integrity",
      "Modern designs & premium materials",
      "Increase property value",
      "Low-maintenance solutions",
      "On-time and on-budget",
      "Satisfaction guaranteed",
    ],
  },
  brandsHeading: "We Replace Decks With Premium Materials From Trusted Brands",
  brands: ["Trex", "TimberTech by AZEK", "Fiberon", "AZEK", "MoistureShield"],
  features: [
    { icon: "shield", title: "Safer & Stronger", desc: "We remove unsafe, rotted, or unstable decks and rebuild with code-compliant structure.", checklist: ["Eliminates safety hazards", "Stronger framing & support", "Built to last for decades"], image: img("1558036117-15d82a90b9b1") },
    { icon: "star", title: "Modern & Beautiful", desc: "Upgrade your outdated deck with a fresh, modern design that fits your style.", checklist: ["Custom layouts & finishes", "Wide range of materials", "Boosts curb appeal"], image: img("1564013799919-ab600027ffc6") },
    { icon: "wrench", title: "Low Maintenance", desc: "Choose materials that look great and require less time and money to maintain.", checklist: ["Resist rot, mold & insects", "Easy to clean", "Spend more time enjoying"], image: img("1531971589569-0d9370cbe1e5") },
    { icon: "chart", title: "Increase Home Value", desc: "A new deck is one of the best investments you can make in your home.", checklist: ["Higher resale value", "Better outdoor living space", "Excellent ROI"], image: img("1600585154340-be6161a56a0c") },
  ],
  typesHeading: "Deck Replacement Options",
  types: [
    { title: "Full Deck Replacement", desc: "Complete removal and replacement of your old deck.", checklist: ["New framing & structure", "Modern design", "Long-lasting materials"], image: img("1531971589569-0d9370cbe1e5") },
    { title: "Surface Replacement", desc: "Replace deck boards & surface while keeping the structure.", checklist: ["Cost-effective upgrade", "Fresh new look", "Faster installation"], image: img("1572120360610-d971b9d7767c") },
    { title: "Railings Replacement", desc: "Upgrade old or damaged railings for safety & style.", checklist: ["Aluminum, wood & composite", "Improved safety", "Modern styles"], image: img("1600585154340-be6161a56a0c") },
    { title: "Stair Replacement", desc: "Replace worn or unsafe stairs for a secure step.", checklist: ["Safer steps", "Code-compliant", "Custom design options"], image: img("1558036117-15d82a90b9b1") },
    { title: "Deck Repairs & Upgrades", desc: "Fix structural issues and upgrade your deck.", checklist: ["Replace joists & posts", "Fix sagging or rot", "Add more usable space"], image: img("1583608205776-bfd35f0d9f83") },
    { title: "Add-Ons & Enhancements", desc: "Enhance your new deck with features you'll love.", checklist: ["Pergolas & covers", "Lighting", "Built-in seating & more"], image: img("1564013799919-ab600027ffc6") },
  ],
  colorsHeading: "",
  colors: [],
  comparison: {
    title: "Old Deck vs. New Deck",
    columns: ["Old Deck", "New Deck"],
    rows: [
      { icon: "shield", feature: "Safety", values: ["Risk of collapse, loose boards", "Safe, secure, built to code"] },
      { icon: "star", feature: "Appearance", values: ["Worn, faded, outdated", "Modern, beautiful, custom"] },
      { icon: "wrench", feature: "Maintenance", values: ["High: staining, sealing, repairs", "Low: easy cleaning"] },
      { icon: "droplet", feature: "Durability", values: ["Prone to rot, mold, insects", "Resistant to rot, mold, insects"] },
      { icon: "layers", feature: "Usable Space", values: ["Limited, uncomfortable", "More space, more enjoyment"] },
      { icon: "chart", feature: "Home Value", values: ["Lower value", "Increased value"] },
      { icon: "badge", feature: "Warranty", values: ["Little to none", "Up to 25 Years"] },
    ],
  },
  processTitle: "Our Deck Replacement Process",
  processIntro: "",
  process: [
    { n: 1, icon: "search", title: "Inspection & Evaluation", desc: "We assess your existing deck and identify issues and needs." },
    { n: 2, icon: "layers", title: "Design & Planning", desc: "We create a custom design and provide a clear estimate." },
    { n: 3, icon: "wrench", title: "Removal", desc: "We safely remove your old deck and dispose of debris." },
    { n: 4, icon: "chart", title: "Structural Upgrades", desc: "We repair or upgrade framing for a strong, solid foundation." },
    { n: 5, icon: "hammer", title: "New Deck Construction", desc: "We build your new deck with premium materials and expert craftsmanship." },
    { n: 6, icon: "badge", title: "Final Inspection", desc: "We ensure every detail meets our high standards before we finish." },
  ],
  processImage: img("1531971589569-0d9370cbe1e5"),
  processTagline: "Out With The Old. In With The Best.",
  processCardText: "Experience the difference of a brand-new deck built to last.",
  warranty: { title: "", text: "", tiers: [] },
  projectsHeading: "Recent Deck Replacement Projects",
  projects: [img("1531971589569-0d9370cbe1e5"), img("1558036117-15d82a90b9b1"), img("1572120360610-d971b9d7767c")],
  review: {
    name: "Amanda R.",
    city: "Kirkland, WA",
    initials: "AR",
    quote: "Skyve replaced our old, rotted deck with a beautiful new one. The team was professional, on time, and the quality is outstanding!",
  },
  ctaTitle: "Ready For A Brand-New Deck?",
  ctaSubtitle: "Let's replace your old deck with a safe, beautiful, and long-lasting outdoor space.",
  ctaTrust: [
    { icon: "badge", label: "No Obligation Estimate" },
    { icon: "zap", label: "Fast & Easy Process" },
    { icon: "shield", label: "Licensed & Insured" },
    { icon: "mappin", label: "Deck Replacement Experts" },
  ],
};

export const DECK_REPLACEMENT_MATERIALS = [
  { name: "Trex Composite", desc: "Low maintenance & eco-friendly.", hex: "#4a4d47" },
  { name: "TimberTech Composite", desc: "Advanced protection & beautiful finishes.", hex: "#5c4a3a" },
  { name: "Fiberon Composite", desc: "Real wood look with less work.", hex: "#4a3b2f" },
  { name: "Cedar Wood", desc: "Naturally beautiful & timeless.", hex: "#a07d54" },
  { name: "Ipe Hardwood", desc: "Exotic hardwood built to last.", hex: "#6e4326" },
];

export const DECK_REPLACEMENT_WARRANTY_CARD = {
  title: "Industry-Leading Warranty",
  text: "We stand behind our work and the materials we use.",
  items: [
    "Up to 25 Year Material Warranty",
    "Workmanship Warranty",
    "Fully Licensed & Insured",
  ],
  footer: "Your satisfaction is our promise.",
};

export const DECK_REPLACEMENT_FINANCING = {
  title: "Financing Available",
  text: "Flexible financing options make it easy to get the deck you've always wanted.",
};
