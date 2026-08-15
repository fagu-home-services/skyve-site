/* Future Homeowner Portal — My Home (/portal/my-home). Phase 2. */

export const MH_HEADER = {
  status: "Active Property",
  name: "Johnson Residence",
  addressLine1: "1234 Evergreen Lane",
  addressLine2: "Kirkland, WA 98033",
  image: "",
  specs: [
    { label: "Year Built", value: "2008" },
    { label: "Home Type", value: "Single Family" },
    { label: "Living Area", value: "2,450 sq ft" },
    { label: "Roof Age", value: "3 Years" },
  ],
  score: 87,
  scoreRating: "Excellent",
  propertyStatus: {
    label: "Property Status",
    headline: "All systems normal",
    desc: "Your home is in excellent condition.",
    updated: "Last update: Today, 8:30 AM",
    link: { label: "View Details", href: "#" },
  },
};

export const MH_HEALTH = {
  title: "Home Health Score",
  score: 87,
  rating: "Excellent",
  desc: "Your home is in great shape. Keep up with regular maintenance to protect your investment.",
  link: { label: "View Roof Score Details", href: "/portal/roof-score" },
};

export const MH_QUICK_ACTIONS = {
  title: "Quick Actions",
  items: [
    { icon: "upload", label: "Upload Document" },
    { icon: "calendar", label: "Schedule Inspection" },
    { icon: "wrench", label: "Request Service" },
    { icon: "list", label: "View Timeline" },
    { icon: "help", label: "Contact Support" },
  ],
};

export const MH_TABS = ["Overview", "Systems", "Photos", "Documents", "Warranty", "Maintenance", "Reports", "Activity"];

export const MH_SYSTEMS = {
  title: "Home Overview",
  subtitle: "Summary of your home systems and components.",
  items: [
    { icon: "home", label: "Roofing System", status: "Good" },
    { icon: "droplet", label: "Gutters & Drainage", status: "Good" },
    { icon: "grid", label: "Exterior Siding", status: "Good" },
    { icon: "wind", label: "HVAC System", status: "Good" },
    { icon: "droplet", label: "Plumbing System", status: "Good" },
    { icon: "zap", label: "Electrical System", status: "Good" },
    { icon: "grid", label: "Windows & Doors", status: "Good" },
    { icon: "layers", label: "Attic & Insulation", status: "Good" },
  ],
};

export type MHActivity = { icon: string; tone: string; title: string; desc: string; time: string };
export const MH_ACTIVITY = {
  title: "Recent Activity",
  subtitle: "Stay up to date with the latest updates to your home.",
  items: [
    { icon: "checkcircle", tone: "text-success", title: "Maintenance task completed", desc: "Gutter cleaning completed", time: "Apr 28, 2025 · 9:15 AM" },
    { icon: "document", tone: "text-ridge", title: "Document uploaded", desc: "Roof Warranty Certificate", time: "Apr 28, 2025 · 8:42 AM" },
    { icon: "search", tone: "text-ridge", title: "Inspection scheduled", desc: "Roof inspection scheduled for May 20", time: "Apr 27, 2025 · 2:30 PM" },
    { icon: "camera", tone: "text-warning", title: "Photo added", desc: "3 new photos added to your home", time: "Apr 25, 2025 · 11:10 AM" },
  ] as MHActivity[],
};

export const MH_PHOTOS = {
  title: "Recent Photos",
  items: [
    { label: "Front View", date: "Apr 25, 2025" },
    { label: "Roof Overview", date: "Apr 25, 2025" },
    { label: "Backyard", date: "Apr 25, 2025" },
    { label: "Attic", date: "Apr 25, 2025" },
  ],
};

export const MH_BAND = {
  title: "Your home. Protected. Always.",
  desc: "Verascor monitors and protects your home so you can rest easy knowing everything is under control.",
};

export const MH_ALERTS = {
  title: "Active Alerts",
  items: [
    { icon: "warning", tone: "text-warning", title: "Maintenance Reminder", desc: "Clean gutters & downspouts", meta: "Due in 15 days" },
    { icon: "search", tone: "text-warning", title: "Annual Inspection", desc: "Recommended yearly inspection", meta: "Due in 45 days" },
    { icon: "shield", tone: "text-warning", title: "Warranty Expiration", desc: "Roof workmanship warranty", meta: "May 15, 2032" },
  ],
  button: { label: "View All Alerts", href: "#" },
};

export const MH_EVENTS = {
  title: "Upcoming Events",
  items: [
    { month: "May", day: "20", title: "Roof Inspection", desc: "Scheduled with Skyve Inspector", time: "10:00 AM" },
    { month: "Jun", day: "15", title: "Preventive Maintenance", desc: "Gutter cleaning & roof check", time: "9:00 AM" },
    { month: "Aug", day: "10", title: "Seasonal Inspection", desc: "Summer roof & attic inspection", time: "11:00 AM" },
  ],
  button: { label: "View Full Timeline", href: "/portal/timeline" },
};

export const MH_WEATHER = {
  title: "Current Weather",
  location: "Kirkland, WA",
  temp: "58°F",
  condition: "Partly Cloudy",
  rows: [
    { label: "Humidity", value: "62%" },
    { label: "Wind", value: "6 mph SW" },
    { label: "Rain", value: "0%" },
  ],
  link: { label: "View Forecast", href: "#" },
};

export const MH_DOCUMENTS = {
  title: "Important Documents",
  items: [
    { name: "Roof Warranty Certificate", date: "Uploaded May 15, 2022", tone: "text-danger" },
    { name: "Roof Installation Report", date: "Uploaded May 16, 2022", tone: "text-ridge" },
    { name: "Maintenance Checklist", date: "Uploaded Apr 20, 2025", tone: "text-success" },
    { name: "Building Permit", date: "Uploaded Apr 10, 2022", tone: "text-warning" },
  ],
  link: { label: "View All Documents", href: "/portal/documents" },
};
