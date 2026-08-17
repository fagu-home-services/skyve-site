"use client";

import { useState } from "react";
import {
  Home, Calendar, Layers as Stories, Check, Info, Phone, Bookmark, CalendarCheck, Share2,
  Droplets, Ruler, Sun, Flame, Grid3x3, Wind, Snowflake, ShieldCheck, Minus, Plus, ChevronDown,
} from "lucide-react";
import {
  CONFIG_MATERIALS, CONFIG_COLORS, CONFIG_ADDONS, CONFIG_IS_PLACEHOLDER, TAX_RATE,
  computeConfig, type AddonSelection,
} from "@/lib/configurator-config";
import { COMPANY } from "@/lib/company";

type Props = {
  address?: string;
  areaSqft?: number;
  squares?: number;
  stories?: string;
  builtYear?: string;
  mapUrl?: string | null;
  onRequestInspection?: (summary: string, total: number) => void;
  onSaveEstimate?: (summary: string, total: number) => void;
};

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

const ADDON_ICON: Record<string, typeof Droplets> = {
  gutters: Droplets, fascia: Ruler, skylight: Sun, chimney: Flame,
  plywood: Grid3x3, ventilation: Wind, icewater: Snowflake, underlayment: ShieldCheck,
};

const WIZARD = ["Your Home", "Roofing", "Options", "Review"];

