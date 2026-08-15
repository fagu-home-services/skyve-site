import { Logo } from "@/components/shared/Logo";
import { Photo } from "@/components/shared/Photo";
import { IN_ACTION, REPORT } from "@/lib/maintenance-data";

export function MaintenanceInAction() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-10 lg:grid-cols-2">
        {/* Before / after */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-ridge">
            Maintenance In Action
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-horizon sm:text-3xl">
            Small Steps Today, Big Protection Tomorrow.
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {IN_ACTION.map((ba) => (
              <div key={ba.label} className="overflow-hidden rounded-xl border border-mist bg-clear shadow-card">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <Photo src={ba.before} alt={`${ba.label} before`} className="aspect-square" />
                    <span className="absolute left-1 top-1 rounded bg-horizon-deep/80 px-1.5 py-0.5 text-[8px] font-bold uppercase text-clear">
                      Before
                    </span>
                  </div>
                  <div className="relative">
                    <Photo src={ba.after} alt={`${ba.label} after`} className="aspect-square" />
                    <span className="absolute right-1 top-1 rounded bg-ridge px-1.5 py-0.5 text-[8px] font-bold uppercase text-clear">
                      After
                    </span>
                  </div>
                </div>
                <p className="px-2 py-2 text-center text-[11px] font-semibold text-horizon">
                  {ba.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Digital report */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-ridge">
            Every Visit Includes
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-horizon sm:text-3xl">
            A Professional Digital Report
          </h2>

          <div className="mt-8 rounded-2xl bg-horizon-deep p-3 shadow-elevated">
            <div className="rounded-xl bg-clear p-5">
              <div className="flex items-center justify-between border-b border-mist pb-3">
                <Logo variant="color" height={18} />
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-mist" />
                  <span className="h-2 w-2 rounded-full bg-mist" />
                  <span className="h-2 w-2 rounded-full bg-mist" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-[1.3fr_1fr] gap-4">
                <div>
                  <p className="text-[11px] text-ink-50">Roof Score</p>
                  <p className="font-serif text-4xl font-extrabold text-success">
                    {REPORT.score}
                    <span className="text-lg text-ink-50">/100</span>
                  </p>
                  <p className="text-xs font-semibold text-success">{REPORT.condition}</p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-mist">
                    <div className="h-full rounded-full bg-success" style={{ width: `${REPORT.score}%` }} />
                  </div>

                  <p className="mt-4 text-[11px] font-bold text-horizon">Top Findings</p>
                  <ul className="mt-1.5 space-y-1">
                    {REPORT.findings.map((f) => (
                      <li key={f} className="flex items-start gap-1.5 text-[10px] text-ink-70">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-warning" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-3 text-[11px] font-bold text-horizon">Recommendations</p>
                  <p className="mt-1 text-[10px] text-ink-70">
                    {REPORT.recommendations.join(" · ")}
                  </p>
                  <p className="mt-2 text-[10px] text-ink-50">
                    Next Maintenance: <span className="font-semibold text-horizon">{REPORT.nextMaintenance}</span>
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-ink-50">Photos</p>
                  {REPORT.photos.map((p, i) => (
                    <Photo key={i} src={p} alt="Report photo" className="aspect-video rounded-md" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
