/* Deck Construction page (/exteriors/deck-construction) — mock content.
   Manufacturer names shown as text placeholders (no logo art). */
import type { MaterialPage } from "./material-pages";

const img = (id: string) => `/images/${id}.jpg`;

export const DECK_CONSTRUCTION: MaterialPage = {
  slug: "deck-construction",
  eyebrow: "Deck Construction",
  breadcrumbParent: { label: "Exterior Services", href: "/services" },
  titleLines: ["Build The Perfect", "Outdoor Living Space."],
  sub: "Custom decks built for beauty, durability, and the way you live. Designed with premium materials and built by expert craftsmen to last for decades.",
  heroImage: img("1531971589569-0d9370cbe1e5"),
  whyCard: {
    title: "Why Build With Skyve?",
    items: [
      "Custom designs for your lifestyle",
      "High-quality, durable materials",
      "Expert craftsmanship",
      "Safe, code-compliant builds",
      "Increase your home's value",
      "On-time and on-budget",
      "Satisfaction guaranteed",
    ],
  },
  brandsHeading: "We Build With Premium Materials From Trusted Brands",
  brands: ["Trex", "TimberTech by AZEK", "Fiberon", "AZEK", "MoistureShield"],
  features: [
    { icon: "layers", title: "Custom Designed For You", desc: "Every deck is designed around your home, your style, and your needs.", checklist: ["Personalized layouts", "3D design & planning", "Perfect for any space"], image: img("1531971589569-0d9370cbe1e5") },
    { icon: "badge", title: "Built To Last", desc: "We use premium materials and proven building practices for long-lasting decks.", checklist: ["Weather & rot resistant", "Low maintenance", "Built to code"], image: img("1558036117-15d82a90b9b1") },
    { icon: "chart", title: "Increase Your Home Value", desc: "A beautiful deck adds living space and increases your home's value.", checklist: ["Strong ROI", "More usable space", "Curb appeal boost"], image: img("1564013799919-ab600027ffc6") },
    { icon: "shield", title: "Stress-Free Process", desc: "From design to completion, we make the process smooth and easy.", checklist: ["Clear communication", "On-time completion", "100% satisfaction"], image: img("1583608205776-bfd35f0d9f83") },
  ],
  typesHeading: "Deck Construction Services",
  types: [
    { title: "Composite Decks", desc: "Low maintenance, high performance decks that look amazing for years.", checklist: ["Stain & fade resistant", "No sanding or sealing", "Many colors & textures"], image: img("1531971589569-0d9370cbe1e5") },
    { title: "Wood Decks", desc: "Classic wood decks built with quality lumber and expert craftsmanship.", checklist: ["Pressure-treated options", "Cedar & hardwoods", "Natural beauty"], image: img("1572120360610-d971b9d7767c") },
    { title: "Multi-Level Decks", desc: "Maximize your outdoor space with custom multi-level designs.", checklist: ["Functional layouts", "Defined spaces", "Great for sloped yards"], image: img("1558036117-15d82a90b9b1") },
    { title: "Deck Railings", desc: "Stylish and durable railing options to complete your deck.", checklist: ["Aluminum, wood, cable, glass", "Code compliant", "Safe & secure"], image: img("1600585154340-be6161a56a0c") },
    { title: "Deck Add-Ons", desc: "Enhance your deck with features that add comfort and value.", checklist: ["Pergolas & covers", "Lighting", "Built-in seating & more"], image: img("1564013799919-ab600027ffc6") },
    { title: "Deck Repairs", desc: "Repair, restore, and refinish your deck to bring it back to life.", checklist: ["Board replacement", "Staining & sealing", "Structural repairs"], image: img("1583608205776-bfd35f0d9f83") },
  ],
  colorsHeading: "",
  colors: [],
  comparison: {
    title: "Composite vs. Wood",
    columns: ["Composite", "Wood"],
    rows: [
      { icon: "wrench", feature: "Maintenance", values: ["Low", "High"] },
      { icon: "shield", feature: "Durability", values: ["Excellent", "Good"] },
      { icon: "droplet", feature: "Resists Rot & Insects", values: ["Yes", "No"] },
      { icon: "star", feature: "Stain & Fade Resistant", values: ["Yes", "No"] },
      { icon: "clock", feature: "Lifespan", values: ["25+ Years", "10–15 Years"] },
      { icon: "dollar", feature: "Upfront Cost", values: ["Higher", "Lower"] },
      { icon: "chart", feature: "Long-Term Value", values: ["Best", "Good"] },
    ],
  },
  processTitle: "Our Deck Construction Process",
  processIntro: "",
  process: [
    { n: 1, icon: "search", title: "Consultation", desc: "We discuss your vision, needs, and budget." },
    { n: 2, icon: "layers", title: "Design & Planning", desc: "Custom design and 3D renderings of your deck." },
    { n: 3, icon: "star", title: "Material Selection", desc: "Choose the best materials and finishes." },
    { n: 4, icon: "wrench", title: "Permits & Prep", desc: "We handle permits and prepare the site." },
    { n: 5, icon: "hammer", title: "Construction", desc: "Expert builders construct your deck with care." },
    { n: 6, icon: "badge", title: "Final Walkthrough", desc: "We ensure every detail is perfect before we finish." },
    { n: 7, icon: "home", title: "Enjoy Your Deck", desc: "Relax and enjoy your new outdoor living space!" },
  ],
  processImage: img("1531971589569-0d9370cbe1e5"),
  processTagline: "Built Beautifully. Built To Last.",
  processCardText: "Enjoy the outdoors with a deck built by the experts at Skyve.",
  warranty: { title: "", text: "", tiers: [] },
  projectsHeading: "Recent Deck Construction Projects",
  projects: [img("1531971589569-0d9370cbe1e5"), img("1558036117-15d82a90b9b1"), img("1572120360610-d971b9d7767c")],
  review: {
    name: "Brian T.",
    city: "Bellevue, WA",
    initials: "BT",
    quote: "Skyve built an amazing deck for our backyard. The team was professional, on time, and the quality is outstanding. We love our new outdoor space!",
  },
  ctaTitle: "Ready To Build Your Dream Deck?",
  ctaSubtitle: "Get a free estimate and let's design the perfect outdoor space for your home.",
  ctaTrust: [
    { icon: "badge", label: "No Obligation Estimate" },
    { icon: "zap", label: "Fast & Easy Process" },
    { icon: "shield", label: "Licensed & Insured" },
    { icon: "mappin", label: "Deck Construction Experts" },
  ],
};

export const DECK_MATERIALS = [
  { name: "Trex Composite", desc: "Low maintenance and durable.", hex: "#6b6f6a" },
  { name: "TimberTech Composite", desc: "Advanced protection and beauty.", hex: "#5c4a3a" },
  { name: "Fiberon Composite", desc: "Real wood look with less work.", hex: "#4a3b2f" },
  { name: "Cedar Wood", desc: "Naturally beautiful and timeless.", hex: "#a07d54" },
  { name: "Ipe Hardwood", desc: "Exotic hardwood built to last.", hex: "#6e4326" },
  { name: "Pressure-Treated Wood", desc: "Affordable and reliable option.", hex: "#c9b98f" },
];

export const DECK_WARRANTY_CARD = {
  title: "Industry-Leading Warranty",
  text: "We stand behind our work and the materials we use.",
  items: [
    "Up to 25 Year Material Warranty",
    "Workmanship Warranty",
    "Fully Licensed & Insured",
  ],
  footer: "Your satisfaction is our promise.",
};

export const DECK_FINANCING = {
  title: "Financing Available",
  text: "Flexible financing options make it easy to build your dream deck today.",
};
