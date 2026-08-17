/* Instant Estimate — configuration + math.
 *
 * Approximate ballpark only (never an official quote). Roof geometry comes from
 * the Google Solar API (Building Insights); pricing uses Skyve's own $/square.
 * Tune these numbers freely — they are the only place the pricing lives. */

export const ESTIMATE_CONFIG = {
  /** Skyve price per roofing "square" (100 sq ft) — matches the proposal tiers. */
  rates: { good: 540, better: 610, best: 750 }, // USD / square

  /** Solar → real-report calibration. Google Solar under-measures ~5-7% vs
   *  EagleView/Hover (worse on steep roofs — it misses small/steep facets).
   *  Derived from 9 real Skyve measurement reports (2026-08). */
  solarCalibration: { flat: 1.07, shallow: 1.07, medium: 1.07, steep: 1.15 },

  /** Labor multiplier by slope (steeper = more labor/safety/staging). */
  slopeMultiplier: { flat: 1.0, shallow: 1.0, medium: 1.06, steep: 1.15 },

  /** MATERIAL waste, driven by roof complexity (facet count from Solar). More
   *  facets ⇒ more hips/valleys ⇒ more cut waste. */
  wasteBase: { simple: 0.08, moderate: 0.12, complex: 0.16, veryComplex: 0.2 },
  /** Extra waste from slope (steeper cuts waste a bit more material). */
  wasteSlopeBump: { flat: 0, shallow: 0, medium: 0.01, steep: 0.03 },

  /** Displayed range half-width WIDENS with uncertainty (complexity), so a
   *  complex roof honestly signals "final depends on inspection". */
  rangeSpread: { simple: 0.08, moderate: 0.1, complex: 0.13, veryComplex: 0.16 },

  /** Floor so a failed/tiny measurement never shows an absurdly low number. */
  minSquares: 8,
  /** Round displayed dollars to the nearest… */
  roundTo: 100,
} as const;

export type SlopeKey = "flat" | "shallow" | "medium" | "steep";
export type Complexity = "simple" | "moderate" | "complex" | "veryComplex";

export const SLOPE_LABELS: Record<SlopeKey, string> = {
  flat: "Flat",
  shallow: "Shallow",
  medium: "Medium",
  steep: "Steep",
};

export const COMPLEXITY_LABELS: Record<Complexity, string> = {
  simple: "Simple roof",
  moderate: "Moderate roof",
  complex: "Complex roof",
  veryComplex: "Very complex roof",
};

const M2_TO_FT2 = 10.7639;

/** Map an average roof pitch (degrees) to a slope bucket. */
export function pitchToSlope(pitchDegrees: number): SlopeKey {
  if (pitchDegrees < 7) return "flat";
  if (pitchDegrees < 20) return "shallow";
  if (pitchDegrees < 34) return "medium";
  return "steep";
}

/** Map the number of roof facets (from Solar) to a complexity bucket. */
export function segmentsToComplexity(facets: number): Complexity {
  if (facets <= 2) return "simple";
  if (facets <= 5) return "moderate";
  if (facets <= 9) return "complex";
  return "veryComplex";
}

const round = (n: number, to: number) => Math.round(n / to) * to;

export type TierEstimate = { low: number; mid: number; high: number };
export type EstimateResult = {
  areaSqft: number;
  squares: number;
  slope: SlopeKey;
  facets: number;
  complexity: Complexity;
  wastePct: number; // e.g. 0.14 → show as 14%
  tiers: { good: TierEstimate; better: TierEstimate; best: TierEstimate };
};

/** Compute the approximate estimate from roof area (m²), slope and facet count. */
export function computeEstimate(areaMeters2: number, slope: SlopeKey, facets: number): EstimateResult {
  const complexity = segmentsToComplexity(facets);
  const waste = ESTIMATE_CONFIG.wasteBase[complexity] + ESTIMATE_CONFIG.wasteSlopeBump[slope];
  const spread = ESTIMATE_CONFIG.rangeSpread[complexity];

  // Calibrate the raw Solar area up to match real measurement reports.
  const calibratedM2 = areaMeters2 * ESTIMATE_CONFIG.solarCalibration[slope];
  const areaSqft = Math.round(calibratedM2 * M2_TO_FT2);
  const rawSquares = (calibratedM2 * M2_TO_FT2) / 100;
  const squares = Math.max(rawSquares, ESTIMATE_CONFIG.minSquares);
  const effSquares = squares * (1 + waste) * ESTIMATE_CONFIG.slopeMultiplier[slope];

  const tier = (rate: number): TierEstimate => {
    const mid = effSquares * rate;
    return {
      low: round(mid * (1 - spread), ESTIMATE_CONFIG.roundTo),
      mid: round(mid, ESTIMATE_CONFIG.roundTo),
      high: round(mid * (1 + spread), ESTIMATE_CONFIG.roundTo),
    };
  };

  return {
    areaSqft,
    squares: Math.round(squares * 10) / 10,
    slope,
    facets,
    complexity,
    wastePct: Math.round(waste * 100) / 100,
    tiers: {
      good: tier(ESTIMATE_CONFIG.rates.good),
      better: tier(ESTIMATE_CONFIG.rates.better),
      best: tier(ESTIMATE_CONFIG.rates.best),
    },
  };
}
