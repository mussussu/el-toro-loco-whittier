import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { MapIcon, PhoneIcon } from "@/components/icons";
import { LocationSection } from "@/components/location-section";
import { BusinessHours } from "@/components/business-hours";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Location & Contact", "Visit El Toro Loco Family Restaurant at 14223 Leffingwell Rd in Whittier, CA 90604. Call our main phone or mobile number for menu availability and party orders.", "/contact");

export default function ContactPage() { return <><PageHero eyebrow="Visit us" title="Location & Contact" description="Find El Toro Loco Family Restaurant on Leffingwell Road in Whittier. Call us about menu availability or party orders." image="/images/storefront.png" imageAlt="El Toro Loco Family Restaurant storefront in Whittier"><div className="button-row"><ButtonLink href={business.phones[0].href} variant="secondary"><PhoneIcon className="icon" /> Call Now</ButtonLink><ButtonLink href={business.directionsUrl} external variant="light"><MapIcon className="icon" /> Get Directions</ButtonLink></div></PageHero><section className="section-tight cream"><div className="container contact-cards"><article className="contact-card"><h2>Address</h2><address>{business.address.street}<br />{business.address.city}, {business.address.state} {business.address.zip}</address></article><article className="contact-card"><h2>Hours</h2><BusinessHours /></article><article className="contact-card"><h2>Call or Email</h2>{business.phones.map((phone) => <a href={phone.href} key={phone.href}>{phone.label === "Primary" ? "Main: " : "Mobile: "}{phone.display}</a>)}<a href={`mailto:${business.email}`}>{business.email}</a><p>For the quickest response about today’s menu, please call.</p></article></div></section><LocationSection /></>; }
