import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { RHHero } from "@/components/reviews-hub/RHHero";
import { RHGlance } from "@/components/reviews-hub/RHGlance";
import { RHReviews } from "@/components/reviews-hub/RHReviews";
import { RHBottom } from "@/components/reviews-hub/RHBottom";
import { RHCTA } from "@/components/reviews-hub/RHCTA";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";

export const metadata: Metadata = {
  title: "Reviews — Trusted by Washington Homeowners | Skyve Roofing & Exteriors",
  description:
    "Read verified reviews from thousands of Washington homeowners. 4.8/5 average rating across Google, Facebook, BBB, Yelp, and Angi. Real stories, honest service, exceptional results.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Trust & Authority", href: "/why-skyve" },
  { label: "Reviews", href: "" },
];

export default function TestimonialsPage() {
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

        <RHHero />
        <RHGlance />
        <RHReviews />
        <RHBottom />
        <RHCTA />
        <KCNewsletter />
      </main>
      <SiteFooter />
    </>
  );
}
