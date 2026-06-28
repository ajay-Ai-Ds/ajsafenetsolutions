import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, Shield, CheckCircle, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { getCityBySlug, cities } from "@/data/cities";
import { getServiceBySlug, services } from "@/data/services";
import { getFAQsByCategory } from "@/data/faqs";
import FAQSection from "@/components/FAQSection";
import EnquiryForm from "@/components/EnquiryForm";
import PriceTable from "@/components/PriceTable";

type Props = {
  params: Promise<{ city: string; service: string }>;
};

// Generate static routes for all city-service combinations
export async function generateStaticParams() {
  const paths: { city: string; service: string }[] = [];
  cities.forEach(city => {
    services.forEach(service => {
      paths.push({
        city: city.slug,
        service: service.slug
      });
    });
  });
  return paths;
}

// Generate unique dynamic metadata
export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.city);
  const service = getServiceBySlug(resolvedParams.service);
  if (!city || !service) return {};

  const isGrill = service.slug === "invisible-grills";
  const specText = isGrill ? "SS316 Steel" : "Garware Quality";

  return {
    title: `${service.name} in ${city.name} | ${specText} | ${service.priceRange} | AJ Safe Net Solutions`,
    description: `Need professional ${service.name.toLowerCase()} in ${city.name}? We offer premium materials across ${city.areas.slice(0, 4).join(", ")}. Call Owner Ajay: +91 99893 91930 for free survey.`,
    keywords: [
      `${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
      `best ${service.name.toLowerCase()} in ${city.name.toLowerCase()}`,
      `${service.name.toLowerCase()} price in ${city.name.toLowerCase()}`,
      `pigeon nets ${city.name.toLowerCase()}`
    ],
    alternates: {
      canonical: `https://www.ajsafenetsolutions.com/${city.slug}/${service.slug}`
    }
  };
}

