/* Skylight Installation page (/exteriors/skylight-installation) — mock content.
   Manufacturer names shown as text placeholders (no logo art). */
import type { MaterialPage } from "./material-pages";

const img = (id: string) => `/images/${id}.jpg`;

export const SKYLIGHT_INSTALLATION: MaterialPage = {
  slug: "skylight-installation",
  eyebrow: "Skylight Installation",
  breadcrumbParent: { label: "Exterior Services", href: "/services" },
  titleLines: ["Bring Natural Light", "Into Your Life."],
  sub: "Professional skylight installation that brightens your home, improves energy efficiency, and adds value. Expert installation with zero leaks, guaranteed.",
  heroImage: img("1600585154340-be6161a56a0c"),
  whyCard: {
    title: "Why Install A Skylight?",
    items: [
      "More natural light & brighter spaces",
      "Improved mood & productivity",
      "Lower energy costs",
      "Better ventilation options",
      "Increase home value",
      "Professional installation",
      "Leak-free guarantee",
    ],
  },
  brandsHeading: "We Install Premium Skylights From Trusted Brands",
  brands: ["VELUX", "FAKRO", "Kichler", "Sun Tunnel", "Whirlpool"],
  features: [
    { icon: "sun", title: "Natural Light", desc: "Up to 5x more natural light than vertical windows.", checklist: ["Brighter interiors", "Reduced eye strain", "Better color accuracy"], image: img("1600585154340-be6161a56a0c") },
    { icon: "leaf", title: "Energy Efficient", desc: "Modern skylights are built for energy performance.", checklist: ["Low-E glass options", "Insulated frames", "Energy Star rated"], image: img("1558036117-15d82a90b9b1") },
    { icon: "wind", title: "Proper Ventilation", desc: "Ventilating skylights improve air quality and comfort.", checklist: ["Fresh air circulation", "Reduce humidity", "Operable options"], image: img("1564013799919-ab600027ffc6") },
    { icon: "chart", title: "Increase Home Value", desc: "Skylights are a top feature buyers love.", checklist: ["Higher resale value", "Modern appeal", "Stand out from others"], image: img("1572120360610-d971b9d7767c") },
  ],
  typesHeading: "Skylight Solutions For Every Need",
  types: [
    { title: "Fixed Skylights", desc: "Perfect for bringing in natural light.", checklist: ["Max light & views", "Energy efficient", "Low maintenance"], image: img("1600585154340-be6161a56a0c") },
    { title: "Ventilating Skylights", desc: "Open to let fresh air in.", checklist: ["Manual or electric", "Rain sensor options", "Improved air quality"], image: img("1564013799919-ab600027ffc6") },
    { title: "Sun Tunnels", desc: "Great for smaller spaces.", checklist: ["Compact design", "Highly reflective tube", "Ideal for closets & baths"], image: img("1558036117-15d82a90b9b1") },
    { title: "Deck-Mounted Skylights", desc: "Ideal for flat or low-slope roofs.", checklist: ["Curb-mounted", "Custom sizes", "Superior durability"], image: img("1572120360610-d971b9d7767c") },
    { title: "Custom Skylights", desc: "Custom shapes and sizes.", checklist: ["Unique designs", "Architectural appeal", "Custom solutions"], image: img("1531971589569-0d9370cbe1e5") },
  ],
  colorsHeading: "",
  colors: [],
  comparison: { title: "", columns: [], rows: [] },
  processTitle: "Our Professional Installation Process",
  processIntro: "",
  process: [
    { n: 1, icon: "search", title: "Consultation", desc: "We assess your needs and recommend the best skylight solution." },
    { n: 2, icon: "ruler", title: "Site Inspection", desc: "We inspect your roof structure and measure precisely." },
    { n: 3, icon: "layers", title: "Custom Planning", desc: "We help you choose the right skylight and placement." },
    { n: 4, icon: "hardhat", title: "Professional Installation", desc: "Our experts install with precision and care." },
    { n: 5, icon: "badge", title: "Final Inspection", desc: "We ensure a perfect seal and optimal performance." },
    { n: 6, icon: "sun", title: "Clean Up", desc: "We clean the area and leave your home spotless." },
  ],
  processImage: img("1600585154340-be6161a56a0c"),
  processTagline: "Flawless Installation. Leak-Free Guarantee.",
  processCardText: "We use premium flashing systems and follow manufacturers' guidelines for a perfect, long-lasting installation.",
  warranty: { title: "", text: "", tiers: [] },
  projectsHeading: "Recent Skylight Installation Projects",
  projects: [
    img("1600585154340-be6161a56a0c"),
    img("1558036117-15d82a90b9b1"),
    img("1564013799919-ab600027ffc6"),
    img("1572120360610-d971b9d7767c"),
    img("1531971589569-0d9370cbe1e5"),
  ],
  review: {
    name: "Lisa M.",
    city: "Bellevue, WA",
    initials: "LM",
    quote: "Skyve installed two skylights in our living room. The difference is incredible! More light, better energy, and zero leaks. Highly recommend!",
  },
  ctaTitle: "Ready To Brighten Your Home?",
  ctaSubtitle: "Get a free consultation and discover the perfect skylight solution for your space.",
  ctaTrust: [
    { icon: "badge", label: "No Obligation Estimate" },
    { icon: "zap", label: "Fast & Easy Process" },
    { icon: "shield", label: "Licensed & Insured" },
    { icon: "sun", label: "Skylight Experts" },
  ],
};

export const SKYLIGHT_ASSURANCE = {
  expect: {
    title: "What To Expect",
    items: [
      "No mess left behind",
      "Protective coverings used",
      "Respect for your home",
      "On-time completion",
      "Full warranty coverage",
    ],
    image: img("1558036117-15d82a90b9b1"),
  },
  warranty: {
    title: "Industry-Leading Warranty",
    text: "We back our skylight installations with the best warranties.",
    items: [
      "Up to 20 Years on Skylights",
      "Up to 10 Years Installation Warranty",
      "Workmanship Guarantee",
      "Fully Licensed & Insured",
    ],
    footer: "Your satisfaction is our promise.",
  },
  energy: {
    title: "Energy Savings Potential",
    text: "Skylights can help reduce your energy costs year-round.",
    image: img("1600585154340-be6161a56a0c"),
    stats: [
      { icon: "chart", value: "10–20%", label: "Potential energy savings" },
      { icon: "sun", value: "Up to 5x", label: "More natural light" },
      { icon: "clock", value: "20+ Years", label: "Average lifespan" },
    ],
  },
};
