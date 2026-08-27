import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import { practice } from "@/lib/data";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import StickyCall from "@/components/StickyCall";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

// Set by the deploy workflow; falls back to the practice domain so
// canonicals are never left pointing at a preview host.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.randeye.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Rand Eye Institute | LASIK, Cataract Surgery & Cross-Linking in Deerfield Beach",
    template: "%s | Rand Eye Institute",
  },
  description:
    "South Florida's leader in custom no-flap LASIK, laser cataract surgery, and corneal cross-linking. Serving Deerfield Beach and Broward County for over 50 years. Call (954) 782-1700.",
  keywords: [
    "LASIK Deerfield Beach",
    "cataract surgery Broward County",
    "corneal cross-linking Florida",
    "eye doctor Deerfield Beach",
    "retina specialist Deerfield Beach",
    "macular degeneration treatment Florida",
    "diabetic retinopathy Broward County",
    "ophthalmologist South Florida",
    "keratoconus treatment",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: practice.name,
    title: "Rand Eye Institute | Excellence in Ophthalmology",
    description:
      "Custom no-flap LASIK, laser cataract surgery, and corneal cross-linking. Serving South Florida for over 50 years.",
    images: [{ url: "/building.jpg", width: 2000, height: 1140 }],
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0066b3",
  width: "device-width",
  initialScale: 1,
};

/** Local-SEO structured data — the single highest-leverage SEO asset for a clinic. */
const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: practice.name,
  slogan: practice.tagline,
  url: siteUrl,
  telephone: practice.phone,
  image: `${siteUrl}/building.jpg`,
  logo: `${siteUrl}/logo.png`,
  foundingDate: String(practice.founded),
  medicalSpecialty: "Ophthalmologic",
  address: {
    "@type": "PostalAddress",
    streetAddress: practice.address.street,
    addressLocality: practice.address.city,
    addressRegion: practice.address.state,
    postalCode: practice.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "LASIK Laser Vision Correction" },
    { "@type": "MedicalProcedure", name: "Laser Cataract Surgery" },
    { "@type": "MedicalProcedure", name: "Corneal Cross-Linking" },
    { "@type": "MedicalProcedure", name: "Retina and Vitreous Surgery" },
    { "@type": "MedicalProcedure", name: "Macular Degeneration Treatment" },
    { "@type": "MedicalProcedure", name: "Diabetic Retinopathy Treatment" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-blue-brand focus:px-5 focus:py-3 focus:text-white focus:font-semibold"
        >
          Skip to main content
        </a>
        <SmoothScroll />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <StickyCall />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
