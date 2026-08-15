/* Future Homeowner Portal — Dashboard (/portal). Phase 2.
   Logged-in customer portal (mock data). Uses the dark PortalShell. */

export const PORTAL_USER = {
  name: "Alex Johnson",
  role: "Future Homeowner",
  firstName: "Alex",
};

export const PORTAL_NAV = [
  { icon: "grid", label: "Dashboard", href: "/portal" },
  { icon: "home", label: "My Home", href: "/portal/my-home" },
  { icon: "calendar", label: "Project Timeline", href: "/portal/project-timeline" },
  { icon: "layers", label: "Selections", href: "/portal/selections" },
  { icon: "document", label: "Documents", href: "/portal/documents" },
  { icon: "camera", label: "Photos", href: "/portal/photos" },
  { icon: "shield", label: "Warranty", href: "/portal/warranty" },
  { icon: "wrench", label: "Maintenance", href: "/portal/maintenance" },
  { icon: "search", label: "Inspection History", href: "/portal/inspection-history" },
  { icon: "chart", label: "Roof Score", href: "/portal/roof-score" },
  { icon: "badge", label: "Property Passport", href: "/portal/property-passport" },
  { icon: "radar", label: "Monitoring", href: "/portal/monitoring" },
  { icon: "list", label: "Timeline", href: "/portal/timeline" },
  { icon: "message", label: "Messages", href: "/portal/messages", badge: 3 },
  { icon: "wallet", label: "Budget & Payments", href: "/portal/budget-payments" },
  { icon: "refresh", label: "Change Orders", href: "/portal/change-orders" },
  { icon: "book", label: "Resources", href: "/portal/resources" },
  { icon: "gear", label: "Settings", href: "/portal/settings" },
  { icon: "help", label: "Help & Support", href: "/portal/help-support" },
  { icon: "user", label: "My Profile", href: "/portal/my-profile" },
  { icon: "logout", label: "Log Out", href: "/" },
];

/* Shared compact project summary used by PortalProjectCard. */
export const PD_PROJECT = {
  status: "Active Project",
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA 98033",
  manager: "Ryan Mitchell",
  completion: "Jun 25, 2025",
  projectStatus: "In Progress",
  image: "",
};

export const PORTAL_PROJECT = {
  status: "Active Project",
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA 98033",
  manager: "Ryan Mitchell",
  completion: "Jun 25, 2025",
  projectStatus: "In Progress",
  progress: 62,
  note: "Construction in progress. Exterior work is underway.",
  image: "",
};

export const PORTAL_QUICK_ACTIONS = [
  { icon: "calendar", label: "View Timeline" },
  { icon: "upload", label: "Upload Document" },
  { icon: "message", label: "Send a Message" },
  { icon: "layers", label: "View Selections" },
];

export const PORTAL_STATS = {
  progress: { value: 62, label: "Project Progress", status: "On Track" },
  milestone: { label: "Next Milestone", title: "Exterior Work", status: "In Progress", expected: "Expected: May 20, 2025" },
  payments: { label: "Payments Made", amount: "$42,500", of: "of $65,000", pct: 65 },
  messages: { label: "Messages", count: 3, note: "Unread" },
};

export const PORTAL_TIMELINE = [
  { n: 1, title: "Contract Signed", date: "Apr 10, 2025", status: "Completed", state: "done" },
  { n: 2, title: "Design & Planning", date: "Apr 11 - Apr 28, 2025", status: "Completed", state: "done" },
  { n: 3, title: "Exterior Work", date: "May 1 - May 20, 2025", status: "In Progress", state: "active" },
  { n: 4, title: "Interior Work", date: "May 21 - Jun 10, 2025", status: "Upcoming", state: "upcoming" },
  { n: 5, title: "Final Walkthrough", date: "Jun 11 - Jun 20, 2025", status: "Upcoming", state: "upcoming" },
  { n: 6, title: "Project Completion", date: "Jun 25, 2025", status: "Estimated", state: "upcoming" },
];

export const PORTAL_UPDATES = [
  { thumb: "", text: "Siding installation is 75% complete.", time: "May 15, 2025 • 9:30 AM" },
  { thumb: "", text: "Windows installed on the front elevation.", time: "May 13, 2025 • 2:15 PM" },
  { thumb: "", text: "Deck framing completed.", time: "May 10, 2025 • 10:45 AM" },
];

export const PORTAL_HOME_GLANCE = {
  title: "My Home at a Glance",
  items: [
    { icon: "bed", value: "5", label: "Bedrooms" },
    { icon: "bath", value: "3.5", label: "Bathrooms" },
    { icon: "ruler", value: "3,250", label: "Sq Ft" },
    { icon: "building", value: "2", label: "Stories" },
  ],
};

export const PORTAL_APPOINTMENT = {
  title: "Upcoming Appointment",
  name: "Site Walkthrough",
  withWho: "with Ryan Mitchell",
  month: "MAY",
  day: "20",
  weekday: "Tuesday",
  time: "10:00 AM - 11:00 AM",
};

export const PORTAL_SELECTIONS = {
  title: "Selections Summary",
  items: [
    { image: "", label: "Roofing", detail: "Architectural Shingle Charcoal" },
    { image: "", label: "Siding", detail: "Hardie Plank Gray Slate" },
    { image: "", label: "Windows", detail: "Black Frame Andersen 400" },
    { image: "", label: "Flooring", detail: "Engineered Wood Oak Natural" },
  ],
  changeNote: "Need to make a change?",
  changeSub: "Contact your project manager or submit a change order.",
};

export const PORTAL_BUDGET = {
  title: "Budget Overview",
  spentPct: 65,
  rows: [
    { label: "Total Contract", value: "$65,000", tone: "bg-ridge" },
    { label: "Payments Made", value: "$42,500", tone: "bg-sky" },
    { label: "Remaining Balance", value: "$22,500", tone: "bg-mist" },
    { label: "Pending Changes", value: "$0", tone: "bg-accent" },
  ],
  note: "All amounts are in USD",
};

export const PORTAL_DOCUMENTS = {
  title: "Documents",
  items: [
    { name: "Building Permit", date: "Uploaded May 8, 2025" },
    { name: "Floor Plan", date: "Uploaded Apr 18, 2025" },
    { name: "Selections Summary", date: "Uploaded Apr 15, 2025" },
    { name: "Contract Agreement", date: "Uploaded Apr 10, 2025" },
  ],
};

export const PORTAL_BOTTOM = {
  title: "We're Building More Than a House. We're Building Your Future.",
  desc: "Thank you for trusting Skyve Roofing & Exteriors.",
  button: { label: "Contact Your Team", href: "/contact" },
};

export const PORTAL_SIDEBAR_PROMO = {
  image: "",
  title: "Need a service?",
  desc: "We're here to help keep your home in perfect shape.",
  button: { label: "Request a Service", href: "/contact" },
};

export const PORTAL_HELP = {
  title: "Need Help?",
  desc: "Our team is here for you.",
  phone: "(425) 201-2490",
  hours: "Mon - Fri 7AM - 5PM PT",
};
