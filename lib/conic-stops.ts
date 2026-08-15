/** Build CSS conic-gradient color stops from percent segments (immutable). */
export function conicStops(
  segments: ReadonlyArray<{ color: string; pct: number }>,
  opts?: { normalizeTo100?: boolean }
): string[] {
  const total = segments.reduce((n, s) => n + s.pct, 0) || 1;
  const normalize = opts?.normalizeTo100 !== false;

  return segments.reduce<{ acc: number; stops: string[] }>(
    (state, s) => {
      const from = normalize ? (state.acc / total) * 100 : state.acc;
      const acc = state.acc + s.pct;
      const to = normalize ? (acc / total) * 100 : acc;
      return {
        acc,
        stops: [...state.stops, `${s.color} ${from}% ${to}%`],
      };
    },
    { acc: 0, stops: [] }
  ).stops;
}
