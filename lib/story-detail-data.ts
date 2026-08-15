/* Story Detail page (/reviews/[slug]) — mock content.
   Brand names shown as plain text (no logo art). Avatars use initials. */

const img = (id: string) => `/images/${id}.jpg`;

export const STORY_DETAIL = {
  slug: "complete-roof-replacement",
  title: "Complete Roof Replacement",
  city: "Kirkland, WA",
  rating: "5.0",
  date: "May 20, 2024",
  quote:
    "From the first inspection to the final cleanup, Skyve exceeded our expectations. The team was professional, on time, and the quality is outstanding.",
  customer: { name: "Sarah M.", role: "Homeowner", initials: "SM" },
  heroImage: img("1600596542815-ffad4c1539a9"),
  gallery: [
    img("1570129477492-45c003edd2be"),
    img("1632759145351-1d592919f522"),
    img("1564013799919-ab600027ffc6"),
    img("1531971589569-0d9370cbe1e5"),
    img("1558036117-15d82a90b9b1"),
  ],
  totalPhotos: 32,

  meta: [
    { icon: "home", label: "Project Type", value: "Roof Replacement" },
    { icon: "ruler", label: "Project Size", value: "5,200 sq ft" },
    { icon: "clock", label: "Duration", value: "23 Days" },
    { icon: "badge", label: "Completed", value: "May 20, 2024" },
  ],

  tabs: ["Overview", "Drone Photos", "Timeline", "Cost Breakdown", "Materials", "Crew", "Documents"],

  story: {
    paragraphs: [
      "Sarah contacted Skyve after noticing multiple leaks and missing shingles following a heavy storm. Her 20-year-old roof was beyond repair and affecting the interior of her home.",
      "We provided a detailed inspection, transparent estimate, and a plan that fit her budget and timeline. Our team completed the full roof replacement with premium materials and meticulous attention to detail.",
    ],
    points: [
      { icon: "shield", title: "The Challenge", desc: "Multiple leaks, missing shingles, and an aging roof were causing water damage and energy loss." },
      { icon: "wrench", title: "Our Solution", desc: "Complete tear-off and replacement with CertainTeed Landmark PRO shingles and upgraded ventilation." },
      { icon: "badge", title: "The Result", desc: "A beautiful, durable roof built to last for decades with improved energy efficiency and peace of mind." },
    ],
  },

  drone: [
    img("1570129477492-45c003edd2be"),
    img("1600596542815-ffad4c1539a9"),
    img("1564013799919-ab600027ffc6"),
    img("1531971589569-0d9370cbe1e5"),
    img("1632759145351-1d592919f522"),
    img("1558036117-15d82a90b9b1"),
  ],

  timeline: [
    { title: "Inspection & Estimate", date: "Apr 28, 2024" },
    { title: "Contract Signed", date: "Apr 29, 2024" },
    { title: "Material Delivery", date: "Apr 30, 2024" },
    { title: "Tear-Off & Disposal", date: "May 1, 2024" },
    { title: "Underlayment & Ice Shield", date: "May 2, 2024" },
    { title: "New Roof Installation", date: "May 3 – May 6, 2024" },
    { title: "Final Inspection & Cleanup", date: "May 7, 2024" },
  ],

  cost: {
    total: "$28,450.00",
    segments: [
      { label: "Materials", amount: "$16,250.00", pct: 57, color: "var(--color-ridge)" },
      { label: "Labor", amount: "$7,850.00", pct: 28, color: "var(--color-accent)" },
      { label: "Equipment & Disposal", amount: "$2,300.00", pct: 8, color: "var(--color-warning)" },
      { label: "Permits & Fees", amount: "$1,350.00", pct: 5, color: "var(--color-sky)" },
      { label: "Other", amount: "$700.00", pct: 2, color: "var(--color-success)" },
    ],
  },

  materialsUsed: [
    { name: "CertainTeed Landmark PRO", spec: "Moire Black", qty: "52 Squares" },
    { name: "CertainTeed RoofRunner", spec: "Underlayment", qty: "52 Rolls" },
    { name: "CertainTeed Ridge Vent", spec: "Ridge Ventilation", qty: "40 ft" },
    { name: "CertainTeed Starter Shingle", spec: "Moire Black", qty: "120 ft" },
    { name: "Aluminum Drip Edge", spec: "Black", qty: "180 ft" },
  ],

  crew: {
    name: "Crew Alpha",
    lead: "John R.",
    members: 6,
    team: [
      { name: "John R.", role: "Team Lead", initials: "JR" },
      { name: "Mike T.", role: "Roofing Specialist", initials: "MT" },
      { name: "Carlos M.", role: "Roofer", initials: "CM" },
      { name: "Brandon L.", role: "Roofer", initials: "BL" },
      { name: "Jose P.", role: "Laborer", initials: "JP" },
      { name: "David K.", role: "Laborer", initials: "DK" },
    ],
  },

  summary: [
    { label: "Location", value: "Kirkland, WA" },
    { label: "Project Type", value: "Roof Replacement" },
    { label: "Roof Size", value: "5,200 sq ft" },
    { label: "Materials", value: "CertainTeed Landmark PRO", sub: "Moire Black" },
    { label: "Duration", value: "23 Days" },
    { label: "Start Date", value: "Apr 28, 2024" },
    { label: "Completion Date", value: "May 20, 2024" },
    { label: "Warranty", value: "50 yrs (Materials) / 10 yrs (Workmanship)" },
  ],

  beforeAfter: {
    before: { image: img("1632759145351-1d592919f522"), label: "Before" },
    after: { image: img("1570129477492-45c003edd2be"), label: "After" },
  },

  documents: [
    { title: "Field Report (PDF)", sub: "Generated on May 21, 2024", kind: "pdf" },
    { title: "Contract Agreement", sub: "Signed on Apr 29, 2024", kind: "doc" },
    { title: "Material Warranty", sub: "CertainTeed 50-Year Warranty", kind: "cert" },
    { title: "Final Invoice (PDF)", sub: "Paid on May 20, 2024", kind: "pdf" },
  ],
};
