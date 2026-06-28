export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQItem[] = [
  // General & Company FAQs
  {
    id: "gen-1",
    question: "Why choose AJ Safety Net Solutions over local contractors?",
    answer: "AJ Safety Net Solutions provides premium-grade materials (like Garware HDPE and 316-grade stainless steel cables for invisible grills), certified technicians who follow strict safety standards, transparent per-square-foot pricing, a free site visit, and an official 3-to-10-year warranty. Local contractors often use non-UV treated nets that deteriorate and tear within months.",
    category: "general"
  },
  {
    id: "gen-2",
    question: "Do you provide free site visits and measurements?",
    answer: "Yes, we provide 100% free site visits, assessments, and measurements in all major cities across India. Our professional estimator will visit your premises, show you material samples, measure the exact dimensions, and provide an instant, no-obligation quotation.",
    category: "general"
  },
  {
    id: "gen-3",
    question: "How long does the installation take?",
    answer: "For standard balconies or windows, installation is completed within 2 to 4 hours. Larger residential projects, multi-balcony villas, or complex building ducts may take a full day. We always ensure minimal disruption to your daily routine.",
    category: "general"
  },
  {
    id: "gen-4",
    question: "What does your warranty cover?",
    answer: "Our warranty covers manufacturing defects, chemical weathering, and premature degradation of the safety net under solar UV exposure. If your safety net snaps or sags during the warranty period, we will replace the material and re-install it free of charge.",
    category: "general"
  },

  // Balcony Safety Nets FAQs
  {
    id: "balcony-faq-1",
    question: "How strong are balcony safety nets? Can they support human weight?",
    answer: "Our heavy-duty balcony safety nets are made from high-density polyethylene (HDPE) with a high breaking strength of up to 100 kg per yarn. While they are designed primarily as a fall-protection barrier for toddlers, children, and pets, they can easily arrest the fall of an adult in an emergency.",
    category: "balcony-safety-nets"
  },
  {
    id: "balcony-faq-2",
    question: "Will the balcony safety nets block fresh breeze or light?",
    answer: "Not at all. Our balcony safety nets are thin, translucent, or lightweight green/mesh systems that maintain 95% airflow and transparency. You can enjoy your outdoor view and fresh air without any cage-like feeling.",
    category: "balcony-safety-nets"
  },
  {
    id: "balcony-faq-3",
    question: "Are these safety nets safe for pets like cats and dogs?",
    answer: "Yes, our pet safety nets are specifically double-knotted and reinforced to withstand clawing and chewing from cats and dogs. They prevent curious pets from slipping through balcony railings or falling from heights.",
    category: "balcony-safety-nets"
  },

  // Pigeon Safety Nets FAQs
  {
    id: "pigeon-faq-1",
    question: "Are transparent monofilament pigeon nets durable?",
    answer: "Yes, our transparent monofilament pigeon nets are chemically treated with UV stabilizers to resist sun damage. They are engineered to endure Indian weather conditions for 3+ years while remaining nearly invisible, keeping your building facade looking clean.",
    category: "pigeon-safety-nets"
  },
  {
    id: "pigeon-faq-2",
    question: "Do pigeon safety nets harm the birds?",
    answer: "No. Our pigeon safety nets serve as a physical barrier. They do not have sharp spikes or toxic coatings that could injure birds. Pigeons simply cannot find space to land or enter, prompting them to fly elsewhere safely.",
    category: "pigeon-safety-nets"
  },
  {
    id: "pigeon-faq-3",
    question: "How do you clean balcony pigeon nets?",
    answer: "Our safety nets are dust and water-resistant. You can easily clean them by spraying water with a hose or wiping them down. They do not retain stains or support mold growth.",
    category: "pigeon-safety-nets"
  },

  // Invisible Grills FAQs
  {
    id: "grill-faq-1",
    question: "What is the difference between invisible grills and traditional iron grills?",
    answer: "Traditional iron grills block panoramic views, rust easily in humid climates, require periodic painting, and are heavy. Invisible grills are made of high-tensile 316 marine-grade stainless steel cables wrapped in a protective membrane. They provide robust security (supporting over 400 kg), never rust, require no maintenance, and are virtually invisible from a distance, offering an unobstructed view.",
    category: "invisible-grills"
  },
  {
    id: "grill-faq-2",
    question: "Can invisible grills be cut in case of fire emergencies?",
    answer: "Yes! While invisible grills are extremely tough to break or pry apart by hand, they can be cut using a standard wire cutter in case of an emergency (such as a fire). This makes them much safer than traditional iron grills, which trap occupants inside.",
    category: "invisible-grills"
  },
  {
    id: "grill-faq-3",
    question: "Are invisible grills suitable for window and balcony installation in high-rises?",
    answer: "Yes, they are highly recommended for high-rise buildings. The aluminum track is anchored into structural concrete, and the cables are tensioned mechanically. This provides a clean aesthetic that conforms to high-rise building association regulations which often ban heavy iron grids.",
    category: "invisible-grills"
  },

  // Monkey Safety Nets FAQs
  {
    id: "monkey-faq-1",
    question: "Can monkeys chew or tear through monkey safety nets?",
    answer: "Our specialized monkey safety nets feature integrated stainless steel micro-wires braided inside the copolymer nylon fibers. This makes the net bite-proof and tear-resistant. Monkeys cannot chew through the metallic core and quickly learn to avoid trying.",
    category: "monkey-safety-nets"
  },
  {
    id: "monkey-faq-2",
    question: "How are monkey nets anchored differently from standard nets?",
    answer: "Monkeys are heavy and can apply massive pull forces. Therefore, we use heavy-duty MS/GI wall brackets and expanding steel sleeves instead of plastic hooks. The perimeter is laced with a thick steel wire rope locked with heavy tension clips.",
    category: "monkey-safety-nets"
  },

  // Cloth Hangers FAQs
  {
    id: "hangers-faq-1",
    question: "How much weight can a ceiling cloth hanger support?",
    answer: "Each stainless steel pipe in our ceiling pull-down hanger system can support up to 5 kg of wet laundry. The entire system (typically 6 pipes) can easily bear 25-30 kg of load, including heavy bedsheets, blankets, and winter wear.",
    category: "cloth-hangers"
  },
  {
    id: "hangers-faq-2",
    question: "What happens if the nylon pulley cord breaks?",
    answer: "We use high-durability, wear-resistant braided nylon ropes that last for years. In the rare event that a cord snaps or wears out, it can be replaced easily and affordably without replacing the entire steel pipe assembly. We offer replacement services and spare parts.",
    category: "cloth-hangers"
  }
];

export function getFAQsByCategory(category: string): FAQItem[] {
  return faqs.filter(f => f.category === category);
}

export function getGlobalFAQs(): FAQItem[] {
  return faqs.filter(f => f.category === "general");
}
