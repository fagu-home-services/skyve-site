import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CHHero } from "@/components/cert-hub/CHHero";
import { CHWhy } from "@/components/cert-hub/CHWhy";
import { CHCerts } from "@/components/cert-hub/CHCerts";
import { CHPartners } from "@/components/cert-hub/CHPartners";
import { CHStandards } from "@/components/cert-hub/CHStandards";
import { CHCTA } from "@/components/cert-hub/CHCTA";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";

export const metadata: Metadata = {
  title: "Certifications — Manufacturer-Trained & Industry Recognized | Skyve Roofing & Exteriors",
  description:
    "Skyve is a certified installer for CertainTeed, Malarkey, Owens Corning, GAF, VELUX, IKO, and ABC Supply. Ongoing education, higher standards, and stronger warranties for Washington homeowners.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Trust & Authority", href: "/why-skyve" },
  { label: "Certifications", href: "" },
];

export default function CertificationsPage() {
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

        <CHHero />
        <CHWhy />
        <CHCerts />
        <CHPartners />
        <CHStandards />
        <CHCTA />
        <KCNewsletter />
      </main>
      <SiteFooter />
    </>
  );
}
