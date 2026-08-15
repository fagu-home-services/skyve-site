/* Skylight Replacement page (/exteriors/skylight-replacement) — mock content.
   Manufacturer names shown as text placeholders (no logo art). */
import type { MaterialPage } from "./material-pages";

const img = (id: string) => `/images/${id}.jpg`;

export const SKYLIGHT_REPLACEMENT: MaterialPage = {
  slug: "skylight-replacement",
  eyebrow: "Skylight Replacement",
  breadcrumbParent: { label: "Exterior Services", href: "/services" },
  titleLines: ["Replace Today.", "Enjoy Brighter Days."],
  sub: "Old or leaking skylights can cause water damage, higher energy bills, and poor comfort. We replace your skylights with modern, energy-efficient options that are built to last.",
  heroImage: img("1600585154340-be6161a56a0c"),
  whyCard: {
    title: "Why Replace Your Skylight?",
    items: [
      "Stop leaks and water damage",
      "Improve energy efficiency",
      "Better natural light & comfort",
      "Increase home value",
      "Modern styles & features",
      "Professional installation",
      "Leak-free guarantee",
    ],
  },
  brandsHeading: "We Replace Skylights With Premium Products From Trusted Brands",
  brands: ["VELUX", "FAKRO", "Kichler", "Sun Tunnel", "Whirlpool"],
  features: [
    { icon: "droplet", title: "Leaky or Drafty?", desc: "Old skylights can leak, causing stains, mold, and damage.", checklist: ["Cracked or broken seals", "Water stains on ceilings", "Drafts and poor insulation"], image: img("1558036117-15d82a90b9b1") },
    { icon: "thermometer", title: "Outdated & Inefficient?", desc: "Older skylights waste energy and reduce indoor comfort.", checklist: ["Single-pane glass", "Fogging between panes", "High energy bills"], image: img("1564013799919-ab600027ffc6") },
    { icon: "sun", title: "Poor Light & Comfort?", desc: "Old skylights reduce natural light and affect your mood.", checklist: ["Yellowed or cloudy domes", "Insufficient daylight", "Poor ventilation options"], image: img("1600585154340-be6161a56a0c") },
    { icon: "home", title: "Lower Home Value?", desc: "Worn-out skylights can hurt your home's value and appeal.", checklist: ["Visible wear and tear", "Outdated appearance", "Potential buyer concern"], image: img("1572120360610-d971b9d7767c") },
  ],
  typesHeading: "Skylight Replacement Options",
  types: [
    { title: "Fixed Skylights", desc: "Simple, sealed units for maximum natural light.", checklist: ["Energy-efficient glass", "Multiple sizes", "Modern designs"], image: img("1600585154340-be6161a56a0c") },
    { title: "Ventilating Skylights", desc: "Open for fresh air and better indoor air quality.", checklist: ["Manual or electric", "Rain sensor available", "Improved ventilation"], image: img("1564013799919-ab600027ffc6") },
    { title: "Sun Tunnels", desc: "Brighten small spaces with natural light.", checklist: ["Ideal for closets & baths", "Compact & efficient", "Highly reflective tube"], image: img("1558036117-15d82a90b9b1") },
    { title: "Deck-Mounted Skylights", desc: "Perfect for flat or low-slope roofs.", checklist: ["Curb-mounted", "Custom sizes", "Built for durability"], image: img("1572120360610-d971b9d7767c") },
    { title: "Custom Skylights", desc: "Custom shapes and sizes to match your style.", checklist: ["Architectural appeal", "Unique designs", "Premium materials"], image: img("1531971589569-0d9370cbe1e5") },
  ],
  colorsHeading: "",
  colors: [],
  comparison: {
    title: "Old Skylight vs. New Skylight",
    columns: ["Old Skylight", "New Skylight"],
    rows: [
      { icon: "leaf", feature: "Energy Efficiency", values: ["Low", "High"] },
      { icon: "droplet", feature: "Leak Protection", values: ["Poor", "Excellent"] },
      { icon: "sun", feature: "UV Protection", values: ["Minimal", "Superior"] },
      { icon: "wind", feature: "Noise Reduction", values: ["Low", "High"] },
      { icon: "wrench", feature: "Ventilation Options", values: ["Limited", "Advanced"] },
      { icon: "star", feature: "Appearance", values: ["Dated", "Modern"] },
      { icon: "badge", feature: "Warranty", values: ["None / Expired", "Up to 20 Years"] },
    ],
  },
  processTitle: "Our Skylight Replacement Process",
  processIntro: "",
  process: [
    { n: 1, icon: "search", title: "Inspection", desc: "We inspect your skylight and identify issues." },
    { n: 2, icon: "trash", title: "Remove", desc: "Carefully remove the old skylight and dispose of materials." },
    { n: 3, icon: "wrench", title: "Prepare", desc: "Prepare the opening and check for any damage." },
    { n: 4, icon: "hammer", title: "Install", desc: "Install the new skylight with premium flashing and underlayment." },
    { n: 5, icon: "shield", title: "Seal & Test", desc: "Seal for a watertight fit and test for performance." },
    { n: 6, icon: "sun", title: "Clean Up", desc: "We clean the area and leave your home spotless." },
  ],
  processImage: img("1600585154340-be6161a56a0c"),
  processTagline: "Better Light. Better Comfort. Better Home.",
  processCardText: "Upgrade to a new skylight and enjoy the difference every day.",
  warranty: { title: "", text: "", tiers: [] },
  projectsHeading: "Recent Skylight Replacement Projects",
  projects: [
    img("1600585154340-be6161a56a0c"),
    img("1558036117-15d82a90b9b1"),
    img("1564013799919-ab600027ffc6"),
    img("1572120360610-d971b9d7767c"),
    img("1531971589569-0d9370cbe1e5"),
  ],
  review: {
    name: "Emily T.",
    city: "Bellevue, WA",
    initials: "ET",
    quote: "Skyve replaced our old, leaking skylight with a beautiful new one. No more leaks, and the natural light is amazing!",
  },
  ctaTitle: "Ready For A Brighter, Leak-Free Home?",
  ctaSubtitle: "Get a free inspection and estimate for your skylight replacement project.",
  ctaTrust: [
    { icon: "badge", label: "No Obligation Estimate" },
    { icon: "zap", label: "Fast & Easy Process" },
    { icon: "shield", label: "Licensed & Insured" },
    { icon: "sun", label: "Skylight Experts" },
  ],
};

export const SKYLIGHT_REPLACEMENT_WARRANTY = {
  title: "Industry-Leading Warranty",
  text: "We stand behind every skylight we install.",
  items: [
    "Up to 20 Years on Glass",
    "Up to 10 Years on Installation",
    "Workmanship Warranty",
    "Fully Licensed & Insured",
  ],
  footer: "Your satisfaction is our promise.",
};

export const SKYLIGHT_REPLACEMENT_ENERGY = {
  title: "Energy Savings & Comfort",
  text: "New skylights can improve energy efficiency and indoor comfort.",
  image: img("1600585154340-be6161a56a0c"),
  stats: [
    { icon: "chart", value: "10–25%", label: "Potential energy savings" },
    { icon: "thermometer", value: "Better Insulation", label: "Keep heat in during winter" },
    { icon: "sun", value: "More Natural Light", label: "Brighten your home naturally" },
  ],
};
