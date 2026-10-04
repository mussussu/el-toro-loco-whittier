import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({ href, children, variant = "primary", external = false, className = "" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light" | "outline"; external?: boolean; className?: string }) {
  const classes = `button button-${variant} ${className}`;
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return <a className={classes} href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>{children}</a>;
  }
  return <Link className={classes} href={href}>{children}</Link>;
}
