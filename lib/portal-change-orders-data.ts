/* Future Homeowner Portal — Change Orders (/portal/change-orders). Phase 2. */

export const CO_SELECTOR = {
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA",
};

export const CO_PROMO = {
  title: "Need questions about a change order?",
  desc: "We're here to help you make the best decision for your project.",
  button: { label: "Contact Your PM", href: "/contact" },
};

export const CO_TABS = ["Overview", "Payments", "Financing", "Invoices", "Estimates", "Change Orders", "Receipts"];

export type ChangeOrder = {
  icon: string;
  status: string;
  bar: string; // literal left-border color class
  iconBg: string; // literal
  iconTone: string; // literal
  title: string;
  desc: string;
  amount: string;
  meta: string;
  by?: string;
  action: string;
  actionTone: string; // literal button color
};

export const CO_ORDERS: ChangeOrder[] = [
  {
    icon: "checkcircle", status: "Approved", bar: "border-success", iconBg: "bg-success/12", iconTone: "text-success",
    title: "Upgrade to Architectural Shingles",
    desc: "Change from 3-tab shingles to CertainTeed Landmark PRO architectural shingles.",
    amount: "+$2,450.00", meta: "Approved on May 7, 2025", by: "by Alex Johnson",
    action: "Approved", actionTone: "border-success/40 text-success",
  },
  {
    icon: "clock", status: "Pending Approval", bar: "border-warning", iconBg: "bg-warning/15", iconTone: "text-warning",
    title: "Add Ice & Water Shield",
    desc: "Add ice & water shield to all eaves and valleys for extra protection.",
    amount: "+$685.00", meta: "Requested on May 9, 2025", by: "by Skyve Team",
    action: "Review & Approve", actionTone: "border-warning bg-warning/10 text-warning",
  },
  {
    icon: "document", status: "Pending Review", bar: "border-ridge", iconBg: "bg-ridge/12", iconTone: "text-ridge",
    title: "Replace Damaged Roof Decking",
    desc: "Replace additional plywood sheets found damaged during tear off.",
    amount: "+$1,320.00", meta: "Requested on May 12, 2025", by: "by Mike Anderson",
    action: "Review", actionTone: "border-ridge bg-ridge/10 text-ridge",
  },
  {
    icon: "ban", status: "Declined", bar: "border-ink-50", iconBg: "bg-mist", iconTone: "text-ink-50",
    title: 'Upgrade Gutters to 6" K-Style',
    desc: 'Replace standard 5" gutters with 6" K-style aluminum gutters.',
    amount: "+$970.00", meta: "Declined on May 11, 2025", by: "by Alex Johnson",
    action: "Declined", actionTone: "border-mist text-ink-50",
  },
  {
    icon: "checkcircle", status: "Approved", bar: "border-success", iconBg: "bg-success/12", iconTone: "text-success",
    title: "Add Ridge Ventilation System",
    desc: "Install ridge vent system for improved attic ventilation and energy efficiency.",
    amount: "+$540.00", meta: "Approved on May 8, 2025", by: "by Alex Johnson",
    action: "Approved", actionTone: "border-success/40 text-success",
  },
  {
    icon: "dollar", status: "Completed", bar: "border-[#7c3aed]", iconBg: "bg-[#7c3aed]/12", iconTone: "text-[#7c3aed]",
    title: "Permit Fee Adjustment",
    desc: "City increased permit fees for roofing projects in Kirkland.",
    amount: "+$125.00", meta: "Added on May 6, 2025",
    action: "Completed", actionTone: "border-[#7c3aed]/40 text-[#7c3aed]",
  },
];

export const CO_NOTE = {
  title: "Have questions about a change order?",
  desc: "Your project manager is here to help you understand the scope and impact.",
  button: { label: "Contact Your PM", href: "/contact" },
};

export const CO_HOW = {
  title: "How Change Orders Work",
  steps: [
    { icon: "document", title: "Requested", desc: "We identify the need and create a change order." },
    { icon: "search", title: "Review", desc: "You review the details, pricing, and impact." },
    { icon: "checkcircle", title: "Approve", desc: "You approve or decline the change order." },
    { icon: "home", title: "Complete", desc: "Once approved, we update the scope and move forward." },
  ],
};

export const CO_SUMMARY = {
  title: "Change Order Summary",
  total: 6,
  segments: [
    { label: "Approved", count: 2, value: "+$2,990.00", tone: "bg-success", color: "var(--color-success)" },
    { label: "Pending Approval", count: 1, value: "+$685.00", tone: "bg-warning", color: "var(--color-warning)" },
    { label: "Pending Review", count: 1, value: "+$1,320.00", tone: "bg-ridge", color: "var(--color-ridge)" },
    { label: "Declined", count: 1, value: "+$970.00", tone: "bg-mist", color: "var(--color-mist)" },
    { label: "Completed", count: 1, value: "+$125.00", tone: "bg-[#7c3aed]", color: "#7c3aed" },
  ],
};

export const CO_TOTAL = {
  title: "Total Change Orders",
  amount: "+$6,090.00",
  sub: "12.3% of Contract Value",
  button: { label: "View Budget & Payments", href: "/portal/budget-payments" },
};

export const CO_IMPACT = {
  title: "Impact on Project",
  rows: [
    { label: "New Contract Value", value: "$24,800.00" },
    { label: "Change Orders Total", value: "+$6,090.00", tone: "text-success" },
    { label: "Updated Contract Value", value: "$30,890.00", bold: true },
    { label: "Schedule Impact", value: "+1 day", tone: "text-warning" },
  ],
};

export const CO_RESOURCES = {
  title: "Helpful Resources",
  items: [
    { label: "What is a Change Order?", href: "#" },
    { label: "Change Order Process", href: "#" },
    { label: "Budget & Payment Info", href: "/portal/budget-payments" },
    { label: "Contact Your Project Manager", href: "/contact" },
  ],
};
