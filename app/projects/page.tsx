import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsBrowser } from "@/components/projects/ProjectsBrowser";

export const metadata: Metadata = {
  title: "Projects — Our Work | Skyve Roofing & Exteriors",
  description:
    "Explore recent Skyve roofing and exterior projects across Washington State — roof replacements, metal roofing, gutters, siding, skylights, and decks. Before & after.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ProjectsHero />
        <ProjectsBrowser />
      </main>
      <SiteFooter />
    </>
  );
}
