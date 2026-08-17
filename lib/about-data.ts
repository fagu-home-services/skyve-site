/* About Skyve page (/about) — mock content.
   People are branded initial placeholders — replace with real founder/team photos. */

export const ABOUT_HERO_IMAGE = "/images/hero-home-dusk-2.webp";
export const MISSION_IMAGE = "/images/crew-2.webp";

export const STORY_PARAGRAPHS = [
  "Skyve began with a simple belief: homeowners deserve accurate information, honest pricing, and a team that truly cares.",
  "What started as a small local company has grown into one of the most trusted roofing and exterior firms in King and Snohomish County, built on referrals, real results, and a commitment to doing things right.",
  "Today, we use advanced technology, data, and experienced crews to deliver a better experience from the first estimate to long-term roof care and beyond.",
];

export const FOUNDER = {
  name: "Fabricio Silva",
  role: "Founder & CEO",
  initials: "FS",
  bio: [
    "Fabricio founded Skyve with a mission to bring technology, transparency, and accountability to an industry that desperately needed it.",
    "With over a decade of hands-on experience in roofing and construction, he leads with integrity, precision, and a relentless focus on customer satisfaction.",
  ],
};

export const TEAM = [
  { name: "Brandon M.", role: "Operations Manager", initials: "BM", desc: "Oversees projects and ensures every detail is executed to perfection." },
  { name: "Amanda S.", role: "Office Manager", initials: "AS", desc: "Keeps everything organized and ensures our team and clients are supported." },
  { name: "Josh T.", role: "Lead Inspector", initials: "JT", desc: "Certified drone pilot and inspector with an eye for every detail." },
  { name: "Mike R.", role: "Production Manager", initials: "MR", desc: "Leads our crews with a focus on safety, quality, and efficiency." },
  { name: "Emily K.", role: "Client Success", initials: "EK", desc: "Your go-to for a smooth experience from start to finish." },
];

export const MISSION = {
  title: "To Protect What Matters Most",
  body: "We exist to provide Washington homeowners with roofing and exterior solutions that are built to last — backed by technology, transparency, and a team you can trust.",
};

export const VALUES = [
  { icon: "shield", title: "Integrity", desc: "We do what's right, even when no one is watching." },
  { icon: "badge", title: "Transparency", desc: "Honest pricing, clear communication, and no hidden agendas." },
  { icon: "star", title: "Excellence", desc: "We never cut corners. Quality is in everything we do." },
  { icon: "radar", title: "Innovation", desc: "We use advanced technology to deliver better results." },
  { icon: "users", title: "Community", desc: "We're proud to serve and strengthen the communities we call home." },
] as const;

export const IMPACT_STATS = [
  { icon: "home", value: "20+", label: "Years Combined Experience" },
  { icon: "shield", value: "Licensed", label: "& Fully Insured" },
  { icon: "users", value: "Owner-Led", label: "Every Project" },
  { icon: "mappin", value: "King & Snohomish", label: "Counties Served" },
] as const;
