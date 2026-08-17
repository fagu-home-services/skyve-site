"use client";

import { useState, useRef } from "react";
import { MapPin, ArrowRight, Loader2, Lock, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import {
  computeEstimate, SLOPE_LABELS, COMPLEXITY_LABELS, type SlopeKey, type Complexity, type TierEstimate,
} from "@/lib/estimate-config";
import { submitLead } from "@/lib/lead-client";
import { COMPANY } from "@/lib/company";

type Est = {
  ok: boolean;
  mock?: boolean;
  coverage: boolean;
  address: string;
  lat: number;
  lng: number;
  areaMeters2: number;
  areaSqft: number;
  squares: number;
  facets: number;
  complexity: Complexity;
  wastePct: number;
  slope: SlopeKey;
  suggestedSlope: SlopeKey;
  mapUrl: string | null;
  tiers: { good: TierEstimate; better: TierEstimate; best: TierEstimate };
};

const SLOPES: SlopeKey[] = ["flat", "shallow", "medium", "steep"];
const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

function SlopeIcon({ k }: { k: SlopeKey }) {
  const h = { flat: 4, shallow: 11, medium: 19, steep: 27 }[k];
  return (
    <svg viewBox="0 0 48 32" className="h-7 w-11" aria-hidden="true">
      <path d={`M4 29 L24 ${29 - h} L44 29`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

const TIERS: { key: "good" | "better" | "best"; name: string; tag?: string }[] = [
  { key: "good", name: "Good" },
  { key: "better", name: "Better", tag: "Most popular" },
  { key: "best", name: "Best" },
];

export function RoofEstimator() {
  const [step, setStep] = useState<"address" | "review" | "gate" | "result" | "nocoverage">("address");
  const [address, setAddress] = useState("");
  const [est, setEst] = useState<Est | null>(null);
  const [slope, setSlope] = useState<SlopeKey>("medium");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [contact, setContact] = useState({ firstName: "", lastName: "", phone: "", email: "", _hp: "" });
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const acRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // tiers recomputed client-side when the user changes slope (no extra API call)
  const tiers = est ? computeEstimate(est.areaMeters2, slope, est.facets).tiers : null;

  async function start(e: React.FormEvent) {
    e.preventDefault();
    if (!address.trim() || loading) return;
    setLoading(true);
    setError("");
    try {
      const r = await fetch("/api/estimate/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address }),
      });
      const d = (await r.json()) as Est & { error?: string };
      if (!d.ok) {
        setError(d.error || "We couldn't measure that address. Try the full street address.");
      } else if (!d.coverage) {
        setEst(d);
        setStep("nocoverage");
      } else {
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
    if (loading || !est || !tiers) return;
    setLoading(true);
    const summary =
      `Instant estimate · ~${est.areaSqft.toLocaleString()} sq ft · ${est.facets} facets · ` +
      `${COMPLEXITY_LABELS[est.complexity]} · ${SLOPE_LABELS[slope]} slope · ` +
      `Better ${money(tiers.better.low)}–${money(tiers.better.high)}`;
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
      /* still show the price — the user did their part */
    }
    setLoading(false);
    setStep("result");
  }

  const box = "mx-auto max-w-3xl rounded-2xl border border-mist bg-clear p-6 shadow-card sm:p-8";
  const input = "w-full rounded-lg border border-mist bg-mist-soft px-4 py-3.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge";

  /* ---------- Step: address ---------- */
  if (step === "address") {
    return (
      <section className="bg-horizon-deep py-16 text-clear lg:py-24">
        <div className="container-skyve text-center">
          <h1 className="font-serif text-4xl font-extrabold sm:text-5xl">What will my roof cost?</h1>
          <p className="mt-3 text-lg text-mist-soft/85">Enter your address for an instant, approximate estimate.</p>
          <form onSubmit={start} className="mx-auto mt-8 max-w-2xl">
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
                  <ul className="absolute left-0 right-0 top-full z-10 mt-1 overflow-hidden rounded-lg border border-mist bg-clear text-left shadow-elevated">
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
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Start"}
              </button>
            </div>
          </form>
          {error && <p className="mx-auto mt-4 max-w-2xl text-sm text-accent">{error}</p>}
          <p className="mx-auto mt-6 max-w-xl text-xs text-mist-soft/60">
            Free · No obligation · Measured from satellite imagery. This is an approximate estimate,
            not an official quote.
          </p>
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
            We couldn&apos;t get a reliable satellite measurement for <b>{est.address}</b> — often
            that&apos;s heavy tree cover or older imagery. No problem: we&apos;ll measure it in person.
            Request a free, no-obligation estimate and we&apos;ll take care of it.
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

          {/* Map */}
          <div className="relative mt-4 overflow-hidden rounded-xl border border-mist bg-horizon-deep/5">
            {est.mapUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={est.mapUrl} alt="Satellite view of the roof" className="aspect-[16/10] w-full object-cover" />
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

          {/* Measured facts */}
          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-lg bg-mist-soft/70 p-3">
              <p className="font-serif text-xl font-bold text-horizon">~{est.areaSqft.toLocaleString()}</p>
              <p className="text-xs text-ink-50">sq ft of roof</p>
            </div>
            <div className="rounded-lg bg-mist-soft/70 p-3">
              <p className="font-serif text-xl font-bold text-horizon">{est.facets}</p>
              <p className="text-xs text-ink-50">roof facets</p>
            </div>
            <div className="rounded-lg bg-mist-soft/70 p-3">
              <p className="font-serif text-xl font-bold text-horizon">{COMPLEXITY_LABELS[est.complexity].replace(" roof", "")}</p>
              <p className="text-xs text-ink-50">~{Math.round(est.wastePct * 100)}% waste</p>
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
            onClick={() => setStep("gate")}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-4 text-sm font-bold text-clear shadow-card transition-colors hover:bg-accent-hover"
          >
            See my price <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={() => { setStep("address"); setEst(null); }} className="mt-3 w-full text-center text-xs text-ink-50 underline">
            Use a different address
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
          <h2 className="text-center font-serif text-2xl font-bold text-horizon">Almost done!</h2>
          <p className="mt-1 text-center text-sm text-ink-50">Where should we send your estimate?</p>
          <input type="text" tabIndex={-1} autoComplete="off" value={contact._hp} onChange={set("_hp")} className="absolute left-[-9999px] h-0 w-0 opacity-0" aria-hidden="true" />
          <div className="mt-6 space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input required value={contact.firstName} onChange={set("firstName")} placeholder="First name" className={input} />
              <input required value={contact.lastName} onChange={set("lastName")} placeholder="Last name" className={input} />
            </div>
            <input required type="tel" value={contact.phone} onChange={set("phone")} placeholder="Phone" className={input} />
            <input required type="email" value={contact.email} onChange={set("email")} placeholder="Email" className={input} />
          </div>
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

  /* ---------- Step: result ---------- */
  if (step === "result" && est && tiers) {
    return (
      <section className="bg-mist-soft py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-success" />
            <h2 className="mt-3 font-serif text-3xl font-bold text-horizon">Your approximate roof estimate</h2>
            <p className="mt-2 text-sm text-ink-50">
              {est.address} · ~{est.areaSqft.toLocaleString()} sq ft · {est.facets} facets ·{" "}
              {COMPLEXITY_LABELS[est.complexity]} · {SLOPE_LABELS[slope]} slope
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {TIERS.map(({ key, name, tag }) => (
              <div key={key} className={`relative rounded-2xl border bg-clear p-6 text-center shadow-card ${tag ? "border-ridge" : "border-mist"}`}>
                {tag && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ridge px-3 py-1 text-xs font-bold text-clear">{tag}</span>}
                <p className="font-serif text-lg font-bold text-horizon">{name}</p>
                <p className="mt-3 font-serif text-2xl font-extrabold text-horizon sm:text-3xl">
                  {money(tiers[key].low)}<span className="text-ink-50"> – </span>{money(tiers[key].high)}
                </p>
                <p className="mt-1 text-xs text-ink-50">approximate range</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-mist bg-clear p-5 text-center text-sm text-ink-70">
            <p>
              <b>This is an approximate estimate</b>, measured from satellite imagery — not an official
              quote or contract. Your final price is confirmed after a free on-site inspection and
              depends on the options you choose.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-clear hover:bg-accent-hover">
                <Phone className="h-4 w-4" /> Book my free inspection
              </a>
              <a href="/instant-estimate/manual/" className="inline-flex items-center gap-2 rounded-lg border border-mist px-6 py-3.5 text-sm font-semibold text-horizon hover:border-ridge">
                Ask a question
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
