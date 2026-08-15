import { INDUSTRY_CERTS } from "@/lib/certifications-data";

export function IndustryCerts() {
  return (
    <section id="industry" className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Industry Certifications &amp; Memberships
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-ink-50">
          We maintain active certifications and memberships with leading industry
          organizations.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {INDUSTRY_CERTS.map((c) => (
            <div
              key={c.short}
              className="flex flex-col items-center rounded-xl border border-mist bg-clear p-5 text-center shadow-card"
            >
              <span className="flex h-12 items-center rounded-md border border-mist px-3 font-serif text-lg font-extrabold tracking-tight text-horizon">
                {c.short}
              </span>
              <p className="mt-3 text-[11px] font-semibold leading-snug text-horizon">
                {c.name}
              </p>
              <p className="mt-1 text-xs font-semibold text-ridge">{c.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
