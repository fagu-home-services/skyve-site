import Link from "next/link";
import {
  Search,
  LayoutGrid,
  List,
  MapPin,
  Star,
  Camera,
  FileText,
  Heart,
  ArrowDown,
} from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { FIELD_REPORTS, slugify, type FieldReport } from "@/lib/field-reports-data";

function ProjectCard({ p }: { p: FieldReport }) {
  const href = `/field-reports/${slugify(p.address)}`;
  return (
    <article className="grid gap-0 overflow-hidden rounded-2xl border border-mist bg-clear shadow-card transition-shadow hover:shadow-elevated sm:grid-cols-[220px_1fr]">
      {/* Thumb */}
      <Link href={href} className="relative block">
        <Photo src={p.image} alt={p.service} className="h-full min-h-[160px]" />
        <span className="absolute bottom-2 left-2 rounded-md bg-horizon-deep/85 px-2.5 py-1 text-[11px] font-semibold text-clear">
          {p.service}
        </span>
      </Link>

      {/* Details */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="flex items-center gap-1 text-xs font-medium text-ridge">
              <MapPin className="h-3.5 w-3.5" /> {p.city}
            </p>
            <Link href={href}>
              <h3 className="mt-1 font-serif text-lg font-bold text-horizon transition-colors hover:text-ridge">
                {p.address}
              </h3>
            </Link>
            <p className="text-xs text-ink-50">
              {p.propertyType} • {p.size}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="rounded-full bg-success/10 px-2.5 py-0.5 text-[11px] font-semibold text-success">
              {p.status}
            </span>
            <span className="flex items-center gap-1 text-xs">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              <span className="font-bold text-horizon">{p.rating}</span>
              <button type="button" className="ml-1 font-semibold text-ridge hover:text-accent">
                View Review
              </button>
            </span>
          </div>
        </div>

        <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-ink-70">
          <div><dt className="inline text-ink-50">Client: </dt><dd className="inline font-medium">{p.client}</dd></div>
          <div><dt className="inline text-ink-50">Completed: </dt><dd className="inline font-medium">{p.date}</dd></div>
          <div><dt className="inline text-ink-50">Crew: </dt><dd className="inline font-medium">{p.crew}</dd></div>
          <div><dt className="inline text-ink-50">Materials: </dt><dd className="inline font-medium">{p.materials}</dd></div>
        </dl>

        <div className="mt-4 flex items-center gap-6 border-t border-mist pt-3 text-xs text-ink-70">
          <span className="flex flex-col items-center gap-0.5">
            <span className="flex items-center gap-1 font-bold text-horizon">
              <Camera className="h-4 w-4 text-ridge" /> {p.photos}
            </span>
            <span className="text-[10px] text-ink-50">Photos</span>
          </span>
          <span className="flex flex-col items-center gap-0.5">
            <span className="flex items-center gap-1 font-bold text-horizon">
              <FileText className="h-4 w-4 text-ridge" /> {p.reports}
            </span>
            <span className="text-[10px] text-ink-50">{p.reports === 1 ? "Report" : "Reports"}</span>
          </span>
          <span className="flex flex-col items-center gap-0.5">
            <span className="flex items-center gap-1 font-bold text-horizon">
              <Heart className="h-4 w-4 text-ridge" /> {p.likes}
            </span>
            <span className="text-[10px] text-ink-50">Likes</span>
          </span>
        </div>
      </div>
    </article>
  );
}

export function FieldReportsList() {
  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-horizon">All Projects</h2>
          <p className="text-sm text-ink-50">1,258 projects found</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            <input
              type="text"
              placeholder="Search by address, client or ID..."
              className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-9 pr-3 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge sm:w-72"
            />
          </div>
          <div className="flex overflow-hidden rounded-lg border border-mist">
            <button type="button" className="bg-ridge px-2.5 py-2.5 text-clear" aria-label="Grid view">
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button type="button" className="bg-clear px-2.5 py-2.5 text-ink-50 hover:text-ridge" aria-label="List view">
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-6 space-y-5">
        {FIELD_REPORTS.map((p) => (
          <ProjectCard key={p.address} p={p} />
        ))}
      </div>

      {/* Load more */}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-ridge/30 px-6 py-3 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
        >
          Load More Projects <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
