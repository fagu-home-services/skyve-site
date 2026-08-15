/* Marketing — FAQ (/faq) */

export const FAQ_HERO = {
  title: "FAQ",
  desc: "Find answers to the most common questions about roofing, our process, warranties, and more.",
  image: "",
  badges: [
    { icon: "shield", title: "Licensed & Insured", sub: "WA License #SKYVERExx" },
    { icon: "badge", title: "15+ Years Experience", sub: "In the Pacific Northwest" },
    { icon: "layers", title: "Premium Materials", sub: "Backed by Strong Warranties" },
    { icon: "users", title: "Local & Reliable", sub: "Proudly Serving WA" },
  ],
};

export const FAQ_CATEGORIES = [
  { icon: "grid", label: "All Questions" },
  { icon: "home", label: "Roofing Process" },
  { icon: "shield", label: "Materials & Warranties" },
  { icon: "dollar", label: "Payments & Financing" },
  { icon: "wrench", label: "Maintenance" },
  { icon: "more", label: "Other" },
];

export type FAQItem = { q: string; a: string; category: string };

export const FAQ_ITEMS: FAQItem[] = [
  { category: "Roofing Process", q: "How long does a roof replacement take?", a: "Most roof replacements are completed in 1-3 days, depending on the size of your roof, weather conditions, and material availability. We always protect your home and clean up thoroughly each day." },
  { category: "Roofing Process", q: "Will my property be protected during the project?", a: "Absolutely. We use tarps and protective coverings around your home, landscaping, and outdoor features, and we perform a full magnetic sweep for nails and a complete cleanup when the job is done." },
  { category: "Roofing Process", q: "Do I need to be home during the roof replacement?", a: "You don't have to be home for the entire project, but we recommend being available at the start so we can review the plan with you. We'll keep you updated throughout." },
  { category: "Materials & Warranties", q: "What types of roofing materials do you install?", a: "We install architectural and luxury asphalt shingles, standing seam and metal roofing, cedar and synthetic shake, and low-slope systems like TPO and PVC — matched to your home and budget." },
  { category: "Roofing Process", q: "How do I know if I need a roof replacement or just a repair?", a: "It depends on the age and condition of your roof and the extent of any damage. Our free inspection includes a Roof Score assessment so you get an honest recommendation — repair when we can, replace when we should." },
  { category: "Materials & Warranties", q: "What warranties do you offer?", a: "We back our work with a workmanship warranty and install premium materials that carry manufacturer warranties up to 50 years. Full details are available in our Warranty Center." },
  { category: "Roofing Process", q: "How does your roofing process work?", a: "It starts with a free inspection and transparent estimate, followed by material selection, scheduling, installation, a final walkthrough, and warranty activation — with clear communication at every step." },
  { category: "Payments & Financing", q: "Do you offer financing options?", a: "Yes. We offer flexible financing plans, including options with 0% APR for qualified homeowners, so you can move forward on your timeline and budget." },
  { category: "Other", q: "What areas do you serve?", a: "We proudly serve homeowners across King & Snohomish County, WA — from Seattle to Everett and every community in between. Check our Service Area Map to find your city." },
  { category: "Other", q: "Are you licensed and insured?", a: "Yes. Skyve Roofing & Exteriors is fully licensed, bonded, and insured in Washington State. We're happy to provide our certificate of insurance upon request." },
  { category: "Payments & Financing", q: "How do I get a free estimate?", a: "Request your free inspection and estimate online or by phone. We'll assess your roof, answer your questions, and provide a transparent, no-pressure estimate." },
  { category: "Payments & Financing", q: "Can you help with insurance claims?", a: "Yes. Our team can document storm or wind damage and guide you through the insurance claims process to help make it as smooth as possible." },
  { category: "Roofing Process", q: "What happens if it rains during my project?", a: "We monitor the forecast closely and protect your roof with waterproof underlayment. If weather turns, we pause safely and resume as soon as conditions allow." },
  { category: "Maintenance", q: "How do I care for my new roof?", a: "Keep gutters clean, trim overhanging branches, and schedule periodic inspections. We provide seasonal maintenance tips and services to help extend your roof's life." },
  { category: "Payments & Financing", q: "What is a change order?", a: "A change order documents any additional work discovered during the project — like replacing damaged decking — along with its scope and cost. You review and approve it before we proceed." },
  { category: "Other", q: "Can I see examples of your work?", a: "Yes! Browse our Projects gallery and Customer Stories to see real Skyve roofing and exterior projects across Washington." },
];

export const FAQ_STILL = {
  title: "Still have a question?",
  desc: "Our team is here to help.",
  phone: "(425) 201-2490",
  button: { label: "Contact Us", href: "/contact" },
};

export const FAQ_TOP_TOPICS = {
  title: "Top Topics",
  items: [
    { label: "Roofing Process", count: 7 },
    { label: "Materials & Warranties", count: 6 },
    { label: "Payments & Financing", count: 5 },
    { label: "Maintenance", count: 5 },
    { label: "General Questions", count: 6 },
  ],
};

export const FAQ_ASK = {
  title: "Get Your Questions Answered Directly",
  desc: "If you don't find the answer you're looking for, we're here to help.",
  button: { label: "Ask a Question", href: "/contact" },
};

export const FAQ_RESOURCES = {
  title: "Helpful Resources",
  items: [
    { title: "Roof Replacement", desc: "Our most popular roofing service", href: "/services/roof-replacement" },
    { title: "Warranty Information", desc: "Learn about our warranty coverage", href: "/warranty" },
    { title: "Financing Options", desc: "Flexible payment plans available", href: "/financing" },
    { title: "Roof Maintenance", desc: "Keep your roof in top condition", href: "/services" },
  ],
  link: { label: "Get a Free Estimate", href: "/estimate/instant" },
};

export const FAQ_CTA = {
  title: "Ready to get started?",
  desc: "Schedule your free roof inspection and estimate today.",
  button: { label: "Get Free Estimate", href: "/estimate" },
};
