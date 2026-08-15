import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PHHero } from "@/components/partner/PHHero";
import { PHQuickAccess } from "@/components/partner/PHQuickAccess";
import { PHDashboard } from "@/components/partner/PHDashboard";
import { PHBenefits } from "@/components/partner/PHBenefits";
import { PHCTA } from "@/components/partner/PHCTA";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";

export const metadata: Metadata = {
  title: "Pro Partner Hub — Grow With Skyve",
  description:
    "Join the Skyve Pro Partner Ecosystem. Access exclusive leads, co-branded marketing, training & certifications, and priority support to grow your roofing business.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Pro Partner Ecosystem", href: "/pro-partner" },
  { label: "Pro Partner Hub", href: "" },
];

export default function ProPartnerHubPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-clear pt-20 lg:pt-24">
          <div className="container-skyve flex flex-wrap items-center gap-1.5 py-3 text-xs text-ink-50">
            {CRUMBS.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-ridge">{c.label}</Link>
                ) : (
                  <span className="font-semibold text-horizon">{c.label}</span>
                )}
                {i < CRUMBS.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </div>
        </div>

        <PHHero />
        <PHQuickAccess />
        <PHDashboard />
        <PHBenefits />
        <PHCTA />
        <KCNewsletter />
      </main>
      <SiteFooter />
    </>
  );
}
