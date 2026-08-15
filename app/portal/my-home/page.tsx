import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PortalShell } from "@/components/portal/PortalShell";
import { MHHeader } from "@/components/portal/myhome/MHHeader";
import { MHScoreActions } from "@/components/portal/myhome/MHScoreActions";
import { MHMain } from "@/components/portal/myhome/MHMain";
import { MHSidebar } from "@/components/portal/myhome/MHSidebar";

export const metadata: Metadata = {
  title: "My Home — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "Your complete home overview and quick access to everything important — home health, systems, alerts, upcoming events, weather, and documents.",
};

const TOP_LEFT = (
  <div>
    <nav className="flex items-center gap-1.5 text-xs text-ink-50">
      <Link href="/portal" className="hover:text-ridge">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="font-semibold text-horizon">My Home</span>
    </nav>
    <h1 className="mt-1 font-serif text-2xl font-bold text-horizon sm:text-3xl">My Home</h1>
    <p className="mt-0.5 text-sm text-ink-70">Your complete home overview and quick access to everything important.</p>
  </div>
);

export default function PortalMyHomePage() {
  return (
    <PortalShell active="My Home" topLeft={TOP_LEFT}>
      <div className="space-y-6">
        <MHHeader />
        <MHScoreActions />
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <MHMain />
          <MHSidebar />
        </div>
      </div>
    </PortalShell>
  );
}
