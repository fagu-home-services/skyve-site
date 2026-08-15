/* Future Homeowner Portal — Budget & Payments (/portal/budget-payments). Phase 2.
   GreenSky is a third-party financing brand shown as text. */

export const BP_HEADER = {
  status: "Active Project",
  title: "Roof Replacement",
  subtitle: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA 98033",
  image: "",
  specs: [
    { icon: "calendar", label: "Project Start", value: "May 10, 2025" },
    { icon: "clock", label: "Est. Completion", value: "May 18, 2025" },
    { icon: "user", label: "Project Manager", value: "Mike Anderson", avatar: "MA" },
    { icon: "checkcircle", label: "Status", value: "In Progress", tone: "text-success" },
  ],
};

export const BP_SELECTOR = {
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA",
};

export const BP_PROMO = {
  title: "Need financing?",
  desc: "We offer flexible financing options to fit your budget.",
  button: { label: "Explore Financing", href: "/financing" },
};

export const BP_TABS = ["Overview", "Payments", "Financing", "Invoices", "Estimates", "Change Orders", "Receipts"];

export const BP_OVERVIEW = {
  title: "Project Budget Overview",
  total: "$24,800",
  segments: [
    { label: "Paid", value: "$8,400", pct: "33.9%", num: 33.9, tone: "bg-ridge", color: "var(--color-ridge)" },
    { label: "Scheduled", value: "$10,000", pct: "40.3%", num: 40.3, tone: "bg-success", color: "var(--color-success)" },
    { label: "Remaining Balance", value: "$6,400", pct: "25.8%", num: 25.8, tone: "bg-accent", color: "var(--color-accent)" },
  ],
  note: "You are on track with your payment plan.",
  noteSub: "Next payment of $2,500 is due on May 15, 2025.",
  button: { label: "View Payment Schedule", href: "#" },
};

export const BP_BREAKDOWN = {
  title: "Budget Breakdown",
  rows: [
    { icon: "home", item: "Roofing System", desc: "Shingles, underlayment, flashing, ventilation", amount: "$16,500" },
    { icon: "users", item: "Labor", desc: "Tear off, installation, cleanup", amount: "$5,200" },
    { icon: "document", item: "Permits & Fees", desc: "Building permit and inspection fees", amount: "$450" },
    { icon: "trash", item: "Dumpster & Disposal", desc: "Waste management and disposal", amount: "$350" },
    { icon: "layers", item: "Other Materials", desc: "Sealants, fasteners, pipe boots, etc.", amount: "$600" },
    { icon: "shield", item: "Contingency", desc: "Project contingency (5%)", amount: "$1,700" },
  ],
  total: "$24,800",
};

export type PayStep = { title: string; amount: string; meta: string; state: "paid" | "current" | "upcoming" };
export const BP_SCHEDULE = {
  title: "Payment Schedule",
  steps: [
    { title: "Deposit", amount: "$2,500", meta: "Paid on Apr 20, 2025", state: "paid" },
    { title: "Materials Delivery", amount: "$5,900", meta: "Paid on May 2, 2025", state: "paid" },
    { title: "Mid Project Payment", amount: "$2,500", meta: "Due on May 15, 2025", state: "current" },
    { title: "Project Completion", amount: "$10,000", meta: "Due on May 18, 2025", state: "upcoming" },
    { title: "Final Inspection & Closeout", amount: "$4,000", meta: "Due on May 20, 2025", state: "upcoming" },
  ] as PayStep[],
  total: "$24,800",
  next: {
    label: "Next Payment Due",
    date: "May 15, 2025",
    amount: "$2,500",
    button: "Make a Payment",
    link: "View All Payments",
  },
};

export const BP_TRUST = [
  { icon: "shield", title: "Secure Payments", desc: "Your payments are protected with bank-level security." },
  { icon: "document", title: "Transparent Pricing", desc: "No hidden fees. What we quote is what you pay." },
  { icon: "checkcircle", title: "Satisfaction Guaranteed", desc: "We stand behind our work and our warranties." },
];

export const BP_SUMMARY = {
  title: "Payment Summary",
  rows: [
    { label: "Total Project Value", value: "$24,800" },
    { label: "Paid to Date", value: "$8,400" },
    { label: "Scheduled Payments", value: "$10,000" },
    { label: "Remaining Balance", value: "$6,400" },
  ],
  autopay: {
    title: "Auto-Pay is Enabled",
    desc: "Your next payment will be processed automatically on May 15, 2025.",
    link: "Manage Auto-Pay",
  },
};

export const BP_FINANCING = {
  title: "Financing Information",
  rows: [
    { label: "Financing Provider", value: "GreenSky®" },
    { label: "Plan", value: "0% APR for 12 Months" },
    { label: "Credit Limit", value: "$25,000" },
    { label: "Amount Financed", value: "$24,800" },
    { label: "Monthly Payment", value: "$2,066.67" },
    { label: "Remaining Term", value: "10 months" },
  ],
  button: { label: "View Financing Details", href: "#" },
};

export const BP_DOCS = {
  title: "Download & Documents",
  items: [
    { name: "Project Estimate", type: "PDF" },
    { name: "Payment Plan Agreement", type: "PDF" },
    { name: "Financing Agreement", type: "PDF" },
    { name: "Invoices", type: "ZIP" },
  ],
  link: "View All Documents",
};

export const BP_HELP = {
  title: "Need Help?",
  desc: "Have questions about your payment or financing?",
  button: { label: "Contact Billing Team", href: "/contact" },
  phone: "(425) 201-2490",
  hours: "Mon - Fri 7AM - 5PM PT",
};
