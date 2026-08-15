import { MapPin, Star, Download, Share2, Heart, Pencil, Images } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { FR_DETAIL } from "@/lib/field-report-detail-data";

const d = FR_DETAIL;

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <p className="text-sm text-mist-soft/85">
      <span className="text-mist-soft/60">{label}: </span>
      <span className="font-medium text-clear">{value}</span>
    </p>
  );
}

export function FRDetailHero() {
  return (
    <section className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-card lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
        {/* Info */}
        <div>
          <p className="flex items-center gap-1.5 text-sm font-medium text-ridge">
            <MapPin className="h-4 w-4" /> {d.city}
          </p>
          <h1 className="mt-2 font-serif text-3xl font-extrabold sm:text-4xl">{d.address}</h1>
          <p className="mt-1 text-sm text-mist-soft/70">
            {d.propertyType} • {d.size}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
              {d.status}
            </span>
            <span className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="font-bold">{d.rating}</span>
              <button type="button" className="ml-1 text-ridge hover:text-accent">(View Review)</button>
            </span>
          </div>

          <div className="mt-5 space-y-1.5">
            <InfoRow label="Client" value={d.client.name} />
            <InfoRow label="Completion" value={d.completion} />
            <InfoRow label="Crew" value={d.crew} />
            <InfoRow label="Materials" value={d.materials} />
            <InfoRow label="Service Type" value={d.service} />
            <InfoRow label="Warranty" value={d.warranty} />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover">
              <Download className="h-4 w-4" /> Download Report
            </button>
            <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-clear/30 px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-clear/10">
              <Share2 className="h-4 w-4" /> Share
            </button>
            <button type="button" aria-label="Add to favorites" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-clear/30 text-clear transition-colors hover:bg-clear/10">
              <Heart className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <div className="relative overflow-hidden rounded-2xl shadow-elevated">
            <Photo src={d.heroImage} alt={d.address} className="aspect-[16/10]" />
            <button type="button" className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-clear/95 px-3 py-1.5 text-xs font-semibold text-horizon shadow-card transition-colors hover:text-ridge">
              <Pencil className="h-3.5 w-3.5" /> Edit Report
            </button>
          </div>
          <div className="mt-3 grid grid-cols-6 gap-2">
            {d.gallery.map((g, i) => (
              <Photo key={i} src={g} alt={`Photo ${i + 1}`} className="aspect-[4/3] rounded-lg" />
            ))}
            <button
              type="button"
              className="flex flex-col items-center justify-center gap-1 rounded-lg bg-horizon/70 text-center text-[10px] font-semibold text-clear ring-1 ring-clear/15"
            >
              <Images className="h-4 w-4 text-sky" />
              View All
              <span className="text-mist-soft/70">{d.totalPhotos} Photos</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
