/* Future Homeowner Portal — Settings (/portal/settings). Phase 2. */

export const SET_SELECTOR = {
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA",
};

export const SET_PROMO = {
  title: "Need help?",
  desc: "We're here to help you every step of the way.",
  button: { label: "Contact Support", href: "/contact" },
};

export const SET_TABS = ["General", "Notifications", "Privacy & Security", "Communications", "Display", "Billing & Documents", "Integrations"];

export const SET_GENERAL = {
  title: "General Settings",
  subtitle: "Manage your basic account settings and preferences.",
  language: { label: "Preferred Language", value: "English", options: ["English", "Spanish", "Portuguese"] },
  dateFormat: { label: "Date Format", value: "MM / DD / YYYY", options: ["MM / DD / YYYY", "DD / MM / YYYY", "YYYY-MM-DD"] },
  timeZone: { label: "Time Zone", value: "(GMT-08:00) Pacific Time (US & Canada)", options: ["(GMT-08:00) Pacific Time (US & Canada)", "(GMT-07:00) Mountain Time", "(GMT-06:00) Central Time", "(GMT-05:00) Eastern Time"] },
};

export const SET_PREFERENCES = {
  title: "Portal Preferences",
  subtitle: "Choose how your portal works for you.",
  items: [
    { icon: "grid", title: "Default Dashboard View", desc: "Choose your default landing page when you log in.", type: "select", value: "My Home", options: ["My Home", "Dashboard", "Project Timeline"] },
    { icon: "list", title: "Compact Mode", desc: "Reduce spacing and use a more compact layout.", type: "toggle", on: false },
    { icon: "chart", title: "Show Project Progress", desc: "Display project progress on the dashboard.", type: "toggle", on: true },
    { icon: "moon", title: "Enable Dark Mode", desc: "Switch to a dark theme across the portal.", type: "toggle", on: false },
  ],
};

export const SET_REGIONAL = {
  title: "Regional Settings",
  subtitle: "Manage regional and measurement preferences.",
  measurement: { label: "Measurement System", value: "US Standard (Imperial)", options: ["US Standard (Imperial)", "Metric"] },
  temperature: { label: "Temperature Unit", value: "Fahrenheit (°F)", options: ["Fahrenheit (°F)", "Celsius (°C)"] },
  numberFormat: { label: "Number Format", value: "1,234.56", options: ["1,234.56", "1.234,56", "1 234.56"] },
  button: "Save Changes",
};

export const SET_ACCOUNT = {
  title: "Account Summary",
  rows: [
    { label: "Account Type", value: "Homeowner" },
    { label: "Member Since", value: "May 5, 2025" },
    { label: "Current Project", value: "Roof Replacement" },
    { label: "Project Address", value: "1234 Evergreen Lane Kirkland, WA 98033" },
  ],
  status: { label: "Account Status", value: "Active" },
  button: { label: "View My Profile", href: "/portal/my-profile" },
};

export const SET_QUICK_ACTIONS = {
  title: "Quick Actions",
  items: [
    { icon: "lock", label: "Update Password" },
    { icon: "link", label: "Manage Connected Accounts" },
    { icon: "download", label: "Download My Data" },
    { icon: "ban", label: "Close My Account" },
  ],
};

export const SET_HELP = {
  title: "Help & Resources",
  subtitle: "Find answers or contact our team.",
  items: [
    { icon: "help", label: "Help Center", href: "/portal/help-support" },
    { icon: "film", label: "Video Tutorials", href: "/skyve-tv" },
    { icon: "send", label: "Submit a Request", href: "/portal/help-support" },
    { icon: "message", label: "Contact Support", href: "/contact" },
  ],
};

export const SET_BAND = [
  { icon: "shield", title: "Your Data is Safe", desc: "We use bank-level security to protect your information." },
  { icon: "refresh", title: "Always Up-to-Date", desc: "We continuously improve your portal experience." },
  { icon: "help", title: "Need Help?", desc: "Our support team is here for you." },
];
