import { business } from "@/data/business";
import { ButtonLink } from "./button-link";
import { BusinessHours } from "./business-hours";
import { MapIcon, PhoneIcon } from "./icons";

export function LocationSection() {
  return <section className="section location-section"><div className="container location-grid"><div className="location-copy"><p className="eyebrow">Find us in Whittier</p><h2>Come Hungry. We’ll See You Here.</h2><address><strong>{business.name}</strong><br />{business.address.street}<br />{business.address.city}, {business.address.state} {business.address.zip}</address><div className="location-details"><p><span>Phone</span><a href={business.phones[0].href}>{business.phones[0].display}</a><a href={business.phones[1].href}>{business.phones[1].display}</a></p><div><span>Hours</span><BusinessHours compact /></div></div><div className="button-row"><ButtonLink href={business.phones[0].href}><PhoneIcon className="icon" /> Call Now</ButtonLink><ButtonLink href={business.directionsUrl} external variant="outline"><MapIcon className="icon" /> Get Directions</ButtonLink></div></div><div className="map-wrap"><iframe title="Map showing El Toro Loco on Telegraph Road in Whittier" src={business.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section>;
}
