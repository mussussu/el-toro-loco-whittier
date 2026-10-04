import Link from "next/link";
import { business } from "@/data/business";
import { MapIcon, MenuIcon, PhoneIcon } from "./icons";

export function MobileActionBar() {
  return <nav className="mobile-actions" aria-label="Quick actions"><a href={business.phones[0].href}><PhoneIcon className="icon" /><span>Call</span></a><a href={business.directionsUrl} target="_blank" rel="noreferrer"><MapIcon className="icon" /><span>Directions</span></a><Link href="/menu"><MenuIcon className="icon" /><span>Menu</span></Link></nav>;
}
