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
  imageName: string; // matches one of the local images
}

export const services: ServiceData[] = [
  {
    slug: "balcony-safety-nets",
    name: "Balcony Safety Nets",
    tagline: "Secure Balconies with Heavy-Duty UV-Resistant Safety Netting",
    priceRange: "₹20 - ₹35/sqft",
    minPrice: 20,
    maxPrice: 35,
    priceUnit: "sqft",
    shortDesc: "Protect your family, children, and pets from accidental balcony falls with our premium, long-lasting safety nets.",
    features: [
      "100% UV Stabilized Garware HDPE Netting",
      "High tensile strength (up to 95 kg per yarn)",
      "Nearly invisible design preserving balcony view",
      "Rust-proof stainless steel (SS 304) anchor bolts",
      "Customized mesh sizes (25mm to 50mm)"
    ],
    benefits: [
      "Complete fall protection for children, toddlers, and pets",
      "Creates a physical barrier that keeps pigeons and crows away",
      "Highly cost-effective compared to traditional metal fabrication",
      "Weatherproof materials that do not sag or degrade in sun or rain",
      "Quick installation (completed in 2-3 hours)"
    ],
    specs: {
      "Material": "High-Density Polyethylene (HDPE) Garware Product",
      "Yarn Thickness": "0.7mm to 2.5mm braided nylon/HDPE",
      "Breaking Strength": "90 to 110 kg",
      "Warranty": "3 to 5 Years against manufacturing defects",
      "Mesh Size": "40mm / 50mm standard grid"
    },
    installationProcess: [
      "Site measurement and evaluation of structural anchor points",
      "Marking and drilling holes at precise 1-foot intervals along balcony borders",
      "Fixing heavy-duty SS 304 anchor hooks into structural concrete",
      "Threading high-tensile boundary ropes through the safety net edges",
      "Stretching the netting tightly and locking it onto anchor hooks with specialized double knots"
    ],
    faqIds: ["balcony-faq-1", "balcony-faq-2", "balcony-faq-3", "balcony-faq-4"],
    imageName: "balcony1.webp"
  },
  {
    slug: "pigeon-safety-nets",
    name: "Pigeon Safety Nets",
    tagline: "India's Best Anti-Pigeon Balcony and Window Netting Solutions",
    priceRange: "₹20 - ₹35/sqft",
    minPrice: 20,
    maxPrice: 35,
    priceUnit: "sqft",
    shortDesc: "Say goodbye to messy pigeon droppings and health hazards. Get professional, transparent pigeon nets installed.",
    features: [
      "Nylon copolymer monofilament transparent nets",
      "Heat-resistant and UV-treated for maximum durability",
      "Minimal visibility from a distance, keeping aesthetic appeal",
      "Sleek and secure mounting profile",
      "Dust and moisture repellent mesh"
    ],
    benefits: [
      "Prevents hazardous pigeon droppings that cause respiratory infections",
      "Maintains clean, sanitary balconies, window ledges, and ducts",
      "Non-harmful, bird-friendly physical exclusion solution",
      "Saves thousands in weekly cleaning and maintenance costs",
      "Will not block fresh breeze or sunlight"
    ],
    specs: {
      "Material": "UV-Stabilized Nylon Copolymer Monofilament",
      "Mesh Size": "19mm / 25mm / 30mm (keeps even small sparrows out)",
      "Thickness": "0.7mm to 1.2mm",
      "Color": "Transparent or Translucent Blue/White",
      "Warranty": "2 to 5 Years"
    },
    installationProcess: [
      "Cleaning and disinfection of balconies or windows to remove bird mess",
      "Measuring window frame or open balcony duct dimensions",
      "Installing secure plastic pegs or SS hooks into perimeter walls",
      "Stretching the mesh uniformly to prevent sagging or gaps",
      "Trimming excess net edges for a neat, flush finish"
    ],
    faqIds: ["pigeon-faq-1", "pigeon-faq-2", "pigeon-faq-3", "pigeon-faq-4"],
    imageName: "pigeon-safety-nets.webp"
  },
  {
    slug: "bird-safety-nets",
    name: "Bird Safety Nets",
    tagline: "Comprehensive Bird Exclusion Nets for Residential & Commercial Properties",
    priceRange: "₹22 - ₹35/sqft",
    minPrice: 22,
    maxPrice: 35,
    priceUnit: "sqft",
    shortDesc: "Heavy-duty HDPE bird netting to block pigeons, crows, sparrows, and eagles from roosting in open ducts and rooftops.",
    features: [
      "Thick braided polyethylene yarn",
      "Rustproof and chemical-resistant mesh structure",
      "Custom mesh spacing to exclude specific bird species",
      "Highly durable under extreme wind and rainfall",
      "Certified industrial-grade raw material"
    ],
    benefits: [
      "Eliminates noise pollution and disturbances from roosting birds",
      "Protects expensive HVAC units, solar panels, and wiring from nesting damage",
      "Maintains hygiene in residential duct areas and utility spaces",
      "Humane control method that does not trap or injure birds",
      "High return on investment by eliminating structural sanitization costs"
    ],
    specs: {
      "Material": "Polypropylene or HDPE Braided Netting",
      "Yarn Count": "15ply / 18ply / 30ply heavy-duty",
      "Mesh Size": "25mm / 40mm / 50mm spacing",
      "Warranty": "5 Years warranty against solar weathering",
      "Application": "Balconies, open corridors, building ducts, warehouses"
    },
    installationProcess: [
      "Duct area inspection using safety harnesses and climbing rigs",
      "Setting up high-tensile perimeter tension wire frames (SS 304)",
      "Attaching the net to the wire frame with specialized hog rings or cable ties",
      "Creating access zippers for duct maintenance or plumbing access if needed",
      "Double-checking perimeter seals to ensure zero bird-entry gaps"
    ],
    faqIds: ["bird-faq-1", "bird-faq-2", "bird-faq-3"],
    imageName: "bird.jpg"
  },
  {
    slug: "children-safety-nets",
    name: "Children Safety Nets",
    tagline: "High-Tensile Fall Protection Nets for Toddlers and Kids",
    priceRange: "₹25 - ₹40/sqft",
    minPrice: 25,
    maxPrice: 40,
    priceUnit: "sqft",
    shortDesc: "Provide a bulletproof safety shield for kids on balconies, staircases, and open windows with high-grade fall arrest netting.",
    features: [
      "Reinforced double-knotted nylon core yarn",
      "Extremely high impact absorption capacity",
      "Soft texture that prevents friction burns or cuts",
      "Densely placed anchor hooks for zero-gap security",
      "Complies with international child safety standards"
    ],
    benefits: [
      "Complete child safety peace of mind in high-rise apartments",
      "Allows children to play freely on balconies without adult anxiety",
      "Prevents toys and household items from falling to lower levels",
      "Virtually maintenance-free, easily cleanable",
      "Can be easily detached/reinstalled during renovation work"
    ],
    specs: {
      "Material": "Reinforced Polyamide (Nylon) Double-Knotted",
      "Yarn Diameter": "2.0mm to 3.0mm",
      "Load Bearing": "Up to 150 kg per square meter",
      "Mesh Size": "30mm to 40mm square mesh",
      "Warranty": "3 Years structural warranty"
    },
    installationProcess: [
      "Rigorous structural load evaluation of balcony walls",
      "Drilling heavy hooks at close 10-inch intervals to distribute forces",
      "Threading a 4mm reinforced border cord through the net perimeter",
      "Tensioning the net using mechanical pull-grips to ensure zero elasticity sag",
      "Double knot locks and drop tests to verify load resistance"
    ],
    faqIds: ["child-faq-1", "child-faq-2", "child-faq-3"],
    imageName: "child.webp"
  },
  {
    slug: "invisible-grills",
    name: "Invisible Grills",
    tagline: "Modern High-Tensile Stainless Steel Invisible Grills for Windows & Balconies",
    priceRange: "₹150 - ₹250/sqft",
    minPrice: 150,
    maxPrice: 250,
    priceUnit: "sqft",
    shortDesc: "Get premium, rust-free safety. High-tensile steel cables wrapped in protective membrane replacing bulky iron grills.",
    features: [
      "316 Marine Grade Stainless Steel Cables (rust-resistant)",
      "High-density nylon/teflon protective outer coating",
      "Tensile strength of over 400 kg per cable",
      "Minimalist 2.0mm cable thickness - absolutely invisible from 15 meters",
      "Smart alarm compatibility for anti-theft security"
    ],
    benefits: [
      "Ultra-modern aesthetics that look premium and high-end",
      "Unobstructed panoramic landscape views from your balcony or window",
      "Maximum home security and toddler fall protection",
      "Fire emergency safe – cables can be cut using wire cutters during emergencies",
      "Requires zero painting, anti-corrosion, works perfectly in coastal salt air"
    ],
    specs: {
      "Cable Material": "SS 316 Marine Grade Stainless Steel Wire",
      "Coating": "Teflon / Premium Nylon polymer wrap",
      "Cable Diameter": "2.0mm / 2.5mm / 3.0mm thickness options",
      "Structure Frame": "Anodized heavy aluminum track profiles",
      "Spacing": "2 inch / 3 inch / 4 inch cable distance",
      "Warranty": "5 to 10 Years anti-rust warranty"
    },
    installationProcess: [
      "Fixing structural heavy aluminum tracks onto ceiling and floor slabs",
      "Securing track anchors with steel expansion fasteners",
      "Threading high-tensile steel cables vertically or horizontally through tracks",
      "Applying mechanical wire tensioning to ensure cables cannot be pried apart",
      "Securing locks and snapping on aluminum click covers over tracks"
    ],
    faqIds: ["grill-faq-1", "grill-faq-2", "grill-faq-3", "grill-faq-4"],
    imageName: "balconygrill.webp"
  },
  {
    slug: "monkey-safety-nets",
    name: "Monkey Safety Nets",
    tagline: "Extra Heavy-Duty Wire-Reinforced Anti-Monkey Nets",
    priceRange: "₹25 - ₹40/sqft",
    minPrice: 25,
    maxPrice: 40,
    priceUnit: "sqft",
    shortDesc: "Stop monkey intrusions and balcony trashings with our steel-reinforced, bite-proof monkey safety barriers.",
    features: [
      "Reinforced nylon nets with integrated stainless steel micro-wires",
      "Thick yarn gauge designed to withstand clawing and biting",
      "Heavy-duty steel anchors and border cabling",
      "Tension lock technology preventing nets from being pulled up",
      "Available in multiple colors"
    ],
    benefits: [
      "Completely prevents aggressive monkeys from entering balconies and apartments",
      "Bite-proof and claw-resistant – monkeys cannot chew or tear the net",
      "Protects balcony plants, outdoor laundry, and glass windows",
      "Ensures safety of children and pets from animal encounters",
      "Highly durable under extreme weather and mechanical stresses"
    ],
    specs: {
      "Material": "SS wire reinforced Copolymer Nylon / Heavy HDPE",
      "Yarn Thickness": "2.5mm to 4.0mm braided wire-core",
      "Mesh Size": "40mm / 45mm mesh size (blocks hands and bodies)",
      "Breaking Tension": "180+ kg",
      "Warranty": "3 Years replacement warranty"
    },
    installationProcess: [
      "Rigid site check to identify monkey travel patterns and entry points",
      "Installing heavy wall brackets and anchor points using steel expansion sleeves",
      "Weaving heavy-gauge steel tension wires along the entire net perimeter",
      "Mounting the net and lock-clamping it to withstand strong pulls and monkey body weights",
      "Adding bottom heavy-anchor plates to block entry from floor levels"
    ],
    faqIds: ["monkey-faq-1", "monkey-faq-2", "monkey-faq-3"],
    imageName: "monkey.jpeg"
  },
  {
    slug: "cricket-safety-nets",
    name: "Cricket Safety Nets",
    tagline: "Professional Indoor & Outdoor Cricket Practice Net Installation",
    priceRange: "₹30 - ₹50/sqft",
    minPrice: 30,
    maxPrice: 50,
    priceUnit: "sqft",
    shortDesc: "Premium sports netting for clubs, schools, residential complexes, and backyard cricket practice pitches.",
    features: [
      "Heavy-duty HDPE netting with UV stabilization",
      "Multi-filament braided construction for high shock absorption",
      "Non-frictional surface to minimize ball wear and tear",
      "Weather-resistant for year-round outdoor practice setups",
      "Custom sizes available for pitches, cages, and boundaries"
    ],
    benefits: [
      "Safeguards nearby windows, vehicles, and spectators from hard-ball hits",
      "Creates dedicated, professional practice spaces in limited areas",
      "Excellent shock absorption – stops fast bowlers' balls safely",
      "Withstands heavy everyday usage without tearing",
      "Comes with options for steel support frames or suspension cables"
    ],
    specs: {
      "Material": "Braided Polyethylene (HDPE) Garware Sports Net",
      "Yarn Count": "24ply / 30ply / 36ply / 45ply thick netting",
      "Mesh Size": "35mm / 40mm square grid (cricket ball proof)",
      "Warranty": "3 Years warranty against outdoor weathering",
      "Customization": "Available in green and black colors"
    },
    installationProcess: [
      "Ground measurement and structure mapping for columns/suspension wires",
      "Erecting MS/GI pipes or setting up wall anchors for overhead suspension",
      "Tensioning heavy steel wire rope frameworks between support columns",
      "Hanging the cricket nets on the wire rope using snap hooks and loops",
      "Securing bottom weights to prevent the net from flying in wind conditions"
    ],
    faqIds: ["cricket-faq-1", "cricket-faq-2"],
    imageName: "cricket.jpeg"
  },
  {
    slug: "duct-area-safety-nets",
    name: "Duct Area Safety Nets",
    tagline: "Keep Building Duct Voids Free from Birds and Litter",
    priceRange: "₹20 - ₹30/sqft",
    minPrice: 20,
    maxPrice: 30,
    priceUnit: "sqft",
    shortDesc: "Block central duct areas, plumbing shafts, and ventilation voids from pigeon infestations and trash accumulation.",
    features: [
      "Garware quality HDPE or nylon copolymer construction",
      "Lightweight yet high-tensile nets for large vertical spans",
      "Available with custom zippers for plumbing and cable line access",
      "Corrosion-resistant anchoring hooks for brickwork/concrete",
      "Fire retardant treatment option"
    ],
    benefits: [
      "Excludes pigeons and crows from building ducts, preventing foul odors",
      "Prevents litter, plastic, and dust from landing at the bottom of ducts",
      "Improves hygiene for apartment bathroom and kitchen windows facing the duct",
      "Highly affordable way to secure massive building voids",
      "Reduces structural plumbing maintenance hazards"
    ],
    specs: {
      "Material": "Braided HDPE / Copolymer Nylon",
      "Thickness": "1.2mm to 2.0mm",
      "Mesh Size": "40mm / 50mm",
      "Warranty": "3 Years",
      "Fasteners": "SS 304 or galvanized anchors"
    },
    installationProcess: [
      "Rigging safety ropes and scaffolding/harnesses for high-rise shafts",
      "Drilling and fixing anchors along the entire duct perimeter",
      "Splicing and sewing separate net panels for custom duct configurations",
      "Installing zip openings at critical inspection ports or pipe junctions",
      "Tension-locking the net across the duct opening to ensure complete enclosure"
    ],
    faqIds: ["duct-faq-1", "duct-faq-2"],
    imageName: "ductarea1.webp"
  },
  {
    slug: "construction-safety-nets",
    name: "Construction Safety Nets",
    tagline: "Industrial-Grade Fall Arrest and Debris Protection Safety Nets",
    priceRange: "₹15 - ₹25/sqft",
    minPrice: 15,
    maxPrice: 25,
    priceUnit: "sqft",
    shortDesc: "Ensure worker safety and prevent hazardous debris falls on construction sites with certified safety nets.",
    features: [
      "Certified high-density braided polypropylene/nylon nets",
      "Double border rope reinforcement for maximum perimeter strength",
      "Exceptional energy absorption capacity matching safety codes",
      "Chemical, acid, and alkali resistant construction",
      "Includes secondary debris fine-mesh option"
    ],
    benefits: [
      "Complies with industrial building safety regulations (IS 11057)",
      "Protects workers from accidental high-altitude falls",
      "Catches falling bricks, tools, mortar, and steel fragments",
      "Reduces liability and improves safety ratings on site",
      "Highly reusable – easy to dismantle and move to upper floors"
    ],
    specs: {
      "Material": "Braided Polypropylene (PP) / Polyamide (Nylon)",
      "Mesh Size": "50mm / 100mm double-braided cord",
      "Cord Thickness": "3.0mm to 6.0mm heavy gauge",
      "Debris Mesh": "Optional HDPE green dust mesh overlay",
      "Certification": "Complies with IS-11057 safety standards",
      "Warranty": "1 Year high-wear site warranty"
    },
    installationProcess: [
      "Inspecting structure edge slabs and column steel loops",
      "Erecting outrigger metal brackets or tie-backs on building perimeter",
      "Securing heavy steel wire rope frameworks onto metal outriggers",
      "Mounting the safety nets onto structural cables with high-strength carabiners",
      "Spreading the fine debris mesh over the structural net and zip-lacing them together"
    ],
    faqIds: ["construction-faq-1", "construction-faq-2"],
    imageName: "constructionnets.webp"
  },
  {
    slug: "cloth-hangers",
    name: "Cloth Hangers",
    tagline: "Space-Saving Ceiling Pull-Down Clothes Drying Hangers",
    priceRange: "₹800 - ₹1500",
    minPrice: 800,
    maxPrice: 1500,
    priceUnit: "piece",
    shortDesc: "Optimize balcony utility. Ceiling-mounted, individual pipe pulley hangers for effortless indoor and balcony laundry drying.",
    features: [
      "Rust-proof premium stainless steel (SS 202/304) drying pipes",
      "Individual pipe operation via high-durability nylon cords",
      "Heavy-duty pulley system with metal core gears",
      "Wall-mounted cord locking hook for height adjustment",
      "Load capacity of up to 5 kg per pipe"
    ],
    benefits: [
      "Saves valuable balcony floor space compared to floor dryers",
      "Ceiling hot air circulation dries clothes much faster",
      "Neat, premium look that retracts clean when not in use",
      "Individual pipe adjustment allows easy hanging for different heights",
      "Strong construction that handles heavy bedsheets and jackets easily"
    ],
    specs: {
      "Pipe Material": "Stainless Steel SS 304 / SS 202 round tubes",
      "Number of Pipes": "4 pipes / 5 pipes / 6 pipes configuration",
      "Pipe Lengths": "4ft / 5ft / 6ft / 7ft options",
      "Cord Material": "Heavy-duty wear-resistant nylon pulley ropes",
      "Warranty": "1 Year structural & mechanism warranty"
    },
    installationProcess: [
      "Marking drilling spots on the balcony or ceiling slab",
      "Drilling and mounting dual pulley brackets on the ceiling with rawl plugs",
      "Installing the wall-bound rope anchor clamp at an accessible level",
      "Threading nylon cords through pulley gears and tying them onto SS drying pipes",
      "Adjusting lengths, installing end caps, and testing raising/lowering actions"
    ],
    faqIds: ["hangers-faq-1", "hangers-faq-2"],
    imageName: "clothhanger.jpg"
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug.toLowerCase() === slug.toLowerCase());
}
