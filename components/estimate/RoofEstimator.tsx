"use client";

import { useState, useRef, useEffect } from "react";
import {
  MapPin, ArrowRight, Loader2, Lock, CheckCircle2, Phone, ShieldCheck,
  Home, Building2, Plus, Trash2, Check,
} from "lucide-react";
import {
  computeEstimate, SLOPE_LABELS, COMPLEXITY_LABELS, type SlopeKey, type Complexity, type TierEstimate,
} from "@/lib/estimate-config";
import { submitLead } from "@/lib/lead-client";
import { COMPANY } from "@/lib/company";
import { RoofConfigurator } from "./RoofConfigurator";

type Structure = {
  label: string;
  kind: "main" | "secondary" | "manual";
  areaSqft: number;
  areaM2: number;
  polygon?: string; // "lat,lng;lat,lng;…" outline for the map overlay (main + detected)
};

type Est = {
  ok: boolean;
  mock?: boolean;
  coverage: boolean;
  address: string;
  lat: number;
  lng: number;
  areaMeters2: number;
  perimeterFt?: number;
  areaSqft: number;
  squares: number;
  facets: number;
  complexity: Complexity;
  wastePct: number;
  slope: SlopeKey;
  suggestedSlope: SlopeKey;
  mapUrl: string | null;
  structures?: Structure[];
  tiers: { good: TierEstimate; better: TierEstimate; best: TierEstimate };
};

type Item = Structure & { id: number; included: boolean };

const SLOPES: SlopeKey[] = ["flat", "shallow", "medium", "steep"];
const M2_TO_FT2 = 10.7639;
const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

// Rough roof areas for structures the auto-detect missed, so a homeowner can add
// their own. Approximate on purpose — the whole estimate is a ballpark.
const ADD_PRESETS: { label: string; sqft: number }[] = [
  { label: "Shed", sqft: 120 },
  { label: "1-car garage", sqft: 264 },
  { label: "2-car garage", sqft: 480 },
  { label: "Large outbuilding", sqft: 600 },
];

// Quick qualification (enriches the lead) — all optional.
const PROJECT_TYPES = ["Full replacement", "Repair", "Insurance claim", "Not sure yet"];
const TIMELINES = ["As soon as possible", "1–3 months", "Just exploring"];
const ROOF_AGES = ["Under 10 years", "10–20 years", "20+ years", "Not sure"];

// Reject malformed + throwaway emails (not full mailbox verification).
const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "mailinator.com", "guerrillamail.com", "10minutemail.com", "tempmail.com", "temp-mail.org",
  "yopmail.com", "trashmail.com", "sharklasers.com", "getnada.com", "throwawaymail.com",
  "maildrop.cc", "fakeinbox.com", "dispostable.com", "mailnesia.com", "mintemail.com",
]);
function validEmail(raw: string): boolean {
  const s = raw.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s)) return false;
  return !DISPOSABLE_EMAIL_DOMAINS.has(s.split("@")[1]);
}
/** Normalize a US phone to 10 digits, or null if it doesn't look valid. */
function normPhone(raw: string): string | null {
  const d = raw.replace(/\D/g, "");
  if (d.length === 10) return d;
  if (d.length === 11 && d[0] === "1") return d.slice(1);
  return null;
}

function ChipGroup({ options, value, onSelect }: { options: string[]; value: string; onSelect: (v: string) => void }) {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onSelect(value === o ? "" : o)}
          className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
            value === o ? "border-ridge bg-ridge/5 text-ridge" : "border-mist text-ink-70 hover:border-ridge/40"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

const HERO_BADGES = ["No Obligation", "100% Free", "Private & Secure"];

