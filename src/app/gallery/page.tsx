import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { galleryImages } from "@/data/gallery";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Gallery", "See El Toro Loco in Whittier: our storefront, menu board, food counter, traditional Mexican dishes, and party-order signage.", "/gallery");

export default function GalleryPage() { return <><PageHero eyebrow="Photo gallery" title="A Look Inside El Toro Loco" description="Get to know our Telegraph Road location, menu, and food before your next visit." image="/images/storefront.png" imageAlt="El Toro Loco storefront in Whittier" /><section className="section"><div className="container"><div className="gallery-grid">{galleryImages.map((image, index) => <figure className="gallery-item" key={image.src}><div className="image-wrap"><Image src={image.src} alt={image.alt} fill sizes="(max-width:760px) 100vw, 50vw" priority={index < 2} /></div><figcaption>{image.label}</figcaption></figure>)}</div></div></section></>; }
