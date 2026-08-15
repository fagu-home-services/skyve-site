import type { Metadata } from "next";
import { PortalShell } from "@/components/portal/PortalShell";
import { PFHero } from "@/components/portal/PFHero";
import { PFStats } from "@/components/portal/PFStats";
import { PFMiddle } from "@/components/portal/PFMiddle";
import { PFLower } from "@/components/portal/PFLower";
import { PFBottom } from "@/components/portal/PFBottom";

export const metadata: Metadata = {
  title: "Future Homeowner Portal — Dashboard | Skyve Roofing & Exteriors",
  description:
    "Your Skyve Future Homeowner Portal — track your project timeline, budget, selections, documents, and messages all in one place.",
};

const WELCOME = (
  <div>
    <h1 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
      Welcome back, Alex! <span aria-hidden>👋</span>
    </h1>
    <p className="mt-0.5 text-sm text-ink-70">Here&apos;s what&apos;s happening with your future home.</p>
  </div>
);

export default function PortalDashboardPage() {
  return (
    <PortalShell active="Dashboard" topLeft={WELCOME} topAction={{ icon: "phone", label: "Schedule a Call" }}>
      <div className="space-y-6">
        <PFHero />
        <PFStats />
        <PFMiddle />
        <PFLower />
        <PFBottom />
      </div>
    </PortalShell>
  );
}
