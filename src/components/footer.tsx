import Link from "next/link";
import { business, navItems } from "@/data/business";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><div className="footer-brand">El Toro Loco</div><p>Traditional Mexican food, handmade tortillas, and food for your special gatherings.</p></div>
        <div><h2>Visit</h2><address>{business.address.street}<br />{business.address.city}, {business.address.state} {business.address.zip}</address><p>{business.hoursPublic}</p></div>
        <div><h2>Contact</h2>{business.phones.map((phone) => <a key={phone.href} href={phone.href}>{phone.display}</a>)}<a href={`mailto:${business.email}`}>{business.email}</a></div>
        <div><h2>Explore</h2>{navItems.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {business.name}</span><a href={business.domain}>eltorolocowhittier.com</a></div>
    </footer>
  );
}
