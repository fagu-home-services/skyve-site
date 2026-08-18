"use client";

/* Interactive service-area map. Renders a brand-styled Google Map with a marker
 * for each city we serve (King = blue, Snohomish = orange); clicking a marker
 * opens a small popup with a "Get your free estimate" link.
 *
 * Needs a browser Maps-JavaScript key (referrer-restricted to skyvewa.com):
 *   NEXT_PUBLIC_GOOGLE_MAPS_BROWSER_KEY
 * Without it (or if the script fails), it falls back to the stylized illustration
 * so nothing breaks. */

import { useEffect, useRef, useState } from "react";
import { MAP_CITIES } from "@/lib/site-data";

const KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_BROWSER_KEY || "";
const KING = "#0b6792"; // ridge
const SNO = "#ff8a3d"; // accent

// Muted, on-brand map styling (hide POIs, soften roads + water).
const MAP_STYLE = [
  { elementType: "geometry", stylers: [{ color: "#eef2f4" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#5a6b73" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { featureType: "road", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#e2e8ea" }] },
  { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#cfd8dc" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#bcd3dd" }] },
  { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#eef2f4" }] },
];

let mapsPromise: Promise<void> | null = null;
function loadMaps(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((window as any).google?.maps) return Promise.resolve();
  if (mapsPromise) return mapsPromise;
  mapsPromise = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `https://maps.googleapis.com/maps/api/js?key=${KEY}&v=weekly`;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("maps failed"));
    document.head.appendChild(s);
  });
  return mapsPromise;
}

export function ServiceAreaCanvas() {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!KEY || !ref.current) return;
    let cancelled = false;
    loadMaps()
      .then(() => {
        if (cancelled || !ref.current) return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const g = (window as any).google;
        const map = new g.maps.Map(ref.current, {
          center: { lat: 47.63, lng: -122.15 },
          zoom: 9,
          styles: MAP_STYLE,
          disableDefaultUI: true,
          zoomControl: true,
          gestureHandling: "cooperative",
        });
        const info = new g.maps.InfoWindow();
        MAP_CITIES.forEach((c) => {
          const marker = new g.maps.Marker({
            position: { lat: c.lat, lng: c.lng },
            map,
            title: c.name,
            icon: {
              path: g.maps.SymbolPath.CIRCLE,
              scale: 6.5,
              fillColor: c.county === "king" ? KING : SNO,
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
            },
          });
          marker.addListener("click", () => {
            info.setContent(
              `<div style="font:600 13px/1.35 system-ui,sans-serif;color:#072d3e;padding:2px 2px 4px">` +
                `<div style="font-size:14px">${c.name}, WA</div>` +
                `<a href="/instant-estimate/" style="color:#0b6792;font-weight:600;font-size:12px">Get your free estimate →</a>` +
                `</div>`,
            );
            info.open(map, marker);
          });
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!KEY || failed) return <IllustrationMap />;

  return (
    <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-mist shadow-card">
      <div ref={ref} className="h-full w-full" />
      <Legend />
    </div>
  );
}

function Legend() {
  return (
    <div className="absolute right-4 top-4 z-10 rounded-lg border border-mist bg-clear/90 p-3 text-xs shadow-card backdrop-blur-sm">
      <p className="flex items-center gap-2 text-ink-70">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: KING }} /> King County
      </p>
      <p className="mt-1.5 flex items-center gap-2 text-ink-70">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: SNO }} /> Snohomish County
      </p>
    </div>
  );
}

/* Stylized fallback (used until the browser key is set). */
function IllustrationMap() {
  return (
    <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-mist bg-sky-soft/30 shadow-card">
      <div className="absolute -left-10 top-0 h-full w-2/5 -skew-x-12 bg-ridge/15" />
      <div className="absolute right-6 top-6 h-2/3 w-3/5 rounded-[40%] bg-ridge/10 blur-2xl" />
      <div className="absolute bottom-6 left-1/4 h-2/3 w-3/5 rounded-[40%] bg-accent/10 blur-2xl" />
      <Legend />
      {MAP_CITIES.map((c) => (
        <div
          key={c.name}
          className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
          style={{ left: `${c.x}%`, top: `${c.y}%` }}
        >
          <span className={`h-2.5 w-2.5 rounded-full ring-2 ring-clear ${c.county === "king" ? "bg-ridge" : "bg-accent"}`} />
          <span className="mt-1 whitespace-nowrap text-[10px] font-medium text-horizon/80">{c.name}</span>
        </div>
      ))}
    </div>
  );
}
