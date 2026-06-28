export interface LinkItem {
  name: string;
  href: string;
}

export const headerLinks: LinkItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Cities", href: "/cities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" }
];

export const footerServiceLinks: LinkItem[] = [
  { name: "Balcony Safety Nets", href: "/services/balcony-safety-nets" },
  { name: "Pigeon Safety Nets", href: "/services/pigeon-safety-nets" },
  { name: "Bird Safety Nets", href: "/services/bird-safety-nets" },
  { name: "Children Safety Nets", href: "/services/children-safety-nets" },
  { name: "Invisible Grills", href: "/services/invisible-grills" }
];

export const footerCityLinks: LinkItem[] = [
  { name: "Bangalore", href: "/bangalore" },
  { name: "Hyderabad", href: "/hyderabad" },
  { name: "Chennai", href: "/chennai" },
  { name: "Pune", href: "/pune" },
  { name: "Mumbai", href: "/mumbai" }
];
