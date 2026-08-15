/* Why Skyve page (/why-skyve) — mock content.
   Certification names and "Google" are third-party marks shown as text
   placeholders — swap for official badges with permission. */

export const WHY_HERO_IMAGE = "/images/hero-home-dusk-2.webp";

export const WHY_HERO_FEATURES = [
  { icon: "dollar", title: "Transparent Pricing" },
  { icon: "users", title: "Certified Experts" },
  { icon: "wrench", title: "Proven Process" },
  { icon: "shield", title: "Industry-Leading Warranty" },
  { icon: "badge", title: "Real Reviews Real Results" },
] as const;

export const RATING = {
  score: "4.9",
  reviews: "700+ Reviews",
  area: "Across King & Snohomish County",
};

export const PROMISE_CARDS = [
  { icon: "dollar", title: "Transparent Pricing", desc: "Clear, detailed estimates with no hidden fees or surprises. You'll know exactly what you're paying for.", cta: { label: "Learn More", href: "/estimate/instant" } },
  { icon: "badge", title: "Certified & Trusted", desc: "We hold top industry certifications and maintain full licensing, bonding, and insurance.", cta: { label: "Learn More", href: "/licenses-insurance" } },
  { icon: "document", title: "Proven Process", desc: "Our streamlined process keeps your project on schedule, on budget, and stress-free.", cta: { label: "Learn More", href: "#" } },
  { icon: "shield", title: "Industry-Leading Warranty", desc: "We stand behind our work with robust warranties on both materials and craftsmanship.", cta: { label: "Learn More", href: "/warranty" } },
  { icon: "message", title: "Real Reviews", desc: "Hundreds of 5-star reviews from homeowners just like you across Western Washington.", cta: { label: "Read Reviews", href: "/reviews" } },
];

export const DELIVER_STEPS = [
  { n: 1, icon: "search", title: "Inspect & Evaluate", desc: "We start with a drone inspection and detailed evaluation of your roof." },
  { n: 2, icon: "document", title: "Transparent Proposal", desc: "You receive a clear, itemized estimate with all your options." },
  { n: 3, icon: "calendar", title: "Plan & Schedule", desc: "We help you choose the best solution and schedule at your convenience." },
  { n: 4, icon: "hammer", title: "Expert Installation", desc: "Our skilled crews complete your project with precision and care." },
  { n: 5, icon: "shield", title: "Warranty & Support", desc: "We back our work with industry-leading warranties and ongoing support." },
] as const;

export const CERTIFICATIONS = [
  { name: "GAF", sub: "Certified" },
  { name: "CertainTeed", sub: "SELECT ShingleMaster" },
  { name: "VELUX", sub: "Certified Installer" },
  { name: "Malarkey", sub: "Certified Contractor" },
  { name: "BBB", sub: "A+ Rating" },
];

export const WARRANTY_ITEMS = [
  { years: "50", unit: "YEAR", title: "Manufacturer Warranty", desc: "Up to 50 years on materials." },
  { years: "10", unit: "YEAR", title: "Workmanship Warranty", desc: "10 years on our craftsmanship." },
];

export const WHY_REVIEWS = [
  { name: "Sarah M.", city: "Bellevue, WA", initials: "SM", quote: "Skyve made the entire process so easy. The estimate was detailed and honest, and the crew did an amazing job. Our new roof looks incredible!" },
  { name: "Jason T.", city: "Kirkland, WA", initials: "JT", quote: "Professional, on time, and transparent. They kept us informed every step of the way. Highly recommend Skyve!" },
  { name: "Linda P.", city: "Snohomish, WA", initials: "LP", quote: "From the inspection to the final cleanup, everything was handled with care and integrity. We feel confident for years to come." },
];
