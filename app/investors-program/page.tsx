import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { IPHero } from "@/components/investors/IPHero";
import { IPHighlights } from "@/components/investors/IPHighlights";
import { IPSnapshot } from "@/components/investors/IPSnapshot";
import { IPOpportunities, IPCTA } from "@/components/investors/IPOpportunities";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";

export const metadata: Metadata = {
  title: "Investors Program — Invest in the Future of Roofing",
  description:
    "Partner with Skyve as an investor. A high-growth roofing business with recurring revenue, proprietary technology, strong unit economics, and experienced leadership.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Pro Partner Ecosystem", href: "/pro-partner" },
  { label: "Investors Program", href: "" },
];

export default function InvestorsProgramPage() {
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

        <IPHero />
        <IPHighlights />
        <IPSnapshot />
        <IPOpportunities />
        <IPCTA />
        <KCNewsletter />
      </main>
      <SiteFooter />
    </>
  );
}
