import Link from "next/link";
import { Camera } from "lucide-react";
import { PP_BOTTOM } from "@/lib/portal-photos-data";

export function PhotosBottom() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-sky-soft/50 p-6 lg:p-8">
      <div className="relative z-10 flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-clear shadow-card">
          <Camera className="h-5 w-5 text-ridge" />
        </span>
        <div className="max-w-xl">
          <h2 className="font-serif text-xl font-bold text-horizon sm:text-2xl">{PP_BOTTOM.title}</h2>
          <p className="mt-2 text-sm text-ink-70">{PP_BOTTOM.desc}</p>
          <Link
            href={PP_BOTTOM.button.href}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-ridge px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright"
          >
            {PP_BOTTOM.button.label}
          </Link>
        </div>
      </div>
      <Camera className="pointer-events-none absolute -right-4 top-1/2 hidden h-40 w-40 -translate-y-1/2 text-ridge/10 lg:block" />
    </div>
  );
}
