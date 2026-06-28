export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  priceRange: string;
  minPrice: number;
  maxPrice: number;
  priceUnit: "sqft" | "piece";
  shortDesc: string;
  features: string[];
  benefits: string[];
  specs: { [key: string]: string };
  installationProcess: string[];
  faqIds: string[];
  imageName: string;
}

export const services: ServiceData[] = [
  {
    slug: "invisible-grills",
    name: "Invisible Grills",
    tagline: "SS 316 Marine Grade Invisible Grills for Modern Homes",
    priceRange: "₹100 - ₹250/sqft",
    minPrice: 100,
    maxPrice: 250,
    priceUnit: "sqft",
    shortDesc: "Experience unobstructed views without compromising on safety. Our premium SS 316 marine-grade invisible grills provide heavy-duty security for balconies and windows.",
    features: [
      "SS 316 Marine-Grade stainless steel cables (rust-proof)",
      "High-density nylon/teflon protective outer coating",
      "Tensile strength supporting over 400 kg load per cable",
      "Sleek 2.0mm thickness (virtually invisible from 15 meters)",
      "Smart alarm integration compatible for break-in alerts"
    ],
    benefits: [
      "100% Unobstructed panoramic views of the outdoors",
      "Maximum high-rise balcony fall protection for kids & pets",
      "Rust-proof and corrosion-resistant in high humidity",
      "Fire-safety compliant: can be cut within seconds in emergencies",
      "Modern aesthetic that enhances building appearance"
    ],
    specs: {
      "Cable Material": "316 Marine Grade Stainless Steel",
      "Coating": "Teflon / Nylon polymer protective sleeve",
      "Cable Diameter": "2.0mm to 2.5mm options",
      "Structure Frame": "Anodized structural aluminum tracks",
      "Spacing": "2 inch, 3 inch, or 4 inch options",
      "Warranty": "10 Years anti-rust warranty"
    },
    installationProcess: [
      "Precision structural marking on ceiling and floor concrete slabs",
      "Mounting heavy-duty anodized aluminum tracks using steel expansion bolts",
      "Threading high-tensile SS 316 cables through track locking pegs",
      "Tensioning each cable mechanically to prevent prying or stretching",
      "Applying secure locking caps and decorative snapping covers"
    ],
    faqIds: ["grill-faq-1", "grill-faq-2", "grill-faq-3"],
    imageName: "balconygrill.webp"
  },
  {
    slug: "pigeon-safety-nets",
    name: "Pigeon Safety Nets",
    tagline: "Humane, UV-Resistant HDPE Pigeon Netting Solutions",
    priceRange: "₹8 - ₹15/sqft",
    minPrice: 8,
    maxPrice: 15,
    priceUnit: "sqft",
    shortDesc: "Keep your balcony clean, sanitary, and free of nesting pigeons. Our heavy-duty UV-resistant HDPE safety nets provide a 100% effective barrier.",
    features: [
      "100% Virgin High-Density Polyethylene (HDPE) material",
      "UV-resistant formulation prevents degradation in sun",
      "Knotted mesh structure ensures isolated repairs if cut",
      "Lightweight, low-visibility transparent or translucent blue/white mesh",
      "SS 304 anti-rust anchoring fasteners"
    ],
    benefits: [
      "Completely blocks pigeons and crows from entering balconies/windows",
      "Eliminates biological health hazards from acidic bird droppings",
      "Humane physical barrier that does not harm or trap birds",
      "Allows 100% air breeze and natural sunlight passage",
      "Eliminates recurring balcony cleanup costs and hassle"
    ],
    specs: {
      "Material": "UV-Stabilized High-Density Polyethylene (HDPE)",
      "Mesh Size": "25mm / 30mm / 40mm options",
      "Thickness": "1.2mm to 1.8mm braided yarn",
      "Breaking Strength": "85 kg to 100 kg per grid",
      "Longevity": "3 to 5 Years lifespan",
      "Warranty": "3 Years warranty"
    },
    installationProcess: [
      "Balcony perimeter cleaning and safety hook marker alignment",
      "Drilling and inserting premium SS 304 anchor bolts at 1-foot intervals",
      "Threading high-strength boundary ropes through the safety net edges",
      "Stretching the netting uniformly to eliminate sag or loose gaps",
      "Securing the net structure to the anchors with double knot locking knots"
    ],
    faqIds: ["pigeon-faq-1", "pigeon-faq-2", "pigeon-faq-3"],
    imageName: "pigeon-safety-nets.webp"
  },
  {
    slug: "balcony-safety-nets",
    name: "Balcony Safety Nets",
    tagline: "Premium High-Tensile Balcony Fall-Protection Netting",
    priceRange: "₹12 - ₹20/sqft",
    minPrice: 12,
    maxPrice: 20,
    priceUnit: "sqft",
    shortDesc: "Secure open balconies in high-rise apartments. Made of UV-stabilized heavy HDPE mesh, our nets prevent accidental falls and keep your home secure.",
    features: [
      "UV-Stabilized Garware HDPE polymer construction",
      "Reinforced boundary ropes for maximum pull resistance",
      "SS 304 expansion anchor bolts that resist coastal rust",
      "Clean, modern installation that doesn't change building facade",
      "Braided double-knotted technology"
    ],
    benefits: [
      "Guarantees complete safety for children, elders, and pets",
      "Gives peace of mind to high-rise balcony apartment residents",
      "Highly affordable safety solution compared to iron grills",
      "Durable in heavy winds, monsoons, and extreme summers",
      "Installed within hours by certified technicians"
    ],
    specs: {
      "Material": "UV-Resistant Braided HDPE",
      "Yarn Diameter": "1.8mm to 2.5mm",
      "Mesh Size": "40mm / 50mm square mesh",
      "Breaking Load": "95 kg per single yarn",
      "Warranty": "5 Years warranty"
    },
    installationProcess: [
      "Balcony wall structural integrity assessment and markups",
      "Fixing heavy-duty stainless steel anchor hooks into walls and ceilings",
      "Stretching the net across the opening using high-tension pulleys",
      "Lacing the net edges securely with border cord rings",
      "Verifying structural load resistance with test drops"
    ],
    faqIds: ["balcony-faq-1", "balcony-faq-2", "balcony-faq-3"],
    imageName: "balcony1.webp"
  },
  {
    slug: "children-safety-nets",
    name: "Children Safety Nets",
    tagline: "Certified Child-Safe Balcony & Staircase Safety Netting",
    priceRange: "₹15 - ₹25/sqft",
    minPrice: 15,
    maxPrice: 25,
    priceUnit: "sqft",
    shortDesc: "Provide an unbreakable safety shield for children. Engineered for high-altitude fall arrest, these nets secure balconies, stairs, and windows.",
    features: [
      "Thick double-knotted braided nylon or HDPE safety yarn",
      "Superior shock absorption capacity for impact arrest",
      "Skin-friendly soft textures to avoid abrasions or friction cuts",
      "Closely-spaced structural anchors (every 10 inches)",
      "Meets international toddler safety load parameters"
    ],
    benefits: [
      "Ensures kids can play on balconies safely without risk of falls",
      "Blocks toys, plants, and other household objects from falling down",
      "Virtually invisible from the outside, keeping building aesthetics",
      "Dismantles cleanly when balcony structural repairs are needed",
      "Highly durable construction under direct sun exposure"
    ],
    specs: {
      "Material": "Reinforced UV-stabilized Nylon/HDPE",
      "Thickness": "2.0mm to 2.8mm braided",
      "Mesh Size": "30mm to 40mm grid size",
      "Load Bearing": "Up to 150 kg impact capacity",
      "Warranty": "5 Years warranty"
    },
    installationProcess: [
      "Identifying high-risk areas along balconies, windows, and open stairwells",
      "Drilling and inserting premium expansion hooks at close intervals",
      "Weaving heavy border reinforcement rope through the safety net",
      "Mechanical tensioning to eliminate sag and toddler prying gaps",
      "Final testing of lock knots and load structural verification"
    ],
    faqIds: ["child-faq-1", "child-faq-2"],
    imageName: "child.webp"
  },
  {
    slug: "bird-safety-nets",
    name: "Bird Safety Nets",
    tagline: "Heavy-Duty Exclusion Netting for Open Ducts & Voids",
    priceRange: "₹10 - ₹18/sqft",
    minPrice: 10,
    maxPrice: 18,
    priceUnit: "sqft",
    shortDesc: "Block crows, sparrows, eagles, and pigeons from nesting in open building ducts and pipe shafts. Our heavy HDPE nets keep birds out permanently.",
    features: [
      "Heavy gauge braided HDPE (High-Density Polyethylene)",
      "Fungus-resistant, rot-proof, and water-repellent yarn",
      "Custom mesh spacing designed to exclude specific bird species",
      "High structural stability to withstand gale-force winds",
      "Rust-proof GI or stainless steel perimeter wire anchors"
    ],
    benefits: [
      "Prevents birds from nesting on plumbing pipes and window ledges",
      "Improves hygiene for kitchen and bathroom windows facing building shafts",
      "Reduces property depreciation by keeping building facades clean",
      "Cost-effective solution to cover large residential/commercial voids",
      "Bird-friendly design that excludes without injuring wildlife"
    ],
    specs: {
      "Material": "Garware HDPE Braided Netting",
      "Thickness": "1.2mm to 2.0mm (15ply to 30ply)",
      "Mesh Size": "25mm (small bird proof) / 40mm / 50mm options",
      "Anchoring": "SS 304 hooks or heavy GI tension wire loops",
      "Warranty": "3 to 5 Years warranty"
    },
    installationProcess: [
      "Accessing open plumbing shafts using certified industrial climbing harness setups",
      "Fixing anchor loops at top, bottom, and side brick walls",
      "Building a high-tensile wire rope frame (SS 304) along the duct perimeter",
      "Fastening the safety netting onto the wire frame using high-wear cable ring locks",
      "Ensuring zipper access options are added for plumber maintenance"
    ],
    faqIds: ["bird-faq-1", "bird-faq-2"],
    imageName: "bird.jpg"
  },
  {
    slug: "pet-safety-nets",
    name: "Pet Safety Nets",
    tagline: "Bite-Proof, Extra-Strong Safety Nets for Cats & Dogs",
    priceRange: "₹15 - ₹28/sqft",
    minPrice: 15,
    maxPrice: 28,
    priceUnit: "sqft",
    shortDesc: "Keep your active cats, kittens, and dogs safe. Made with reinforced bite-resistant materials, our pet safety nets block pets from sliding through railings.",
    features: [
      "Bite-resistant, extra-strong braided HDPE safety netting",
      "Ultra-fine mesh options to prevent kittens from squeezing out",
      "Reinforced steel-core options for aggressive chewers",
      "SS 304 anchor hooks mounted at dense intervals",
      "Soft and smooth yarn that will not scrape pet skin"
    ],
    benefits: [
      "Complete safety for indoor pets in balcony high-rise buildings",
      "Allows cats to look out of windows and balconies safely",
      "Protects pets from birds of prey or external animal attacks",
      "Highly weather-resistant materials that do not stretch out of shape",
      "Same-day installation by expert pet safety technicians"
    ],
    specs: {
      "Material": "Reinforced UV-treated Braided Polyethylene",
      "Thickness": "2.0mm to 3.0mm extra gauge",
      "Mesh Size": "25mm (cat/kitten safe) / 35mm options",
      "Breaking Strength": "120+ kg load limit",
      "Warranty": "5 Years warranty"
    },
    installationProcess: [
      "Evaluating balcony railings, structural voids, and open windows",
      "Installing robust SS hooks closely to eliminate pet escape gaps",
      "Threading a heavy border cable through the mesh edges",
      "Tensioning the net structures rigidly to block claw stretch",
      "Double checking that all floor-level and side-wall seals are locked"
    ],
    faqIds: ["pet-faq-1", "pet-faq-2"],
    imageName: "petsafetynet.webp"
  },
  {
    slug: "mosquito-nets",
    name: "Mosquito Nets",
    tagline: "Premium Mosquito Mesh Screens for Windows & Balconies",
    priceRange: "₹40 - ₹85/sqft",
    minPrice: 40,
    maxPrice: 85,
    priceUnit: "sqft",
    shortDesc: "Block mosquitoes, flies, and bugs while maintaining fresh air. We offer Velcro mesh, magnetic screens, and sleek aluminum window frame designs.",
    features: [
      "High-grade fiberglass, stainless steel, or aluminum mesh options",
      "UV-resistant, rust-free, and dustproof screens",
      "Strong structural Velcro, magnetic strip, or aluminum slider fittings",
      "Fine mesh weaves that block tiny insects while letting air flow",
      "Easy-to-clean design"
    ],
    benefits: [
      "Protects family from mosquito-borne diseases like Dengue and Malaria",
      "Allows you to keep windows and balcony doors open day and night",
      "Blocks dust and dry leaves from entering the home",
      "Sleek and aesthetic finishes that match your home interior decor",
      "Easily detachable frames for washing and cleaning"
    ],
    specs: {
      "Mesh Material": "Fiberglass / SS 304 mesh / Aluminum alloy screen",
      "Frame Material": "Powder-coated aluminum tracks / PVC options",
      "Fitment Type": "Velcro tape, Magnetic screen, Slider frame, Rollup screen",
      "Color": "Charcoal Grey, Classic White, Sleek Black, Silver",
      "Warranty": "3 Years warranty"
    },
    installationProcess: [
      "Taking precise measurements of window frame inside/outside borders",
      "Preparing custom aluminum frame channels or cutting Velcro strips",
      "Applying adhesive border tapes or mounting track channels onto window frames",
      "Fitting and tensioning the insect mesh screen within the frame profiles",
      "Testing magnetic alignments, sliders, or Velcro locks for zero gap seal"
    ],
    faqIds: ["mosquito-faq-1", "mosquito-faq-2"],
    imageName: "mosquitonet.webp"
  },
  {
    slug: "terrace-nets",
    name: "Terrace & Rooftop Nets",
    tagline: "Large-Scale Overhead Protection Nets for Open Terraces",
    priceRange: "₹12 - ₹22/sqft",
    minPrice: 12,
    maxPrice: 22,
    priceUnit: "sqft",
    shortDesc: "Secure large rooftops and open terraces from birds, falls, and stray sports balls. Engineered with heavy-gauge UV-treated HDPE structures.",
    features: [
      "Heavy braided HDPE monofilament netting",
      "UV-Stabilized against intense solar thermal weathering",
      "Robust GI/SS wire rope framing for high mechanical span support",
      "Weather-resistant anchors and brackets for high-altitude wind load",
      "Reinforced grid borders"
    ],
    benefits: [
      "Converts open rooftops into safe play and sitting areas",
      "Keeps monkeys and birds off terrace gardens and laundry dryers",
      "Prevents cricket balls and other sports items from falling to the streets",
      "Stops high-altitude fall hazards on building terrace perimeters",
      "Extremely long-lasting, heavy-duty build quality"
    ],
    specs: {
      "Material": "Heavy HDPE Braided Garware Nets",
      "Thickness": "2.0mm to 3.5mm thick braided yarn",
      "Mesh Size": "40mm / 50mm standard square grids",
      "Anchor Support": "MS structural pipes / GI perimeter cable locks",
      "Warranty": "5 Years warranty"
    },
    installationProcess: [
      "Rooftop span assessment and identifying support column positions",
      "Installing MS/GI structural support poles or high wall brackets",
      "Tensioning heavy wire ropes across the overhead terrace voids",
      "Mounting the heavy HDPE nets onto the wire framework with carabiner locks",
      "Securing building side walls to leave zero entry points for birds or monkeys"
    ],
    faqIds: ["terrace-faq-1", "terrace-faq-2"],
    imageName: "terrace-nets.jpg"
  },
  {
    slug: "cricket-nets",
    name: "Cricket Practice Nets",
    tagline: "Professional Sports Nets for Rooftops & Practice Pitches",
    priceRange: "₹15 - ₹30/sqft",
    minPrice: 15,
    maxPrice: 30,
    priceUnit: "sqft",
    shortDesc: "Set up professional cricket practice pitches. High-shock absorption HDPE sports netting designed for schools, clubs, and society terraces.",
    features: [
      "Heavy multi-filament braided HDPE sports netting",
      "High shock-absorption capacity to stop hard-ball hits safely",
      "UV-Stabilized yarn designed for permanent outdoor setups",
      "Non-abrasive surface finishes that protect cricket balls",
      "Standard grid dimensions (cricket ball proof)"
    ],
    benefits: [
      "Safeguards surrounding windows, cars, and pedestrians",
      "Creates a dedicated, safe sports practice cage anywhere",
      "Withstands heavy daily practice impacts without tearing",
      "Professional-grade netting used in sports academies",
      "Custom sizes tailored to your terrace or ground layouts"
    ],
    specs: {
      "Material": "Braided Polyethylene (HDPE) Garware Sports Net",
      "Yarn Count": "24ply / 30ply / 36ply heavy gauge",
      "Mesh Size": "35mm / 40mm square grid",
      "Color": "Sports Green, Professional Black",
      "Warranty": "3 Years warranty"
    },
    installationProcess: [
      "Ground mapping and structural column markup (MS/GI pipes)",
      "Erecting pipe structures or drilling heavy overhead wall plates",
      "Suspending high-tensile steel cables between poles as a frame",
      "Hanging the sports netting on the cable rails using heavy-duty loops",
      "Anchoring bottom corners tightly to prevent ballooning in high winds"
    ],
    faqIds: ["cricket-faq-1", "cricket-faq-2"],
    imageName: "cricket.jpeg"
  },
  {
    slug: "construction-safety-nets",
    name: "Construction Safety Nets",
    tagline: "Certified Industrial Fall Arrest & Debris Nets",
    priceRange: "₹6 - ₹12/sqft",
    minPrice: 6,
    maxPrice: 12,
    priceUnit: "sqft",
    shortDesc: "Ensure worker safety at high altitudes. Certified industrial-grade debris and fall arrest safety nets conforming to IS-11057 safety regulations.",
    features: [
      "Certified high-tensile polypropylene or polyamide nylon cords",
      "Reinforced double border ropes for extreme load support",
      "Conforms to IS-11057 national safety standards",
      "Optional fine green mesh overlay to catch dust & brick fragments",
      "High chemical and acid resistance for concrete work"
    ],
    benefits: [
      "Saves worker lives by arresting accidental high-altitude falls",
      "Catches falling bricks, plaster debris, and tools, protecting pedestrians",
      "Reduces legal liabilities and ensures building site compliance",
      "Highly reusable and easy to move as building construction ascends",
      "Tested for high impact force resistance"
    ],
    specs: {
      "Material": "Braided Polypropylene (PP) / Heavy Polyamide Nylon",
      "Mesh Size": "50mm to 100mm square grids",
      "Cord Gauge": "3.0mm to 6.0mm heavy braided lines",
      "Certification": "BIS / IS-11057 certified compliance",
      "Debris Overlay": "Optional 80% shading green debris mesh",
      "Warranty": "1 Year site usage warranty"
    },
    installationProcess: [
      "Site perimeter inspections and structural column loops mapping",
      "Installing heavy outrigger bracket pipes onto edge slabs",
      "Tensioning thick steel wire rope perimeter support guidelines",
      "Securing the safety netting onto the cables using steel carabiners",
      "Laying and zip-tying the green debris fine mesh overlay"
    ],
    faqIds: ["construction-faq-1", "construction-faq-2"],
    imageName: "constructionnets.webp"
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug.toLowerCase() === slug.toLowerCase());
}
