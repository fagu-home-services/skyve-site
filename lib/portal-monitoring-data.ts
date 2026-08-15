/* Future Homeowner Portal — Monitoring (/portal/monitoring). Phase 2.
   Powered by Verascor real-time monitoring. */

export const MON_HEADER = {
  status: "Active Project",
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA 98033",
  image: "",
  specs: [
    { label: "Year Built", value: "2008" },
    { label: "Roof Age", value: "3 Years" },
    { label: "Last Inspection", value: "May 5, 2025" },
  ],
  score: 87,
  scoreRating: "Excellent",
  monitoringStatus: "Active",
  monitoringSub: "All systems normal",
};

export const MON_SELECTOR = {
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA",
};

export const MON_REALTIME = {
  title: "Real-Time Status",
  headline: "All Systems Normal",
  desc: "Your home is being monitored 24/7",
  updated: "Last updated: 2 min ago",
};

export const MON_TABS = ["Overview", "Alerts", "Sensors", "Weather", "Performance", "Reports", "Integrations", "Settings"];

export const MON_HEALTH = {
  title: "Home Health Overview",
  subtitle: "Live overview of your home's critical systems.",
  cards: [
    { icon: "home", title: "Roof Condition", value: "Good", tag: "Stable", desc: "No issues detected" },
    { icon: "droplet", title: "Water Protection", value: "Good", tag: "No leaks detected", desc: "All areas dry" },
    { icon: "wind", title: "Ventilation", value: "Good", tag: "Optimal", desc: "Airflow is normal" },
    { icon: "shield", title: "Structural Health", value: "Good", tag: "Stable", desc: "No movement detected" },
  ],
};

export const MON_TREND = {
  title: "Roof Health Trend",
  subtitle: "Score over time",
  range: "1 Year",
  points: [42, 45, 48, 52, 56, 60, 66, 70, 74, 78, 82, 84, 87],
  labels: ["Nov '23", "Dec '23", "Jan '24", "Feb '24", "Mar '24", "Apr '24", "May '24", "Jun '24", "Jul '24", "Aug '24", "Sep '24", "Oct '24", "May '25"],
  latest: 87,
  note: "Your roof score has improved +12 points in the last 12 months.",
};

export type Sensor = { icon: string; title: string; status: string; statusTone: string; value: string; unit?: string; label: string };
export const MON_LIVE = {
  title: "Live Monitoring",
  subtitle: "Real-time data from your home's monitoring systems.",
  sensors: [
    { icon: "radar", title: "Roof Sensor", status: "Normal", statusTone: "bg-success/12 text-success", value: "91", unit: "°F", label: "Surface Temp" },
    { icon: "home", title: "Attic Temperature", status: "Normal", statusTone: "bg-success/12 text-success", value: "72", unit: "°F", label: "Inside Temp" },
    { icon: "droplet", title: "Attic Humidity", status: "Normal", statusTone: "bg-success/12 text-success", value: "45", unit: "%", label: "Humidity" },
    { icon: "warning", title: "Leak Detection", status: "Dry", statusTone: "bg-success/12 text-success", value: "No Leaks", label: "All Clear" },
    { icon: "zap", title: "Gutter Status", status: "Good", statusTone: "bg-success/12 text-success", value: "Clear", label: "No Blockages" },
    { icon: "wind", title: "Ventilation", status: "Good", statusTone: "bg-success/12 text-success", value: "Optimal", label: "Airflow" },
    { icon: "zap", title: "Energy Efficiency", status: "Good", statusTone: "bg-success/12 text-success", value: "92", unit: "%", label: "Efficiency" },
    { icon: "shield", title: "Structural Monitor", status: "Stable", statusTone: "bg-success/12 text-success", value: "Normal", label: "No Movement" },
  ] as Sensor[],
};

export type MonActivity = { icon: string; tone: string; title: string; desc: string; time: string };
export const MON_ACTIVITY = {
  title: "Recent Activity",
  subtitle: "Timeline of recent monitoring events and system updates.",
  items: [
    { icon: "checkcircle", tone: "text-success", title: "Drone roof scan completed", desc: "Routine monthly scan. No issues detected.", time: "May 15, 2025, 9:15 AM" },
    { icon: "warning", tone: "text-warning", title: "Minor debris detected in front gutter", desc: "Small leaves detected. No immediate action required.", time: "May 15, 2025, 8:42 AM" },
    { icon: "cloud", tone: "text-ridge", title: "Weather advisory received", desc: "Heavy rainfall expected in your area.", time: "May 14, 2025, 4:30 PM" },
    { icon: "checkcircle", tone: "text-success", title: "All systems check", desc: "Automated system check completed successfully.", time: "May 14, 2025, 2:00 AM" },
  ] as MonActivity[],
};

export const MON_ALERTS = {
  title: "Active Alerts",
  items: [
    { icon: "warning", tone: "text-warning", title: "Minor Debris Detected", desc: "Front gutter • May 15, 2025", tag: "Low", tagTone: "bg-warning/15 text-warning" },
    { icon: "cloud", tone: "text-ridge", title: "Weather Advisory", desc: "Heavy rain expected May 16-17, 2025", tag: "Info", tagTone: "bg-ridge/12 text-ridge" },
    { icon: "wrench", tone: "text-ridge", title: "Maintenance Reminder", desc: "Clean gutters & downspouts Due in 15 days", tag: "Upcoming", tagTone: "bg-sky/25 text-ridge" },
  ],
};

export const MON_ENV = {
  title: "Environmental Conditions",
  location: "Kirkland, WA",
  rows: [
    { icon: "thermometer", label: "Temperature", value: "62°F" },
    { icon: "droplet", label: "Humidity", value: "68%" },
    { icon: "wind", label: "Wind", value: "8 mph SW" },
    { icon: "cloud", label: "Rainfall (24h)", value: "0.12 in" },
    { icon: "sun", label: "UV Index", value: "3 Low" },
  ],
  source: "Source: Weather API",
  link: "View Forecast",
};

export const MON_UPTIME = {
  title: "System Uptime",
  subtitle: "All monitoring systems operational",
  pct: "100%",
  period: "Uptime (30 days)",
  rows: [
    { label: "Sensors Online", value: "18 / 18" },
    { label: "Last Connection", value: "2 min ago" },
  ],
};

export const MON_INTEGRATIONS = {
  title: "Connected Integrations",
  items: [
    { icon: "cloud", label: "Weather Station" },
    { icon: "radar", label: "Drone Monitoring" },
    { icon: "droplet", label: "Leak Sensors" },
    { icon: "bell", label: "Smart Alerts" },
  ],
  link: "Manage Integrations",
};

export const MON_TIPS = {
  title: "Monitoring Tips",
  subtitle: "Keep your home in top shape.",
  items: [
    { icon: "droplet", title: "Clean gutters regularly", desc: "Prevent water damage and clogs." },
    { icon: "wind", title: "Check attic ventilation", desc: "Ensure proper airflow year-round." },
    { icon: "calendar", title: "Schedule inspections", desc: "Regular inspections extend roof life." },
  ],
  link: "View All Tips",
};
