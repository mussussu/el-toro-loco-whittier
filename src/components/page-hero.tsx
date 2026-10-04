import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, description, image, imageAlt, children }: { eyebrow: string; title: string; description: string; image: string; imageAlt: string; children?: ReactNode }) {
  return <section className="page-hero"><Image src={image} alt={imageAlt} fill priority sizes="100vw" /><div className="hero-shade" /><div className="container page-hero-content"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><p>{description}</p>{children}</div></section>;
}
