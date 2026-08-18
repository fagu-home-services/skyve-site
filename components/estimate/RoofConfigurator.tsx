"use client";

import { useState } from "react";
import {
  Home, Calendar, Layers as Stories, Check, Info, Phone, Bookmark, CalendarCheck, Share2,
  Droplets, Ruler, Sun, Flame, Grid3x3, Wind, Snowflake, ShieldCheck, Minus, Plus, ChevronDown,
} from "lucide-react";
import {
  CONFIG_CATEGORIES, CONFIG_COLORS, SKYLIGHT_SIZES, PRICING, TAX_RATE,
  GUTTER_PERIMETER_FACTOR, FASCIA_PERIMETER_FACTOR, CONFIG_IS_PLACEHOLDER,
  computeConfig, type Grade, type Selection,
} from "@/lib/configurator-config";
import { COMPANY } from "@/lib/company";

type Props = {
  address?: string;
  areaSqft?: number;
  squares?: number;
  perimeterFt?: number;
  stories?: string;
  builtYear?: string;
  mapUrl?: string | null;
  onRequestInspection?: (summary: string, total: number) => void;
  onSaveEstimate?: (summary: string, total: number) => void;
};

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const WIZARD = ["Your Home", "Material", "Options", "Review"];

export function RoofConfigurator({
  address = "9827 NE 13th St, Kirkland, WA 98033",
  areaSqft = 2450,
  squares = 24.5,
  perimeterFt = 190,
  stories = "2 Stories",
  builtYear = "2012",
  mapUrl = null,
  onRequestInspection,
  onSaveEstimate,
}: Props) {
  const [categoryId, setCategoryId] = useState("asphalt");
  const [grade, setGrade] = useState<Grade>("Better");
  const [colorIdx, setColorIdx] = useState(0);
  const [view, setView] = useState<"aerial" | "3d">("aerial");

  const gutterDefault = Math.max(0, Math.round(perimeterFt * GUTTER_PERIMETER_FACTOR));
  const fasciaDefault = Math.max(0, Math.round(perimeterFt * FASCIA_PERIMETER_FACTOR));
  const [gutterOn, setGutterOn] = useState(true);
  const [gutterFt, setGutterFt] = useState(gutterDefault || 100);
  const [fasciaOn, setFasciaOn] = useState(true);
  const [fasciaFt, setFasciaFt] = useState(fasciaDefault || 150);
  const [ventilation, setVentilation] = useState(true);
  const [chimney, setChimney] = useState(false);
  const [iceWater, setIceWater] = useState(false);
  const [underlayment, setUnderlayment] = useState(false);
  const [plywoodSheets, setPlywoodSheets] = useState(0);
  const [skylightSizeId, setSkylightSizeId] = useState("2x4");
  const [skylightQty, setSkylightQty] = useState(0);

  const category = CONFIG_CATEGORIES.find((c) => c.id === categoryId) || CONFIG_CATEGORIES[0];
  const color = CONFIG_COLORS[colorIdx];

  const sel: Selection = {
    categoryId, grade,
    gutters: gutterOn ? gutterFt : null,
    fascia: fasciaOn ? fasciaFt : null,
    ventilation, chimney, iceWater, underlayment, plywoodSheets, skylightSizeId, skylightQty,
  };
  const result = computeConfig(squares, sel);

  function summary(): string {
    const extras = result.lines.filter((l) => l.id !== "material" && l.amount > 0).map((l) => l.label);
    return (
      `Configured estimate · ${category.label} — ${grade} (${color.name}) · ` +
      `~${areaSqft.toLocaleString()} sq ft · ${extras.length ? extras.join(", ") : "no add-ons"} · ` +
      `Total ${money(result.total)}`
    );
  }

  const card = "rounded-2xl border border-mist bg-clear";

  return (
    <div className="min-h-screen bg-mist-soft">
      <header className="border-b border-mist bg-clear">
        <div className="container-skyve flex items-center justify-between gap-4 py-3">
          <span className="font-serif text-lg font-extrabold tracking-tight text-horizon">
            SKYVE <span className="text-xs font-semibold text-ink-50">ROOFING &amp; EXTERIORS</span>
          </span>
          <ol className="hidden items-center gap-2 text-xs font-semibold text-ink-50 md:flex">
            {WIZARD.map((s, i) => (
              <li key={s} className="flex items-center gap-2">
                <span className={`grid h-5 w-5 place-items-center rounded-full text-[10px] ${i === 2 ? "bg-ridge text-clear" : "bg-mist text-ink-50"}`}>{i + 1}</span>
                <span className={i === 2 ? "text-horizon" : ""}>{s}</span>
                {i < WIZARD.length - 1 && <span className="mx-1 h-px w-6 bg-mist" />}
              </li>
            ))}
          </ol>
          <a href={COMPANY.phoneHref} className="flex items-center gap-1.5 text-sm font-bold text-horizon">
            <Phone className="h-4 w-4 text-ridge" /> {COMPANY.phone}
          </a>
        </div>
      </header>

      <div className="container-skyve py-6">
        <h1 className="font-serif text-2xl font-bold text-horizon">Customize Your Roof &amp; See Your Price</h1>
        <p className="mt-1 text-sm text-ink-50">Pick a material, then Good / Better / Best — your estimate updates in real time.</p>

        {/* Category menu (Airbnb-style) */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {CONFIG_CATEGORIES.map((c) => {
            const on = c.id === categoryId;
            return (
              <button
                key={c.id}
                onClick={() => setCategoryId(c.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${on ? "border-ridge bg-ridge/5 text-ridge" : "border-mist bg-clear text-ink-70 hover:border-ridge/40"}`}
              >
                <span className="h-4 w-4 rounded-sm border border-black/10" style={{ background: c.swatch }} />
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="mt-5 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)_340px]">
          {/* ───────── LEFT ───────── */}
          <aside className="space-y-5">
            <div className={card + " p-5"}>
              <h2 className="font-serif text-base font-bold text-horizon">Your Home</h2>
              <p className="mt-1 text-sm text-ink-70">{address}</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <Fact icon={<Home className="h-4 w-4" />} value={areaSqft.toLocaleString()} label="sq ft" />
                <Fact icon={<Calendar className="h-4 w-4" />} value={builtYear} label="Built" />
                <Fact icon={<Stories className="h-4 w-4" />} value={stories.split(" ")[0]} label="Stories" />
              </div>
            </div>

            <div className={card + " p-5"}>
              <h2 className="font-serif text-base font-bold text-horizon">Choose {category.label}</h2>
              <p className="mt-0.5 text-xs text-ink-50">Good · Better · Best</p>
              <div className="mt-3 space-y-2.5">
                {category.tiers.map((t) => {
                  const total = computeConfig(squares, { ...sel, grade: t.grade }).lines[0].amount;
                  const on = t.grade === grade;
                  return (
                    <button
                      key={t.grade}
                      onClick={() => setGrade(t.grade)}
                      className={`relative w-full rounded-xl border-2 p-3 text-left transition-colors ${on ? "border-ridge bg-ridge/5" : "border-mist hover:border-ridge/40"}`}
                    >
                      {t.grade === "Better" && <span className="absolute -top-2 right-3 rounded-full bg-ridge px-2 py-0.5 text-[10px] font-bold text-clear">Most popular</span>}
                      <div className="flex items-center gap-3">
                        <span className="h-10 w-10 shrink-0 rounded-md border border-black/10" style={{ background: color.hex }} />
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-1.5">
                            <span className="text-xs font-bold uppercase tracking-wide text-ridge">{t.grade}</span>
                            {on && <Check className="h-4 w-4 text-ridge" />}
                          </span>
                          <span className="block truncate text-sm font-semibold text-horizon">{t.name}</span>
                          <span className="block text-sm font-bold text-horizon">{money(total)}</span>
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={card + " p-5"}>
              <h2 className="font-serif text-base font-bold text-horizon">Choose Your Color</h2>
              <p className="mt-1 text-xs text-ink-50">{color.name}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {CONFIG_COLORS.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setColorIdx(i)}
                    title={c.name}
                    aria-label={c.name}
                    className={`h-8 w-8 rounded-md border-2 transition-transform ${i === colorIdx ? "scale-110 border-ridge" : "border-transparent ring-1 ring-black/10"}`}
                    style={{ background: c.hex }}
                  />
                ))}
              </div>
            </div>

            <div className={card + " flex items-start gap-3 border-ridge/30 bg-ridge/5 p-4"}>
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-ridge" />
              <div>
                <p className="text-sm font-bold text-horizon">Verascor Property Passport</p>
                <p className="text-xs text-ink-50">Your roof. Your record. Forever.</p>
              </div>
            </div>
          </aside>

          {/* ───────── CENTER ───────── */}
          <main className="space-y-5">
            <div className="relative overflow-hidden rounded-2xl border border-mist bg-horizon-deep">
              <div className="absolute left-3 top-3 z-10 flex overflow-hidden rounded-lg bg-horizon-deep/70 p-0.5 text-xs font-semibold backdrop-blur">
                <button onClick={() => setView("aerial")} className={`rounded-md px-3 py-1.5 ${view === "aerial" ? "bg-accent text-clear" : "text-mist-soft"}`}>Aerial View</button>
                <button onClick={() => setView("3d")} className={`rounded-md px-3 py-1.5 ${view === "3d" ? "bg-accent text-clear" : "text-mist-soft"}`}>3D View</button>
              </div>
              {view === "aerial" && mapUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={mapUrl} alt="Aerial view of the roof" className="aspect-[16/10] w-full object-cover" />
              ) : (
                <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 text-center text-mist-soft/70">
                  <Home className="h-9 w-9" />
                  <p className="text-sm font-semibold">{view === "3d" ? "3D roof view — coming soon" : "Aerial view"}</p>
                  <p className="text-xs">{view === "3d" ? "A rendered model of your roof will appear here." : "Your measured roof outline appears here."}</p>
                </div>
              )}
            </div>

            <div>
              <h2 className="font-serif text-base font-bold text-horizon">Add or Upgrade Your Options</h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {/* Gutters */}
                <AddonCard icon={Droplets} name="Gutters & Downspouts" desc={`5" Seamless · $${PRICING.gutterPerFoot}/ft`} on={gutterOn} onToggle={() => setGutterOn((v) => !v)}>
                  <div className="flex items-center justify-between">
                    <Stepper value={gutterFt} onChange={(d) => setGutterFt((v) => Math.max(0, v + d))} step={5} suffix="ft" disabled={!gutterOn} />
                    <span className="text-sm font-bold text-horizon">{money(gutterOn ? gutterFt * PRICING.gutterPerFoot : 0)}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-50">Estimated from your roofline — adjust if needed.</p>
                </AddonCard>

                {/* Fascia */}
                <AddonCard icon={Ruler} name="Fascia & Trim Wrap" desc={`Aluminum · $${PRICING.fasciaPerFoot}/ft`} on={fasciaOn} onToggle={() => setFasciaOn((v) => !v)}>
                  <div className="flex items-center justify-between">
                    <Stepper value={fasciaFt} onChange={(d) => setFasciaFt((v) => Math.max(0, v + d))} step={5} suffix="ft" disabled={!fasciaOn} />
                    <span className="text-sm font-bold text-horizon">{money(fasciaOn ? fasciaFt * PRICING.fasciaPerFoot : 0)}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-50">Estimated from your roofline — adjust if needed.</p>
                </AddonCard>

                {/* Skylight replacement */}
                <AddonCard icon={Sun} name="Skylight Replacement" desc="Replace existing skylights" on={skylightQty > 0}>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <select value={skylightSizeId} onChange={(e) => setSkylightSizeId(e.target.value)} className="w-full appearance-none rounded-lg border border-mist bg-mist-soft px-3 py-2 pr-8 text-sm text-ink-90 outline-none focus:border-ridge">
                        {SKYLIGHT_SIZES.map((s) => <option key={s.id} value={s.id}>{s.label} — {money(s.price)}</option>)}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
                    </div>
                    <Stepper value={skylightQty} onChange={(d) => setSkylightQty((v) => Math.max(0, v + d))} step={1} />
                  </div>
                  <p className="mt-1.5 text-[11px] text-ink-50">Replacement only. No skylight yet? New installs need an on-site inspection.</p>
                </AddonCard>

                {/* Plywood */}
                <AddonCard icon={Grid3x3} name="Plywood Replacement" desc={`$${PRICING.plywoodPerSheet}/sheet · $${PRICING.plywoodBulkPerSheet} over ${PRICING.plywoodBulkOver}`} on={plywoodSheets > 0}>
                  <div className="flex items-center justify-between">
                    <Stepper value={plywoodSheets} onChange={(d) => setPlywoodSheets((v) => Math.max(0, v + d))} step={1} suffix="sheets" />
                    <span className="text-sm font-bold text-horizon">{plywoodSheets > 0 ? money(plywoodSheets * (plywoodSheets > PRICING.plywoodBulkOver ? PRICING.plywoodBulkPerSheet : PRICING.plywoodPerSheet)) : "As needed"}</span>
                  </div>
                </AddonCard>

                {/* Ventilation */}
                <ToggleCard icon={Wind} name="Roof Ventilation (Ridge Vents)" desc="Increase attic ventilation" price={PRICING.ventilation} on={ventilation} onToggle={() => setVentilation((v) => !v)} />
                {/* Chimney */}
                <ToggleCard icon={Flame} name="Chimney Flashing / Cap" desc="New flashing + stainless cap" price={PRICING.chimney} on={chimney} onToggle={() => setChimney((v) => !v)} />
                {/* Ice & Water */}
                <ToggleCard icon={Snowflake} name="Ice & Water Shield Upgrade" desc="High-temp underlayment" price={PRICING.iceWater} on={iceWater} onToggle={() => setIceWater((v) => !v)} />
                {/* Underlayment */}
                <ToggleCard icon={ShieldCheck} name="Synthetic Underlayment Upgrade" desc="Upgrade from felt" price={PRICING.underlayment} on={underlayment} onToggle={() => setUnderlayment((v) => !v)} />
              </div>
            </div>
          </main>

          {/* ───────── RIGHT ───────── */}
          <aside>
            <div className={card + " p-5 lg:sticky lg:top-6"}>
              <h2 className="font-serif text-lg font-bold text-horizon">Your Estimate</h2>
              <p className="text-xs text-ink-50">Updated in real time</p>

              <div className="mt-4 space-y-2 border-t border-mist pt-4 text-sm">
                {result.lines.map((l) => (
                  <div key={l.id} className="flex items-baseline justify-between gap-2">
                    <span className="min-w-0 text-ink-70">
                      {l.id === "material" ? "Roofing Material" : l.label}
                      {l.note && <span className="ml-1 text-xs text-ink-50">({l.note})</span>}
                    </span>
                    <span className="shrink-0 font-semibold text-horizon">{l.amount > 0 ? money(l.amount) : "Included"}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-1.5 border-t border-mist pt-3 text-sm">
                <div className="flex justify-between text-ink-70"><span>Subtotal</span><span className="font-semibold text-horizon">{money(result.subtotal)}</span></div>
                <div className="flex justify-between text-ink-70"><span>Tax ({(TAX_RATE * 100).toFixed(1)}%)</span><span className="font-semibold text-horizon">{money(result.tax)}</span></div>
              </div>

              <div className="mt-4 border-t border-mist pt-4">
                <p className="text-sm font-semibold text-horizon">Total Estimate</p>
                <p className="font-serif text-3xl font-extrabold text-ridge">{money(result.total)}</p>
              </div>

              <div className="mt-4 rounded-lg bg-ridge/5 p-3 text-sm">
                <p className="font-semibold text-horizon">Financing available</p>
                <p className="text-xs text-ink-50">As low as <b className="text-horizon">{money(result.monthly)}/mo</b></p>
              </div>

              <div className="mt-4 space-y-2.5">
                <button onClick={() => onRequestInspection?.(summary(), result.total)} className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-sm font-bold text-clear shadow-card hover:bg-accent-hover">
                  <CalendarCheck className="h-4 w-4" /> Request Inspection
                </button>
                <button onClick={() => onSaveEstimate?.(summary(), result.total)} className="flex w-full items-center justify-center gap-2 rounded-lg border border-mist bg-clear px-5 py-3.5 text-sm font-semibold text-horizon hover:border-ridge">
                  <Bookmark className="h-4 w-4" /> Save My Estimate
                </button>
                <button className="flex w-full items-center justify-center gap-1.5 text-xs font-semibold text-ink-50 hover:text-ridge">
                  <Share2 className="h-3.5 w-3.5" /> Share Estimate
                </button>
              </div>

              <p className="mt-4 flex items-start gap-1.5 text-[11px] leading-snug text-ink-50">
                <Info className="mt-0.5 h-3 w-3 shrink-0" />
                {CONFIG_IS_PLACEHOLDER
                  ? "Sample pricing for preview — final numbers confirmed after a free on-site inspection."
                  : "Approximate estimate — final price confirmed after a free on-site inspection."}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Fact({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-lg bg-mist-soft/70 p-2">
      <div className="mx-auto mb-0.5 flex h-5 items-center justify-center text-ridge">{icon}</div>
      <p className="text-sm font-bold text-horizon">{value}</p>
      <p className="text-[10px] text-ink-50">{label}</p>
    </div>
  );
}

function Stepper({ value, onChange, step, suffix, disabled }: { value: number; onChange: (d: number) => void; step: number; suffix?: string; disabled?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${disabled ? "opacity-40" : ""}`}>
      <button disabled={disabled} onClick={() => onChange(-step)} className="grid h-6 w-6 place-items-center rounded border border-mist text-ink-70 hover:border-ridge disabled:cursor-not-allowed"><Minus className="h-3.5 w-3.5" /></button>
      <span className="min-w-[2.5rem] text-center text-sm font-semibold text-horizon">{value}{suffix ? ` ${suffix}` : ""}</span>
      <button disabled={disabled} onClick={() => onChange(step)} className="grid h-6 w-6 place-items-center rounded border border-mist text-ink-70 hover:border-ridge disabled:cursor-not-allowed"><Plus className="h-3.5 w-3.5" /></button>
    </div>
  );
}

function AddonCard({ icon: Icon, name, desc, on, onToggle, children }: { icon: typeof Droplets; name: string; desc: string; on: boolean; onToggle?: () => void; children: React.ReactNode }) {
  return (
    <div className={`rounded-xl border p-3.5 ${on ? "border-ridge/50 bg-ridge/5" : "border-mist bg-clear"}`}>
      <div className="flex items-start gap-2.5">
        <Icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-ridge" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-horizon">{name}</p>
          <p className="text-xs text-ink-50">{desc}</p>
        </div>
        {onToggle && (
          <button onClick={onToggle} aria-pressed={on} className={`grid h-5 w-5 shrink-0 place-items-center rounded border-2 ${on ? "border-ridge bg-ridge text-clear" : "border-mist"}`}>
            {on && <Check className="h-3.5 w-3.5" />}
          </button>
        )}
      </div>
      <div className="mt-2.5">{children}</div>
    </div>
  );
}

function ToggleCard({ icon, name, desc, price, on, onToggle }: { icon: typeof Droplets; name: string; desc: string; price: number; on: boolean; onToggle: () => void }) {
  return (
    <AddonCard icon={icon} name={name} desc={desc} on={on} onToggle={onToggle}>
      <span className="text-sm font-bold text-horizon">{money(price)}</span>
    </AddonCard>
  );
}
