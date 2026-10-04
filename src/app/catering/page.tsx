import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { PhoneIcon } from "@/components/icons";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Comida Para Tus Fiestas", "Call El Toro Loco in Whittier about menudo, carnitas, barbacoa, carnitas trays, and fish ceviche trays for parties and special gatherings.", "/catering");

const choices = [["Menudo", "Para sus fiestas"],["Carnitas", "Para sus fiestas"],["Barbacoa", "Para sus fiestas"],["Charolas de Carnitas", "Party trays"],["Charolas de Ceviche de Pescado", "Fish ceviche trays"]] as const;

export default function CateringPage() { return <><PageHero eyebrow="Para fiestas" title="Comida Para Tus Fiestas" description="Bring El Toro Loco favorites to your next party or special gathering. Call us to discuss availability and current pricing." image="/images/party-food-signage.png" imageAlt="El Toro Loco signs advertising food for parties"><div className="button-row"><ButtonLink href={business.phones[0].href} variant="secondary"><PhoneIcon className="icon" /> Call for Party Orders</ButtonLink></div></PageHero><section className="section cream"><div className="container content-grid"><div className="prose"><p className="eyebrow">Party-order favorites</p><h2>Made for Sharing</h2><p>Choose from the party-order dishes confirmed on our restaurant signage. Please call ahead so the team can confirm what is available and share current pricing.</p><div className="catering-grid">{choices.map(([name, note]) => <article className="catering-card" key={name}><h3>{name}</h3><span>{note}</span></article>)}</div></div><div className="content-image"><Image src="/images/food-counter.png" alt="Prepared food at the El Toro Loco counter" fill sizes="(max-width:760px) 100vw, 45vw" /></div></div></section><section className="section"><div className="container"><div className="callout"><div><p className="eyebrow light">Plan your order</p><h2>Call for Availability & Current Pricing</h2><p>Tray sizes, lead time, and availability can vary. Call the restaurant directly to plan your order.</p></div><ButtonLink href={business.phones[0].href} variant="secondary"><PhoneIcon className="icon" /> {business.phones[0].display}</ButtonLink></div></div></section></>; }
