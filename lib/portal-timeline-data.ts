/* Future Homeowner Portal — Timeline (/portal/timeline). Phase 2.
   Powered by Verascor — full home history + future plan. */

export const TL_HEADER = {
  status: "Active Project",
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA 98033",
  image: "",
  specs: [
    { label: "Year Built", value: "2008" },
    { label: "Roof Age", value: "3 Years" },
  ],
  score: 87,
  scoreRating: "Excellent",
  nextInspection: "May 5, 2025",
  warrantyStatus: "Active",
};

export const TL_SELECTOR = {
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA",
};

export const TL_TABS = ["Timeline", "Milestones", "Inspections", "Maintenance", "Documents", "Events", "Alerts"];

export type TLEvent = { icon: string; title: string; desc: string; by: string; date: string; badge: string };
export type TLGroup = { phase: string; tone: string; iconBg: string; line: string; badgeTone: string; events: TLEvent[] };

export const TL_GROUPS: TLGroup[] = [
  {
    phase: "COMPLETED",
    tone: "text-success",
    iconBg: "bg-success/12",
    line: "bg-success/30",
    badgeTone: "bg-success/12 text-success",
    events: [
      { icon: "home", title: "Roof Replacement Completed", desc: "Full roof replacement with architectural shingles.", by: "by Skyve Roofing & Exteriors", date: "May 15, 2022", badge: "Completed" },
      { icon: "checkcircle", title: "Final Inspection Passed", desc: "Post-installation inspection passed with no issues.", by: "by Skyve Inspector", date: "May 16, 2022", badge: "Completed" },
      { icon: "badge", title: "Warranty Activated", desc: "Manufacturer and workmanship warranties activated.", by: "by Skyve Roofing & Exteriors", date: "May 20, 2022", badge: "Completed" },
      { icon: "document", title: "Property Passport Created", desc: "Complete home record created and secured.", by: "by Verascor", date: "May 21, 2022", badge: "Completed" },
    ],
  },
  {
    phase: "CURRENT",
    tone: "text-ridge",
    iconBg: "bg-ridge/12",
    line: "bg-ridge/30",
    badgeTone: "bg-ridge/12 text-ridge",
    events: [
      { icon: "search", title: "Next Inspection Due", desc: "Routine roof inspection to ensure everything is on track.", by: "by Skyve Inspector", date: "May 5, 2025", badge: "Upcoming" },
    ],
  },
  {
    phase: "UPCOMING",
    tone: "text-accent",
    iconBg: "bg-accent/15",
    line: "bg-accent/30",
    badgeTone: "bg-accent/15 text-accent",
    events: [
      { icon: "shield", title: "Preventive Maintenance", desc: "Clean gutters & downspouts and check roof system.", by: "by Skyve Pro Team", date: "Jun 15, 2025", badge: "Scheduled" },
      { icon: "sun", title: "Seasonal Inspection", desc: "Summer inspection to check ventilation and attic.", by: "by Skyve Inspector", date: "Aug 10, 2025", badge: "Scheduled" },
      { icon: "gear", title: "Minor Maintenance", desc: "Check flashing, vents, and sealants.", by: "by Skyve Pro Team", date: "Oct 15, 2025", badge: "Scheduled" },
      { icon: "sun", title: "Annual Inspection", desc: "Annual roof inspection and system review.", by: "by Skyve Inspector", date: "May 5, 2026", badge: "Scheduled" },
    ],
  },
  {
    phase: "FUTURE",
    tone: "text-[#7c3aed]",
    iconBg: "bg-[#7c3aed]/12",
    line: "bg-[#7c3aed]/30",
    badgeTone: "bg-[#7c3aed]/12 text-[#7c3aed]",
    events: [
      { icon: "refresh", title: "Roof Maintenance Plan Renewal", desc: "Renew your maintenance plan for continued coverage.", by: "by Skyve Roofing & Exteriors", date: "May 20, 2026", badge: "Planned" },
      { icon: "home", title: "Re-roofing Projection", desc: "Based on current conditions, estimated future re-roofing.", by: "by Verascor AI", date: "2032 - 2034", badge: "Planned" },
    ],
  },
];

export const TL_BAND = {
  title: "Stay ahead of every important milestone.",
  desc: "Get reminders and alerts so you never miss an inspection or maintenance.",
  button: { label: "Manage Notifications", href: "#" },
};

export const TL_OVERVIEW = {
  title: "Timeline Overview",
  total: 12,
  segments: [
    { label: "Completed", count: 4, tone: "bg-success", color: "var(--color-success)" },
    { label: "Upcoming", count: 4, tone: "bg-ridge", color: "var(--color-ridge)" },
    { label: "Scheduled", count: 3, tone: "bg-accent", color: "var(--color-accent)" },
    { label: "Planned", count: 1, tone: "bg-[#7c3aed]", color: "#7c3aed" },
  ],
};

export const TL_KEY_DATES = {
  title: "Key Dates",
  items: [
    { icon: "clock", title: "Last Inspection", date: "May 5, 2024", sub: "10 months ago" },
    { icon: "calendar", title: "Next Inspection", date: "May 5, 2025", sub: "In 15 days" },
    { icon: "warning", title: "Roof Warranty Expires", date: "May 15, 2032", sub: "In 7 years" },
    { icon: "shield", title: "Workmanship Warranty Expires", date: "May 15, 2027", sub: "In 2 years" },
  ],
};

export const TL_ACTIONS = {
  title: "Timeline Actions",
  items: [
    { icon: "calendar", label: "Schedule Inspection" },
    { icon: "plus", label: "Add Maintenance Task" },
    { icon: "upload", label: "Upload Document" },
    { icon: "calendar", label: "View Full Calendar" },
    { icon: "download", label: "Export Timeline" },
  ],
};

export const TL_INSIGHTS = {
  title: "Connected Insights",
  items: [
    { icon: "chart", title: "Your roof score has improved", desc: "+12 points in the last 12 months." },
    { icon: "home", title: "Regular maintenance extends", desc: "roof life by up to 7 years." },
    { icon: "checkcircle", title: "You're on track!", desc: "Keep up the good work." },
  ],
  button: { label: "View Insights", href: "/portal/roof-score" },
};

export const TL_HELP = {
  title: "Need Help?",
  desc: "Questions about your timeline or upcoming events?",
  button: { label: "Contact Support Team", href: "/contact" },
  phone: "(425) 201-2490",
  hours: "Mon - Fri 7AM - 5PM PT",
};
