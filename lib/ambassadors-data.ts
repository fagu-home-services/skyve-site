/* Ambassadors Program page (/ambassadors-program) — mock content.
   Avatars use initials placeholders. Hero people photo is a placeholder. */

const img = (id: string) => `/images/${id}.jpg`;

export const AMB_HERO = {
  titleLines: ["Ambassadors", "Program"],
  tagline: "Share Skyve. Earn Rewards.",
  desc: "Know someone who could use a new roof or exterior upgrade? Refer them to Skyve and get rewarded when they become our client.",
  image: img("1600596542815-ffad4c1539a9"),
  trust: [
    { icon: "users", label: "Help Your Neighbors" },
    { icon: "shield", label: "Support Local Business" },
    { icon: "star", label: "Earn Amazing Rewards" },
    { icon: "star", label: "Be Part of the Skyve Family" },
  ],
};

export const AMB_WHY = [
  { icon: "users", title: "You Help Others Protect Their Home", desc: "Your recommendation can save someone thousands and give them peace of mind." },
  { icon: "shield", title: "You Support a Local Company", desc: "We are committed to quality, honesty, and our community." },
  { icon: "gift", title: "You Earn Rewards", desc: "Get paid or choose exclusive rewards for every successful referral." },
];

export const AMB_REWARDS = [
  { icon: "dollar", value: "$200", label: "Referral Bonus", desc: "For every completed roofing or exterior project you refer." },
  { icon: "diamond", value: "Exclusive", label: "Rewards", desc: "Choose gifts, experiences or gift cards." },
  { icon: "crown", value: "VIP", label: "Recognition", desc: "Featured on Skyve TV and our Ambassadors Hall of Fame." },
];

export const AMB_STEPS = [
  { n: 1, icon: "share", title: "Join", desc: "Sign up in less than 1 minute." },
  { n: 2, icon: "userplus", title: "Share", desc: "Share your unique link or our info with friends and neighbors." },
  { n: 3, icon: "home", title: "They Contact Us", desc: "Your referral reaches out for a free inspection." },
  { n: 4, icon: "badge", title: "Project Completed", desc: "They become our happy customer." },
  { n: 5, icon: "wallet", title: "You Earn", desc: "You receive your reward. It's that simple!" },
];

export const AMB_WHO = [
  { icon: "home", label: "Homeowners" },
  { icon: "users", label: "Neighbors" },
  { icon: "key", label: "Realtors" },
  { icon: "briefcase", label: "Trade Partners" },
  { icon: "heart", label: "Friends & Family" },
];

export const AMB_TESTIMONIALS = [
  { quote: "I referred my neighbor and they loved the result. The bonus was a great perk!", name: "James T.", city: "Kirkland, WA", initials: "JT" },
  { quote: "Skyve is honest, professional and their work is top-notch. Easy to recommend.", name: "Sarah M.", city: "Bellevue, WA", initials: "SM" },
  { quote: "I've earned enough rewards to cover a weekend getaway. Love this program!", name: "Michael R.", city: "Redmond, WA", initials: "MR" },
];

export const AMB_TOP = {
  name: "David L.",
  initials: "DL",
  referrals: "6 Referrals This Month",
  note: "Thank you for helping our community grow!",
};

export const AMB_FAQ = [
  { q: "How does the referral bonus work?", a: "Once your referral completes a qualifying roofing or exterior project, you receive a $200 bonus — paid out or redeemable for rewards." },
  { q: "Can I refer more than one person?", a: "Absolutely. There's no limit — the more people you refer, the more you earn." },
  { q: "When do I get my reward?", a: "Rewards are issued after your referral's project is completed and paid in full, typically within 2–3 weeks." },
  { q: "What types of projects qualify?", a: "Any completed roofing or exterior project — replacement, repair, gutters, siding, skylights, decks, and more." },
  { q: "Is there a limit to how much I can earn?", a: "No limits. Refer as many friends and neighbors as you'd like and earn for every completed project." },
  { q: "How will I know if my referral contacted Skyve?", a: "You'll get a notification when your referral reaches out, and status updates as their project moves forward." },
];

export const AMB_CONTACT = {
  title: "Have Questions?",
  desc: "We're here to help you.",
  email: "ambassadors@skyveroofing.com",
  phone: "(425) 201-2490",
  phoneHref: "tel:+14252012490",
};
