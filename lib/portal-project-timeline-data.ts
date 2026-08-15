/* Future Homeowner Portal — Project Timeline (/portal/project-timeline). Phase 2. */

export const PT_HEADER = {
  status: "Active Project",
  title: "Roof Replacement",
  subtitle: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA 98033",
  image: "",
  specs: [
    { icon: "calendar", label: "Project Start", value: "May 10, 2025" },
    { icon: "clock", label: "Estimated Completion", value: "May 18, 2025" },
    { icon: "user", label: "Project Manager", value: "Mike Anderson" },
    { icon: "checkcircle", label: "Weather Window", value: "Good", good: true },
  ],
  progress: 65,
  progressLabel: "In Progress",
  button: { label: "Project Details", href: "#" },
};

export const PT_SELECTOR = {
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA",
};

export const PT_TABS = ["Timeline", "Milestones", "Daily Updates", "Crew & Contacts", "Materials", "Notes"];

export type PTEvent = {
  icon: string;
  title: string;
  desc: string;
  date: string;
  action?: string;
  badge?: { label: string; tone: string };
};
export type PTGroup = { phase: string; tone: string; iconBg: string; line: string; events: PTEvent[] };

const UPCOMING = { label: "Upcoming", tone: "bg-mist text-ink-70" };
const INPROGRESS = { label: "In Progress", tone: "bg-ridge/12 text-ridge" };
const SCHEDULED = { label: "Scheduled", tone: "bg-accent/15 text-accent" };
const PLANNED = { label: "Planned", tone: "bg-mist text-ink-70" };

export const PT_GROUPS: PTGroup[] = [
  {
    phase: "COMPLETED",
    tone: "text-success",
    iconBg: "bg-success/12",
    line: "bg-success/30",
    events: [
      { icon: "radar", title: "Initial Inspection", desc: "Drone inspection and assessment completed.", date: "May 5, 2025", action: "View Report" },
      { icon: "checkcircle", title: "Estimate Approved", desc: "Project estimate reviewed and approved.", date: "May 7, 2025", action: "View Estimate" },
      { icon: "checkcircle", title: "Permit Approved", desc: "Building permit approved by the city.", date: "May 9, 2025", action: "View Permit" },
    ],
  },
  {
    phase: "IN PROGRESS",
    tone: "text-ridge",
    iconBg: "bg-ridge/12",
    line: "bg-ridge/30",
    events: [
      { icon: "document", title: "Materials Delivered", desc: "All roofing materials have been delivered.", date: "May 10, 2025", action: "View Photos" },
      { icon: "wrench", title: "Tear Off In Progress", desc: "Old roofing materials are being removed.", date: "May 12, 2025", badge: INPROGRESS },
      { icon: "document", title: "Deck Inspection", desc: "Roof deck inspection and repairs (if needed).", date: "May 13, 2025", badge: UPCOMING },
      { icon: "document", title: "Underlayment Installation", desc: "Underlayment and ice & water shield installation.", date: "May 14, 2025", badge: UPCOMING },
      { icon: "home", title: "New Roof Installation", desc: "Installation of new roofing system.", date: "May 15 - 16, 2025", badge: UPCOMING },
    ],
  },
  {
    phase: "UPCOMING",
    tone: "text-accent",
    iconBg: "bg-accent/15",
    line: "bg-accent/30",
    events: [
      { icon: "gear", title: "Cleanup & Final Inspection", desc: "Job site cleanup and final quality inspection.", date: "May 17, 2025", badge: SCHEDULED },
      { icon: "checkcircle", title: "Final Walkthrough", desc: "Project walkthrough with homeowner.", date: "May 17, 2025", badge: SCHEDULED },
      { icon: "badge", title: "Project Completion", desc: "Project completed and warranty activated.", date: "May 18, 2025", badge: SCHEDULED },
    ],
  },
  {
    phase: "COMPLETE",
    tone: "text-success",
    iconBg: "bg-success/12",
    line: "bg-success/30",
    events: [
      { icon: "shield", title: "Your Home is Protected", desc: "Enjoy your new roof with peace of mind.", date: "May 18, 2025", badge: PLANNED },
    ],
  },
];

export const PT_NOTE = {
  title: "Dates may change due to weather or unforeseen conditions.",
  desc: "We will keep you updated every step of the way.",
  button: { label: "View Schedule Notes", href: "#" },
};

export const PT_PROGRESS_PHOTOS = {
  title: "Project Progress Photos",
  subtitle: "A quick look at what's happening on your project.",
  items: [
    { label: "Before Work", date: "May 5, 2025" },
    { label: "Materials Delivered", date: "May 10, 2025" },
    { label: "Tear Off Started", date: "May 12, 2025" },
    { label: "Deck Inspection", date: "May 13, 2025" },
  ],
  more: 24,
};

export const PT_NEXT = {
  title: "Upcoming Next",
  icon: "wrench",
  name: "Tear Off In Progress",
  desc: "Old roofing materials are being removed.",
  date: "May 12, 2025",
  button: { label: "View Daily Updates", href: "#" },
};

export const PT_SUMMARY = {
  title: "Project Summary",
  rows: [
    { label: "Project Type", value: "Roof Replacement" },
    { label: "Roof Type", value: "Architectural Shingles" },
    { label: "Total Value", value: "$24,800" },
    { label: "Payment Plan", value: "Financing – 0% APR" },
    { label: "Start Date", value: "May 10, 2025" },
    { label: "Est. Completion", value: "May 18, 2025" },
  ],
  button: { label: "View Project Details", href: "#" },
};

export const PT_WEATHER = {
  title: "Weather Forecast",
  location: "Kirkland, WA",
  days: [
    { day: "Mon", date: "May 12", icon: "sun", temp: "68°F", rain: "0%" },
    { day: "Tue", date: "May 13", icon: "cloud", temp: "66°F", rain: "10%" },
    { day: "Wed", date: "May 14", icon: "sun", temp: "64°F", rain: "0%" },
    { day: "Thu", date: "May 15", icon: "sun", temp: "66°F", rain: "0%" },
    { day: "Fri", date: "May 16", icon: "sun", temp: "67°F", rain: "0%" },
  ],
  button: { label: "Full 10-Day Forecast", href: "#" },
};

export const PT_HELP = {
  title: "Need Help?",
  desc: "Have a question about your project?",
  button: { label: "Contact Your Project Manager", href: "/contact" },
  phone: "(425) 201-2490",
  hours: "Mon – Fri 7AM – 5PM PT",
};
