/* Roof configurator — material categories (Good/Better/Best) + add-ons + pricing.
 *
 * Pricing sources:
 *  • Add-ons marked (SKYVE) are real prices from Fabricio.
 *  • Material $/square and skylight prices are MARKET estimates (2026, Seattle-
 *    adjusted) pending Skyve's confirmation. The UI shows a "Sample pricing" note
 *    while CONFIG_IS_PLACEHOLDER is true. */

export const CONFIG_IS_PLACEHOLDER = true;

export type Grade = "Good" | "Better" | "Best";
export type Tier = { grade: Grade; name: string; perSquare: number };
export type Category = { id: string; label: string; swatch: string; tiers: Tier[] };

// "Supply" = material category (Airbnb-style top menu). MARKET estimates.
export const CONFIG_CATEGORIES: Category[] = [
  {
    id: "asphalt", label: "Asphalt Shingles", swatch: "#3a3d43",
    tiers: [
      { grade: "Good", name: "3-Tab / Basic", perSquare: 560 },
      { grade: "Better", name: "Architectural (Landmark)", perSquare: 690 },
      { grade: "Best", name: "Designer (NorthGate)", perSquare: 890 },
    ],
  },
  {
    id: "metal", label: "Metal", swatch: "#5b6068",
    tiers: [
      { grade: "Good", name: "Ribbed / Corrugated", perSquare: 920 },
      { grade: "Better", name: "Standing Seam", perSquare: 1210 },
      { grade: "Best", name: "Premium / Stone-Coated", perSquare: 1520 },
    ],
  },
  {
    id: "cedar", label: "Cedar Shake", swatch: "#6b5335",
    tiers: [
      { grade: "Good", name: "Cedar Shingle", perSquare: 1150 },
      { grade: "Better", name: "Hand-Split Shake", perSquare: 1420 },
      { grade: "Best", name: "Premium Shake", perSquare: 1780 },
    ],
  },
  {
    id: "tile", label: "Tile", swatch: "#8a4a34",
    tiers: [
      { grade: "Good", name: "Concrete Tile", perSquare: 1020 },
      { grade: "Better", name: "Clay Tile", perSquare: 1330 },
      { grade: "Best", name: "Premium Clay", perSquare: 1690 },
    ],
  },
  {
    id: "flat", label: "Flat / Low-Slope", swatch: "#4a4e52",
    tiers: [
      { grade: "Good", name: "TPO Membrane", perSquare: 720 },
      { grade: "Better", name: "PVC Membrane", perSquare: 940 },
      { grade: "Best", name: "Premium PVC", perSquare: 1180 },
    ],
  },
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

// ── Add-on pricing ──────────────────────────────────────────────────────────
export const PRICING = {
  gutterPerFoot: 11.5, // (SKYVE) $/linear ft
  fasciaPerFoot: 11.5, // (SKYVE) $/linear ft
  plywoodPerSheet: 85, // (SKYVE) $/sheet
  plywoodBulkPerSheet: 75, // (SKYVE) $/sheet when replacing > 20 sheets
  plywoodBulkOver: 20,
  ventilation: 540, // (SKYVE) ridge-vent upgrade, flat
  chimney: 480, // PLACEHOLDER
  iceWater: 450, // PLACEHOLDER
  underlayment: 380, // PLACEHOLDER
};

// Skylight REPLACEMENT only (market estimates). New installs need an inspection.
export const SKYLIGHT_SIZES: { id: string; label: string; price: number }[] = [
  { id: "2x2", label: "2×2 ft", price: 1200 },
  { id: "2x4", label: "2×4 ft", price: 2400 },
  { id: "4x4", label: "4×4 ft", price: 3200 },
];

// Estimate eave/roofline length from the footprint perimeter (customer adjusts).
export const GUTTER_PERIMETER_FACTOR = 0.6; // eaves ≈ 60% of the outline
export const FASCIA_PERIMETER_FACTOR = 0.9; // fascia runs most edges

export const TAX_RATE = 0.102; // King County, WA — PLACEHOLDER, confirm
export const FINANCE = { apr: 0.0799, termMonths: 84 }; // PLACEHOLDER

/** Plywood cost — Skyve's tier: $85/sheet, or $75/sheet when replacing >20. */
export function plywoodCost(sheets: number): number {
  if (sheets <= 0) return 0;
  const rate = sheets > PRICING.plywoodBulkOver ? PRICING.plywoodBulkPerSheet : PRICING.plywoodPerSheet;
  return sheets * rate;
}

export type Selection = {
  categoryId: string;
  grade: Grade;
  gutters: number | null; // linear ft, null = not included
  fascia: number | null;
  ventilation: boolean;
  chimney: boolean;
  iceWater: boolean;
  underlayment: boolean;
  plywoodSheets: number; // 0 = as-needed (not budgeted)
  skylightSizeId: string;
  skylightQty: number; // 0 = none
};

export type ConfigLine = { id: string; label: string; amount: number; note?: string };
export type ConfigResult = {
  category: Category;
  tier: Tier;
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

/** Live estimate from the measured roof (squares + perimeter) and the selection. */
export function computeConfig(squares: number, sel: Selection): ConfigResult {
  const category = CONFIG_CATEGORIES.find((c) => c.id === sel.categoryId) || CONFIG_CATEGORIES[0];
  const tier = category.tiers.find((t) => t.grade === sel.grade) || category.tiers[1];

  const lines: ConfigLine[] = [
    { id: "material", label: `${category.label} — ${tier.grade}`, amount: round10(squares * tier.perSquare) },
  ];

  if (sel.gutters && sel.gutters > 0)
    lines.push({ id: "gutters", label: "Gutters & Downspouts", amount: Math.round(sel.gutters * PRICING.gutterPerFoot), note: `~${sel.gutters} ft` });
  if (sel.fascia && sel.fascia > 0)
    lines.push({ id: "fascia", label: "Fascia & Trim Wrap", amount: Math.round(sel.fascia * PRICING.fasciaPerFoot), note: `~${sel.fascia} ft` });
  if (sel.skylightQty > 0) {
    const size = SKYLIGHT_SIZES.find((s) => s.id === sel.skylightSizeId) || SKYLIGHT_SIZES[1];
    lines.push({ id: "skylight", label: "Skylight Replacement", amount: size.price * sel.skylightQty, note: `${sel.skylightQty} × ${size.label}` });
  }
  if (sel.plywoodSheets > 0)
    lines.push({ id: "plywood", label: "Plywood Replacement", amount: plywoodCost(sel.plywoodSheets), note: `${sel.plywoodSheets} sheets` });
  if (sel.ventilation) lines.push({ id: "ventilation", label: "Roof Ventilation (Ridge Vents)", amount: PRICING.ventilation });
  if (sel.chimney) lines.push({ id: "chimney", label: "Chimney Flashing / Cap", amount: PRICING.chimney });
  if (sel.iceWater) lines.push({ id: "icewater", label: "Ice & Water Shield Upgrade", amount: PRICING.iceWater });
  if (sel.underlayment) lines.push({ id: "underlayment", label: "Synthetic Underlayment Upgrade", amount: PRICING.underlayment });

  const subtotal = lines.reduce((t, l) => t + l.amount, 0);
  const tax = Math.round(subtotal * TAX_RATE);
  const total = subtotal + tax;
  return { category, tier, lines, subtotal, tax, total, monthly: financeMonthly(total) };
}
