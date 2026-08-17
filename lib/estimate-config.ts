/* Instant Estimate — configuration + math.
 *
 * Approximate ballpark only (never an official quote). Roof geometry comes from
 * the Google Solar API (Building Insights); pricing uses Skyve's own $/square.
 * Tune these numbers freely — they are the only place the pricing lives. */

export const ESTIMATE_CONFIG = {
  /** Waste / overage added to measured area (12% = typical). */
  wasteFactor: 0.12,
  /** Skyve price per roofing "square" (100 sq ft) — matches the proposal tiers. */
  rates: { good: 540, better: 610, best: 750 }, // USD / square
  /** Labor multiplier by slope (steeper = more labor/safety). */
  slopeMultiplier: { flat: 1.0, shallow: 1.0, medium: 1.06, steep: 1.15 },
  /** ± spread for the displayed "approximate" range. */
  rangeSpread: 0.1,
  /** Floor so a failed/tiny measurement never shows an absurdly low number. */
  minSquares: 8,
  /** Round displayed dollars to the nearest… */
  roundTo: 100,
} as const;

export type SlopeKey = "flat" | "shallow" | "medium" | "steep";

export const SLOPE_LABELS: Record<SlopeKey, string> = {
  flat: "Flat",
  shallow: "Shallow",
  medium: "Medium",
  steep: "Steep",
};

const M2_TO_FT2 = 10.7639;

/** Map an average roof pitch (degrees) to a slope bucket. */
export function pitchToSlope(pitchDegrees: number): SlopeKey {
  if (pitchDegrees < 7) return "flat";
  if (pitchDegrees < 20) return "shallow";
  if (pitchDegrees < 34) return "medium";
  return "steep";
}

const round = (n: number, to: number) => Math.round(n / to) * to;

export type TierEstimate = { low: number; mid: number; high: number };
export type EstimateResult = {
  areaSqft: number;
  squares: number;
  slope: SlopeKey;
  tiers: { good: TierEstimate; better: TierEstimate; best: TierEstimate };
};

/** Compute the approximate estimate from a roof area (m²) and slope. */
export function computeEstimate(areaMeters2: number, slope: SlopeKey): EstimateResult {
  const areaSqft = Math.round(areaMeters2 * M2_TO_FT2);
  const rawSquares = (areaMeters2 * M2_TO_FT2) / 100;
  const squares = Math.max(rawSquares, ESTIMATE_CONFIG.minSquares);
  const effSquares = squares * (1 + ESTIMATE_CONFIG.wasteFactor) * ESTIMATE_CONFIG.slopeMultiplier[slope];

  const tier = (rate: number): TierEstimate => {
    const mid = effSquares * rate;
    return {
      low: round(mid * (1 - ESTIMATE_CONFIG.rangeSpread), ESTIMATE_CONFIG.roundTo),
      mid: round(mid, ESTIMATE_CONFIG.roundTo),
      high: round(mid * (1 + ESTIMATE_CONFIG.rangeSpread), ESTIMATE_CONFIG.roundTo),
    };
  };

  return {
    areaSqft,
    squares: Math.round(squares * 10) / 10,
    slope,
    tiers: {
      good: tier(ESTIMATE_CONFIG.rates.good),
      better: tier(ESTIMATE_CONFIG.rates.better),
      best: tier(ESTIMATE_CONFIG.rates.best),
    },
  };
}
