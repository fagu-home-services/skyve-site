/* Future Homeowner Portal — Help & Support (/portal/help-support). Phase 2. */

export const HLP_SELECTOR = {
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA",
};

export const HLP_PROMO = {
  title: "Need immediate help?",
  desc: "We're here for you. Contact our support team.",
  button: { label: "Contact Support", href: "/contact" },
};

export const HLP_ACTIONS = {
  title: "How can we help you?",
  subtitle: "Find answers, get support, or connect with our team.",
  items: [
    { icon: "help", label: "Ask a Question", desc: "Get help from our team" },
    { icon: "phone", label: "Schedule a Call", desc: "Talk with a project specialist" },
    { icon: "refresh", label: "Request an Update", desc: "Get the latest on your project" },
    { icon: "send", label: "Submit a Request", desc: "Send us a message" },
  ],
};

export const HLP_CONTACT = {
  title: "Contact Support",
  subtitle: "Our team is ready to assist you.",
  items: [
    { icon: "phone", label: "Phone", value: "(425) 201-2490", sub: "Mon – Fri 7AM – 5PM PT" },
    { icon: "message", label: "Email", value: "support@skyveexteriors.com", sub: "We typically reply within 1 business hour" },
    { icon: "video", label: "Live Chat", value: "Available", sub: "Mon – Fri 7AM – 5PM PT", live: true },
  ],
  button: { label: "Start Live Chat", href: "#" },
};

export const HLP_KB = {
  title: "Knowledge Base",
  items: [
    { icon: "home", title: "Roof Replacement Process", desc: "Step-by-step overview of what to expect during your roof replacement project.", tag: "Process", tagTone: "bg-ridge/12 text-ridge" },
    { icon: "shield", title: "Understanding Your Warranty", desc: "Learn about your warranty coverage and how to file a claim.", tag: "Warranty", tagTone: "bg-success/12 text-success" },
    { icon: "wrench", title: "Care & Maintenance Tips", desc: "Simple steps to keep your roof in great condition year-round.", tag: "Maintenance", tagTone: "bg-accent/15 text-accent" },
    { icon: "calendar", title: "Project Timeline Explained", desc: "How we plan, schedule, and complete your project on time.", tag: "Planning", tagTone: "bg-[#7c3aed]/12 text-[#7c3aed]" },
    { icon: "dollar", title: "Payments & Financing FAQs", desc: "Answers to common questions about payments and financing.", tag: "Payments", tagTone: "bg-success/12 text-success" },
  ],
};

export const HLP_QUESTIONS = {
  title: "Popular Questions",
  items: [
    { q: "How long will my roof replacement take?", a: "Most residential roof replacements are completed in 1–3 days, depending on the size and complexity of your roof and the weather." },
    { q: "Will my property be protected during the project?", a: "Yes. We use tarps and protective coverings around your home and landscaping, and we clean up thoroughly at the end of each day." },
    { q: "How do change orders work?", a: "If additional work is needed, we create a change order describing the scope and cost. You review and approve it before we proceed." },
    { q: "When and how do I make payments?", a: "Payments follow the schedule in your agreement — typically a deposit, progress payments, and a final payment. You can pay securely through the portal." },
    { q: "What happens if it rains during my project?", a: "We monitor the weather closely and protect your roof with waterproof underlayment. If needed, we pause and resume work when it's safe." },
  ],
  link: "View More FAQs",
};

export const HLP_REQUEST = {
  title: "Submit a Request",
  subtitle: "Send us a message and we'll get back to you as soon as possible.",
  typeLabel: "Request Type",
  typePlaceholder: "Select a topic",
  typeOptions: ["General Question", "Project Update", "Payments & Financing", "Warranty", "Schedule Change", "Other"],
  subjectLabel: "Subject",
  subjectPlaceholder: "Briefly describe your request",
  messageLabel: "Message",
  messagePlaceholder: "Provide more details about your request...",
  attachNote: "Drag and drop files here or",
  attachLink: "browse",
  attachMax: "Max file size 25MB",
  button: "Send Request",
};

export const HLP_BAND = {
  title: "We're committed to your satisfaction.",
  desc: "Your project is important to us. Our support team is here to ensure you have the best experience possible.",
  items: [
    { icon: "clock", title: "Fast Response", desc: "We reply within 1 business hour" },
    { icon: "users", title: "Expert Support", desc: "Talk to roofing professionals" },
    { icon: "home", title: "Project Focused", desc: "We know your project inside and out" },
  ],
};
