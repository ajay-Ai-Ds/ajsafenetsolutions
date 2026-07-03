import React from "react";
import { Star, ShieldCheck, Phone, MessageSquare, ArrowRight, Table, HelpCircle } from "lucide-react";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Pricing Guide | Safety Nets & Invisible Grills Price | AJ Safe Net Solutions",
  description: "View transparent pricing for safety nets and invisible grills in Vijayawada, Chennai, Bangalore, Pune. Prices start from ₹8/sqft. Call Ajay for a free quote.",
  alternates: {
    canonical: "https://www.ajsafenetsolutions.com/pricing"
  },
  openGraph: {
    title: "Pricing Guide | Safety Nets & Invisible Grills Price | AJ Safe Net Solutions",
    description: "View transparent pricing for safety nets and invisible grills in Vijayawada, Chennai, Bangalore, Pune. Prices start from ₹8/sqft.",
    url: "https://www.ajsafenetsolutions.com/pricing",
  }
};

export default function PricingPage() {
  const phone = "+919989391930";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone.replace("+", "")}&text=Hi%20AJ%20Safe%20Net%20Solutions,%20I%20would%20like%20a%20free%20quote%20for%20my%20balcony.`;

  const pricingRows = [
    {
      service: "Invisible Grills",
      material: "SS 316 Marine Grade Steel",
      price: "₹100 - ₹250 / sqft",
      warranty: "10 Years Warranty",
      type: "grills"
    },
    {
      service: "Pigeon Safety Nets",
      material: "High-Density Polyethylene (HDPE)",
      price: "₹8 - ₹15 / sqft",
      warranty: "3 - 5 Years Life",
      type: "nets"
    },
    {
      service: "Balcony Safety Nets",
      material: "UV-resistant Braided HDPE",
      price: "₹12 - ₹20 / sqft",
      warranty: "5 Years Warranty",
      type: "nets"
    },
    {
      service: "Children Safety Nets",
      material: "UV-stabilized Reinforced Nylon",
      price: "₹15 - ₹25 / sqft",
      warranty: "5 Years Warranty",
      type: "nets"
    },
    {
      service: "Bird Safety Nets",
      material: "Heavy-duty HDPE Braided",
      price: "₹10 - ₹18 / sqft",
      warranty: "3 - 5 Years Warranty",
      type: "nets"
    },
    {
      service: "Pet Safety Nets",
      material: "Bite-Proof Braided HDPE",
      price: "₹15 - ₹28 / sqft",
      warranty: "5 Years Warranty",
      type: "nets"
    },
    {
      service: "Mosquito Nets",
      material: "Fiberglass / SS 304 Mesh",
      price: "₹40 - ₹85 / sqft",
      warranty: "3 Years Warranty",
      type: "screens"
    },
    {
      service: "Terrace & Rooftop Nets",
      material: "Heavy HDPE Monofilament",
      price: "₹12 - ₹22 / sqft",
      warranty: "5 Years Warranty",
      type: "nets"
    },
    {
      service: "Cricket Practice Nets",
      material: "Braided HDPE Sports Net",
      price: "₹15 - ₹30 / sqft",
      warranty: "3 Years Warranty",
      type: "sports"
    },
    {
      service: "Construction Safety Nets",
      material: "IS-11057 certified PP Debris Net",
      price: "₹6 - ₹12 / sqft",
      warranty: "1 Year Site Warranty",
      type: "industrial"
    }
  ];

  const pricingFaqs = [
    {
      id: "price-faq-1",
      question: "How is safety net installation cost calculated in Vijayawada?",
      answer: "Safety net pricing is calculated on a per square foot basis. We multiply the height and width of your open balcony or window frame to find the total square footage and multiply it by the per-square-foot rate of the chosen net."
    },
    {
      id: "price-faq-2",
      question: "What factors affect the per square foot price of invisible grills?",
      answer: "The price of invisible grills is determined by the spacing between the SS 316 cables (standard is 2-inch, 3-inch, or 4-inch spacing) and the layout complexity of the concrete mounting tracks."
    },
    {
      id: "price-faq-3",
      question: "Is there a charge for site visits and measurements?",
      answer: "No. AJ Safe Net Solutions offers 100% free site visits, measurements, and sample evaluations in Vijayawada, Chennai, Bangalore, and Pune with absolutely zero obligations."
    },
    {
      id: "price-faq-4",
      question: "Does the price include brackets, anchor bolts, and framing hardware?",
      answer: "Yes, our per-square-foot rates are inclusive of all materials, including premium rustproof SS 304/316 anchor bolts, border ropes, structural hooks, and professional labor charges."
    },
    {
      id: "price-faq-5",
      question: "Are there any discounts for large residential societies?",
      answer: "Yes, we offer custom bulk discount rates (up to 15-20% off) for community installations or multi-flat orders within the same residential apartment society."
    },
    {
      id: "price-faq-6",
      question: "Why is SS316 marine-grade invisible grill more expensive than SS304?",
      answer: "SS 316 steel contains molybdenum, which makes it highly resistant to chloride and saltwater corrosion. It guarantees that the grills will not rust or weaken even in humid coastal areas like Chennai."
    },
    {
      id: "price-faq-7",
      question: "Do you charge extra for high-rise apartment installations?",
      answer: "No, we do not charge extra based on floor heights. Our certified technicians use professional safety harnesses and gear for high-altitude works at no additional cost to you."
    },
    {
      id: "price-faq-8",
      question: "What payment methods do you accept, and is same-day service available?",
      answer: "We accept Cash, UPI (GPay, PhonePe, Paytm), and bank transfers. We provide same-day installation across Vijayawada, Chennai, Bangalore, and Pune once the measurement is aligned."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 space-y-12 md:space-y-16 animate-fade-reveal">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-xxs font-bold text-primary bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          Pricing Details
        </span>
        <h1 className="text-2xl md:text-5xl font-extrabold font-sora text-navy mb-4">
          Transparent Safety Solutions Pricing
        </h1>
        <p className="text-xs md:text-sm text-gray-500">
          Compare pricing specifications and warranty details for all safety netting and invisible grill models. Get premium quality with zero hidden costs.
        </p>
      </div>

      {/* Pricing Table Section */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-6 bg-navy text-white flex items-center gap-3 border-b border-gray-800">
          <Table className="w-5 h-5 text-primary-light shrink-0" />
          <div>
            <h2 className="font-bold text-sm md:text-base font-sora">Price Comparison Table</h2>
            <p className="text-xxs text-gray-400">All prices calculated per square foot of installed area</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-xxs md:text-xs font-bold text-navy uppercase tracking-wider">
                <th className="p-4 md:p-6">Service Name</th>
                <th className="p-4 md:p-6">Material Specs</th>
                <th className="p-4 md:p-6">Price Range</th>
                <th className="p-4 md:p-6">Warranty & Lifespan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs text-gray-650">
              {pricingRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 md:p-6 font-bold text-navy whitespace-nowrap">{row.service}</td>
                  <td className="p-4 md:p-6">{row.material}</td>
                  <td className="p-4 md:p-6 font-extrabold text-primary whitespace-nowrap">{row.price}</td>
                  <td className="p-4 md:p-6">
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-xxs">
                      <ShieldCheck className="w-3 h-3" />
                      {row.warranty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dynamic CTA Banner */}
      <div className="bg-gray-50 border border-gray-150 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-bold font-sora text-navy">
            * Price depends on area size — get free quote
          </h3>
          <p className="text-xxs md:text-xs text-gray-500">
            Balcony dimensions vary significantly across residential layouts. Contact Owner Ajay directly for a quick estimation.
          </p>
        </div>
        
        <div className="flex gap-3 shrink-0">
          <a
            href={`tel:${phone}`}
            className="bg-navy hover:bg-navy-light text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 text-xs transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call Ajay</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 text-xs transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Pricing FAQs Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-navy">
          <HelpCircle className="w-5 h-5 text-primary" />
          <h2 className="text-xl md:text-2xl font-bold font-sora">Frequently Asked Pricing Questions</h2>
        </div>
        
        <FAQSection items={pricingFaqs} />
      </div>
    </div>
  );
}
