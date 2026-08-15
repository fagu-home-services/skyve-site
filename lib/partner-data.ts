/* Pro Partner Hub page (/pro-partner) — mock content.
   Static prototype: dashboard figures are sample data. Handshake image is a placeholder. */

const img = (id: string) => `/images/${id}.jpg`;

export const PH_HERO = {
  level: "Level 11",
  eyebrow: "Pro Partner Ecosystem",
  titleLines: ["Pro Partner Hub"],
  desc: "Stronger together. Access resources, training, marketing tools, and support to grow your roofing business with Skyve.",
  image: img("1600596542815-ffad4c1539a9"),
  features: [
    { icon: "chart", title: "Grow Your Business", desc: "Get more leads and close more jobs" },
    { icon: "document", title: "Exclusive Resources", desc: "Tools, guides, and partner discounts" },
    { icon: "message", title: "Priority Support", desc: "Dedicated partner support team" },
    { icon: "users", title: "Trusted Network", desc: "Connect with top industry professionals" },
  ],
  success: {
    title: "Partner Success",
    subtitle: "Numbers That Matter",
    stats: [
      { value: "2,300+", label: "Active Partners" },
      { value: "$48M+", label: "Partner Generated Revenue" },
      { value: "4.8/5", label: "Partner Satisfaction Rating" },
      { value: "98%", label: "Would Recommend Skyve" },
    ],
  },
};

export const PH_QUICK_ACCESS = [
  { icon: "grid", title: "Partner Dashboard", desc: "Your performance overview" },
  { icon: "brush", title: "Marketing Center", desc: "Branded materials and campaigns" },
  { icon: "graduation", title: "Training & Certifications", desc: "Courses and video training library" },
  { icon: "chart", title: "Lead Marketplace", desc: "Exclusive leads for partners" },
  { icon: "users", title: "Partner Directory", desc: "Connect and collaborate" },
  { icon: "message", title: "Support Center", desc: "Get help from our partner team" },
];

export const PH_STATS = [
  { icon: "document", label: "Partner Received", value: "24", delta: "+18%" },
  { icon: "badge", label: "Jobs Won", value: "8", delta: "+16%" },
  { icon: "dollar", label: "Revenue Generated", value: "$126,400", delta: "+22%" },
  { icon: "chart", label: "Conversion Rate", value: "33%", delta: "+6%" },
];

export const PH_LEADS = [
  { type: "Roof Replacement", city: "Kirkland, WA", status: "New", time: "2h ago" },
  { type: "Roof Repair", city: "Redmond, WA", status: "New", time: "4h ago" },
  { type: "Metal Roofing", city: "Bellevue, WA", status: "Contacted", time: "1d ago" },
  { type: "Roof Inspection", city: "Sammamish, WA", status: "Qualified", time: "2d ago" },
  { type: "Gutter Installation", city: "Bothell, WA", status: "New", time: "2d ago" },
];

export const PH_CHART = {
  labels: ["Apr 20", "Apr 27", "May 4", "May 11", "May 18"],
  leads: [8, 14, 12, 22, 28, 24],
  jobs: [4, 9, 8, 12, 18, 19],
};

export const PH_NEWS = [
  { title: "New Lead Program Launch", desc: "Our new premium lead program is now live! Get higher quality leads in your area.", date: "May 20, 2025" },
  { title: "Summer Marketing Campaign", desc: "Access our new summer campaign materials in the Marketing Center.", date: "May 18, 2025" },
  { title: "Certification Course Update", desc: "New advanced roofing systems course now available.", date: "May 15, 2025" },
];

export const PH_BENEFITS = [
  "Exclusive lead opportunities",
  "Co-branded marketing materials",
  "Competitive partner pricing",
  "Priority technical support",
  "Training and certification programs",
  "Business growth resources",
  "Networking with industry leaders",
  "Partner-only events",
];

export const PH_COURSES = [
  { title: "Roofing Systems 101", desc: "Basic roofing systems and components", progress: 75, image: img("1632759145351-1d592919f522") },
  { title: "Advanced Installation Techniques", desc: "Professional installation best practices", progress: 45, image: img("1570129477492-45c003edd2be") },
  { title: "Business Growth Strategies", desc: "Marketing and business development", progress: 20, image: img("1564013799919-ab600027ffc6") },
];

export const PH_RESOURCES = [
  { icon: "document", title: "Partner Playbook", desc: "Everything you need to succeed" },
  { icon: "chart", title: "Sales Presentation", desc: "Close more deals with confidence" },
  { icon: "file", title: "Proposal Templates", desc: "Professional templates that win jobs" },
  { icon: "camera", title: "Project Photo Library", desc: "High-quality images for your marketing" },
  { icon: "badge", title: "Brand Guidelines", desc: "Use our brand assets correctly" },
];

export const PH_CTA = {
  title: "Ready to Take Your Business to the Next Level?",
  desc: "Join our network of successful roofing professionals and get access to exclusive resources, leads, and support.",
  button: "Apply to Become a Partner",
  image: img("1632759145351-1d592919f522"),
  points: ["Quick approval process", "No monthly fees", "Start receiving leads fast"],
};
