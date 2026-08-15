import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StoriesHero } from "@/components/stories/StoriesHero";
import { StoriesSidebar } from "@/components/stories/StoriesSidebar";
import { StoriesGrid } from "@/components/stories/StoriesGrid";
import { StoriesTrustBar, StoriesCTA } from "@/components/stories/StoriesTrustCTA";

export const metadata: Metadata = {
  title: "Customer Stories & Reviews",
  description:
    "Real stories from Washington homeowners who trust Skyve Roofing & Exteriors. Read verified reviews across roof replacement, repair, metal roofing, gutters, siding, decks, and more.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Reviews", href: "" },
];

export default function ReviewsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-horizon-deep pt-20 lg:pt-24">
          <div className="container-skyve flex flex-wrap items-center gap-1.5 py-3 text-xs text-mist-soft/70">
            {CRUMBS.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-clear">{c.label}</Link>
                ) : (
                  <span className="text-clear">{c.label}</span>
                )}
                {i < CRUMBS.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </div>
        </div>

        <StoriesHero />

        <section className="bg-mist-soft/40 py-12 lg:py-16">
          <div className="container-skyve grid gap-8 lg:grid-cols-[224px_1fr]">
            <StoriesSidebar />
            <StoriesGrid />
          </div>
        </section>

        <StoriesTrustBar />
        <StoriesCTA />
      </main>
      <SiteFooter />
    </>
  );
}
