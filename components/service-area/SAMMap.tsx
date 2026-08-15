import { ServiceAreaMap, MAP_LINK } from "@/components/contact/ServiceAreaMap";
import { SAMAreas } from "@/components/service-area/SAMAreas";

export function SAMMap() {
  return (
    <section className="bg-mist-soft/40 py-8 lg:py-10">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1.7fr_1fr]">
        {/* Real Google map */}
        <ServiceAreaMap className="h-[420px] rounded-2xl border border-mist shadow-card sm:h-[520px]">
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 z-20 inline-flex items-center gap-2 rounded-lg bg-clear/95 px-3.5 py-2 text-xs font-semibold text-ridge shadow-elevated backdrop-blur-sm transition-colors hover:text-accent"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-ridge" /> Service Area
          </a>
        </ServiceAreaMap>

        {/* Areas panel */}
        <SAMAreas />
      </div>
    </section>
  );
}