export function RoofConfigurator({
  address = "9827 NE 13th St, Kirkland, WA 98033",
  areaSqft = 2450,
  squares = 24.5,
  stories = "2 Stories",
  builtYear = "2012",
  mapUrl = null,
  onRequestInspection,
  onSaveEstimate,
}: Props) {
  const [materialId, setMaterialId] = useState("landmark");
  const [colorIdx, setColorIdx] = useState(0);
  const [view, setView] = useState<"aerial" | "3d">("aerial");
  const [addons, setAddons] = useState<AddonSelection>({
    gutters: true, fascia: true, skylight: 2, chimney: true, plywood: 0,
    ventilation: false, icewater: false, underlayment: false,
  });

  const result = computeConfig(squares, materialId, addons);
  const color = CONFIG_COLORS[colorIdx];

  const setQty = (id: string, d: number) =>
    setAddons((s) => ({ ...s, [id]: Math.max(0, (Number(s[id]) || 0) + d) }));
  const toggle = (id: string) => setAddons((s) => ({ ...s, [id]: !s[id] }));
  const setSelect = (id: string, idx: number) => setAddons((s) => ({ ...s, [id]: idx }));

  function summary(): string {
    const extras = result.lines.filter((l) => l.id !== "material" && l.amount > 0).map((l) => l.label);
    return (
      `Configured estimate · ${result.material.brand} ${result.material.name} (${color.name}) · ` +
      `~${areaSqft.toLocaleString()} sq ft · ${extras.length ? extras.join(", ") : "no add-ons"} · ` +
      `Total ${money(result.total)}`
    );
  }

  const card = "rounded-2xl border border-mist bg-clear";

  return (
    <div className="min-h-screen bg-mist-soft">
      {/* Header */}
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
        <p className="mt-1 text-sm text-ink-50">Select the options you want and watch your estimate update in real time.</p>

        <div className="mt-5 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)_340px]">
          {/* ───────── LEFT: home + material + color ───────── */}
          <aside className="space-y-5">
            <div className={card + " p-5"}>
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-base font-bold text-horizon">Your Home</h2>
              </div>
              <p className="mt-1 text-sm text-ink-70">{address}</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <Fact icon={<Home className="h-4 w-4" />} value={`${areaSqft.toLocaleString()}`} label="sq ft" />
                <Fact icon={<Calendar className="h-4 w-4" />} value={builtYear} label="Built" />
                <Fact icon={<Stories className="h-4 w-4" />} value={stories.split(" ")[0]} label="Stories" />
              </div>
            </div>

            <div className={card + " p-5"}>
              <h2 className="font-serif text-base font-bold text-horizon">Choose Your Roofing Material</h2>
              <div className="mt-3 space-y-2.5">
                {CONFIG_MATERIALS.map((m) => {
                  const total = computeConfig(squares, m.id, {}).lines[0].amount;
                  const sel = m.id === materialId;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setMaterialId(m.id)}
                      className={`flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left transition-colors ${sel ? "border-ridge bg-ridge/5" : "border-mist hover:border-ridge/40"}`}
                    >
                      <span className="h-11 w-11 shrink-0 rounded-md border border-black/10" style={{ background: m.swatch }} />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-horizon">{m.brand} {m.name}</span>
                        <span className="block text-xs text-ink-50">{m.tier}</span>
                        <span className="mt-0.5 block text-sm font-bold text-horizon">{money(total)}</span>
                      </span>
                      {sel && <Check className="h-5 w-5 shrink-0 text-ridge" />}
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
                    className={`h-8 w-8 rounded-md border-2 transition-transform ${i === colorIdx ? "border-ridge scale-110" : "border-transparent ring-1 ring-black/10"}`}
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

          {/* ───────── CENTER: image + options ───────── */}
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
                {CONFIG_ADDONS.map((a) => {
                  const Icon = ADDON_ICON[a.id] || Info;
                  const on = a.type === "toggle" ? !!addons[a.id] : a.type === "qty" ? Number(addons[a.id]) > 0 : Number(addons[a.id]) > 0;
                  return (
                    <div key={a.id} className={`rounded-xl border p-3.5 ${on ? "border-ridge/50 bg-ridge/5" : "border-mist bg-clear"}`}>
                      <div className="flex items-start gap-2.5">
                        <Icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-ridge" />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-horizon">{a.name}</p>
                          <p className="text-xs text-ink-50">{a.desc}</p>
                        </div>
                        {a.type === "toggle" && (
                          <button
                            onClick={() => toggle(a.id)}
                            aria-pressed={!!addons[a.id]}
                            className={`grid h-5 w-5 shrink-0 place-items-center rounded border-2 ${addons[a.id] ? "border-ridge bg-ridge text-clear" : "border-mist"}`}
                          >
                            {addons[a.id] && <Check className="h-3.5 w-3.5" />}
                          </button>
                        )}
                      </div>
                      <div className="mt-2.5 flex items-center justify-between">
                        {a.type === "toggle" && (
                          <>
                            <span className="text-sm font-bold text-horizon">{money(a.price)}</span>
                            {a.note && <span className="text-xs text-ink-50">{a.note}</span>}
                          </>
                        )}
                        {a.type === "qty" && (
                          <>
                            <div className="flex items-center gap-2">
                              <button onClick={() => setQty(a.id, -1)} className="grid h-6 w-6 place-items-center rounded border border-mist text-ink-70 hover:border-ridge"><Minus className="h-3.5 w-3.5" /></button>
                              <span className="w-5 text-center text-sm font-semibold text-horizon">{Number(addons[a.id]) || 0}</span>
                              <button onClick={() => setQty(a.id, 1)} className="grid h-6 w-6 place-items-center rounded border border-mist text-ink-70 hover:border-ridge"><Plus className="h-3.5 w-3.5" /></button>
                            </div>
                            <span className="text-sm font-bold text-horizon">{money(a.price * (Number(addons[a.id]) || 0))}</span>
                          </>
                        )}
                        {a.type === "select" && (
                          <div className="relative w-full">
                            <select
                              value={Number(addons[a.id]) || 0}
                              onChange={(e) => setSelect(a.id, Number(e.target.value))}
                              className="w-full appearance-none rounded-lg border border-mist bg-mist-soft px-3 py-2 pr-8 text-sm text-ink-90 outline-none focus:border-ridge"
                            >
                              {a.options.map((o, i) => (
                                <option key={o.label} value={i}>{o.label}{o.price ? ` (${money(o.price)})` : o.note ? ` — ${o.note}` : ""}</option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </main>

          {/* ───────── RIGHT: live estimate ───────── */}
          <aside>
            <div className={card + " p-5 lg:sticky lg:top-6"}>
              <h2 className="font-serif text-lg font-bold text-horizon">Your Estimate</h2>
              <p className="text-xs text-ink-50">Updated in real time</p>

              <div className="mt-4 space-y-2 border-t border-mist pt-4 text-sm">
                {result.lines.map((l) => (
                  <div key={l.id} className="flex items-baseline justify-between gap-2">
                    <span className="text-ink-70">{l.id === "material" ? "Roofing Material" : l.label}</span>
                    <span className="font-semibold text-horizon">{l.amount > 0 ? money(l.amount) : "Included"}</span>
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
                <button
                  onClick={() => onRequestInspection?.(summary(), result.total)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-sm font-bold text-clear shadow-card hover:bg-accent-hover"
                >
                  <CalendarCheck className="h-4 w-4" /> Request Inspection
                </button>
                <button
                  onClick={() => onSaveEstimate?.(summary(), result.total)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-mist bg-clear px-5 py-3.5 text-sm font-semibold text-horizon hover:border-ridge"
                >
                  <Bookmark className="h-4 w-4" /> Save My Estimate
                </button>
                <button className="flex w-full items-center justify-center gap-1.5 text-xs font-semibold text-ink-50 hover:text-ridge">
                  <Share2 className="h-3.5 w-3.5" /> Share Estimate
                </button>
              </div>

              <p className="mt-4 flex items-start gap-1.5 text-[11px] leading-snug text-ink-50">
                <Info className="mt-0.5 h-3 w-3 shrink-0" />
                {CONFIG_IS_PLACEHOLDER
                  ? "Sample pricing for layout preview — final numbers are confirmed after a free on-site inspection."
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
