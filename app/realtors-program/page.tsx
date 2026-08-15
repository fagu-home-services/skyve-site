import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { RPHero } from "@/components/realtors/RPHero";
import { RPHowWorks } from "@/components/realtors/RPHowWorks";
import { RPToolsSupport } from "@/components/realtors/RPToolsSupport";
import { RPTestimonialsFaq } from "@/components/realtors/RPTestimonialsFaq";
import { RPCTA } from "@/components/realtors/RPCTA";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";

export const metadata: Metadata = {
  title: "Realtors Program — Partner With Skyve",
  description:
    "Join the Skyve Realtors Program. Deliver more value to your clients with priority scheduling, co-branded reports, and referral rewards of $250–$750 per completed project.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Pro Partner Ecosystem", href: "/pro-partner" },
  { label: "Realtors Program", href: "" },
];

export default function RealtorsProgramPage() {
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

        <RPHero />
        <RPHowWorks />
        <RPToolsSupport />
        <RPTestimonialsFaq />
        <RPCTA />
        <KCNewsletter />
      </main>
      <SiteFooter />
    </>
  );
}
