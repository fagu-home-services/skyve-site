/* Realtors Program page (/realtors-program) — mock content.
   Avatars use initials. Hero/handshake images are placeholders. */

const img = (id: string) => `/images/${id}.jpg`;

export const RP_HERO = {
  level: "Level 11",
  eyebrow: "Pro Partner Ecosystem",
  titleLines: ["Realtors Program"],
  desc: "Deliver more value to your clients. We help you protect your reputation and close more deals with confidence.",
  image: img("1600596542815-ffad4c1539a9"),
  features: [
    { icon: "users", title: "Stronger Client Trust", desc: "Recommend a trusted roofing partner" },
    { icon: "shield", title: "Protect Transactions", desc: "Avoid surprises and last-minute issues" },
    { icon: "star", title: "Add More Value", desc: "Differentiate yourself to win more listings" },
    { icon: "gift", title: "Exclusive Rewards", desc: "Earn rewards for every successful referral" },
  ],
  card: {
    title: "A Trusted Partner You Can Count On",
    desc: "Skyve provides fast, reliable roofing services and inspections so you can focus on what you do best—helping your clients buy and sell with peace of mind.",
    stats: [
      { value: "2,300+", label: "Active Partners" },
      { value: "1,200+", label: "Realtor Referrals" },
      { value: "4.8/5", label: "Partner Rating" },
      { value: "98%", label: "Would Recommend Skyve" },
    ],
  },
};

export const RP_BENEFITS = [
  { icon: "calendar", title: "Priority Scheduling", desc: "Fast inspections and estimates for your clients" },
  { icon: "percent", title: "Preferred Pricing", desc: "Exclusive partner pricing you can pass along" },
  { icon: "document", title: "Co-Branded Materials", desc: "Branded reports, flyers and digital assets" },
  { icon: "chart", title: "Client Reports", desc: "Professional reports you can share with confidence" },
  { icon: "message", title: "Ongoing Support", desc: "A dedicated team to support you and your clients" },
  { icon: "gift", title: "Referral Rewards", desc: "Earn rewards for every closed project" },
];

export const RP_STEPS = [
  { n: 1, icon: "users", title: "Join the Program", desc: "Sign up in minutes and get approved." },
  { n: 2, icon: "userplus", title: "Refer Your Client", desc: "Send us your client's information." },
  { n: 3, icon: "wrench", title: "We Take Care", desc: "We handle the inspection, estimate and service." },
  { n: 4, icon: "badge", title: "Happy Clients", desc: "Your clients get quality work they can trust." },
  { n: 5, icon: "gift", title: "You Earn Rewards", desc: "Get rewarded for closed projects every time." },
];

export const RP_EARN = {
  title: "Earn More With Every Referral",
  desc: "Get rewarded for helping your clients protect their home with a strong, reliable roof.",
  amount: "$250 – $750",
  amountSub: "Per Completed Project*",
  points: ["Competitive rewards", "No cost to join", "No obligation", "Track referrals in real time"],
  note: "*Rewards vary based on project size and type.",
  image: img("1632759145351-1d592919f522"),
};

export const RP_TOOLS = [
  { icon: "document", title: "Marketing Materials", desc: "Flyers, postcards, and digital graphics" },
  { icon: "home", title: "Listing Inspection", desc: "Pre-listing roof inspections to increase buyer confidence" },
  { icon: "file", title: "Roof Condition Report", desc: "Branded reports to share with clients" },
  { icon: "graduation", title: "Client Education", desc: "Help your clients understand roofing options" },
  { icon: "calculator", title: "Estimate Sharing", desc: "Professional estimates you can trust" },
  { icon: "message", title: "FAQ & Guides", desc: "Answers to common roofing questions" },
];

export const RP_SUPPORT = [
  { icon: "users", title: "Dedicated Partner Manager", desc: "A single point of contact for all your needs." },
  { icon: "clock", title: "Fast Turnaround", desc: "Inspections and estimates within 24–48 hours." },
  { icon: "message", title: "Clear Communication", desc: "We keep you and your clients informed every step of the way." },
  { icon: "badge", title: "Quality You Can Trust", desc: "Award-winning service with 5-star reviews." },
];

export const RP_CONTACT = {
  phone: "(425) 201-2490",
  phoneHref: "tel:+14252012490",
  email: "partners@skyveexteriors.com",
};

export const RP_TESTIMONIALS = [
  { quote: "Skyve makes me look good. My clients love their professionalism and fast service. I never worry when I refer a roofing project to them.", name: "Jessica M.", role: "Real Estate Broker", city: "Bellevue, WA", initials: "JM" },
  { quote: "The co-branded reports and quick inspections help me close deals faster and with fewer surprises. Highly recommend the Realtors Program!", name: "Mark T.", role: "Realtor", city: "Kirkland, WA", initials: "MT" },
];

export const RP_FAQ = [
  { q: "How does the Realtors Program work?", a: "Join for free, refer your clients for roofing inspections or projects, and earn rewards for every completed project — we handle the rest." },
  { q: "How much do I earn for referrals?", a: "You earn $250–$750 per completed roofing project, depending on project size and type." },
  { q: "Do I need to be with a specific brokerage to join?", a: "No. Any licensed real estate professional can join, regardless of brokerage." },
  { q: "Can I track my referrals and rewards?", a: "Yes. Your partner dashboard shows every referral's status and your rewards in real time." },
  { q: "What types of projects qualify for rewards?", a: "Any completed roofing or exterior project — replacement, repair, inspection, and more." },
];

export const RP_CTA = {
  title: "Let's Protect More Homes Together",
  desc: "Join our network of trusted real estate professionals and start earning rewards today.",
  button: "Join the Realtors Program",
  image: img("1632759145351-1d592919f522"),
  points: ["Easy sign up", "No fees or obligations", "Great rewards", "Happy clients"],
};
