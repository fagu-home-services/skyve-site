import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";
import { PortalShell } from "@/components/portal/PortalShell";
import { PortalProjectCard } from "@/components/portal/PortalProjectCard";
import { VerascorMark } from "@/components/portal/roofscore/VerascorMark";
import { RSScore } from "@/components/portal/roofscore/RSScore";
import { RSHealthInsights } from "@/components/portal/roofscore/RSHealthInsights";
import { RSHistory } from "@/components/portal/roofscore/RSHistory";
import { RSSidebar } from "@/components/portal/roofscore/RSSidebar";
import { RS_LAST_UPDATED } from "@/lib/portal-roofscore-data";

export const metadata: Metadata = {
  title: "Roof Score — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "Your roof's health, analyzed by Verascor technology. See your Roof Score, health breakdown, AI insights, trends, and recommendations.",
};

const TOP_LEFT = (
  <div>
    <nav className="flex items-center gap-1.5 text-xs text-ink-50">
      <Link href="/portal" className="hover:text-ridge">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="font-semibold text-horizon">Roof Score</span>
    </nav>
    <div className="mt-1 flex flex-wrap items-center gap-2">
      <h1 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">Roof Score</h1>
      <span className="rounded-full bg-ridge/12 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ridge">Beta</span>
    </div>
    <p className="mt-0.5 text-sm text-ink-70">Your roof&apos;s health, analyzed by Verascor technology.</p>
  </div>
);

const UPDATED_ASIDE = (
  <div className="w-full max-w-xs rounded-xl border border-mist bg-mist-soft/40 p-4 lg:w-64">
    <p className="text-xs font-bold text-horizon">{RS_LAST_UPDATED.label}</p>
    <p className="mt-2 flex items-center gap-2 font-serif text-base font-bold text-horizon">
      <Calendar className="h-4 w-4 text-ridge" /> {RS_LAST_UPDATED.date}
    </p>
    <p className="text-[11px] text-ink-50">{RS_LAST_UPDATED.by}</p>
    <Link href={RS_LAST_UPDATED.button.href} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
      {RS_LAST_UPDATED.button.label} <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  </div>
);

export default function PortalRoofScorePage() {
  return (
    <PortalShell active="Roof Score" topLeft={TOP_LEFT}>
      <div className="space-y-6">
        <div className="flex justify-end lg:-mt-14">
          <span className="hidden items-center gap-1.5 text-xs text-ink-50 lg:flex">
            Powered by <VerascorMark />
          </span>
        </div>

        <PortalProjectCard completionLabel="Completion Date" aside={UPDATED_ASIDE} />

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <RSScore />
            <RSHealthInsights />
            <RSHistory />
          </div>
          <RSSidebar />
        </div>
      </div>
    </PortalShell>
  );
}
