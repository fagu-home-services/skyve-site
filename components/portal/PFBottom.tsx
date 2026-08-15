import Link from "next/link";
import { Home } from "lucide-react";
import { PORTAL_BOTTOM } from "@/lib/portal-data";

export function PFBottom() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-sky-soft/50 p-6 lg:p-8">
      <div className="relative z-10 max-w-xl">
        <h2 className="font-serif text-xl font-bold text-horizon sm:text-2xl">{PORTAL_BOTTOM.title}</h2>
        <p className="mt-2 text-sm text-ink-70">{PORTAL_BOTTOM.desc}</p>
        <Link
          href={PORTAL_BOTTOM.button.href}
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-ridge px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright"
        >
          {PORTAL_BOTTOM.button.label}
        </Link>
      </div>
      <Home className="pointer-events-none absolute -right-4 top-1/2 hidden h-40 w-40 -translate-y-1/2 text-ridge/15 lg:block" />
    </div>
  );
}
