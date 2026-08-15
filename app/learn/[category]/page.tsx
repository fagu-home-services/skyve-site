import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { KCCatHero } from "@/components/knowledge/category/KCCatHero";
import { KCCatToolbar } from "@/components/knowledge/category/KCCatToolbar";
import { KCCatGuides } from "@/components/knowledge/category/KCCatGuides";
import { KCCatRail } from "@/components/knowledge/category/KCCatRail";
import { KCCatTrust } from "@/components/knowledge/category/KCCatTrust";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";
import { KC_CATEGORY_PAGES, getKCCategory } from "@/lib/kc-category-data";

export function generateStaticParams() {
  return Object.keys(KC_CATEGORY_PAGES).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getKCCategory(category);
  return cat
    ? { title: cat.metaTitle, description: cat.metaDesc }
    : { title: "Knowledge Center" };
}

export default async function KnowledgeCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getKCCategory(category);
  if (!cat) notFound();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-clear pt-20 lg:pt-24">
          <div className="container-skyve flex items-center gap-1.5 py-3 text-xs text-ink-50">
            <Link href="/" className="hover:text-ridge">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/learn" className="hover:text-ridge">Knowledge Center</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-horizon">{cat.titleLines.join(" ")}</span>
          </div>
        </div>

        <KCCatHero cat={cat} />
        <KCCatToolbar cat={cat} />

        <section className="bg-clear py-10 lg:py-12">
          <div className="container-skyve grid gap-8 lg:grid-cols-[1fr_320px]">
            <KCCatGuides cat={cat} />
            <KCCatRail cat={cat} />
          </div>
        </section>

        <KCCatTrust cat={cat} />
        <KCNewsletter data={cat.newsletter} />
      </main>
      <SiteFooter />
    </>
  );
}
