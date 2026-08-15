import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SPHero } from "@/components/safety/SPHero";
import { SPPillars } from "@/components/safety/SPPillars";
import { SPProtocols } from "@/components/safety/SPProtocols";
import { SPTraining } from "@/components/safety/SPTraining";
import { SPCommitment } from "@/components/safety/SPCommitment";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";
import { SP_NEWSLETTER } from "@/lib/safety-data";

export const metadata: Metadata = {
  title: "Safety Program — People First, Zero Compromise | Skyve Roofing & Exteriors",
  description:
    "Skyve's Safety Program protects our team, your property, and everyone on the jobsite. OSHA-compliant procedures, fall protection, ongoing training, and a strong safety culture on every project.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Trust & Authority", href: "/why-skyve" },
  { label: "Safety Program", href: "" },
];

export default function SafetyProgramPage() {
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

        <SPHero />
        <SPPillars />
        <SPProtocols />
        <SPTraining />
        <SPCommitment />
        <KCNewsletter data={SP_NEWSLETTER} />
      </main>
      <SiteFooter />
    </>
  );
}
