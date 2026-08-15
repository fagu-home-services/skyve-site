/* Future Homeowner Portal — Resources (/portal/resources). Phase 2. */

export const RES_SELECTOR = {
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA",
};

export const RES_PROMO = {
  title: "Need something else?",
  desc: "We're here to help you get the most out of your project.",
  button: { label: "Contact Support", href: "/contact" },
};

export const RES_CATEGORIES = {
  title: "Browse by Category",
  items: [
    { icon: "document", tone: "text-ridge", bg: "bg-ridge/12", label: "Homeowner Guides", desc: "Step-by-step guides for roofing, maintenance, and more.", count: "18 Articles" },
    { icon: "home", tone: "text-accent", bg: "bg-accent/12", label: "Roofing", desc: "Everything about roofing systems, materials, and installation.", count: "24 Articles" },
    { icon: "wrench", tone: "text-success", bg: "bg-success/12", label: "Maintenance", desc: "Seasonal tips and maintenance to extend the life of your roof.", count: "16 Articles" },
    { icon: "dollar", tone: "text-success", bg: "bg-success/12", label: "Financing", desc: "Financing options, payment plans, and budgeting tools.", count: "10 Articles" },
    { icon: "shield", tone: "text-ridge", bg: "bg-ridge/12", label: "Warranty", desc: "Understanding your warranty and coverage information.", count: "12 Articles" },
    { icon: "umbrella", tone: "text-danger", bg: "bg-danger/12", label: "Insurance", desc: "Insurance claims process and storm damage information.", count: "11 Articles" },
    { icon: "calculator", tone: "text-[#7c3aed]", bg: "bg-[#7c3aed]/12", label: "Tools & Calculators", desc: "Helpful calculators and tools to plan your project.", count: "8 Tools" },
    { icon: "film", tone: "text-ridge", bg: "bg-ridge/12", label: "Videos", desc: "How-to videos and project walkthroughs from our team.", count: "27 Videos" },
    { icon: "help", tone: "text-ridge", bg: "bg-ridge/12", label: "FAQ", desc: "Answers to common questions about roofing and our process.", count: "32 Articles" },
  ],
};

export const RES_TYPE_TONE: Record<string, string> = {
  Article: "bg-ridge/12 text-ridge",
  Download: "bg-success/12 text-success",
  Video: "bg-accent/15 text-accent",
};

export type PopularResource = { title: string; desc: string; type: string; date: string };
export const RES_POPULAR = {
  title: "Popular Resources",
  items: [
    { title: "How Long Will My New Roof Last?", desc: "Learn about the lifespan of different roofing materials and what factors can affect durability.", type: "Article", date: "May 5, 2025" },
    { title: "Roof Maintenance Checklist (Seasonal)", desc: "A complete checklist to keep your roof in top condition year-round.", type: "Download", date: "Apr 28, 2025" },
    { title: "Understanding Your Roofing Warranty", desc: "A breakdown of manufacturer warranties vs. workmanship warranties.", type: "Article", date: "Apr 20, 2025" },
    { title: "Financing Your Roof Replacement", desc: "Explore financing options and find the best plan for your budget.", type: "Article", date: "Apr 15, 2025" },
    { title: "How We Handle Insurance Claims", desc: "Step-by-step guide to filing a successful roof insurance claim.", type: "Video", date: "Apr 10, 2025" },
    { title: "Roof Replacement: What to Expect", desc: "A timeline of the roof replacement process from start to finish.", type: "Video", date: "Apr 2, 2025" },
  ] as PopularResource[],
};

export const RES_BAND = {
  title: "Can't find what you're looking for?",
  desc: "Our team is here to help you find the right information.",
  button: { label: "Contact Our Team", href: "/contact" },
};

export const RES_FEATURED = {
  title: "Featured Resource",
  badge: "Guide",
  heading: "The Ultimate Guide to Roof Replacement",
  desc: "Everything you need to know before, during, and after your roof replacement project.",
  button: { label: "Read Guide", href: "/learn/roof-replacement" },
};

export const RES_TOOLS = {
  title: "Helpful Tools",
  items: [
    { icon: "calculator", label: "Roof Cost Calculator", desc: "Estimate your project cost", href: "/calculators/roof-cost" },
    { icon: "home", label: "Roof Life Expectancy", desc: "See how long your roof can last", href: "/calculators/roof-life-expectancy" },
    { icon: "dollar", label: "Financing Calculator", desc: "Calculate monthly payments", href: "/calculators/financing" },
    { icon: "layers", label: "Material Comparison", desc: "Compare roofing materials", href: "/calculators/material-comparison" },
  ],
  link: { label: "View All Tools", href: "/calculators/roof-cost" },
};

export const RES_QUICK_LINKS = {
  title: "Quick Links",
  items: [
    { icon: "help", label: "Submit a Question", desc: "Ask our experts" },
    { icon: "phone", label: "Schedule a Call", desc: "Talk with a project specialist" },
    { icon: "refresh", label: "Request an Update", desc: "Get the latest on your project" },
    { icon: "document", label: "Visit Our Blog", desc: "Tips, news, and updates" },
  ],
  link: { label: "View All Quick Links", href: "#" },
};

export const RES_HELP = {
  title: "Need Help?",
  desc: "We're here to help you every step of the way.",
  phone: "(425) 201-2490",
  hours: "Mon – Fri 7AM – 5PM PT",
  button: { label: "Contact Support", href: "/contact" },
};