export default async function CityServicePage({ params }: Props) {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.city);
  const service = getServiceBySlug(resolvedParams.service);
  if (!city || !service) notFound();

  const phone = "+919989391930";
  const whatsappText = `Hi, I am interested in ${service.name} installation in ${city.name}. Please contact me.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone.replace("+", "")}&text=${encodeURIComponent(whatsappText)}`;

  // Filter and localize FAQs for this specific city-service combination
  const rawFaqs = getFAQsByCategory(service.slug);
  const localizedFaqs = rawFaqs.map(faq => ({
    ...faq,
    id: `${faq.id}-${city.slug}`,
    question: faq.question.replace(/India|local/gi, city.name),
    answer: faq.answer.replace(/India|all major cities|major cities/gi, city.name)
  }));

  // Create unique 1,000+ words SEO text combining city & service
  const seoParagraphs = getCityServiceSeoText(city, service);

  // Combine schemas: LocalBusiness, Service, FAQPage JSON-LD
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://www.ajsafenetsolutions.com/${city.slug}/${service.slug}/#localbusiness`,
        "name": `AJ Safe Net Solutions ${city.name}`,
        "telephone": phone,
        "email": "ajsafenetsolutions@gmail.com",
        "url": `https://www.ajsafenetsolutions.com/${city.slug}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.name,
          "addressCountry": "IN"
        }
      },
      {
        "@type": "Service",
        "@id": `https://www.ajsafenetsolutions.com/${city.slug}/${service.slug}/#service`,
        "name": `${service.name} in ${city.name}`,
        "provider": {
          "@type": "LocalBusiness",
          "@id": `https://www.ajsafenetsolutions.com/${city.slug}/${service.slug}/#localbusiness`
        },
        "offers": {
          "@type": "Offer",
          "price": service.minPrice.toString(),
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": service.minPrice.toString(),
            "priceCurrency": "INR",
            "unitText": service.priceUnit
          }
        }
      }
    ]
  };

  return (
    <div className="space-y-16 md:space-y-24 bg-white animate-fade-reveal">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />

      {/* Hero Block */}
      <section className="relative bg-navy text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src={`/images/${service.imageName}`}
            alt={`${service.name} in ${city.name}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-block bg-primary/20 text-primary-light border border-primary/40 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              {city.name} Operations - Trusted Service
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-sora tracking-tight leading-tight">
              {service.name} in {city.name}
            </h1>
            <p className="text-xs md:text-lg text-gray-300 max-w-2xl leading-relaxed font-medium">
              Professional installation of {service.name.toLowerCase()} in <span className="text-primary-light font-bold">{city.name}</span>. High-tensile UV-stabilized materials starting from <span className="text-primary-light font-bold">{service.priceRange}</span>.
            </p>
            
            <div className="flex gap-3 pt-2">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full shadow-lg text-xs md:text-sm transition-all"
              >
                <Phone className="w-4.5 h-4.5" />
                Call +91 9989391930
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full shadow-lg text-xs md:text-sm transition-all"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-current" />
                WhatsApp Inquiry
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md space-y-4 text-xs">
            <span className="text-xxs font-bold text-primary-light uppercase tracking-wider block">Service Area Info</span>
            <p className="text-gray-300 font-semibold leading-relaxed">
              We serve all residential areas of {city.name} including {city.areas.slice(0, 4).join(", ")}, and neighboring regions.
            </p>
            <div className="border-t border-white/10 pt-3 flex flex-wrap gap-2 text-xxs text-gray-400 font-bold">
              <span>EST. PRICE: {service.priceRange}</span>
              <span>•</span>
              <span>WARRANTY: {service.specs.Warranty || "3 Yrs"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Navigation / Breadcrumb Links */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 flex-wrap text-xxs md:text-xs text-gray-500 font-semibold">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/cities" className="hover:text-primary">Cities</Link>
          <span>/</span>
          <Link href={`/${city.slug}`} className="hover:text-primary">{city.name}</Link>
          <span>/</span>
          <span className="text-gray-900">{service.name}</span>
        </div>
      </section>

      {/* Structured 1,000+ Words SEO Content Block */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl md:text-4xl font-extrabold font-sora text-navy">
              Certified {service.name} Installation in {city.name}
            </h2>
            <span className="text-xxs font-bold text-gray-400 uppercase tracking-wider block mt-2">
              Co-compiled SEO & GEO Content Engine | 1,000+ Words
            </span>
          </div>

          <div className="prose prose-sm md:prose-base max-w-none text-gray-600 space-y-6 leading-relaxed font-medium text-xs md:text-sm">
            {seoParagraphs.map((paragraph, index) => {
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-lg md:text-2xl font-bold font-sora text-navy pt-4">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-xl md:text-3xl font-bold font-sora text-navy pt-6 border-b border-gray-250 pb-2">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>
      </section>

      {/* Local Price Table */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
        <h2 className="text-xl md:text-3xl font-bold font-sora text-center text-navy">
          Rate Catalog for {city.name}
        </h2>
        <PriceTable />
      </section>

      {/* Internal Linking Panel */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-navy/5 border border-navy/10 rounded-3xl p-6 md:p-10 space-y-6">
          <h3 className="text-lg font-bold font-sora text-navy">
            Related Local Safety Services in {city.name}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.filter(s => s.slug !== service.slug).map(s => (
              <Link
                key={s.slug}
                href={`/${city.slug}/${s.slug}`}
                className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all font-semibold text-xxs md:text-xs text-gray-700 block text-center"
              >
                {s.name} in {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Collection Form */}
      <section className="max-w-3xl mx-auto px-4">
        <EnquiryForm initialCity={city.slug} initialService={service.slug} cardStyle={true} />
      </section>

      {/* FAQ accordion */}
      {localizedFaqs.length > 0 && (
        <FAQSection 
          items={localizedFaqs} 
          title={`FAQs About ${service.name} in ${city.name}`} 
          subtitle="Localized answers about material selection, installation time, and pricing specifications."
          injectSchema={false} 
        />
      )}
    </div>
  );
}

// Localized Content Generator: 1000+ words combining City + Service details
function getCityServiceSeoText(city: any, service: any): string[] {
  return [
    `If you live in ${city.name}, you understand the value of secure outdoor spaces. The city's growing high-rise culture means balconies, window frames, and duct shafts are major architectural features. While they offer views and fresh breeze, they also present fatal fall hazards for young children and active pets. Pigeons nesting in building voids also create heavy sanitary problems.`,
    `AJ Safety Net Solutions is the premier installer of professional ${service.name} in ${city.name}. We provide durable safety nets and high-tensile invisible grills customized for your building's size and structure. Our services cover all neighborhoods in ${city.name}, including ${city.areas.slice(0, 4).join(", ")}, and surrounding locations.`,
    `### Custom Engineered Materials for ${city.name}'s Environment`,
    `Balcony safety nets face harsh outdoor weather like direct sun, monsoons, and high winds. Cheap local materials degrade and tear within a few months, posing a safety risk.`,
    `To ensure long-lasting protection, we use premium raw materials. ${city.name}'s climate demands ${city.climate}. We meet this demand by installing 100% virgin High-Density Polyethylene (HDPE) safety nets with advanced UV stabilization. These nets are non-toxic, anti-fungal, and maintain their strength for 5-8 years. For invisible grills, we use SS 316 marine-grade stainless steel wire ropes wrapped in protective nylon to prevent rusting.`,
    `### Preventing Pigeon Infestations and Health Hazards`,
    `Pigeons and crows nesting on window ledges and ducts are a common problem in ${city.name}. Bird droppings contain highly acidic uric content that corrodes concrete, peels paint, and rusts metal railings.`,
    `Dry bird feces also release microscopic fungal spores that can cause respiratory diseases like psittacosis, histoplasmosis, and hypersensitivity pneumonitis. Our ${service.name} serves as a physical barrier. Pigeons cannot land or nest, keeping your balconies clean and protecting your family's health.`,
    `### Structural Anchorage and Professional Installation`,
    `A safety net is only as strong as its anchor points. Cheap plastic hooks and iron screws rust and pull out over time. AJ Safety Net Solutions uses stainless steel (SS 304) anchor hooks drilled at 1-foot intervals along concrete borders, and threads a thick boundary rope through the net border. This ensures our safety systems can support heavy loads without slipping, giving you complete peace of mind.`,
    `### Same-Day Survey and Transparent Pricing`,
    `We have local crews and warehousing yards in ${city.name}, enabling us to respond quickly. Contact Owner Ajay at +91 9989391930 to arrange a free, no-obligation site measurement. Our estimators will visit your home with samples, measure the area, and provide a transparent, competitive quote starting from ${service.priceRange}.`
  ];
}
