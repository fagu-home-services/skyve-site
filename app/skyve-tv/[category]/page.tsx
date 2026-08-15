import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { TVCatHero } from "@/components/skyve-tv/category/TVCatHero";
import { TVCatTabs } from "@/components/skyve-tv/category/TVCatTabs";
import { TVCatSidebar } from "@/components/skyve-tv/category/TVCatSidebar";
import { TVCatGrid, TVCatCTA } from "@/components/skyve-tv/category/TVCatGrid";
import { TV_CATEGORIES, catSlug } from "@/lib/skyve-tv-data";
import { TV_CAT_BLURBS } from "@/lib/skyve-tv-category-data";

export function generateStaticParams() {
  return TV_CATEGORIES.map((c) => ({ category: catSlug(c.label) }));
}

function getCategory(slug: string) {
  return TV_CATEGORIES.find((c) => catSlug(c.label) === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  return {
    title: cat ? `${cat.label} — Skyve TV` : "Skyve TV",
    description: `Watch ${cat?.label ?? "roofing"} videos on Skyve TV — project showcases, how-to guides, and expert tips from Skyve Roofing & Exteriors.`,
  };
}

export default async function SkyveTVCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const videoCount = cat.count.replace(/\D/g, "") || "0";
  const desc =
    TV_CAT_BLURBS[category] ??
    `Watch ${cat.label.toLowerCase()} videos on Skyve TV — project showcases, how-to guides, and expert tips you can trust.`;

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-horizon-deep pt-20 lg:pt-24">
          <div className="container-skyve flex items-center gap-1.5 py-3 text-xs text-mist-soft/70">
            <Link href="/" className="hover:text-clear">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/skyve-tv" className="hover:text-clear">Skyve TV</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-clear">{cat.label}</span>
          </div>
        </div>

        <TVCatHero label={cat.label} desc={desc} videos={videoCount} />
        <TVCatTabs activeSlug={category} />

        <section className="bg-mist-soft/40 py-12 lg:py-14">
          <div className="container-skyve grid gap-8 lg:grid-cols-[240px_1fr]">
            <TVCatSidebar />
            <TVCatGrid label={cat.label} count={videoCount} />
          </div>
        </section>

        <TVCatCTA />
      </main>
      <SiteFooter />
    </>
  );
}
