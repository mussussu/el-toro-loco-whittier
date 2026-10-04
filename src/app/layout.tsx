import type { Metadata } from "next";
import { business } from "@/data/business";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileActionBar } from "@/components/mobile-action-bar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: { default: "El Toro Loco | Mexican Restaurant in Whittier, CA", template: "%s | El Toro Loco" },
  description: "El Toro Loco is a Mexican restaurant in Whittier serving carnitas, menudo, barbacoa, birria de chivo, tamales, carne asada and handmade tortillas. Visit us on Telegraph Rd.",
  alternates: { canonical: "/" },
  openGraph: { title: "El Toro Loco | Mexican Restaurant in Whittier, CA", description: business.description, url: "/", siteName: business.name, type: "website", locale: "en_US", images: [{ url: "/images/storefront.png", width: 1448, height: 1086, alt: "El Toro Loco storefront in Whittier" }] },
  twitter: { card: "summary_large_image", title: "El Toro Loco | Mexican Restaurant in Whittier, CA", description: business.description, images: ["/images/storefront.png"] },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  url: business.domain,
  image: `${business.domain}/images/storefront.png`,
  email: business.email,
  telephone: business.phones[0].display,
  servesCuisine: "Mexican",
  hasMenu: `${business.domain}/menu`,
  openingHoursSpecification: business.hours.map((hours) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: hours.days.map((day) => `https://schema.org/${day}`),
    opens: hours.opens,
    closes: hours.closes,
  })),
  address: { "@type": "PostalAddress", streetAddress: business.address.street, addressLocality: business.address.city, addressRegion: business.address.state, postalCode: business.address.zip, addressCountry: "US" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /><MobileActionBar /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /></body></html>;
}
