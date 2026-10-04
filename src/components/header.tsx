"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business, navItems } from "@/data/business";
import { MenuIcon, PhoneIcon } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="announcement"><span>Mexican food in Whittier</span><a href={business.phones[0].href}>{business.phones[0].display}</a></div>
      <div className="nav-wrap">
        <Link href="/" className="wordmark" aria-label="El Toro Loco home" onClick={() => setOpen(false)}>
          <span className="wordmark-mark">ETL</span>
          <span><strong>El Toro Loco</strong><small>Mexican Restaurant</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>{item.label}</Link>)}
        </nav>
        <a className="header-call" href={business.phones[0].href}><PhoneIcon className="icon" /> Call Now</a>
        <button className="mobile-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><MenuIcon className="icon" /><span>{open ? "Close" : "Menu"}</span></button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${open ? "open" : ""}`} aria-label="Mobile navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""} onClick={() => setOpen(false)}>{item.label}</Link>)}
      </nav>
    </header>
  );
}
