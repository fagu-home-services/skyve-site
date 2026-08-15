/* Careers page (/careers) — mock content.
   Team/life photos are placeholders — replace with real Skyve team photos. */

export const CAREERS_HERO_IMAGE = "/images/crew-1.webp";

export const CAREERS_HERO_FEATURES = [
  { icon: "users", title: "Team First", desc: "We support each other and win together." },
  { icon: "shield", title: "Do It Right", desc: "Quality, integrity, and attention to detail." },
  { icon: "chart", title: "Grow With Us", desc: "Training, advancement, and real opportunities." },
  { icon: "heart", title: "Make an Impact", desc: "Help homeowners. Improve communities." },
] as const;

export const WHY_WORK = [
  { icon: "dollar", title: "Competitive Pay", desc: "We offer industry-leading pay and performance bonuses." },
  { icon: "heart", title: "Health Benefits", desc: "Medical, dental, vision, and life insurance options." },
  { icon: "graduation", title: "Growth Opportunities", desc: "We invest in your future with training and career development." },
  { icon: "calendar", title: "Work-Life Balance", desc: "Flexible scheduling and time for what matters most." },
  { icon: "hardhat", title: "Top Equipment", desc: "Work with the best tools, technology, and materials." },
  { icon: "users", title: "Strong Culture", desc: "Respect, teamwork, and a positive, supportive environment." },
] as const;

export const OPEN_POSITIONS = [
  { icon: "document", title: "Roofing Project Manager", desc: "Lead projects from start to finish and ensure exceptional results for our customers.", location: "Kirkland, WA", type: "Full-Time" },
  { icon: "users", title: "Roofing Crew Lead", desc: "Lead a crew, set the standard, and build high-quality roofs that last.", location: "Kirkland, WA", type: "Full-Time" },
  { icon: "hammer", title: "Roofing Installer", desc: "Install and repair roofing systems with skill, pride, and attention to detail.", location: "Kirkland, WA", type: "Full-Time" },
  { icon: "home", title: "Siding Installer", desc: "Install siding and exterior systems that protect and beautify homes.", location: "Kirkland, WA", type: "Full-Time" },
  { icon: "droplet", title: "Gutter Technician", desc: "Install and maintain gutter systems that keep homes protected.", location: "Kirkland, WA", type: "Full-Time" },
] as const;

export const JOIN_CHECKLIST = [
  "Competitive pay",
  "Career growth",
  "Supportive team",
  "Great work culture",
  "Make a real impact",
];

export const EOE_NOTE =
  "Skyve Roofing & Exteriors LLC is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.";

export const LIFE_PHOTOS = [
  "/images/1632759145351-1d592919f522.jpg",
  "/images/1568605114967-8130f3a36994.jpg",
  "/images/1600585154340-be6161a56a0c.jpg",
  "/images/1572120360610-d971b9d7767c.jpg",
];

export const FOUNDER_QUOTE = {
  text: "Skyve is more than a job. It's a place where you're valued, your work matters, and you have the opportunity to build something great.",
  author: "Fabricio Silva, Founder & CEO",
};
