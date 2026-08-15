import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { PortalShell } from "@/components/portal/PortalShell";
import { BPHeader } from "@/components/portal/budget/BPHeader";
import { SetMain } from "@/components/portal/settings/SetMain";
import { SetSidebar } from "@/components/portal/settings/SetSidebar";
import { Icon } from "@/components/shared/Icon";
import { SET_SELECTOR, SET_PROMO, SET_BAND } from "@/lib/portal-settings-data";

export const metadata: Metadata = {
  title: "Settings — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "Manage your account, preferences, and portal experience — general settings, portal preferences, regional settings, and quick account actions.",
};

const TOP_LEFT = (
  <div>
    <nav className="flex items-center gap-1.5 text-xs text-ink-50">
      <Link href="/portal" className="hover:text-ridge">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="font-semibold text-horizon">Settings</span>
    </nav>
    <h1 className="mt-1 font-serif text-2xl font-bold text-horizon sm:text-3xl">Settings</h1>
    <p className="mt-0.5 text-sm text-ink-70">Manage your account, preferences, and portal experience.</p>
  </div>
);

const TOP_ACTIONS = (
  <button type="button" className="hidden items-center gap-3 rounded-lg border border-mist bg-clear px-4 py-2 text-left transition-colors hover:border-ridge md:flex">
    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-success" />
    <span>
      <span className="block text-sm font-bold text-horizon">{SET_SELECTOR.name}</span>
      <span className="block text-[11px] text-ink-50">{SET_SELECTOR.address}</span>
    </span>
    <ChevronDown className="h-4 w-4 text-ink-50" />
  </button>
);

export default function PortalSettingsPage() {
  return (
    <PortalShell active="Settings" topLeft={TOP_LEFT} topActions={TOP_ACTIONS} promo={SET_PROMO}>
      <div className="space-y-6">
        <BPHeader />
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <SetMain />
          <SetSidebar />
        </div>

        {/* Bottom band */}
        <div className="grid gap-4 rounded-2xl border border-mist bg-sky-soft/40 p-6 sm:grid-cols-3">
          {SET_BAND.map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-clear shadow-card">
                <Icon name={b.icon} className="h-5 w-5 text-ridge" />
              </span>
              <div>
                <p className="text-sm font-bold text-horizon">{b.title}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-ink-50">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PortalShell>
  );
}
