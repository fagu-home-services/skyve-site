import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";
import { PortalShell } from "@/components/portal/PortalShell";
import { PortalProjectCard } from "@/components/portal/PortalProjectCard";
import { InspMain } from "@/components/portal/inspection/InspMain";
import { InspSidebar } from "@/components/portal/inspection/InspSidebar";
import { PI_NEXT } from "@/lib/portal-inspection-data";

export const metadata: Metadata = {
  title: "Inspection History — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "Review all inspections performed on your Skyve home — roof, exterior, specialty, and manufacturer inspections with reports and condition summaries.",
};

const TOP_LEFT = (
  <div>
    <nav className="flex items-center gap-1.5 text-xs text-ink-50">
      <Link href="/portal" className="hover:text-ridge">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="font-semibold text-horizon">Inspection History</span>
    </nav>
    <h1 className="mt-1 font-serif text-2xl font-bold text-horizon sm:text-3xl">Inspection History</h1>
    <p className="mt-0.5 text-sm text-ink-70">Review all inspections performed on your home.</p>
  </div>
);

const NEXT_ASIDE = (
  <div className="w-full max-w-xs rounded-xl border border-mist bg-mist-soft/40 p-4 lg:w-64">
    <p className="text-xs font-bold text-horizon">{PI_NEXT.title}</p>
    <p className="mt-2 flex items-center gap-2 font-serif text-lg font-bold text-horizon">
      <Calendar className="h-4 w-4 text-ridge" /> {PI_NEXT.date}
    </p>
    <p className="text-[11px] text-ink-50">{PI_NEXT.type}</p>
    <p className="mt-2 text-xs text-ink-70">{PI_NEXT.countdown}</p>
    <Link href={PI_NEXT.link.href} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
      {PI_NEXT.link.label} <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  </div>
);

export default function PortalInspectionHistoryPage() {
  return (
    <PortalShell active="Inspection History" topLeft={TOP_LEFT} topAction={{ icon: "calendar", label: "Schedule Inspection" }}>
      <div className="space-y-6">
        <PortalProjectCard completionLabel="Completion Date" aside={NEXT_ASIDE} />

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <InspMain />
          <InspSidebar />
        </div>
      </div>
    </PortalShell>
  );
}
