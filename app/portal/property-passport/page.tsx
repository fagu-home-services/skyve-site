import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Download, Share2 } from "lucide-react";
import { PortalShell } from "@/components/portal/PortalShell";
import { PassportHeader } from "@/components/portal/passport/PassportHeader";
import { PassportMain } from "@/components/portal/passport/PassportMain";
import { PassportSidebar } from "@/components/portal/passport/PassportSidebar";
import { VerascorMark } from "@/components/portal/roofscore/VerascorMark";

export const metadata: Metadata = {
  title: "Property Passport — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "Your complete, verified home record in one secure place — powered by Verascor. Systems, documents, history, maintenance, and warranties, all in one Property Passport.",
};

const TOP_LEFT = (
  <div>
    <nav className="flex items-center gap-1.5 text-xs text-ink-50">
      <Link href="/portal" className="hover:text-ridge">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="font-semibold text-horizon">Property Passport</span>
    </nav>
    <div className="mt-1 flex flex-wrap items-center gap-2">
      <h1 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">Property Passport</h1>
      <span className="hidden items-center gap-1.5 text-xs text-ink-50 sm:flex">
        Powered by <VerascorMark />
      </span>
    </div>
    <p className="mt-0.5 text-sm text-ink-70">Your complete, verified home record in one secure place.</p>
  </div>
);

const TOP_ACTIONS = (
  <div className="flex items-center gap-2">
    <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-mist bg-clear px-4 py-2.5 text-sm font-semibold text-horizon transition-colors hover:border-ridge hover:text-ridge">
      <Download className="h-4 w-4" /> <span className="hidden sm:inline">Download Passport</span>
    </button>
    <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-ridge px-4 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright">
      <Share2 className="h-4 w-4" /> <span className="hidden sm:inline">Share Passport</span>
    </button>
  </div>
);

export default function PortalPropertyPassportPage() {
  return (
    <PortalShell active="Property Passport" topLeft={TOP_LEFT} topActions={TOP_ACTIONS}>
      <div className="space-y-6">
        <PassportHeader />
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <PassportMain />
          <PassportSidebar />
        </div>
      </div>
    </PortalShell>
  );
}
