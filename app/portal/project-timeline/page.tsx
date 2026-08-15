import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { PortalShell } from "@/components/portal/PortalShell";
import { PTHeader } from "@/components/portal/project-timeline/PTHeader";
import { PTMain } from "@/components/portal/project-timeline/PTMain";
import { PTSidebar } from "@/components/portal/project-timeline/PTSidebar";
import { PT_SELECTOR } from "@/lib/portal-project-timeline-data";

export const metadata: Metadata = {
  title: "Project Timeline — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "Track the history and future milestones of your roofing project — from initial inspection to completion, with daily updates, materials, crew, and weather.",
};

const TOP_LEFT = (
  <div>
    <nav className="flex items-center gap-1.5 text-xs text-ink-50">
      <Link href="/portal" className="hover:text-ridge">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="font-semibold text-horizon">Project Timeline</span>
    </nav>
    <h1 className="mt-1 font-serif text-2xl font-bold text-horizon sm:text-3xl">Project Timeline</h1>
    <p className="mt-0.5 text-sm text-ink-70">Track the history and future milestones of your roofing project.</p>
  </div>
);

const TOP_ACTIONS = (
  <button type="button" className="hidden items-center gap-3 rounded-lg border border-mist bg-clear px-4 py-2 text-left transition-colors hover:border-ridge md:flex">
    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-success" />
    <span>
      <span className="block text-sm font-bold text-horizon">{PT_SELECTOR.name}</span>
      <span className="block text-[11px] text-ink-50">{PT_SELECTOR.address}</span>
    </span>
    <ChevronDown className="h-4 w-4 text-ink-50" />
  </button>
);

export default function PortalProjectTimelinePage() {
  return (
    <PortalShell active="Project Timeline" topLeft={TOP_LEFT} topActions={TOP_ACTIONS}>
      <div className="space-y-6">
        <PTHeader />
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <PTMain />
          <PTSidebar />
        </div>
      </div>
    </PortalShell>
  );
}
