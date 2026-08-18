import type { Metadata } from "next";
import { Zap, Wrench, ShieldCheck, MapPin } from "lucide-react";
import { RoofConfigurator } from "@/components/estimate/RoofConfigurator";

/* Standalone preview of the roof configurator (Customize Your Roof & See Your
   Price). Placeholder pricing — for layout review before wiring into the
   measurement flow and loading Skyve's real prices. noindex. */
export const metadata: Metadata = {
  title: { absolute: "Customize Your Roof | Skyve Roofing & Exteriors" },
  robots: { index: false, follow: false },
};

// Real measured sample (10124 126th Ave NE, Kirkland) so the preview shows a
// genuine outlined roof + area.
const SAMPLE_MAP =
  "/api/roof-image/?lat=47.69111059999999&lng=-122.1727683&poly=47.691185%2C-122.172690%3B47.691187%2C-122.172843%3B47.691033%2C-122.172846%3B47.691032%2C-122.172694%3B47.691185%2C-122.172690";

export default function ConfigurePage() {
  return (
    <>
      <RoofConfigurator
        address="10124 126th Ave NE, Kirkland, WA 98033"
        areaSqft={2620}
        squares={26.2}
        perimeterFt={187}
        stories="2 Stories"
        builtYear="2004"
        mapUrl={SAMPLE_MAP}
      />
      <footer className="border-t border-mist bg-clear py-6">
        <div className="container-skyve grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
          {[
            { icon: Zap, t: "Instant & Transparent", s: "No hidden fees. Ever." },
            { icon: Wrench, t: "Expert Installation", s: "By Skyve Roofing & Exteriors" },
            { icon: ShieldCheck, t: "Premium Materials", s: "Backed by strong warranties" },
            { icon: MapPin, t: "Local & Trusted", s: "Serving Washington" },
          ].map(({ icon: Icon, t, s }) => (
            <div key={t} className="flex flex-col items-center gap-1">
              <Icon className="h-5 w-5 text-ridge" />
              <p className="text-xs font-bold text-horizon">{t}</p>
              <p className="text-[11px] text-ink-50">{s}</p>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
}
