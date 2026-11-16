import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { galleryImages } from "@/data/gallery";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Gallery", "See El Toro Loco Family Restaurant in Whittier: our storefront, dining room, traditional Mexican dishes, and party-order banners.", "/gallery");

export default function GalleryPage() { return <><PageHero eyebrow="Photo gallery" title="A Look Inside El Toro Loco" description="Get to know our Whittier restaurant, menu, and food before your next visit." image="/images/storefront-new.webp" imageAlt="El Toro Loco Family Restaurant storefront in Whittier" /><section className="section"><div className="container"><div className="gallery-grid">{galleryImages.map((image, index) => <figure className={`gallery-item gallery-item--${image.layout}`} key={image.src}><div className="image-wrap"><Image src={image.src} alt={image.alt} fill sizes={image.layout === "banner" ? "(max-width:760px) 100vw, (max-width:1020px) 100vw, 66vw" : image.layout === "interior" ? "(max-width:760px) 100vw, 50vw" : "(max-width:760px) 100vw, (max-width:1020px) 50vw, 33vw"} priority={index < 2} /></div><figcaption>{image.label}</figcaption></figure>)}</div></div></section></>; }