/* Blueprint-style isometric roof for the landing hero. */
function BlueprintRoof() {
  return (
    <svg viewBox="0 0 560 380" fill="none" className="h-full w-full" aria-hidden>
      <g stroke="var(--color-sky)" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" opacity="0.75">
        <g stroke="var(--color-sky)" strokeWidth="0.5" opacity="0.18">
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v${i}`} x1={40 + i * 52} y1="20" x2={40 + i * 52} y2="360" />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`h${i}`} x1="20" y1={40 + i * 50} x2="540" y2={40 + i * 50} />
          ))}
        </g>
        <polygon points="280,70 470,180 280,290 90,180" opacity="0.9" />
        <polygon points="280,70 470,180 280,180" fill="var(--color-ridge)" fillOpacity="0.15" />
        <polygon points="280,70 90,180 280,180" fill="var(--color-sky)" fillOpacity="0.08" />
        <line x1="280" y1="70" x2="280" y2="290" strokeDasharray="2 6" opacity="0.5" />
        <line x1="90" y1="180" x2="470" y2="180" strokeDasharray="2 6" opacity="0.5" />
        <line x1="200" y1="125" x2="360" y2="235" opacity="0.55" />
        <line x1="360" y1="125" x2="200" y2="235" opacity="0.55" />
        <g stroke="var(--color-accent)" opacity="0.85">
          <line x1="90" y1="315" x2="280" y2="315" />
          <line x1="90" y1="308" x2="90" y2="322" />
          <line x1="280" y1="308" x2="280" y2="322" />
          <line x1="500" y1="180" x2="500" y2="290" />
          <line x1="493" y1="180" x2="507" y2="180" />
          <line x1="493" y1="290" x2="507" y2="290" />
        </g>
      </g>
      <text x="170" y="338" fill="var(--color-accent)" fontSize="13" fontFamily="var(--font-mono)">42 ft</text>
      <text x="512" y="240" fill="var(--color-accent)" fontSize="13" fontFamily="var(--font-mono)">28 ft</text>
      {[[280, 70], [470, 180], [280, 290], [90, 180]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="var(--color-sky)" />
      ))}
    </svg>
  );
}

function SlopeIcon({ k }: { k: SlopeKey }) {
  const h = { flat: 4, shallow: 11, medium: 19, steep: 27 }[k];
  return (
    <svg viewBox="0 0 48 32" className="h-7 w-11" aria-hidden="true">
      <path d={`M4 29 L24 ${29 - h} L44 29`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function RoofEstimator({ onLanding }: { onLanding?: (isLanding: boolean) => void } = {}) {
  const [step, setStep] = useState<"address" | "review" | "configure" | "qualify" | "gate" | "result" | "nocoverage">("address");
  const [configSummary, setConfigSummary] = useState("");
  const [configTotal, setConfigTotal] = useState(0);
  const [project, setProject] = useState("");
  const [timeline, setTimeline] = useState("");
  const [roofAge, setRoofAge] = useState("");
  const [address, setAddress] = useState("");
  const [est, setEst] = useState<Est | null>(null);
  const [slope, setSlope] = useState<SlopeKey>("medium");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [contact, setContact] = useState({ firstName: "", lastName: "", phone: "", email: "", _hp: "" });
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const acRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idRef = useRef(0);

  function onAddressChange(v: string) {
    setAddress(v);
    if (acRef.current) clearTimeout(acRef.current);
    if (v.trim().length < 4) {
      setSuggestions([]);
      return;
    }
    acRef.current = setTimeout(async () => {
      try {
        const r = await fetch(`/api/places?q=${encodeURIComponent(v)}`);
        const d = (await r.json()) as { predictions?: { description: string }[] };
        setSuggestions((d.predictions || []).map((p) => p.description));
      } catch {
        setSuggestions([]);
      }
    }, 250);
  }

  // The estimate recomputes client-side (no extra API call) from the structures
  // the user kept + the slope they confirmed.
  const includedM2 = items.filter((i) => i.included).reduce((s, i) => s + i.areaM2, 0);
  const result = est ? computeEstimate(includedM2 || est.areaMeters2, slope, est.facets) : null;
  const tiers = result?.tiers ?? null;

  // Satellite map with the included structures outlined — rebuilds as the user
  // toggles structures (the key stays server-side in the roof-image proxy).
  const mapUrl = est
    ? `/api/roof-image/?lat=${est.lat}&lng=${est.lng}` +
      items
        .filter((i) => i.included && i.polygon)
        .map((i) => `&poly=${encodeURIComponent(i.polygon as string)}`)
        .join("")
    : null;

  function toggleItem(id: number) {
    setItems((xs) => xs.map((i) => (i.id === id ? { ...i, included: !i.included } : i)));
  }
  function removeItem(id: number) {
    setItems((xs) => xs.filter((i) => i.id !== id));
  }
  function addStructure(p: { label: string; sqft: number }) {
    setItems((xs) => [
      ...xs,
      { id: idRef.current++, label: p.label, kind: "manual", areaSqft: p.sqft, areaM2: p.sqft / M2_TO_FT2, included: true },
    ]);
    setShowAdd(false);
  }

  // Tell the page whether we're on the landing step (so it can show/hide the
  // supporting marketing sections).
  useEffect(() => {
    onLanding?.(step === "address");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  // Deep-link: /instant-estimate?address=… (e.g. from the homepage hero) →
  // prefill and measure straight away.
  useEffect(() => {
    const a = new URLSearchParams(window.location.search).get("address");
    if (a && a.trim()) {
      setAddress(a);
      runEstimate(a);
    }
    // run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function start(e: React.FormEvent) {
    e.preventDefault();
    runEstimate(address);
  }

  async function runEstimate(addr: string) {
    if (!addr.trim() || loading) return;
    setLoading(true);
    setError("");
    try {
      const r = await fetch("/api/estimate/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: addr }),
      });
      const d = (await r.json()) as Est & { error?: string };
      if (!d.ok) {
        setError(d.error || "We couldn't measure that address. Try the full street address.");
      } else if (!d.coverage) {
        setEst(d);
        setStep("nocoverage");
      } else {
        const structs: Structure[] =
          d.structures && d.structures.length
            ? d.structures
            : [{ label: "Main roof", kind: "main", areaSqft: Math.round(d.areaMeters2 * M2_TO_FT2), areaM2: d.areaMeters2 }];
        // Main roof is on by default; detected detached structures are OFF until
        // the homeowner opts in (reports are usually house-only).
        setItems(structs.map((s) => ({ ...s, id: idRef.current++, included: s.kind !== "secondary" })));
        setEst(d);
        setSlope(d.suggestedSlope);
        setStep("review");
      }
    } catch {
      setError("Network error — please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function submitGate(e: React.FormEvent) {
    e.preventDefault();
    if (loading || !est || !tiers || !result) return;
    if (!validEmail(contact.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!normPhone(contact.phone)) {
      setError("Please enter a valid 10-digit US phone number.");
      return;
    }
    setError("");
    setLoading(true);
    const base =
      configSummary ||
      `Instant estimate · ~${result.areaSqft.toLocaleString()} sq ft · ${est.facets} facets · ${SLOPE_LABELS[slope]} slope`;
    const qual = [
      project && `Project: ${project}`,
      timeline && `Timeline: ${timeline}`,
      roofAge && `Roof age: ${roofAge}`,
    ]
      .filter(Boolean)
      .join(" · ");
    const summary = qual ? `${base} · ${qual}` : base;
    try {
      await submitLead({
        firstName: contact.firstName,
        lastName: contact.lastName,
        phone: contact.phone,
        email: contact.email,
        address: est.address,
        service: "Roof Replacement (instant estimate)",
        message: summary,
        _hp: contact._hp,
      });
    } catch {
      /* still continue — the user did their part */
    }
    setLoading(false);
    setStep("configure");
  }

  const box = "mx-auto max-w-3xl rounded-2xl border border-mist bg-clear p-6 shadow-card sm:p-8";
  const input = "w-full rounded-lg border border-mist bg-mist-soft px-4 py-3.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge";

  /* ---------- Step: address (landing hero) ---------- */
  if (step === "address") {
    return (
      <section className="relative overflow-hidden bg-horizon-deep text-clear">
        <div className="absolute inset-0 bg-gradient-to-br from-horizon via-horizon-deep to-horizon-deep" />
        <div className="absolute -left-32 bottom-0 h-[420px] w-[520px] rounded-full bg-ridge/20 blur-3xl" />

        <div className="container-skyve relative grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="eyebrow text-sky">Instant Estimate</p>
            <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.08] sm:text-5xl">
              Get your roof estimate in about a minute
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-sky-soft/90">
              We measure your roof from aerial imagery and price it with local rates — a fast,
              approximate estimate, confirmed on a free on-site inspection.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
              {HERO_BADGES.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ridge">
                    <Check className="h-3 w-3 text-clear" />
                  </span>
                  <span className="text-sm font-medium text-clear">{b}</span>
                </div>
              ))}
            </div>

            <form onSubmit={start} className="mt-8 max-w-xl">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <div className="flex items-center gap-2 rounded-lg bg-clear px-4">
                    <MapPin className="h-5 w-5 shrink-0 text-ink-50" />
                    <input
                      value={address}
                      onChange={(e) => onAddressChange(e.target.value)}
                      placeholder="Enter your street address"
                      autoComplete="off"
                      className="w-full bg-transparent py-4 text-sm text-ink-90 outline-none placeholder:text-ink-50"
                    />
                  </div>
                  {suggestions.length > 0 && (
                    <ul className="absolute left-0 right-0 top-full z-20 mt-1 overflow-hidden rounded-lg border border-mist bg-clear text-left shadow-elevated">
                      {suggestions.map((s) => (
                        <li key={s}>
                          <button
                            type="button"
                            onClick={() => { setAddress(s); setSuggestions([]); }}
                            className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-ink-90 hover:bg-mist-soft"
                          >
                            <MapPin className="h-4 w-4 shrink-0 text-ink-50" /> <span className="truncate">{s}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-bold text-clear shadow-card transition-colors hover:bg-accent-hover disabled:opacity-70"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Start <ArrowRight className="h-4 w-4" /></>}
                </button>
              </div>
              {error && <p className="mt-3 text-sm text-accent">{error}</p>}
              <p className="mt-4 text-xs text-mist-soft/60">
                Measured from satellite imagery — approximate, not an official quote.
              </p>
            </form>
          </div>

          <div className="hidden h-[300px] lg:block">
            <BlueprintRoof />
          </div>
        </div>
      </section>
    );
  }

  /* ---------- Step: no coverage ---------- */
  if (step === "nocoverage" && est) {
    return (
      <section className="bg-mist-soft py-16 lg:py-24">
        <div className={box + " text-center"}>
          <h2 className="font-serif text-2xl font-bold text-horizon">We couldn&apos;t auto-measure this roof</h2>
          <p className="mt-3 text-ink-70">
            We couldn&apos;t get a reliable satellite measurement for <b>{est.address}</b> — usually
            that&apos;s heavy tree cover, older imagery, or a larger / multi-unit building. No problem:
            we&apos;ll measure it in person. Request a free, no-obligation estimate and we&apos;ll take care of it.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="/instant-estimate/manual/" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-clear hover:bg-accent-hover">
              Request a free estimate <ArrowRight className="h-4 w-4" />
            </a>
            <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 rounded-lg border border-mist bg-clear px-6 py-3.5 text-sm font-semibold text-horizon hover:border-ridge">
              <Phone className="h-4 w-4" /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- Step: review (map + slope) ---------- */
  if (step === "review" && est) {
    return (
      <section className="bg-mist-soft py-12 lg:py-16">
        <div className={box}>
          <div className="flex items-center gap-2 text-sm text-ink-70">
            <MapPin className="h-4 w-4 text-ridge" /> <span className="truncate">{est.address}</span>
          </div>

          {/* Map with the roof outlined */}
          <div className="relative mt-4 overflow-hidden rounded-xl border border-mist bg-horizon-deep/5">
            {mapUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={mapUrl} alt="Satellite view with your roof outlined" className="aspect-[16/10] w-full object-cover" />
            ) : (
              <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 text-center text-ink-50">
                <MapPin className="h-8 w-8" />
                <p className="text-sm font-semibold">Satellite measurement preview</p>
                <p className="text-xs">Live once the Google key is set — showing a sample roof for now.</p>
              </div>
            )}
            {est.mock && (
              <span className="absolute left-3 top-3 rounded-md bg-accent px-2 py-1 text-xs font-bold text-clear">SAMPLE</span>
            )}
          </div>
          {items.some((i) => i.included && i.polygon) && (
            <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-ink-50">
              <span className="inline-block h-2.5 w-3.5 rounded-sm border-2 border-[#0f766e] bg-[#14b8a6]/30" />
              Outlined in teal = the roof we&apos;re measuring
            </p>
          )}

          {/* Structures editor */}
          <div className="mt-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-horizon">Structures on your property</p>
              <span className="text-xs text-ink-50">{items.filter((i) => i.included).length} included</span>
            </div>
            <p className="mt-0.5 text-xs text-ink-50">
              We measure your main roof. If you also want a detached garage or shed quoted, add it below.
            </p>
            <ul className="mt-3 space-y-2">
              {items.map((it) => {
                const Icon = it.kind === "main" ? Home : Building2;
                return (
                  <li
                    key={it.id}
                    className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2.5 ${
                      it.included ? "border-mist bg-clear" : "border-mist/60 bg-mist-soft/40"
                    }`}
                  >
                    <div className={`flex min-w-0 items-center gap-2.5 ${it.included ? "" : "opacity-50"}`}>
                      <Icon className="h-4.5 w-4.5 shrink-0 text-ridge" />
                      <span className="truncate text-sm font-medium text-ink-90">{it.label}</span>
                      <span className="shrink-0 text-xs text-ink-50">~{it.areaSqft.toLocaleString()} sq ft</span>
                    </div>
                    {it.kind === "main" ? (
                      <span className="shrink-0 text-xs font-medium text-ink-50">Your home</span>
                    ) : it.kind === "manual" ? (
                      <button
                        onClick={() => removeItem(it.id)}
                        className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-accent hover:bg-accent/5"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    ) : it.included ? (
                      <button
                        onClick={() => toggleItem(it.id)}
                        className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-ink-50 hover:bg-mist-soft hover:text-accent"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    ) : (
                      <button
                        onClick={() => toggleItem(it.id)}
                        className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-ridge hover:bg-ridge/5"
                      >
                        <Plus className="h-3.5 w-3.5" /> Add
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>

            {showAdd ? (
              <div className="mt-2 rounded-lg border border-dashed border-ridge/40 bg-ridge/5 p-3">
                <p className="mb-2 text-xs font-semibold text-horizon">Add a structure</p>
                <div className="flex flex-wrap gap-2">
                  {ADD_PRESETS.map((p) => (
                    <button
                      key={p.label}
                      onClick={() => addStructure(p)}
                      className="rounded-full border border-mist bg-clear px-3 py-1.5 text-xs font-semibold text-horizon hover:border-ridge"
                    >
                      {p.label} <span className="text-ink-50">~{p.sqft} sq ft</span>
                    </button>
                  ))}
                  <button onClick={() => setShowAdd(false)} className="px-2 py-1.5 text-xs text-ink-50 underline">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowAdd(true)}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-ridge hover:underline"
              >
                <Plus className="h-3.5 w-3.5" /> Add a structure we missed
              </button>
            )}
          </div>

          {/* Measured facts (updates live with the structures + slope above) */}
          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-lg bg-mist-soft/70 p-3">
              <p className="font-serif text-xl font-bold text-horizon">~{(result?.areaSqft ?? est.areaSqft).toLocaleString()}</p>
              <p className="text-xs text-ink-50">sq ft of roof</p>
            </div>
            <div className="rounded-lg bg-mist-soft/70 p-3">
              <p className="font-serif text-xl font-bold text-horizon">{est.facets}</p>
              <p className="text-xs text-ink-50">roof facets</p>
            </div>
            <div className="rounded-lg bg-mist-soft/70 p-3">
              <p className="font-serif text-xl font-bold text-horizon">{COMPLEXITY_LABELS[(result ?? est).complexity].replace(" roof", "")}</p>
              <p className="text-xs text-ink-50">~{Math.round((result?.wastePct ?? est.wastePct) * 100)}% waste</p>
            </div>
          </div>

          {/* Slope confirm */}
          <p className="mt-6 text-center text-sm font-semibold text-horizon">Confirm your roof&apos;s slope</p>
          <p className="mb-3 text-center text-xs text-ink-50">
            We suggested <b>{SLOPE_LABELS[est.suggestedSlope]}</b> from the imagery — adjust if you know better.
          </p>
          <div className="grid grid-cols-4 gap-2">
            {SLOPES.map((k) => (
              <button
                key={k}
                onClick={() => setSlope(k)}
                className={`flex flex-col items-center gap-1 rounded-xl border-2 p-3 transition-colors ${
                  slope === k ? "border-ridge bg-ridge/5 text-ridge" : "border-mist text-ink-50 hover:border-ridge/40"
                }`}
              >
                <SlopeIcon k={k} />
                <span className="text-xs font-semibold">{SLOPE_LABELS[k]}</span>
                {est.suggestedSlope === k && <span className="text-[10px] text-accent">Suggested</span>}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep("qualify")}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-4 text-sm font-bold text-clear shadow-card transition-colors hover:bg-accent-hover"
          >
            Continue <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={() => { setStep("address"); setEst(null); }} className="mt-3 w-full text-center text-xs text-ink-50 underline">
            Use a different address
          </button>
        </div>
      </section>
    );
  }

  /* ---------- Step: configure (material + options + live price) ---------- */
  if (step === "configure" && est && result) {
    const proceed = (s: string, t: number) => {
      setConfigSummary(s);
      setConfigTotal(t);
      // Contact was already captured at the gate; enrich the lead with the final
      // configured choices (fire-and-forget), then confirm.
      void submitLead({
        firstName: contact.firstName,
        lastName: contact.lastName,
        phone: contact.phone,
        email: contact.email,
        address: est.address,
        service: "Roof Replacement (configured)",
        message: s,
        _hp: contact._hp,
      }).catch(() => {});
      setStep("result");
    };
    return (
      <RoofConfigurator
        embedded
        address={est.address}
        areaSqft={result.areaSqft}
        squares={result.squares}
        perimeterFt={est.perimeterFt}
        mapUrl={mapUrl}
        onRequestInspection={proceed}
        onSaveEstimate={proceed}
      />
    );
  }

  /* ---------- Step: qualify (quick lead-enriching questions) ---------- */
  if (step === "qualify" && est) {
    return (
      <section className="bg-mist-soft py-12 lg:py-16">
        <div className={box}>
          <h2 className="text-center font-serif text-2xl font-bold text-horizon">A couple quick questions</h2>
          <p className="mt-1 text-center text-sm text-ink-50">Helps us prepare the right estimate — all optional.</p>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-semibold text-horizon">What are you looking to do?</p>
              <ChipGroup options={PROJECT_TYPES} value={project} onSelect={setProject} />
            </div>
            <div>
              <p className="text-sm font-semibold text-horizon">When are you hoping to start?</p>
              <ChipGroup options={TIMELINES} value={timeline} onSelect={setTimeline} />
            </div>
            <div>
              <p className="text-sm font-semibold text-horizon">How old is your current roof?</p>
              <ChipGroup options={ROOF_AGES} value={roofAge} onSelect={setRoofAge} />
            </div>
          </div>

          <button
            onClick={() => setStep("gate")}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-4 text-sm font-bold text-clear shadow-card transition-colors hover:bg-accent-hover"
          >
            Continue <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={() => setStep("review")} className="mt-3 w-full text-center text-xs text-ink-50 underline">
            Back
          </button>
        </div>
      </section>
    );
  }

  /* ---------- Step: gate ---------- */
  if (step === "gate" && est) {
    const set = (k: keyof typeof contact) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setContact((c) => ({ ...c, [k]: e.target.value }));
    return (
      <section className="bg-mist-soft py-12 lg:py-16">
        <form onSubmit={submitGate} className={box}>
          <h2 className="text-center font-serif text-2xl font-bold text-horizon">See your estimate</h2>
          <p className="mt-1 text-center text-sm text-ink-50">Enter your details and we&apos;ll show your customized price.</p>
          <input type="text" tabIndex={-1} autoComplete="off" value={contact._hp} onChange={set("_hp")} className="absolute left-[-9999px] h-0 w-0 opacity-0" aria-hidden="true" />
          <div className="mt-6 space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input required value={contact.firstName} onChange={set("firstName")} placeholder="First name" className={input} />
              <input required value={contact.lastName} onChange={set("lastName")} placeholder="Last name" className={input} />
            </div>
            <input required type="tel" value={contact.phone} onChange={set("phone")} placeholder="Phone (10-digit US)" className={input} />
            <input required type="email" value={contact.email} onChange={set("email")} placeholder="Email" className={input} />
          </div>
          {error && <p className="mt-3 text-center text-sm font-medium text-accent">{error}</p>}
          <button type="submit" disabled={loading} className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-4 text-sm font-bold text-clear shadow-card transition-colors hover:bg-accent-hover disabled:opacity-70">
            {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Calculating…</> : <>Show my price <ArrowRight className="h-4 w-4" /></>}
          </button>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-ink-50">
            <Lock className="h-3.5 w-3.5" /> Your info is secure and never sold. No obligation.
          </p>
        </form>
      </section>
    );
  }

  /* ---------- Step: result (confirmation) ---------- */
  if (step === "result" && est) {
    return (
      <section className="bg-mist-soft py-12 lg:py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
          <h2 className="mt-3 font-serif text-3xl font-bold text-horizon">You&apos;re all set!</h2>
          <p className="mt-2 text-ink-70">
            Thanks, {contact.firstName || "there"}. We&apos;ve saved your estimate for <b>{est.address}</b> and
            our team will reach out to schedule your free on-site inspection.
          </p>

          {configTotal > 0 && (
            <div className="mx-auto mt-6 max-w-sm rounded-2xl border border-ridge bg-clear p-6 shadow-card">
              <p className="text-sm font-semibold text-horizon">Your customized estimate</p>
              <p className="mt-1 font-serif text-4xl font-extrabold text-ridge">{money(configTotal)}</p>
              <p className="mt-1 text-xs text-ink-50">approximate — confirmed on inspection</p>
            </div>
          )}

          <div className="mt-8 rounded-xl border border-mist bg-clear p-5 text-sm text-ink-70">
            <p>
              This is an approximate estimate, measured from satellite imagery — not an official quote or
              contract. Your final price is confirmed after a free on-site inspection.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-clear hover:bg-accent-hover">
                <Phone className="h-4 w-4" /> {COMPANY.phone}
              </a>
            </div>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-ink-50">
              <ShieldCheck className="h-3.5 w-3.5 text-ridge" /> Licensed &amp; insured · {COMPANY.warrantyYears}-year workmanship warranty
            </p>
          </div>
        </div>
      </section>
    );
  }

  return null;
}
