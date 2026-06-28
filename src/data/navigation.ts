export interface LinkItem {
  name: string;
  href: string;
}

export const headerLinks: LinkItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Cities", href: "/cities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" }
];

export const footerServiceLinks: LinkItem[] = [
  { name: "Invisible Grills", href: "/services/invisible-grills" },
  { name: "Pigeon Safety Nets", href: "/services/pigeon-safety-nets" },
  { name: "Balcony Safety Nets", href: "/services/balcony-safety-nets" },
  { name: "Children Safety Nets", href: "/services/children-safety-nets" },
  { name: "Bird Safety Nets", href: "/services/bird-safety-nets" }
];

export const footerCityLinks: LinkItem[] = [
  { name: "Vijayawada (Primary)", href: "/vijayawada" },
  { name: "Chennai", href: "/chennai" },
  { name: "Bangalore", href: "/bangalore" },
  { name: "Pune", href: "/pune" }
];
