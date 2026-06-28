export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "balcony" | "pigeon" | "grills" | "sports" | "industrial" | "household";
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    src: "/images/balcony1.webp",
    title: "Balcony Safety Net",
    category: "balcony",
    alt: "Premium Garware balcony safety net installation on high-rise apartment balcony offering complete child safety and bird protection"
  },
  {
    id: "gal-2",
    src: "/images/pigeon-safety-nets.webp",
    title: "Pigeon Balcony Netting",
    category: "pigeon",
    alt: "Transparent monofilament pigeon safety net installed on apartment balcony to prevent bird nesting hazards while preserving views"
  },
  {
    id: "gal-3",
    src: "/images/balconygrill.webp",
    title: "Balcony Invisible Grill",
    category: "grills",
    alt: "Stainless steel 316 invisible grill installation on open residential balcony providing modern high-tensile safety protection"
  },
  {
    id: "gal-4",
    src: "/images/grillnight.jpeg",
    title: "High-Rise Window Invisible Grill",
    category: "grills",
    alt: "Night view of modern invisible grills installed on bedroom window of high-rise apartment for security and toddler safety"
  },
  {
    id: "gal-5",
    src: "/images/bird.jpg",
    title: "Industrial Bird Netting",
    category: "pigeon",
    alt: "Heavy duty HDPE bird safety netting structure covering open ventilation shafts and duct areas of residential building complexes"
  },
  {
    id: "gal-6",
    src: "/images/child.webp",
    title: "Children Safety Netting",
    category: "balcony",
    alt: "Durable fall protection safety net installed closely along balcony railing to safeguard young children and toddlers from heights"
  },
  {
    id: "gal-7",
    src: "/images/monkey.jpeg",
    title: "Monkey Protection Netting",
    category: "balcony",
    alt: "Bite-proof wire reinforced monkey safety nets installed securely on open residential gallery to prevent wild animal break-ins"
  },
  {
    id: "gal-8",
    src: "/images/cricket.jpeg",
    title: "Cricket Practice Net Cage",
    category: "sports",
    alt: "Professional heavy-gauge sports netting cage installed on terrace for residential housing society cricket practice pitch"
  },
  {
    id: "gal-9",
    src: "/images/ductarea1.webp",
    title: "Central Duct Safety Net",
    category: "industrial",
    alt: "Deep ventilation duct shaft covered with strong safety nets preventing garbage piling and bird entry in luxury apartments"
  },
  {
    id: "gal-10",
    src: "/images/constructionnets.webp",
    title: "Building Construction Safety Net",
    category: "industrial",
    alt: "Heavy duty green debris netting and fall arrest safety nets suspended around building construction framework columns"
  },
  {
    id: "gal-11",
    src: "/images/clothhanger.jpg",
    title: "Ceiling Cloth Hanger System",
    category: "household",
    alt: "Sleek ceiling pull-down laundry drying clothes hanger system with stainless steel pipes installed in apartment utility balcony"
  },
  {
    id: "gal-12",
    src: "/images/petsafetynet.webp",
    title: "Pet Protection Balcony Net",
    category: "balcony",
    alt: "High tension mesh net installed tightly on balcony grill to secure cats and small pets from slipping through railings"
  },
  {
    id: "gal-13",
    src: "/images/terrace-nets.jpg",
    title: "Rooftop Terrace Netting",
    category: "sports",
    alt: "Large-scale overhead ceiling netting structure covering outdoor terrace to create safe recreation zones free from bird debris"
  },
  {
    id: "gal-15",
    src: "/images/coconut.webp",
    title: "Coconut Tree Protection Netting",
    category: "industrial",
    alt: "Sturdy safety nets wrapped below coconut trees to arrest heavy falling coconuts and prevent injury to pedestrians below"
  },
  {
    id: "gal-16",
    src: "/images/balcony2.webp",
    title: "High-Rise Balcony Netting",
    category: "balcony",
    alt: "Sturdy double-knotted HDPE safety net installed on high-rise balcony for child safety and pigeon control"
  },
  {
    id: "gal-17",
    src: "/images/ductarea2.webp",
    title: "Bathroom Duct Safety Netting",
    category: "industrial",
    alt: "Professional duct area safety netting covering central apartment shafts to block birds and debris"
  },
  {
    id: "gal-18",
    src: "/images/pigeonsafetynet.webp",
    title: "Balcony Pigeon Net Installation",
    category: "pigeon",
    alt: "High-density transparent monofilament pigeon safety nets mounted tightly across window ducts"
  }
];

export function getGalleryByCategory(category: string): GalleryItem[] {
  return galleryItems.filter(item => item.category === category);
}
