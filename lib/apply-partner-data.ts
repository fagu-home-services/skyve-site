/* Apply To Become a Partner page (/apply-partner) — mock content.
   Static prototype: the form is visual (step 1 shown). */

const img = (id: string) => `/images/${id}.jpg`;

export const AP_HERO = {
  level: "Level 11",
  eyebrow: "Pro Partner Ecosystem",
  titleLines: ["Apply To", "Become a Partner"],
  desc: "Join the Skyve network of trusted professionals and grow your business with high-quality leads, powerful tools, and dedicated support.",
  image: img("1632759145351-1d592919f522"),
  features: [
    { icon: "users", title: "Trusted Network", desc: "Partner with industry leaders" },
    { icon: "chart", title: "Quality Leads", desc: "Receive high-intent leads in your area" },
    { icon: "wrench", title: "Powerful Tools", desc: "Access to estimates, reports & more" },
    { icon: "message", title: "Dedicated Support", desc: "A team that's here to help you succeed" },
  ],
  badge: { title: "Built on Trust. Focused on Results.", desc: "Our partner program is built for roofing professionals who are committed to delivering exceptional service and growing their business." },
};

export const AP_STEPS = [
  { n: 1, title: "Business Information", desc: "Tell us about your company" },
  { n: 2, title: "Experience & Services", desc: "Your expertise and focus" },
  { n: 3, title: "Credentials & Insurance", desc: "Verify your qualifications" },
  { n: 4, title: "Review & Submit", desc: "Submit your application" },
];

export const AP_SELECTS = {
  businessType: { label: "Business Type", required: true, placeholder: "Select business type", options: ["Roofing Contractor", "General Contractor", "Exterior Specialist", "Other"] },
  yearEstablished: { label: "Year Established", required: true, placeholder: "Select year", options: ["2020 – 2024", "2015 – 2019", "2010 – 2014", "Before 2010"] },
  employees: { label: "Number of Employees", required: true, placeholder: "Select number", options: ["1 – 5", "6 – 10", "11 – 25", "26 – 50", "50+"] },
  state: { label: "State", required: true, value: "Washington", options: ["Washington", "Oregon", "Idaho"] },
};

export const AP_BENEFITS = [
  { icon: "shield", title: "High-Quality Leads", desc: "Get exclusive, pre-qualified leads in your service area." },
  { icon: "brush", title: "Marketing Support", desc: "Co-branded materials, campaigns, and resources to grow your brand." },
  { icon: "wrench", title: "Advanced Tools", desc: "Access to estimators, measurement tools, reports, and technology." },
  { icon: "graduation", title: "Training & Certification", desc: "Free training, certifications, and ongoing education." },
  { icon: "users", title: "Dedicated Partner Manager", desc: "A single point of contact to support your business growth." },
  { icon: "gift", title: "Partner Rewards", desc: "Earn rewards, bonuses, and exclusive incentives for your success." },
];

export const AP_QUESTIONS = {
  title: "Questions About the Program?",
  desc: "Our partner team is here to help you every step of the way.",
  phone: "(425) 201-2490",
  phoneHref: "tel:+14252012490",
  email: "partners@skyveexteriors.com",
};

export const AP_WHO = [
  { icon: "shield", label: "Are licensed and insured" },
  { icon: "star", label: "Have a proven track record of quality" },
  { icon: "users", label: "Deliver excellent customer service" },
  { icon: "badge", label: "Are committed to growth and partnership" },
  { icon: "heart", label: "Share our values of integrity & trust" },
];

export const AP_TESTIMONIALS = [
  { quote: "Skyve has been a game-changer for our business. The quality of leads and support we receive is unmatched.", name: "Mike R.", role: "Owner, Rainier Roofing", initials: "MR" },
  { quote: "The tools, training, and consistent leads have helped us grow 40% in the last year. Proud to be a Skyve Partner!", name: "David L.", role: "Owner, Summit Exteriors", initials: "DL" },
];

export const AP_CTA = {
  title: "Ready to Grow Your Roofing Business?",
  desc: "Join the Skyve Pro Partner Ecosystem and get the tools, leads, and support you need to take your business to the next level.",
  button: "Start Your Application",
  image: img("1632759145351-1d592919f522"),
  points: ["Fast application process", "No upfront fees", "Start receiving leads faster", "Grow with a trusted partner"],
};
