/* Photo: renders a real image when `src` is given. When `src` is empty, it
   resolves a real photo from the seed — first an exact seed→file map, then a
   keyword fallback — so page slots show branded photography, not a gradient.
   (Only falls back to the gradient texture if nothing at all resolves.) */

const IMG = (n: string) => `/images/${n}.webp`;

/* exact seed → generated photo (see public/images + the Photo Requirements Map) */
const SEED_MAP: Record<string, string> = {
  // paid-traffic landing page (/free-estimate)
  "lp-hero": "hero-home-dusk-1", "lp-cta": "hero-home-dusk-3",
  // heroes (dusk homes)
  "faq-hero": "hero-home-dusk-1", "projects-hero": "hero-home-dusk-1", "login-hero": "hero-home-dusk-1",
  "legal-hero": "hero-home-dusk-1", "reviews-hero": "hero-home-dusk-1", "service-area-hero": "hero-home-dusk-1",
  "warranty-hero": "hero-home-dusk-1", "safety-hero": "crew-1",
  "warranty-register-hero": "hero-home-dusk-2", "licenses-hero": "hero-home-dusk-2", "ftc-hero": "hero-home-dusk-2",
  "cert-hero": "hero-home-dusk-3",
  // portal
  "portal-house": "portal-home", "portal-promo": "hero-home-dusk-2",
  "roof-3d": "home-3d-cutaway", "passport-3d": "home-3d-cutaway", "myhome-3d": "home-3d-cutaway",
  // ctas / secondary
  "warranty-cta": "hero-home-dusk-3", "revoke-cta": "hero-home-dusk-2", "release-cta": "hero-home-dusk-3",
  "warranty-register": "roof-replacement-1", "res-featured": "roof-replacement-1",
  "cert-commitment": "crew-1", "safety-commit": "crew-2", "safety-action": "crew-3", "licenses-safety": "crew-1",
  "reviews-video": "roof-replacement-3",
  // ftc
  "ftc-earn": "crew-3", "ftc-choices": "truck-1",
  // selections + chat
  "sel-before": "roof-before-1", "sel-after": "roof-replacement-1",
  "msg1": "roof-replacement-2", "msg2": "deck-2", "msg3": "roof-replacement-3",
};

/* keyword fallback for dynamic contexts (project titles, photo labels, city
   names, service titles…). `k` is a stable string used to vary generic homes. */
function keywordPhoto(s: string, k: string): string {
  const has = (...w: string[]) => w.some((x) => s.includes(x));
  const homeVar = () => `home-day-${1 + (hash(k) % 4)}`;
  if (has("before", "demolition", "old", "worn", "tear off", "tear-off")) return "roof-before-1";
  if (has("after")) return "roof-replacement-1";
  if (has("metal", "standing seam")) return "material-metal-1";
  if (has("cedar")) return "material-cedar";
  if (has("synthetic", "composite")) return "material-synthetic";
  if (has("tpo", "pvc", "low-slope", "low slope", "flat roof")) return "material-flat";
  if (has("luxury", "designer", "premium")) return "material-luxury";
  if (has("asphalt", "architectural")) return "material-asphalt";
  if (has("siding", "fiber cement", "fiber-cement")) return "siding-2";
  if (has("paint")) return "painting-1";
  if (has("gutter")) return "gutters-1";
  if (has("skylight")) return "skylight-1";
  if (has("deck")) return "deck-2";
  if (has("storm", "wind", "hail", "emergency", "tarp", "temporary cover")) return "storm-damage-1";
  if (has("clean", "wash", "moss", "algae")) return "roof-cleaning-1";
  if (has("inspect", "drone")) return "roof-inspection-1";
  if (has("vent", "attic", "insulation")) return "attic-1";
  if (has("interior", "framing", "finish", "plumb", "electr")) return "interior-1";
  if (has("material", "delivery", "underlayment")) return "roof-replacement-2";
  if (has("crew", "team", "install", "worker", "labor")) return "crew-1";
  if (has("truck", "van", "fleet")) return "truck-1";
  if (has("repair", "leak", "damage", "structural")) return "roof-repair-1";
  if (has("maintenance", "maintain", "tune")) return "roof-maintenance-1";
  if (has("shingle", "replacement", "certif")) return "roof-replacement-1";
  if (has("skyline", "aerial", "neighborhood", "area", "region", "county")) return "home-day-4";
  if (has("roof")) return "roof-replacement-1";
  return homeVar(); // homes, cities, and anything generic — varied across 4 shots
}

/* old placeholder stock lives at /images/<numeric-id>.jpg; new branded photos
   at /images/<name>.webp. Remap empty + old-stock slots to branded photos. */
const isStock = (s: string) => /^\/images\/\d/.test(s);

function resolvePhoto(src?: string, seed?: string, alt?: string): string {
  if (src && !isStock(src)) return src; // already a branded / external image
  if (seed && SEED_MAP[seed]) return IMG(SEED_MAP[seed]);
  const key = `${seed ?? ""} ${alt ?? ""}`.trim();
  if (key) return IMG(keywordPhoto(key.toLowerCase(), key));
  if (src && isStock(src)) return IMG("home-day-2"); // stock w/ no context → branded default
  return src ?? ""; // truly nothing → gradient
}

/* For raw <img> heroes/CTAs that can't use <Photo>: resolve a possibly-stock
   src to a branded photo, using `hint` (page/service/city name) for the match. */
export function resolveImg(src?: string, hint?: string): string {
  return resolvePhoto(src, undefined, hint) || IMG("home-day-2");
}

const TONES = [
  "from-[#2b3138] to-[#11161b]", // charcoal shingle
  "from-[#3c4a52] to-[#1b2a32]", // slate
  "from-[#4a3b2f] to-[#241c16]", // weathered cedar
  "from-[#33424a] to-[#0f1b22]", // storm gray-blue
  "from-[#52453a] to-[#2a221b]", // brown
  "from-[#2e3b3a] to-[#141d1d]", // moss green-gray
];

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export function Photo({
  src,
  seed,
  alt = "",
  priority = false,
  className = "",
  children,
}: {
  src?: string;
  seed?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  const tone = TONES[hash(seed ?? src ?? "x") % TONES.length];
  const resolved = resolvePhoto(src, seed, alt);
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${tone} ${className}`}
    >
      {resolved ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={resolved}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0 1px, transparent 1px 9px)",
          }}
        />
      )}
      {children}
    </div>
  );
}
