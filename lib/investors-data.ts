/* Investors Program page (/investors-program) — mock content.
   Static prototype: figures/charts are illustrative sample data. */

const img = (id: string) => `/images/${id}.jpg`;

export const IP_HERO = {
  level: "Level 11",
  eyebrow: "Pro Partner Ecosystem",
  titleLines: ["Investors Program"],
  desc: "Partner with Skyve to build the future of roofing. Strong returns. Real impact. Built on trust.",
  image: img("1600596542815-ffad4c1539a9"),
  features: [
    { icon: "chart", title: "High Growth Industry", desc: "$50B+ U.S. roofing market and growing" },
    { icon: "shield", title: "Proven Business Model", desc: "Scalable systems with consistent results" },
    { icon: "percent", title: "Multiple Revenue Streams", desc: "Installations, inspections, maintenance & data" },
    { icon: "users", title: "Experienced Leadership", desc: "15+ years of roofing excellence" },
  ],
  card: {
    title: "Invest in a Trusted Brand with Real Momentum",
    desc: "Join a mission-driven company transforming the roofing industry through technology, transparency, and exceptional service.",
    stats: [
      { value: "$48M+", label: "Partner Generated Revenue" },
      { value: "2,300+", label: "Active Partners" },
      { value: "4.8/5", label: "Partner Rating" },
      { value: "98%", label: "Would Recommend Skyve" },
    ],
  },
};

export const IP_HIGHLIGHTS = [
  { icon: "globe", title: "Large Market", desc: "$50B+ U.S. market with strong annual growth" },
  { icon: "refresh", title: "Recurring Revenue", desc: "Maintenance plans, inspections, and data subscriptions" },
  { icon: "dashboard", title: "Technology Advantage", desc: "Proprietary platform with powerful tools and analytics" },
  { icon: "box", title: "Scalable Model", desc: "Systems and processes built to scale across markets" },
  { icon: "trend", title: "Strong Unit Economics", desc: "High margins with operational efficiencies" },
  { icon: "users", title: "Experienced Team", desc: "Industry veterans with a track record of success" },
  { icon: "leaf", title: "Social Impact", desc: "Safer homes, better communities, lasting impact" },
];

export const IP_SNAPSHOT = [
  { icon: "home", label: "Founded", value: "Built by roofing professionals with a vision to modernize the industry" },
  { icon: "mappin", label: "Headquarters", value: "Kirkland, Washington" },
  { icon: "wrench", label: "Services", value: "Roofing, Inspections, Maintenance, Technology Platform" },
  { icon: "chart", label: "Markets Served", value: "Washington State and expanding" },
  { icon: "grid", label: "Business Model", value: "B2C, B2B, SaaS, Data & Analytics" },
  { icon: "shield", label: "Mission", value: "Protect more homes and build lasting relationships" },
];

export const IP_REVENUE = {
  headline: "$48M+",
  sub: "Partner Generated Revenue",
  bars: [
    { year: "2023", label: "$8M", value: 8 },
    { year: "2024", label: "$16M", value: 16 },
    { year: "2025", label: "$24M", value: 24 },
    { year: "2026", label: "$35M", value: 35 },
    { year: "2027", label: "$48M+", value: 48 },
  ],
};

export const IP_USE = [
  { pct: 40, label: "Technology & Platform", desc: "Product development and AI", color: "var(--color-ridge)" },
  { pct: 25, label: "Market Expansion", desc: "New markets and partnerships", color: "var(--color-ridge-bright)" },
  { pct: 20, label: "Marketing & Branding", desc: "Growth and brand awareness", color: "var(--color-sky)" },
  { pct: 10, label: "People & Operations", desc: "Team and infrastructure", color: "var(--color-horizon-deep)" },
  { pct: 5, label: "Working Capital", desc: "General operations", color: "var(--color-sky-soft)" },
];

export const IP_OPPORTUNITIES = [
  { icon: "chart", name: "Growth Partner", desc: "Support expansion and growth initiatives", range: "$250K - $1M" },
  { icon: "document", name: "Strategic Partner", desc: "Collaborate on strategic initiatives", range: "$1M - $5M" },
  { icon: "star", name: "Equity Partner", desc: "Join as an equity investor", range: "$5M+" },
];

export const IP_RETURNS = [
  { icon: "chart", title: "High Growth Potential", desc: "Capitalizing on a $50B+ growing market" },
  { icon: "share", title: "Multiple Exit Strategies", desc: "Strategic acquisition, IPO, or secondary sale" },
  { icon: "percent", title: "Strong ROI Potential", desc: "Scalable model with strong unit economics" },
  { icon: "heart", title: "Impact + Profit", desc: "Generate returns while making a difference" },
];

export const IP_WHY = [
  "Proven traction and strong market demand",
  "Scalable systems with competitive advantage",
  "Experienced leadership and management team",
  "Clear growth strategy and execution plan",
  "Transparent reporting and governance",
  "Commitment to long-term value creation",
];

export const IP_QUOTE = {
  text: "Skyve combines cutting-edge technology with deep industry expertise. They are well-positioned to become the leader in the roofing industry.",
  author: "Private Equity Partner",
};

export const IP_CTA = {
  title: "Build the Future of Roofing, Together",
  desc: "Partner with Skyve and be part of a mission-driven company creating value for homeowners, partners, and investors.",
  button: "Express Interest",
  image: img("1600596542815-ffad4c1539a9"),
  points: ["Confidential Discussions", "Detailed Investor Materials", "Regular Updates & Reporting", "Dedicated Investor Team"],
};
