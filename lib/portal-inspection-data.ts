/* Future Homeowner Portal — Inspection History (/portal/inspection-history). Phase 2. */

export const PI_NEXT = {
  title: "Next Inspection",
  date: "May 20, 2025",
  type: "Roof Maintenance",
  countdown: "In 15 days",
  link: { label: "View Schedule", href: "#" },
};

export const PI_TABS = [
  "All Inspections",
  "Roof Inspections",
  "Exterior Inspections",
  "Specialty Inspections",
  "Manufacturer Inspections",
];

/* type -> pill tone */
export const PI_TYPE_TONE: Record<string, string> = {
  Roof: "bg-ridge/12 text-ridge",
  Exterior: "bg-sky/25 text-ridge",
  Specialty: "bg-[#7c3aed]/12 text-[#7c3aed]",
  Manufacturer: "bg-warning/15 text-warning",
};

export type Inspection = {
  title: string;
  desc: string;
  type: "Roof" | "Exterior" | "Specialty" | "Manufacturer";
  date: string;
  by: string;
  status: "Completed" | "Attention";
};

export const PI_INSPECTIONS: Inspection[] = [
  { title: "Roof Maintenance Inspection", desc: "Routine maintenance inspection to ensure your roof is performing at its best.", type: "Roof", date: "May 5, 2025", by: "Skyve Inspector", status: "Completed" },
  { title: "Gutter & Downspout Inspection", desc: "Checked gutters and downspouts for clogs, leaks and proper drainage.", type: "Exterior", date: "Nov 12, 2024", by: "Skyve Inspector", status: "Completed" },
  { title: "Exterior Siding Inspection", desc: "Inspected siding, trim, caulking and flashing for damage or wear.", type: "Exterior", date: "Aug 15, 2024", by: "City Inspector", status: "Completed" },
  { title: "Drone Roof Inspection", desc: "Aerial inspection to assess roof condition and hard-to-see areas.", type: "Roof", date: "May 10, 2024", by: "Skyve Inspector", status: "Completed" },
  { title: "Attic & Ventilation Inspection", desc: "Checked attic ventilation, insulation and signs of moisture.", type: "Specialty", date: "Feb 2, 2024", by: "Skyve Inspector", status: "Completed" },
  { title: "Pre-Storm Inspection", desc: "Pre-storm check to identify any potential issues before the rainy season.", type: "Roof", date: "Oct 18, 2023", by: "Skyve Inspector", status: "Attention" },
  { title: "New Construction Inspection", desc: "Final inspection during construction to verify installation quality.", type: "Specialty", date: "Jun 25, 2023", by: "Third Party Inspector", status: "Completed" },
];

export const PI_WHY = {
  title: "Why Regular Inspections Matter",
  items: [
    { icon: "wallet", title: "Prevent Costly Repairs", desc: "Catch small issues early before they become expensive problems." },
    { icon: "clock", title: "Extend Roof Life", desc: "Proper maintenance and timely repairs extend the life of your roof." },
    { icon: "home", title: "Protect Your Home", desc: "Prevent leaks, water damage and structural issues before they start." },
    { icon: "shield", title: "Peace of Mind", desc: "Know your home is in great shape and protected year-round." },
  ],
};

export const PI_OVERVIEW = {
  title: "Inspection Overview",
  total: 7,
  segments: [
    { label: "Completed", count: 6, tone: "bg-success", color: "var(--color-success)" },
    { label: "Attention", count: 1, tone: "bg-warning", color: "var(--color-warning)" },
    { label: "Scheduled", count: 0, tone: "bg-ridge", color: "var(--color-ridge)" },
    { label: "Canceled", count: 0, tone: "bg-mist", color: "var(--color-mist)" },
  ],
};

export const PI_TYPES = {
  title: "Inspection Types",
  items: [
    { icon: "home", label: "Roof Inspections", count: 4, tone: "text-ridge" },
    { icon: "grid", label: "Exterior Inspections", count: 2, tone: "text-success" },
    { icon: "badge", label: "Specialty Inspections", count: 1, tone: "text-[#7c3aed]" },
    { icon: "document", label: "Manufacturer Inspections", count: 0, tone: "text-warning" },
  ],
};

export const PI_CONDITION = {
  title: "Condition Summary",
  latest: "(Latest)",
  rows: [
    { label: "Overall Condition", value: "Good", good: true },
    { label: "Roof Condition", value: "Good", good: true },
    { label: "Exterior Condition", value: "Good", good: true },
    { label: "Gutter Condition", value: "Needs Attention", good: false },
    { label: "Attic Condition", value: "Good", good: true },
  ],
};

export const PI_QUICK_ACTIONS = {
  title: "Quick Actions",
  items: [
    { icon: "calendar", label: "Schedule Inspection" },
    { icon: "download", label: "Download All Reports" },
    { icon: "wrench", label: "View Maintenance Schedule" },
  ],
};

export const PI_HELP = {
  title: "Need Help?",
  desc: "Have questions about your inspection reports?",
  button: { label: "Contact Inspection Team", href: "/contact" },
  phone: "(425) 201-2490",
  hours: "Mon - Fri 7AM - 5PM PT",
};
