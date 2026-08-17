/* Roof configurator — materials, add-ons and live pricing.
 *
 * ⚠️ PLACEHOLDER PRICING. Every number here is a sample so we can build and
 * review the flow. Replace with Skyve's real installed prices before launch
 * (per-square material costs, add-on prices, tax rate, financing terms). The UI
 * shows a visible "Sample pricing" note while these are placeholders. */

export const CONFIG_IS_PLACEHOLDER = true;

export type Material = {
  id: string;
  brand: string;
  name: string;
  tier: string;
  perSquare: number; // installed $ per measured square (100 sq ft) — PLACEHOLDER
  swatch: string; // thumbnail color stand-in (no brand imagery)
};

// Tuned so a ~26-square roof lands near common shingle totals — PLACEHOLDER.
export const CONFIG_MATERIALS: Material[] = [
  { id: "landmark", brand: "CertainTeed", name: "Landmark", tier: "Architectural Shingles", perSquare: 665, swatch: "#33363c" },
  { id: "northgate", brand: "CertainTeed", name: "NorthGate", tier: "Designer Shingles", perSquare: 735, swatch: "#26292f" },
  { id: "vista", brand: "Malarkey", name: "Vista", tier: "Premium Shingles", perSquare: 700, swatch: "#463f37" },
  { id: "metal", brand: "Metal", name: "Standing Seam", tier: "Metal Roofing", perSquare: 1030, swatch: "#565b62" },
];

export const CONFIG_COLORS: { name: string; hex: string }[] = [
  { name: "Moire Black", hex: "#2b2d31" },
  { name: "Charcoal", hex: "#3f4248" },
  { name: "Slate Gray", hex: "#565b64" },
  { name: "Pewter", hex: "#7d828a" },
  { name: "Weathered Wood", hex: "#6b5d4f" },
  { name: "Driftwood", hex: "#8a7f6d" },
  { name: "Burnt Sienna", hex: "#6e4636" },
  { name: "Hunter Green", hex: "#39473d" },
];

export type Addon =
  | { id: string; name: string; desc: string; type: "toggle"; price: number; note?: string }
  | { id: string; name: string; desc: string; type: "qty"; price: number; unit: string }
  | { id: string; name: string; desc: string; type: "select"; options: { label: string; price: number; note?: string }[] };

// PLACEHOLDER prices + list, mirroring the mockup.
export const CONFIG_ADDONS: Addon[] = [
  { id: "gutters", name: "Gutters & Downspouts", desc: '5" Seamless Aluminum', type: "toggle", price: 1240, note: "Black" },
  { id: "fascia", name: "Fascia & Trim Wrap", desc: "Aluminum Wrap", type: "toggle", price: 1080, note: "White" },
  { id: "skylight", name: "Skylight Replacement / Install", desc: "Velux Fixed Skylight", type: "qty", price: 760, unit: "skylight" },
  { id: "chimney", name: "Chimney Flashing / Cap", desc: "New flashing + stainless cap", type: "toggle", price: 480 },
  {
    id: "plywood", name: "Plywood Replacement", desc: "Replace damaged plywood", type: "select",
    options: [
      { label: "Replace as needed", price: 0, note: "Included" },
      { label: "5 Sheets", price: 750 },
      { label: "10 Sheets", price: 1400 },
      { label: "20 Sheets", price: 2350 },
      { label: "Full Roof", price: 3850 },
    ],
  },
  { id: "ventilation", name: "Roof Ventilation Upgrade", desc: "Increase attic ventilation", type: "toggle", price: 740 },
  { id: "icewater", name: "Ice & Water Shield Upgrade", desc: "High-temp underlayment", type: "toggle", price: 450 },
  { id: "underlayment", name: "Synthetic Underlayment Upgrade", desc: "Upgrade from felt", type: "toggle", price: 380 },
];

export const TAX_RATE = 0.102; // King County, WA — PLACEHOLDER, confirm
export const FINANCE = { apr: 0.0799, termMonths: 84 }; // PLACEHOLDER

export type AddonSelection = Record<string, boolean | number>;

export type ConfigLine = { id: string; label: string; amount: number; note?: string };
export type ConfigResult = {
  material: Material;
  lines: ConfigLine[];
  subtotal: number;
  tax: number;
  total: number;
  monthly: number;
};

const round10 = (n: number) => Math.round(n / 10) * 10;

function financeMonthly(total: number): number {
  const r = FINANCE.apr / 12;
  const n = FINANCE.termMonths;
  if (r === 0) return Math.round(total / n);
  return Math.round((total * r) / (1 - Math.pow(1 + r, -n)));
}

/** Live estimate from the measured squares + the chosen material and add-ons. */
export function computeConfig(squares: number, materialId: string, addons: AddonSelection): ConfigResult {
  const material = CONFIG_MATERIALS.find((m) => m.id === materialId) || CONFIG_MATERIALS[0];
  const lines: ConfigLine[] = [
    { id: "material", label: `${material.brand} ${material.name}`, amount: round10(squares * material.perSquare) },
  ];

  for (const a of CONFIG_ADDONS) {
    const sel = addons[a.id];
    if (a.type === "toggle" && sel) {
      lines.push({ id: a.id, label: a.name, amount: a.price, note: a.note });
    } else if (a.type === "qty" && typeof sel === "number" && sel > 0) {
      lines.push({ id: a.id, label: a.name, amount: a.price * sel, note: `${sel} ${a.unit}${sel > 1 ? "s" : ""}` });
    } else if (a.type === "select" && typeof sel === "number") {
      const opt = a.options[sel];
      if (opt) lines.push({ id: a.id, label: a.name, amount: opt.price, note: opt.note || opt.label });
    }
  }

  const subtotal = lines.reduce((t, l) => t + l.amount, 0);
  const tax = Math.round(subtotal * TAX_RATE);
  const total = subtotal + tax;
  return { material, lines, subtotal, tax, total, monthly: financeMonthly(total) };
}
