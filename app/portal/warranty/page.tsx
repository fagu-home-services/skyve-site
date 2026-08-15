import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { PortalShell } from "@/components/portal/PortalShell";
import { PortalProjectCard } from "@/components/portal/PortalProjectCard";
import { WarrantyMain } from "@/components/portal/warranty/WarrantyMain";
import { WarrantySidebar } from "@/components/portal/warranty/WarrantySidebar";
import { PW_PROTECTION } from "@/lib/portal-warranty-data";

export const metadata: Metadata = {
  title: "Warranty — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "View and manage all warranties for your Skyve project — workmanship and manufacturer coverage, registration, transfers, and claims.",
};

const TOP_LEFT = (
  <div>
    <nav className="flex items-center gap-1.5 text-xs text-ink-50">
      <Link href="/portal" className="hover:text-ridge">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="font-semibold text-horizon">Warranty</span>
    </nav>
    <h1 className="mt-1 font-serif text-2xl font-bold text-horizon sm:text-3xl">Warranty</h1>
    <p className="mt-0.5 text-sm text-ink-70">View and manage all warranties for your project.</p>
  </div>
);

const PROTECTION_ASIDE = (
  <div className="flex max-w-xs items-start gap-3 rounded-xl bg-sky-soft/50 p-4">
    <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-ridge" />
    <div>
      <p className="text-sm font-bold text-horizon">{PW_PROTECTION.title}</p>
      <p className="mt-1 text-[11px] leading-relaxed text-ink-70">{PW_PROTECTION.desc}</p>
    </div>
  </div>
);

export default function PortalWarrantyPage() {
  return (
    <PortalShell active="Warranty" topLeft={TOP_LEFT}>
      <div className="space-y-6">
        <PortalProjectCard completionLabel="Completion Date" aside={PROTECTION_ASIDE} />

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <WarrantyMain />
          <WarrantySidebar />
        </div>
      </div>
    </PortalShell>
  );
}
