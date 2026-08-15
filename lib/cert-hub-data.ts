/* Trust & Authority — Certifications hub (/certifications).
   Manufacturer names are third-party marks rendered as plain text wordmarks
   (no logo art) for IP safety. Swap for licensed badges with permission. */

export const CH_HERO = {
  level: "Level 12",
  section: "Trust & Authority",
  title: "Certifications",
  desc: "Our certifications reflect our commitment to ongoing education, industry best practices, and delivering exceptional roofing and exterior services you can trust.",
  features: [
    { icon: "shield", title: "Industry Recognized", desc: "Top certifications from leading manufacturers" },
    { icon: "badge", title: "Ongoing Education", desc: "Continuous training to stay at the forefront" },
    { icon: "document", title: "Quality Guaranteed", desc: "Certified standards for superior results" },
  ],
  image: "",
  overlayTitle: "Certified. Trusted. Proven.",
  overlayDesc:
    "Skyve invests in the best training and certifications to ensure our team delivers the highest quality workmanship and uses the best materials available.",
  overlayStats: [
    { value: "15+", label: "Certifications Earned" },
    { value: "100%", label: "Crew Members Trained" },
    { value: "5+", label: "Manufacturer Partners" },
    { value: "0", label: "Shortcuts Ever Taken" },
  ],
};

export const CH_WHY = {
  title: "Why Certifications Matter",
  items: [
    { icon: "shield", title: "Proven Expertise", desc: "Certifications demonstrate our knowledge and expertise in roofing systems and installation." },
    { icon: "badge", title: "Manufacturer Trust", desc: "We meet the highest standards set by industry-leading manufacturers." },
    { icon: "home", title: "Better Warranties", desc: "Certified installations often qualify for extended manufacturer warranties." },
    { icon: "users", title: "Peace of Mind", desc: "You can trust that your home is in the hands of qualified professionals." },
  ],
};

export type CHCert = {
  brand: string;
  sub?: string;
  tone: string;
  title: string;
  desc: string;
  credential: string;
  since: string;
};

export const CH_CERTS: CHCert[] = [
  {
    brand: "CertainTeed",
    sub: "SAINT-GOBAIN",
    tone: "text-[#0b6792]",
    title: "CertainTeed SELECT ShingleMaster™",
    desc: "Top credential for the highest standards in professionalism, reliability, and installation excellence.",
    credential: "SELECT ShingleMaster",
    since: "Since 2023",
  },
  {
    brand: "Master Craftsman",
    sub: "Certified",
    tone: "text-horizon",
    title: "CertainTeed Master Craftsman™",
    desc: "Recognizes exceptional knowledge and installation skills in CertainTeed roofing systems.",
    credential: "Master Craftsman",
    since: "Since 2023",
  },
  {
    brand: "Malarkey",
    sub: "Roofing Products",
    tone: "text-[#2e7d32]",
    title: "Malarkey Certified Residential Contractor",
    desc: "Certified to install Malarkey roofing products to exacting standards.",
    credential: "Certified Contractor",
    since: "Since 2023",
  },
  {
    brand: "Owens Corning",
    tone: "text-[#d32323]",
    title: "Owens Corning Preferred Contractor",
    desc: "We meet strict requirements for professionalism, reliability, and customer service.",
    credential: "Preferred Contractor",
    since: "Since 2023",
  },
  {
    brand: "GAF",
    tone: "text-[#d32323]",
    title: "GAF Certified™",
    desc: "Factory certified to install GAF roofing systems with extended warranty coverage.",
    credential: "GAF Certified",
    since: "Since 2023",
  },
  {
    brand: "VELUX",
    tone: "text-[#d32323]",
    title: "VELUX Certified Installer",
    desc: "Trained and certified to install VELUX skylights for optimal performance and protection.",
    credential: "Certified Installer",
    since: "Since 2023",
  },
  {
    brand: "IKO",
    tone: "text-horizon",
    title: "IKO ROOFPRO™ Contractor",
    desc: "Certified to install IKO roofing products with expertise and precision.",
    credential: "ROOFPRO Contractor",
    since: "Since 2023",
  },
  {
    brand: "ABC Supply",
    sub: "Co. Inc.",
    tone: "text-[#0b6792]",
    title: "ABC Supply Pro Contractor",
    desc: "Recognized by ABC Supply for professional excellence and customer satisfaction.",
    credential: "Pro Contractor",
    since: "Since 2023",
  },
];

export const CH_TRAINING_LINK = { label: "View Our Licenses & Insurance", href: "/licenses-insurance" };

export const CH_PARTNERS = [
  { name: "CertainTeed", sub: "SAINT-GOBAIN", tone: "text-[#0b6792]" },
  { name: "Malarkey", sub: "Roofing Products", tone: "text-[#2e7d32]" },
  { name: "Owens Corning", sub: "", tone: "text-[#d32323]" },
  { name: "GAF", sub: "", tone: "text-[#d32323]" },
  { name: "IKO", sub: "", tone: "text-horizon" },
  { name: "VELUX", sub: "Skylights", tone: "text-[#d32323]" },
  { name: "ABC Supply", sub: "Co. Inc.", tone: "text-[#0b6792]" },
];

export const CH_COMMITMENT = {
  image: "",
  title: "Our Commitment to Excellence",
  desc: "Certifications are more than badges — they represent our commitment to ongoing education, quality craftsmanship, and delivering roof systems that protect your home for years to come.",
};

export const CH_STANDARDS = {
  title: "Our Standards",
  points: [
    "Follow manufacturer installation guidelines",
    "Use high-quality materials and components",
    "Maintain proper insurance and licensing",
    "Invest in ongoing training and education",
    "Perform thorough inspections and cleanups",
    "Stand behind our work with strong warranties",
    "Communicate clearly and honestly",
    "Treat your home with respect and care",
  ],
};

export const CH_CTA = {
  title: "Quality You Can Trust. Results You Can See.",
  desc: "Our certifications, experience, and commitment to excellence set us apart. Let's protect your home the right way.",
  button: { label: "Get Your Free Estimate", href: "/estimate" },
  phone: "(425) 201-2490",
};
