/* Field Report Detail page (/field-reports/[slug]) — mock content.
   Brand/manufacturer names shown as plain text (no logo art). */

const img = (id: string) => `/images/${id}.jpg`;

export const FR_DETAIL = {
  slug: "1234-evergreen-lane",
  city: "Kirkland, WA",
  address: "1234 Evergreen Lane",
  propertyType: "Residential",
  size: "5,200 sq ft",
  status: "Completed",
  rating: "5.0",
  service: "Roof Replacement",
  materials: "CertainTeed Landmark PRO",
  crew: "Crew Alpha",
  completion: "May 20, 2024",
  warranty: "50 yrs (Material) / 10 yrs (Installation)",
  heroImage: img("1600596542815-ffad4c1539a9"),
  gallery: [
    img("1570129477492-45c003edd2be"),
    img("1632759145351-1d592919f522"),
    img("1564013799919-ab600027ffc6"),
    img("1531971589569-0d9370cbe1e5"),
    img("1558036117-15d82a90b9b1"),
  ],
  totalPhotos: 33,

  tabs: [
    "Overview", "Drone Photos", "Timeline", "Cost Breakdown", "Materials", "Crew", "Notes & Documents",
  ],

  drone: [
    { label: "Overview", image: img("1570129477492-45c003edd2be") },
    { label: "Front", image: img("1600596542815-ffad4c1539a9") },
    { label: "Rear", image: img("1564013799919-ab600027ffc6") },
    { label: "Left Side", image: img("1531971589569-0d9370cbe1e5") },
    { label: "Roof Detail", image: img("1632759145351-1d592919f522") },
    { label: "Right Side", image: img("1558036117-15d82a90b9b1") },
  ],

  timeline: [
    { n: 1, title: "Initial Inspection", dates: "Apr 28, 2024", desc: "Full roof inspection and assessment of existing conditions.", image: img("1632759145351-1d592919f522") },
    { n: 2, title: "Tear-Off", dates: "May 5 – May 9, 2024", desc: "Removal of the old roofing system and debris disposal.", image: img("1570129477492-45c003edd2be") },
    { n: 3, title: "Underlayment", dates: "May 3, 2024", desc: "Installation of the water barrier and protective membranes.", image: img("1558036117-15d82a90b9b1") },
    { n: 4, title: "Shingle Installation", dates: "May 6 – May 9, 2024", desc: "Installation of new CertainTeed Landmark PRO shingles.", image: img("1564013799919-ab600027ffc6") },
    { n: 5, title: "Finishing & Details", dates: "May 10 – May 13, 2024", desc: "Gutters, flashing, ventilation, and finishing details.", image: img("1531971589569-0d9370cbe1e5") },
    { n: 6, title: "Cleanup & Final Inspection", dates: "May 20, 2024", desc: "Full site cleanup and final quality inspection.", image: img("1600596542815-ffad4c1539a9") },
  ],

  cost: {
    total: "$28,450.00",
    segments: [
      { label: "Materials", amount: "$16,250.00", pct: 57, color: "var(--color-ridge)" },
      { label: "Labor", amount: "$7,850.00", pct: 28, color: "var(--color-accent)" },
      { label: "Equipment", amount: "$2,100.00", pct: 7, color: "var(--color-warning)" },
      { label: "Permits & Fees", amount: "$1,250.00", pct: 4, color: "var(--color-sky)" },
      { label: "Other", amount: "$1,000.00", pct: 4, color: "var(--color-success)" },
    ],
  },

  materialsUsed: [
    { name: "CertainTeed Landmark PRO", spec: "Moire Black", qty: "45 Squares" },
    { name: "CertainTeed RoofRunner", spec: "Underlayment", qty: "52 Rolls" },
    { name: "CertainTeed Ridge Vent", spec: "Ridge Ventilation", qty: "40 ft" },
    { name: "CertainTeed Starter Shingle", spec: "Moire Black", qty: "120 ft" },
    { name: "Aluminum Drip Edge", spec: "Black", qty: "180 ft" },
  ],

  crewInfo: {
    name: "Crew Alpha",
    lead: "John R.",
    members: 6,
    days: 23,
    hours: "320+",
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
    { label: "Status", value: "Completed", good: true },
    { label: "Start Date", value: "Apr 28, 2024" },
    { label: "Completion Date", value: "May 20, 2024" },
    { label: "Duration", value: "23 days" },
    { label: "Weather During Project", value: "Mostly Sunny" },
    { label: "Permits", value: "Obtained", check: true },
    { label: "Final Inspection", value: "Approved", check: true },
    { label: "Report Created", value: "May 21, 2024" },
  ],

  client: {
    name: "Sarah M.",
    email: "sarah.m@email.com",
    phone: "(425) 555-0187",
    city: "Kirkland, WA",
  },

  location: {
    address1: "1234 Evergreen Lane",
    address2: "Kirkland, WA 98033",
  },

  quickActions: [
    { icon: "document", label: "Download Report as PDF" },
    { icon: "message", label: "Share Report" },
    { icon: "mail", label: "Send to Client" },
    { icon: "heart", label: "Add to Favorites" },
  ],

  documents: [
    { title: "Field Report (PDF)", sub: "Generated on May 21, 2024", kind: "pdf" },
    { title: "Signed Contract", sub: "Sent on Apr 25, 2024", kind: "doc" },
    { title: "Building Permit", sub: "Approved on Apr 26, 2024", kind: "doc" },
    { title: "Materials Warranty", sub: "Warranty certificate", kind: "cert" },
  ],
};
