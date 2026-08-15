import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { PortalShell } from "@/components/portal/PortalShell";
import { TLHeader } from "@/components/portal/timeline/TLHeader";
import { TLMain } from "@/components/portal/timeline/TLMain";
import { TLSidebar } from "@/components/portal/timeline/TLSidebar";
import { VerascorMark } from "@/components/portal/roofscore/VerascorMark";
import { TL_SELECTOR } from "@/lib/portal-timeline-data";

export const metadata: Metadata = {
  title: "Timeline — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "The complete history and future plan for your home — powered by Verascor. Completed milestones, upcoming maintenance, inspections, and future projections.",
};

const TOP_LEFT = (
  <div>
    <nav className="flex items-center gap-1.5 text-xs text-ink-50">
      <Link href="/portal" className="hover:text-ridge">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="font-semibold text-horizon">Timeline</span>
    </nav>
    <div className="mt-1 flex flex-wrap items-center gap-2">
      <h1 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">Timeline</h1>
      <span className="hidden items-center gap-1.5 text-xs text-ink-50 sm:flex">
        Powered by <VerascorMark />
      </span>
    </div>
    <p className="mt-0.5 text-sm text-ink-70">The complete history and future plan for your home.</p>
  </div>
);

const TOP_ACTIONS = (
  <button type="button" className="hidden items-center gap-3 rounded-lg border border-mist bg-clear px-4 py-2 text-left transition-colors hover:border-ridge md:flex">
    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-success" />
    <span>
      <span className="block text-sm font-bold text-horizon">{TL_SELECTOR.name}</span>
      <span className="block text-[11px] text-ink-50">{TL_SELECTOR.address}</span>
    </span>
    <ChevronDown className="h-4 w-4 text-ink-50" />
  </button>
);

export default function PortalTimelinePage() {
  return (
    <PortalShell active="Timeline" topLeft={TOP_LEFT} topActions={TOP_ACTIONS}>
      <div className="space-y-6">
        <TLHeader />
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <TLMain />
          <TLSidebar />
        </div>
      </div>
    </PortalShell>
  );
}
