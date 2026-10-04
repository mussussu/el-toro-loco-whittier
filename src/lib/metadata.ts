import type { Metadata } from "next";
import { business } from "@/data/business";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: business.name, type: "website", images: [{ url: "/images/storefront.png", width: 1448, height: 1086, alt: `${business.name} storefront` }] },
    twitter: { card: "summary_large_image", title, description, images: ["/images/storefront.png"] },
  };
}
