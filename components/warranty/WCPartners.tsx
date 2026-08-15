import { WC_PARTNERS } from "@/lib/warranty-data";

export function WCPartners() {
  return (
    <section className="bg-mist-soft/40 py-10 lg:py-12">
      <div className="container-skyve">
        <h2 className="text-center text-sm font-bold uppercase tracking-wider text-horizon">
          Our Manufacturer Partners
        </h2>

        <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {WC_PARTNERS.map((p) => (
            <div key={p.name} className="flex flex-col items-center rounded-xl border border-mist bg-clear p-5 text-center shadow-card">
              <span className={`font-serif text-lg font-extrabold leading-none ${p.tone}`}>
                {p.name}
                {p.sub && (
                  <span className="ml-1 align-middle text-[8px] font-bold uppercase tracking-wide text-ink-50">
                    {p.sub}
                  </span>
                )}
              </span>
              <p className="mt-3 text-[11px] font-semibold text-horizon">{p.coverage}</p>
              {p.note && <p className="text-[11px] text-ink-50">{p.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
