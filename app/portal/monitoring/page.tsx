import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { PortalShell } from "@/components/portal/PortalShell";
import { MonHeader } from "@/components/portal/monitoring/MonHeader";
import { MonMain } from "@/components/portal/monitoring/MonMain";
import { MonSidebar } from "@/components/portal/monitoring/MonSidebar";
import { VerascorMark } from "@/components/portal/roofscore/VerascorMark";
import { MON_SELECTOR, MON_REALTIME } from "@/lib/portal-monitoring-data";

export const metadata: Metadata = {
  title: "Monitoring — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "Real-time monitoring and insights to protect your home — powered by Verascor. Live sensors, roof health trends, weather, alerts, and system uptime.",
};

const TOP_LEFT = (
  <div>
    <nav className="flex items-center gap-1.5 text-xs text-ink-50">
      <Link href="/portal" className="hover:text-ridge">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="font-semibold text-horizon">Monitoring</span>
    </nav>
    <div className="mt-1 flex flex-wrap items-center gap-2">
      <h1 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">Monitoring</h1>
      <span className="hidden items-center gap-1.5 text-xs text-ink-50 sm:flex">
        Powered by <VerascorMark />
      </span>
    </div>
    <p className="mt-0.5 text-sm text-ink-70">Real-time monitoring and insights to protect your home.</p>
  </div>
);

const TOP_ACTIONS = (
  <button type="button" className="hidden items-center gap-3 rounded-lg border border-mist bg-clear px-4 py-2 text-left transition-colors hover:border-ridge md:flex">
    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-success" />
    <span>
      <span className="block text-sm font-bold text-horizon">{MON_SELECTOR.name}</span>
      <span className="block text-[11px] text-ink-50">{MON_SELECTOR.address}</span>
    </span>
    <ChevronDown className="h-4 w-4 text-ink-50" />
  </button>
);

export default function PortalMonitoringPage() {
  return (
    <PortalShell active="Monitoring" topLeft={TOP_LEFT} topActions={TOP_ACTIONS}>
      <div className="space-y-6">
        {/* Row 1: header + real-time status */}
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <MonHeader />
          <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
            <h3 className="text-sm font-bold text-horizon">{MON_REALTIME.title}</h3>
            <div className="mt-4 flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success/12 ring-4 ring-success/10">
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-success" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>
              </span>
              <p className="mt-3 text-sm font-bold text-horizon">{MON_REALTIME.headline}</p>
              <p className="mt-1 text-xs text-ink-70">{MON_REALTIME.desc}</p>
              <p className="mt-2 text-[11px] text-ink-50">{MON_REALTIME.updated}</p>
            </div>
          </div>
        </div>

        {/* Row 2: main + sidebar */}
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <MonMain />
          <MonSidebar />
        </div>
      </div>
    </PortalShell>
  );
}
