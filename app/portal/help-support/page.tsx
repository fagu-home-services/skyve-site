import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { PortalShell } from "@/components/portal/PortalShell";
import { BPHeader } from "@/components/portal/budget/BPHeader";
import { HelpMain } from "@/components/portal/help/HelpMain";
import { HLP_SELECTOR, HLP_PROMO } from "@/lib/portal-help-data";

export const metadata: Metadata = {
  title: "Help & Support — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "We're here to help you every step of the way — search the knowledge base, browse popular questions, contact support, or submit a request.",
};

const TOP_LEFT = (
  <div>
    <nav className="flex items-center gap-1.5 text-xs text-ink-50">
      <Link href="/portal" className="hover:text-ridge">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="font-semibold text-horizon">Help &amp; Support</span>
    </nav>
    <h1 className="mt-1 font-serif text-2xl font-bold text-horizon sm:text-3xl">Help &amp; Support</h1>
    <p className="mt-0.5 text-sm text-ink-70">We&apos;re here to help you every step of the way.</p>
  </div>
);

const TOP_ACTIONS = (
  <button type="button" className="hidden items-center gap-3 rounded-lg border border-mist bg-clear px-4 py-2 text-left transition-colors hover:border-ridge md:flex">
    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-success" />
    <span>
      <span className="block text-sm font-bold text-horizon">{HLP_SELECTOR.name}</span>
      <span className="block text-[11px] text-ink-50">{HLP_SELECTOR.address}</span>
    </span>
    <ChevronDown className="h-4 w-4 text-ink-50" />
  </button>
);

export default function PortalHelpSupportPage() {
  return (
    <PortalShell active="Help & Support" topLeft={TOP_LEFT} topActions={TOP_ACTIONS} promo={HLP_PROMO}>
      <div className="space-y-6">
        <BPHeader />
        <HelpMain />
      </div>
    </PortalShell>
  );
}
