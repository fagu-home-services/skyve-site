import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ShareHero } from "@/components/share-story/ShareHero";
import { ShareDifference } from "@/components/share-story/ShareDifference";
import { ShareForm } from "@/components/share-story/ShareForm";
import { ShareRail } from "@/components/share-story/ShareRail";
import { ShareTrustBar } from "@/components/share-story/ShareTrustBar";

export const metadata: Metadata = {
  title: "Share Your Story",
  description:
    "Share your Skyve Roofing & Exteriors experience and inspire other Washington homeowners. Your story could be featured on Skyve TV and across our channels.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Skyve Stories", href: "/field-reports" },
  { label: "Share Your Story", href: "" },
];

export default function ShareYourStoryPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-horizon-deep pt-20 lg:pt-24">
          <div className="container-skyve flex items-center gap-1.5 py-3 text-xs text-mist-soft/70">
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

        <ShareHero />
        <ShareDifference />

        <section className="bg-mist-soft/40 py-4 pb-8">
          <div className="container-skyve grid gap-8 lg:grid-cols-[1fr_320px]">
            <ShareForm />
            <ShareRail />
          </div>
        </section>

        <ShareTrustBar />
      </main>
      <SiteFooter />
    </>
  );
}
