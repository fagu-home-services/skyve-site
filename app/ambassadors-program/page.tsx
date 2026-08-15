import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { AmbHero } from "@/components/ambassadors/AmbHero";
import { AmbWhy } from "@/components/ambassadors/AmbWhy";
import { AmbHowItWorks } from "@/components/ambassadors/AmbHowItWorks";
import { AmbWhoJoin } from "@/components/ambassadors/AmbWhoJoin";
import { AmbTestimonials } from "@/components/ambassadors/AmbTestimonials";
import { AmbFaqContact } from "@/components/ambassadors/AmbFaqContact";

export const metadata: Metadata = {
  title: "Ambassadors Program — Refer & Earn",
  description:
    "Join the Skyve Ambassadors Program. Refer friends and neighbors for roofing or exterior projects and earn a $200 referral bonus, exclusive rewards, and VIP recognition.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Skyve Stories", href: "/field-reports" },
  { label: "Ambassadors Program", href: "" },
];

export default function AmbassadorsProgramPage() {
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

        <AmbHero />
        <AmbWhy />
        <AmbHowItWorks />
        <AmbWhoJoin />
        <AmbTestimonials />
        <AmbFaqContact />
      </main>
      <SiteFooter />
    </>
  );
}
