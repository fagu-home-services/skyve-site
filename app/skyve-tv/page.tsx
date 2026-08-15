import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { TVHero } from "@/components/skyve-tv/TVHero";
import { TVBody } from "@/components/skyve-tv/TVBody";
import { TVSubscribe } from "@/components/skyve-tv/TVSubscribe";

export const metadata: Metadata = {
  title: "Skyve TV — Roofing Videos & Guides",
  description:
    "Skyve TV: expert roofing tips, project showcases, how-to guides, and behind-the-scenes videos from Skyve Roofing & Exteriors. Watch, learn, and subscribe.",
};

export default function SkyveTVPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-horizon-deep">
        {/* Breadcrumb */}
        <div className="bg-horizon-deep pt-20 lg:pt-24">
          <div className="container-skyve flex items-center gap-1.5 py-3 text-xs text-mist-soft/70">
            <Link href="/" className="hover:text-clear">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-clear">Skyve TV</span>
          </div>
        </div>

        <TVHero />
        <TVBody />
        <TVSubscribe />
      </main>
      <SiteFooter />
    </>
  );
}
