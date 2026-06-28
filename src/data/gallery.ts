export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "balcony" | "pigeon" | "grills" | "other";
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  // Invisible Grills (8 items)
  {
    id: "gal-grill-1",
    src: "/images/balconygrill.webp",
    title: "Balcony Invisible Grill Installation",
    category: "grills",
    alt: "Stainless steel 316 invisible grill installation on open residential balcony providing modern high-tensile safety protection - AJ Safe Net Solutions"
  },
  {
    id: "gal-grill-2",
    src: "/images/grillnight.jpeg",
    title: "High-Rise Window Invisible Grill",
    category: "grills",
    alt: "Night view of modern invisible grills installed on bedroom window of high-rise apartment for security and toddler safety - AJ Safe Net Solutions"
  },
  {
    id: "gal-grill-3",
    src: "/images/grillbalcony.jpeg",
    title: "Modern Balcony Invisible Grill",
    category: "grills",
    alt: "Premium SS 316 invisible grills fitted on high-rise flat balcony for rust-proof safety and unobstructed scenic views - AJ Safe Net Solutions"
  },
  {
    id: "gal-grill-4",
    src: "/images/2.jpeg",
    title: "Premium Window Invisible Grill",
    category: "grills",
    alt: "Sleek stainless steel invisible safety grill cables mounted vertically on large balcony windows - AJ Safe Net Solutions"
  },
  {
    id: "gal-grill-5",
    src: "/images/4.jpeg",
    title: "Aesthetic Balcony Invisible Grill",
    category: "grills",
    alt: "Modern balcony styling showing invisible safety grills replacing traditional bulky iron bars in Vijayawada - AJ Safe Net Solutions"
  },
  {
    id: "gal-grill-6",
    src: "/images/6.jpeg",
    title: "High-Security Window Invisible Grill",
    category: "grills",
    alt: "Close up view of SS 316 marine-grade cables tensioned on window frame anchors - AJ Safe Net Solutions"
  },
  {
    id: "gal-grill-7",
    src: "/images/ajgols.jpeg",
    title: "Structural Invisible Grill System",
    category: "grills",
    alt: "Heavy duty aluminum tracking tracks and SS 316 cables securing open balcony deck - AJ Safe Net Solutions"
  },
  {
    id: "gal-grill-8",
    src: "/images/mywork.jpeg",
    title: "Balcony Stainless Steel Invisible Grill",
    category: "grills",
    alt: "Professional installation of SS 316 steel wire invisible grills in modern apartment balcony - AJ Safe Net Solutions"
  },

  // Pigeon Nets (6 items)
  {
    id: "gal-pigeon-1",
    src: "/images/pigeon-safety-nets.webp",
    title: "Pigeon Balcony Netting",
    category: "pigeon",
    alt: "Transparent monofilament pigeon safety net installed on apartment balcony to prevent bird nesting hazards while preserving views - AJ Safe Net Solutions"
  },
  {
    id: "gal-pigeon-2",
    src: "/images/pigeonsafetynet.webp",
    title: "Transparent Pigeon Netting",
    category: "pigeon",
    alt: "High-density transparent monofilament pigeon safety nets mounted tightly across window ducts - AJ Safe Net Solutions"
  },
  {
    id: "gal-pigeon-3",
    src: "/images/bird.jpg",
    title: "Industrial Bird Safety Netting",
    category: "pigeon",
    alt: "Heavy duty HDPE bird safety netting structure covering open ventilation shafts and duct areas of residential complexes - AJ Safe Net Solutions"
  },
  {
    id: "gal-pigeon-4",
    src: "/images/pigeon.webp",
    title: "Balcony Anti-Pigeon Netting",
    category: "pigeon",
    alt: "UV-resistant monofilament transparent pigeon nets that exclude pigeons without blocking breeze and light - AJ Safe Net Solutions"
  },
  {
    id: "gal-pigeon-5",
    src: "/images/ductarea1.webp",
    title: "Building Duct Pigeon Netting",
    category: "pigeon",
    alt: "Deep ventilation duct shaft covered with strong safety nets preventing garbage piling and bird entry in luxury apartments - AJ Safe Net Solutions"
  },
  {
    id: "gal-pigeon-6",
    src: "/images/ductarea2.webp",
    title: "Residential Duct Area Bird Net",
    category: "pigeon",
    alt: "Professional duct area safety netting covering central apartment shafts to block birds and debris - AJ Safe Net Solutions"
  },

  // Balcony Nets (4 items)
  {
    id: "gal-balcony-1",
    src: "/images/balcony1.webp",
    title: "Heavy-Duty Balcony Safety Net",
    category: "balcony",
    alt: "Premium Garware balcony safety net installation on high-rise apartment balcony offering complete child safety and bird protection - AJ Safe Net Solutions"
  },
  {
    id: "gal-balcony-2",
    src: "/images/balcony2.webp",
    title: "High-Rise Balcony Safety Mesh",
    category: "balcony",
    alt: "Sturdy double-knotted HDPE safety net installed on high-rise balcony for child safety and pigeon control - AJ Safe Net Solutions"
  },
  {
    id: "gal-balcony-3",
    src: "/images/balcony.jpg",
    title: "Apartment Balcony Safety Netting",
    category: "balcony",
    alt: "UV-stabilized HDPE balcony safety net mounted securely with SS 304 anchor hooks on high-rise flat balcony - AJ Safe Net Solutions"
  },
  {
    id: "gal-balcony-4",
    src: "/images/child.webp",
    title: "Balcony Child Safety Netting",
    category: "balcony",
    alt: "Durable fall protection safety net installed closely along balcony railing to safeguard young children and toddlers from heights - AJ Safe Net Solutions"
  },

  // Other (2 items)
  {
    id: "gal-other-1",
    src: "/images/cricket.jpeg",
    title: "Cricket Practice Net Cage",
    category: "other",
    alt: "Professional heavy-gauge sports netting cage installed on terrace for residential housing society cricket practice pitch - AJ Safe Net Solutions"
  },
  {
    id: "gal-other-2",
    src: "/images/constructionnets.webp",
    title: "Building Construction Safety Net",
    category: "other",
    alt: "Heavy duty green debris netting and fall arrest safety nets suspended around building construction framework columns - AJ Safe Net Solutions"
  }
];

export function getGalleryByCategory(category: string): GalleryItem[] {
  return galleryItems.filter(item => item.category === category);
}
