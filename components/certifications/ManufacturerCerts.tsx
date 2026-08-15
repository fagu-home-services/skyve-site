import { BadgeCheck } from "lucide-react";
import { MANUFACTURER_CERTS } from "@/lib/certifications-data";

export function ManufacturerCerts() {
  return (
    <section className="bg-horizon-deep py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-clear sm:text-3xl">
          Manufacturer Certifications
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-sky-soft/70">
          We are proud to be certified by the industry&apos;s leading manufacturers.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {MANUFACTURER_CERTS.map((c) => (
            <div
              key={c.short}
              className="flex flex-col items-center rounded-xl border border-clear/10 bg-clear/5 p-5 text-center"
            >
              <span className="flex h-11 items-center rounded-md border border-clear/20 px-3 font-serif text-base font-extrabold tracking-tight text-clear">
                {c.short}
              </span>
              <p className="mt-3 text-xs font-bold leading-snug text-clear">{c.tier}</p>
              <p className="mt-1.5 flex-1 text-[10px] leading-snug text-sky-soft/60">
                {c.desc}
              </p>
              <span className="mt-3 flex items-center gap-1 border-t border-clear/10 pt-3 text-[10px] font-bold uppercase tracking-wide text-sky">
                <BadgeCheck className="h-3.5 w-3.5" /> Certified
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
