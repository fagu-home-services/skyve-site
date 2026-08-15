import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { APHero } from "@/components/apply-partner/APHero";
import { APForm } from "@/components/apply-partner/APForm";
import { APRail } from "@/components/apply-partner/APRail";
import { APWhoSay } from "@/components/apply-partner/APWhoSay";
import { APCTA } from "@/components/apply-partner/APCTA";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";

export const metadata: Metadata = {
  title: "Apply to Become a Partner — Skyve Pro Partner Ecosystem",
  description:
    "Apply to join the Skyve Pro Partner Ecosystem. Grow your roofing business with high-quality leads, marketing support, advanced tools, training, and a dedicated partner manager.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Pro Partner Ecosystem", href: "/pro-partner" },
  { label: "Apply To Become Partner", href: "" },
];

export default function ApplyPartnerPage() {
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

        <APHero />

        <section className="bg-clear py-10 lg:py-12">
          <div className="container-skyve grid gap-8 lg:grid-cols-[1fr_320px]">
            <APForm />
            <APRail />
          </div>
        </section>

        <APWhoSay />
        <APCTA />
        <KCNewsletter />
      </main>
      <SiteFooter />
    </>
  );
}
