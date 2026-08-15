import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { PortalShell } from "@/components/portal/PortalShell";
import { PTHeader } from "@/components/portal/project-timeline/PTHeader";
import { SelMain } from "@/components/portal/selections/SelMain";
import { SelSidebar } from "@/components/portal/selections/SelSidebar";
import { SEL_SELECTOR } from "@/lib/portal-selections-data";

export const metadata: Metadata = {
  title: "Selections — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "Review and manage all materials, colors, and finishes for your project — roofing, siding, gutters, skylights, deck, and exterior colors.",
};

const TOP_LEFT = (
  <div>
    <nav className="flex items-center gap-1.5 text-xs text-ink-50">
      <Link href="/portal" className="hover:text-ridge">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="font-semibold text-horizon">Selections</span>
    </nav>
    <h1 className="mt-1 font-serif text-2xl font-bold text-horizon sm:text-3xl">Selections</h1>
    <p className="mt-0.5 text-sm text-ink-70">Review and manage all materials, colors, and finishes for your project.</p>
  </div>
);

const TOP_ACTIONS = (
  <button type="button" className="hidden items-center gap-3 rounded-lg border border-mist bg-clear px-4 py-2 text-left transition-colors hover:border-ridge md:flex">
    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-success" />
    <span>
      <span className="block text-sm font-bold text-horizon">{SEL_SELECTOR.name}</span>
      <span className="block text-[11px] text-ink-50">{SEL_SELECTOR.address}</span>
    </span>
    <ChevronDown className="h-4 w-4 text-ink-50" />
  </button>
);

export default function PortalSelectionsPage() {
  return (
    <PortalShell active="Selections" topLeft={TOP_LEFT} topActions={TOP_ACTIONS}>
      <div className="space-y-6">
        <PTHeader button={{ label: "View Timeline", href: "/portal/project-timeline" }} />
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <SelMain />
          <SelSidebar />
        </div>
      </div>
    </PortalShell>
  );
}
