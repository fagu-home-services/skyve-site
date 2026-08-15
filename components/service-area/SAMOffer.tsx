import Link from "next/link";
import { MapPinned } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { SAM_NOCITY, SAM_OFFER } from "@/lib/service-area-map-data";

export function SAMOffer() {
  return (
    <section className="bg-clear py-8 lg:py-10">
      <div className="container-skyve">
        {/* Don't see your city */}
        <div className="flex flex-col items-start gap-5 rounded-2xl border border-mist bg-mist-soft/40 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-soft">
              <MapPinned className="h-6 w-6 text-ridge" />
            </span>
            <div>
              <p className="text-sm font-bold text-horizon">{SAM_NOCITY.title}</p>
              <p className="mt-0.5 max-w-md text-xs leading-relaxed text-ink-70">{SAM_NOCITY.desc}</p>
            </div>
          </div>
          <Link
            href={SAM_NOCITY.button.href}
            className="inline-flex items-center gap-2 rounded-lg border border-ridge bg-clear px-6 py-3 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear"
          >
            <MapPinned className="h-4 w-4" /> {SAM_NOCITY.button.label}
          </Link>
        </div>

        {/* What we offer */}
        <div className="mt-8 rounded-2xl border border-mist bg-clear p-6 shadow-card lg:p-8">
          <h2 className="text-center text-sm font-bold uppercase tracking-wider text-horizon">
            {SAM_OFFER.title}
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {SAM_OFFER.items.map((it) => (
              <Link
                key={it.title}
                href={it.href}
                className="group rounded-xl border border-mist bg-clear p-4 text-center transition-colors hover:border-ridge"
              >
                <Icon name={it.icon} className="mx-auto h-7 w-7 text-ridge" />
                <p className="mt-3 text-xs font-bold text-horizon group-hover:text-ridge">{it.title}</p>
                <p className="mt-1 text-[11px] leading-snug text-ink-50">{it.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
