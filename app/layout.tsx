import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/company";
import { SITE_URL } from "@/lib/launch-phase";
import { Attribution } from "@/components/shared/Attribution";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const TITLE = `${COMPANY.name} | ${COMPANY.taglines.master}`;
const DESCRIPTION =
  "Get a professional roof estimate in less than 60 seconds. Aerial measurements, local pricing, and real project history. Serving King & Snohomish County, WA.";

/** WhatsApp / iMessage / social link-preview card (1200×630). */
const OG_IMAGE = {
  url: "/og-share.png",
  width: 1200,
  height: 630,
  alt: `${COMPANY.shortName} Roofing & Exteriors — ${COMPANY.taglines.master}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${COMPANY.shortName} Roofing`,
  },
  description: DESCRIPTION,
  applicationName: COMPANY.shortName,
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  keywords: [
    "roofing",
    "Seattle roofing",
    "King County",
    "Snohomish County",
    "roof estimate",
    "Skyve",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description:
      "The roofing intelligence platform for Washington homeowners. Itemized estimates, real projects, honest pricing.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: COMPANY.name,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-clear text-ink-90">
        <Attribution />
        {children}
      </body>
    </html>
  );
}
