import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { LocationSection } from "@/components/location-section";
import { ArrowIcon, MapIcon, PhoneIcon } from "@/components/icons";
import { business } from "@/data/business";

const specialties = [
  ["Carnitas", "Tender pork served in the formats listed on our restaurant menu."],
  ["Menudo", "A traditional favorite and a popular choice for party orders."],
  ["Barbacoa de Res", "Beef barbacoa offered in tacos, burritos, quesadillas, plates, and by the pound."],
  ["Birria de Chivo", "Goat birria offered in tacos, burritos, quesadillas, plates, and by the pound."],
  ["Tamales", "Elote, pollo, and puerco varieties listed on our menu."],
  ["Tortillas Hechas a Mano", "Handmade tortillas—the perfect companion to a traditional meal."],
] as const;

const previewItems = [
  ["Birria de Chivo", "Tacos · Burritos · Quesadillas · Platillos · Por libra"],
  ["Carnitas", "Tacos · Burritos · Quesadillas · Platillos · Por libra"],
  ["Menudo & Pozole", "Traditional dishes"],
  ["Tamales", "Elote · Pollo · Puerco"],
  ["Carne Asada Plate", "Platillo"],
  ["Chile Relleno", "Platillo"],
] as const;

export default function Home() {
  return <>
    <section className="hero">
      <Image src="/images/storefront.png" alt="El Toro Loco Mexican restaurant storefront in Whittier" fill priority sizes="100vw" />
      <div className="hero-overlay" />
      <div className="container hero-content"><div className="hero-kicker">Whittier, California</div><h1>El Toro Loco<span>Authentic Mexican Food in Whittier</span></h1><p className="hero-copy">Carnitas • Menudo • Barbacoa • Birria • Tamales • Handmade Tortillas</p><div className="button-row hero-actions"><ButtonLink href="/menu" variant="secondary">View Menu <ArrowIcon className="icon" /></ButtonLink><ButtonLink href={business.phones[0].href} variant="light"><PhoneIcon className="icon" /> Call Now</ButtonLink><ButtonLink href={business.directionsUrl} external variant="outline"><MapIcon className="icon" /> Get Directions</ButtonLink></div></div>
    </section>

    <section className="section"><div className="container"><div className="section-heading"><div><p className="eyebrow">Local favorites</p><h2>Bold, Traditional Flavors</h2></div><p className="lead">Explore the dishes that bring people to El Toro Loco—from carnitas and barbacoa to weekend favorites and handmade tortillas.</p></div><div className="specialty-grid">{specialties.map(([name, description], index) => <article className="specialty-card" data-number={`0${index + 1}`} key={name}><h3>{name}</h3><p>{description}</p></article>)}</div></div></section>

    <section className="section tortilla-feature"><div className="container tortilla-grid"><div><p className="eyebrow light">Acompaña tu comida</p><h2>Tortillas Hechas a Mano<span>Handmade Tortillas</span></h2><p>Traditional meals deserve a proper tortilla. Ask about our handmade tortillas when you call or visit.</p><ButtonLink href={business.phones[0].href} variant="secondary"><PhoneIcon className="icon" /> Call El Toro Loco</ButtonLink></div><div className="tortilla-visual"><Image src="/images/menu-board.png" alt="El Toro Loco menu board highlighting handmade tortillas" fill sizes="(max-width: 760px) 100vw, 50vw" /></div></div></section>

    <section className="section cream"><div className="container"><div className="section-heading"><div><p className="eyebrow">Our menu</p><h2>There’s Plenty to Choose From</h2></div><ButtonLink href="/menu" variant="outline">View Full Menu <ArrowIcon className="icon" /></ButtonLink></div><div className="menu-preview-grid"><div className="menu-photo"><Image src="/images/food-counter.png" alt="A selection of prepared Mexican food at El Toro Loco" fill sizes="(max-width: 760px) 100vw, 55vw" /></div><div className="menu-list">{previewItems.map(([name, format]) => <div className="menu-list-item" key={name}><strong>{name}</strong><span>{format}</span></div>)}<div style={{marginTop:"1.2rem"}}><ButtonLink href="/menu">See Everything <ArrowIcon className="icon" /></ButtonLink></div></div></div></div></section>

    <section className="section fiestas"><div className="container fiestas-grid"><div className="fiestas-photo"><Image src="/images/party-food-signage.png" alt="El Toro Loco exterior food display and party-order sign" fill sizes="(max-width: 760px) 100vw, 45vw" /></div><div><p className="eyebrow light">Para tus reuniones</p><h2>Comida Para Tus Fiestas</h2><p>Ask about party orders featuring El Toro Loco favorites. Call for availability and current pricing.</p><ul className="check-list"><li>Menudo</li><li>Carnitas</li><li>Barbacoa</li><li>Charolas de Carnitas</li><li>Charolas de Ceviche de Pescado</li></ul><div className="button-row"><ButtonLink href={business.phones[0].href} variant="secondary"><PhoneIcon className="icon" /> Call for Party Orders</ButtonLink><ButtonLink href="/catering" variant="outline">Learn More</ButtonLink></div></div></div></section>

    <section className="section"><div className="container"><div className="section-heading"><div><p className="eyebrow">Inside El Toro Loco</p><h2>See What’s Cooking</h2></div><ButtonLink href="/gallery" variant="outline">View Gallery <ArrowIcon className="icon" /></ButtonLink></div><div className="gallery-preview"><figure><Image src="/images/storefront.png" alt="El Toro Loco storefront" fill sizes="(max-width:760px) 100vw, 50vw" /></figure><figure><Image src="/images/food-counter.png" alt="El Toro Loco food counter" fill sizes="(max-width:760px) 50vw, 25vw" /></figure><figure><Image src="/images/menudo.jpg" alt="A bowl of menudo" fill sizes="(max-width:760px) 50vw, 25vw" /></figure><figure><Image src="/images/menu-board.png" alt="El Toro Loco menu board" fill sizes="(max-width:760px) 50vw, 25vw" /></figure><figure><Image src="/images/tacos.jpg" alt="Tacos with cilantro and onion" fill sizes="(max-width:760px) 50vw, 25vw" /></figure></div></div></section>

    <section className="section-tight reputation"><div className="container"><div className="stars" aria-hidden="true">★★★★★</div><h2>Rated Highly by Local Customers on Google</h2><p>Find El Toro Loco on Google to see current customer feedback and business information.</p></div></section>
    <LocationSection />
  </>;
}
