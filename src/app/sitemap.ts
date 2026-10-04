import type { MetadataRoute } from "next";
import { business } from "@/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/menu", "/catering", "/gallery", "/about", "/contact"].map((path) => ({ url: `${business.domain}${path}`, changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path === "/menu" ? .9 : .7 }));
}
