import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PortalShell } from "@/components/portal/PortalShell";
import { PortalProjectCard } from "@/components/portal/PortalProjectCard";
import { MaintMain } from "@/components/portal/maintenance/MaintMain";
import { MaintSidebar } from "@/components/portal/maintenance/MaintSidebar";

export const metadata: Metadata = {
  title: "Maintenance — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "Keep your Skyve home protected with recommended maintenance — schedules, seasonal checklists, tips, and trusted providers.",
};

const TOP_LEFT = (
  <div>
    <nav className="flex items-center gap-1.5 text-xs text-ink-50">
      <Link href="/portal" className="hover:text-ridge">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="font-semibold text-horizon">Maintenance</span>
    </nav>
    <h1 className="mt-1 font-serif text-2xl font-bold text-horizon sm:text-3xl">Maintenance</h1>
    <p className="mt-0.5 text-sm text-ink-70">Keep your home protected with recommended maintenance.</p>
  </div>
);

export default function PortalMaintenancePage() {
  return (
    <PortalShell active="Maintenance" topLeft={TOP_LEFT}>
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <PortalProjectCard completionLabel="Completion Date" />
          <MaintMain />
        </div>
        <MaintSidebar />
      </div>
    </PortalShell>
  );
}
