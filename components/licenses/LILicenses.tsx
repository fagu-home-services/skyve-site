import { Icon } from "@/components/shared/Icon";
import { LI_LICENSES } from "@/lib/licenses-data";

export function LILicenses() {
  return (
    <section className="bg-mist-soft/40 py-10 lg:py-14">
      <div className="container-skyve">
        <h2 className="text-center text-sm font-bold uppercase tracking-wider text-horizon">
          Our Licenses
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {LI_LICENSES.map((l) => (
            <article key={l.name} className="flex flex-col rounded-2xl border border-mist bg-clear p-5 text-center shadow-card">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-soft ring-1 ring-mist">
                <Icon name={l.icon} className="h-6 w-6 text-ridge" />
              </span>
              <h3 className="mt-4 text-sm font-bold leading-snug text-horizon">{l.name}</h3>
              {l.sub && <p className="mt-1.5 text-[11px] font-semibold text-ridge">{l.sub}</p>}
              <p className="mt-1 text-[11px] text-ink-50">{l.number}</p>

              <div className="mt-4 flex-1 space-y-1 text-[11px] text-ink-70">
                <p>Issued: {l.issued}</p>
                <p>Expires: {l.expires}</p>
              </div>

              <div className="mt-4 flex justify-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/12 px-3 py-1 text-[11px] font-semibold text-success">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" /> {l.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
