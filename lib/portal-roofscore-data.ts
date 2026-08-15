/* Future Homeowner Portal — Roof Score (/portal/roof-score). Phase 2.
   Powered by Verascor (the user's own trust-infrastructure product). */

export const RS_LAST_UPDATED = {
  label: "Last Updated",
  date: "May 15, 2025",
  by: "by Verascor AI",
  button: { label: "View Full Report", href: "#" },
};

export const RS_OVERALL = {
  score: 87,
  rating: "Excellent",
  blurb: "Your roof is in excellent condition. Regular maintenance will extend its life and protect your home.",
  stats: [
    { icon: "clock", label: "Expected Roof Life", value: "25+", sub: "Years Remaining" },
    { icon: "home", label: "Roof Age", value: "3", sub: "Years" },
    { icon: "search", label: "Last Inspection", value: "May 5, 2025", sub: "10 days ago" },
    { icon: "calendar", label: "Next Inspection", value: "Nov 5, 2025", sub: "In 6 months" },
  ],
  scale: [
    { at: 0, label: "Poor" },
    { at: 25, label: "Fair" },
    { at: 50, label: "Good" },
    { at: 75, label: "Very Good" },
    { at: 100, label: "Excellent" },
  ],
};

export const RS_COMPONENTS = {
  title: "Roof Health Overview",
  subtitle: "Detailed view of your roof systems and components.",
  items: [
    { icon: "home", label: "Shingles", status: "Excellent" },
    { icon: "layers", label: "Flashing", status: "Excellent" },
    { icon: "wind", label: "Vent Boots", status: "Excellent" },
    { icon: "grid", label: "Ridge Caps", status: "Excellent" },
    { icon: "droplet", label: "Gutters", status: "Good" },
    { icon: "shield", label: "Soffit & Fascia", status: "Excellent" },
    { icon: "sun", label: "Skylights", status: "Excellent" },
  ],
};

export const RS_INSIGHTS = {
  title: "Verascor Insights",
  subtitle: "AI-powered analysis for smarter decisions.",
  cards: [
    { icon: "chart", tone: "text-success", label: "Long-Term Value", value: "+7%", desc: "Well-maintained roofs can increase home value by up to 7%.", sub: "Potential Home Value Impact" },
    { icon: "handcoins", tone: "text-success", label: "Cost Savings", value: "$3,200", desc: "Preventative maintenance can save you thousands in future repairs.", sub: "Estimated Savings" },
    { icon: "shield", tone: "text-success", label: "Risk Level", value: "Low", desc: "Your roof has a low risk of leakage in the next 12 months.", sub: "Risk of Leakage" },
    { icon: "checkcircle", tone: "text-success", label: "Coverage Confidence", value: "100%", desc: "Your warranty coverage is active and requirements are being met.", sub: "Warranty Compliance" },
  ],
};

export type ScoreRecord = { date: string; score: number; change: string; type: string; inspector: string };
export const RS_HISTORY = {
  title: "Score History & Reports",
  subtitle: "Track your roof score over time and access detailed reports.",
  rows: [
    { date: "May 15, 2025", score: 87, change: "+5", type: "Roof Maintenance Inspection", inspector: "Skyve Inspector" },
    { date: "Nov 12, 2024", score: 82, change: "+7", type: "Roof Maintenance Inspection", inspector: "Skyve Inspector" },
    { date: "Aug 15, 2024", score: 75, change: "", type: "Exterior Inspection", inspector: "City Inspector" },
    { date: "May 10, 2024", score: 70, change: "+8", type: "Drone Roof Inspection", inspector: "Skyve Inspector" },
    { date: "Feb 2, 2024", score: 62, change: "—", type: "New Installation Baseline", inspector: "Skyve Inspector" },
  ] as ScoreRecord[],
};

export const RS_TREND = {
  title: "Score Trend",
  points: [42, 45, 44, 58, 62, 70, 78, 87],
  labels: ["Nov '23", "Feb '24", "May '24", "Aug '24", "Nov '24", "Feb '25", "May '25"],
  latest: 87,
  up: "+12 points",
  upNote: "since last update",
};

export const RS_BREAKDOWN = {
  title: "Score Breakdown",
  rows: [
    { label: "Roofing Materials", value: 90 },
    { label: "Workmanship", value: 88 },
    { label: "Roof System", value: 85 },
    { label: "Drainage System", value: 80 },
    { label: "Attic Ventilation", value: 90 },
    { label: "Maintenance", value: 82 },
  ],
};

export const RS_IMPACTS = {
  title: "What Impacts Your Score?",
  items: [
    { icon: "search", title: "Inspection Results", desc: "Recent inspections and findings" },
    { icon: "wrench", title: "Maintenance History", desc: "Regular maintenance improves score" },
    { icon: "cloud", title: "Weather Exposure", desc: "Local weather and storm impact" },
    { icon: "home", title: "Roof Age & Materials", desc: "Age and quality of materials used" },
  ],
};

export const RS_RECOMMENDATIONS = {
  title: "Recommendations",
  items: [
    { icon: "droplet", title: "Clean Gutters", desc: "Remove debris to ensure proper drainage.", tag: "Low Priority", tagTone: "bg-mist text-ink-70" },
    { icon: "wind", title: "Check Attic Ventilation", desc: "Ensure vents are clear and working.", tag: "Low Priority", tagTone: "bg-mist text-ink-70" },
    { icon: "calendar", title: "Schedule Fall Inspection", desc: "Recommended next inspection in Nov 2025.", tag: "Recommended", tagTone: "bg-ridge/12 text-ridge" },
  ],
};

export const RS_FAQS = {
  title: "Frequently Asked Questions",
  items: [
    "How is my Roof Score calculated?",
    "How often is my score updated?",
    "What score is considered good?",
    "How can I improve my score?",
  ],
};
