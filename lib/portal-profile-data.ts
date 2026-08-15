/* Future Homeowner Portal — My Profile (/portal/my-profile). Phase 2. */

export const PRO_SELECTOR = {
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA",
};

export const PRO_PROMO = {
  title: "Need help?",
  desc: "We're here to help you every step of the way.",
  button: { label: "Contact Support", href: "/contact" },
};

export const PRO_TABS = ["Personal Information", "Contact & Address", "Notifications", "Security", "Connected Accounts"];

export const PRO_PERSONAL = {
  title: "Personal Information",
  initials: "AJ",
  photoNote: "JPG or PNG. Max size 5MB.",
  fields: [
    { label: "First Name", value: "Alex" },
    { label: "Last Name", value: "Johnson" },
    { label: "Email Address", value: "alex.johnson@email.com" },
    { label: "Phone Number", value: "(425) 555-0198" },
  ],
  dob: { label: "Date of Birth", value: "April 15, 1980" },
  language: { label: "Preferred Language", value: "English", options: ["English", "Spanish", "Portuguese"] },
  hear: { label: "How did you hear about us?", value: "Google Search", options: ["Google Search", "Referral", "Social Media", "Yard Sign", "Other"] },
};

export const PRO_CONTACT = {
  title: "Contact & Address",
  street: { label: "Street Address", value: "1234 Evergreen Lane" },
  apt: { label: "Apt, Suite, etc. (Optional)", value: "" },
  city: { label: "City", value: "Kirkland" },
  state: { label: "State", value: "Washington", options: ["Washington", "Oregon", "Idaho"] },
  zip: { label: "ZIP Code", value: "98033" },
  primaryPhone: { label: "Primary Phone", value: "(425) 555-0198" },
  altPhone: { label: "Alternate Phone (Optional)", value: "(425) 555-0123" },
};

export const PRO_SECURITY = {
  title: "Security",
  items: [
    { icon: "lock", label: "Password", value: "••••••••••••••••", action: "Change Password" },
    { icon: "shield", label: "Two-Factor Authentication", desc: "Add an extra layer of security to your account.", status: "Enabled" },
    { icon: "clock", label: "Login Activity", desc: "View your recent account activity." },
    { icon: "monitor", label: "Manage Devices", desc: "Manage devices that have access to your account." },
  ],
};

export const PRO_ACCOUNT = {
  title: "Account Summary",
  rows: [
    { label: "Account Type", value: "Homeowner" },
    { label: "Member Since", value: "May 5, 2025" },
    { label: "Current Project", value: "Roof Replacement" },
    { label: "Project Address", value: "1234 Evergreen Lane Kirkland, WA 98033" },
  ],
  status: { label: "Account Status", value: "Active" },
  button: { label: "View My Home", href: "/portal/my-home" },
};

export const PRO_NOTIFICATIONS = {
  title: "Notification Preferences",
  subtitle: "Choose how you want to be notified.",
  items: [
    { icon: "home", title: "Project Updates", desc: "Important project updates and changes", on: true },
    { icon: "message", title: "Messages", desc: "New messages from your team", on: true },
    { icon: "document", title: "Payments & Invoices", desc: "Payment confirmations and reminders", on: true },
    { icon: "calendar", title: "Appointments", desc: "Scheduled visits and inspections", on: true },
    { icon: "shield", title: "Warranty & Maintenance", desc: "Reminders and expiration alerts", on: false },
    { icon: "megaphone", title: "Marketing & Tips", desc: "Special offers and helpful tips", on: false },
  ],
  button: "Save Preferences",
};

export const PRO_CONNECTED = {
  title: "Connected Accounts",
  subtitle: "Connect your accounts for a better experience.",
  items: [
    { mono: "G", tone: "text-[#4285F4]", bg: "bg-[#4285F4]/10", name: "Google", detail: "alex.johnson@gmail.com", connected: true },
    { mono: "", tone: "text-horizon", bg: "bg-mist", name: "Apple", detail: "alex.johnson@icloud.com", connected: false },
    { mono: "f", tone: "text-[#1877F2]", bg: "bg-[#1877F2]/10", name: "Facebook", detail: "Not connected", connected: false },
  ],
};
