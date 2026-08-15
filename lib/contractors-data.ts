/* Contractors Program page (/contractors-program) — mock content.
   Avatars use initials. Hero/handshake images are placeholders.
   EagleView shown as plain text (no logo art). */

const img = (id: string) => `/images/${id}.jpg`;

export const CP_HERO = {
  level: "Level 11",
  eyebrow: "Pro Partner Ecosystem",
  titleLines: ["Contractors Program"],
  desc: "Grow your roofing business with premium leads, powerful tools, exclusive resources, and a partner network that helps you win.",
  image: img("1632759145351-1d592919f522"),
  features: [
    { icon: "document", title: "High-Quality Leads", desc: "Get exclusive leads from homeowners" },
    { icon: "wrench", title: "Powerful Tools", desc: "Estimates, reports, and measurement tools" },
    { icon: "graduation", title: "Training & Support", desc: "Courses, certifications, and dedicated support" },
    { icon: "chart", title: "Business Growth", desc: "Resources to scale your business" },
  ],
  card: {
    title: "Built for Contractors. Backed by Skyve.",
    desc: "We provide the tools, training, and support you need to deliver exceptional results and grow with confidence.",
    stats: [
      { value: "2,300+", label: "Active Partners" },
      { value: "$48M+", label: "Partner Generated Revenue" },
      { value: "4.8/5", label: "Partner Rating" },
      { value: "98%", label: "Would Recommend Skyve" },
    ],
  },
};

export const CP_BENEFITS = [
  { icon: "chart", title: "Exclusive Lead Access", desc: "High-intent leads in your service area" },
  { icon: "percent", title: "Partner Pricing", desc: "Exclusive discounts on materials & tools" },
  { icon: "brush", title: "Marketing Support", desc: "Branded assets and co-marketing" },
  { icon: "zap", title: "Roofing Technology", desc: "Advanced tools to save time and close more jobs" },
  { icon: "graduation", title: "Training & Certification", desc: "Level up your skills and earn certifications" },
  { icon: "message", title: "Dedicated Support", desc: "Real people. Real fast. Real solutions." },
  { icon: "gift", title: "Partner Rewards", desc: "Earn points and unlock exclusive rewards" },
];

export const CP_STEPS = [
  { n: 1, icon: "userplus", title: "Apply & Get Approved", desc: "Submit your application and get approved within 48 hours." },
  { n: 2, icon: "chart", title: "Get Matched with Leads", desc: "Receive exclusive high-quality leads in your area." },
  { n: 3, icon: "wrench", title: "Close More Jobs", desc: "Use our tools, resources, and support to win more projects." },
  { n: 4, icon: "badge", title: "Grow Your Business", desc: "Build your reputation and increase your revenue." },
  { n: 5, icon: "gift", title: "Earn Rewards", desc: "Unlock exclusive rewards for your success." },
];

export const CP_LEAD_ACCESS = {
  title: "Exclusive Lead Access",
  desc: "High-quality leads delivered when you want them.",
  points: [
    "Exclusive to our contractor partners",
    "Pre-qualified homeowners",
    "Real-time notifications",
    "No bidding wars",
    "Better conversion, more jobs",
  ],
  button: "View Lead Dashboard",
  preview: {
    badge: "New Lead",
    rows: [
      { label: "Project Type", value: "Roof Replacement" },
      { label: "Location", value: "Kirkland, WA" },
      { label: "Budget Range", value: "$20,000 - $30,000" },
    ],
    scoreLabel: "Lead Score",
    cta: "View Lead Details",
  },
};

export const CP_TOOLS = [
  { icon: "calculator", title: "Instant Estimator", desc: "Create accurate estimates in minutes" },
  { icon: "ruler", title: "Roof Measurements", desc: "Aerial measurements with EagleView" },
  { icon: "layers", title: "Material Calculator", desc: "Calculate materials and pricing" },
  { icon: "file", title: "Report Generator", desc: "Branded reports to impress clients" },
  { icon: "document", title: "Document Library", desc: "Contracts, templates, and forms" },
  { icon: "message", title: "Mobile App", desc: "Manage jobs and leads on the go" },
];

export const CP_COURSES = [
  { title: "Roofing Systems 101", desc: "Complete roofing systems overview", progress: 75, image: img("1632759145351-1d592919f522") },
  { title: "Advanced Installation", desc: "Best practices for quality installation", progress: 50, image: img("1570129477492-45c003edd2be") },
  { title: "Business Growth Strategies", desc: "Marketing, sales, and operations", progress: 25, image: img("1564013799919-ab600027ffc6") },
];

export const CP_SUPPORT = [
  { icon: "users", title: "Dedicated Partner Manager", desc: "Your single point of contact for all your needs." },
  { icon: "wrench", title: "Technical Support", desc: "Get help with tools, measurements, and reports." },
  { icon: "brush", title: "Marketing Assistance", desc: "Co-marketing and promotional support." },
  { icon: "message", title: "Private Partner Community", desc: "Connect and learn from other top contractors." },
];

export const CP_TESTIMONIALS = [
  { quote: "The leads are high quality and the support is incredible. Skyve has helped us grow our business by 40%.", name: "Jason M.", role: "Owner, Built Right Roofing", initials: "JM" },
  { quote: "The tools save us so much time and the reports help us close more jobs with confidence.", name: "Sarah T.", role: "Project Manager, Summit Exteriors", initials: "ST" },
];

export const CP_TIERS = [
  {
    name: "Pro Partner",
    desc: "Perfect for growing roofing companies",
    features: ["Access to leads", "Standard tools", "Email support"],
    price: "Free to Join",
    popular: false,
  },
  {
    name: "Elite Partner",
    desc: "For established contractors ready to scale",
    features: ["Priority lead access", "Advanced tools", "Dedicated support", "Marketing support"],
    price: "Learn More",
    popular: true,
  },
  {
    name: "Master Partner",
    desc: "For top-performing contractors",
    features: ["Premium lead access", "All tools & resources", "Dedicated partner manager", "Co-marketing opportunities"],
    price: "Learn More",
    popular: false,
  },
];

export const CP_CTA = {
  title: "Let's Build Success Together",
  desc: "Join our network of professional roofing contractors and take your business to the next level.",
  button: "Join the Contractors Program",
  image: img("1632759145351-1d592919f522"),
  points: ["More leads", "Better tools", "Stronger partnerships", "More profits", "Business growth", "Long-term success"],
};
