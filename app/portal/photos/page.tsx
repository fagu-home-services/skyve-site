import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PortalShell } from "@/components/portal/PortalShell";
import { PortalProjectCard } from "@/components/portal/PortalProjectCard";
import { PhotosGallery } from "@/components/portal/photos/PhotosGallery";
import { PhotosSidebar } from "@/components/portal/photos/PhotosSidebar";
import { PhotosBottom } from "@/components/portal/photos/PhotosBottom";

export const metadata: Metadata = {
  title: "Photos — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "View and manage all your Skyve project photos in one place — organized by stage, date, drone, and before & after.",
};

const TOP_LEFT = (
  <div>
    <nav className="flex items-center gap-1.5 text-xs text-ink-50">
      <Link href="/portal" className="hover:text-ridge">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="font-semibold text-horizon">Photos</span>
    </nav>
    <h1 className="mt-1 font-serif text-2xl font-bold text-horizon sm:text-3xl">Photos</h1>
    <p className="mt-0.5 text-sm text-ink-70">View and manage all project photos in one place.</p>
  </div>
);

export default function PortalPhotosPage() {
  return (
    <PortalShell active="Photos" topLeft={TOP_LEFT} topAction={{ icon: "camera", label: "Upload Photos" }}>
      <div className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          {/* Left column: project card + gallery */}
          <div className="space-y-6">
            <PortalProjectCard />
            <PhotosGallery />
          </div>

          {/* Right column: storage + albums + actions + tips + help */}
          <PhotosSidebar />
        </div>

        <PhotosBottom />
      </div>
    </PortalShell>
  );
}
