import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { PortalShell } from "@/components/portal/PortalShell";
import { BPHeader } from "@/components/portal/budget/BPHeader";
import { BPMain } from "@/components/portal/budget/BPMain";
import { BPSidebar } from "@/components/portal/budget/BPSidebar";
import { BP_SELECTOR, BP_PROMO } from "@/lib/portal-budget-data";

export const metadata: Metadata = {
  title: "Budget & Payments — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "Track your project costs, payments, and financing details in one place — budget breakdown, payment schedule, and financing information.",
};

const TOP_LEFT = (
  <div>
    <nav className="flex items-center gap-1.5 text-xs text-ink-50">
      <Link href="/portal" className="hover:text-ridge">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="font-semibold text-horizon">Budget &amp; Payments</span>
    </nav>
    <h1 className="mt-1 font-serif text-2xl font-bold text-horizon sm:text-3xl">Budget &amp; Payments</h1>
    <p className="mt-0.5 text-sm text-ink-70">Track your project costs, payments, and financing details in one place.</p>
  </div>
);

const TOP_ACTIONS = (
  <button type="button" className="hidden items-center gap-3 rounded-lg border border-mist bg-clear px-4 py-2 text-left transition-colors hover:border-ridge md:flex">
    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-success" />
    <span>
      <span className="block text-sm font-bold text-horizon">{BP_SELECTOR.name}</span>
      <span className="block text-[11px] text-ink-50">{BP_SELECTOR.address}</span>
    </span>
    <ChevronDown className="h-4 w-4 text-ink-50" />
  </button>
);

export default function PortalBudgetPaymentsPage() {
  return (
    <PortalShell active="Budget & Payments" topLeft={TOP_LEFT} topActions={TOP_ACTIONS} promo={BP_PROMO}>
      <div className="space-y-6">
        <BPHeader />
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <BPMain />
          <BPSidebar />
        </div>
      </div>
    </PortalShell>
  );
}
