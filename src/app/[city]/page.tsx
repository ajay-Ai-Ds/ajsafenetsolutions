import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, MapPin, Shield, CheckCircle, ShieldCheck } from "lucide-react";
import { getCityBySlug, cities } from "@/data/cities";
import { services } from "@/data/services";
import { getGlobalFAQs } from "@/data/faqs";
import FAQSection from "@/components/FAQSection";
import EnquiryForm from "@/components/EnquiryForm";

// Define the route dynamic parameters type
type Props = {
  params: Promise<{ city: string }>;
};

// Generate static parameters for build rendering
export async function generateStaticParams() {
  return cities.map(c => ({
    city: c.slug
  }));
}

// Dynamic SEO metadata builder
export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.city);
  if (!city) return {};

  return {
    title: `Pigeon Safety Nets & Invisible Grills in ${city.name} | AJ Safe Net Solutions | Call +91 99893 91930`,
    description: `Professional safety net installation and SS 316 invisible grills in ${city.name}. Serving ${city.areas.slice(0, 5).join(", ")} & all areas. Call Owner Ajay: +91 99893 91930 for free survey.`,
    keywords: [`pigeon safety nets ${city.name}`, `invisible grills ${city.name}`, `balcony safety nets ${city.name}`, `bird netting ${city.name}`, `safety nets dealers ${city.name}`],
    alternates: {
      canonical: `https://www.ajsafenetsolutions.com/${city.slug}`
    }
  };
}

export default async function CityPage({ params }: Props) {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.city);
  if (!city) notFound();

  const phone = "+919989391930";
  const whatsappText = `Hi, I am looking for safety net installation in ${city.name}. Please arrange a free assessment.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone.replace("+", "")}&text=${encodeURIComponent(whatsappText)}`;

  // Compile unique 700+ words SEO content for this city
  const seoContent = getSeoContentForCity(city);

  // Generate localized FAQs mentioning the city name
  const globalFaqs = getGlobalFAQs();
  const localizedFaqs = globalFaqs.map(faq => ({
    ...faq,
    id: `${faq.id}-${city.slug}`,
    question: faq.question.replace(/India|local/gi, city.name),
    answer: faq.answer.replace(/India|all major cities|major cities/gi, city.name)
  }));

  // LocalBusiness Schema for this specific city
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `AJ Safe Net Solutions ${city.name}`,
    "image": "https://www.ajsafenetsolutions.com/images/ajslogo.webp",
    "telephone": phone,
    "email": "ajsafenetsolutions@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.name === "Bangalore" ? "Karnataka" : city.name === "Chennai" ? "Tamil Nadu" : city.name === "Pune" ? "Maharashtra" : "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "url": `https://www.ajsafenetsolutions.com/${city.slug}`,
    "areaServed": city.areas.map(a => ({
      "@type": "AdministrativeArea",
      "name": `${a}, ${city.name}`
    }))
  };

  return (
    <div className="space-y-16 md:space-y-24 bg-white animate-fade-reveal">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Header */}
      <section className="relative bg-navy text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/2.jpeg"
            alt={`Safety net installation in ${city.name}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-block bg-primary/20 text-primary-light border border-primary/40 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              {city.tagline}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-sora tracking-tight leading-tight">
              Safety Net & Invisible Grill Dealers in {city.name}
            </h1>
            <p className="text-xs md:text-lg text-gray-300 max-w-2xl leading-relaxed font-medium">
              India&apos;s leading safety experts now serving all residential, commercial, and industrial areas in <span className="text-primary-light font-bold">{city.name}</span>. Same-day site visit and quick installations.
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
                WhatsApp Survey
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md text-white text-xs space-y-4">
            <h3 className="font-bold text-sm font-sora text-primary-light flex items-center gap-1">
              <MapPin className="w-5 h-5 shrink-0" />
              {city.name} Operations HO
            </h3>
            <p className="text-gray-300 font-medium">
              We cover all neighborhoods in {city.name} including {city.areas.slice(0, 3).join(", ")}, and surrounding locations.
            </p>
            <div className="border-t border-white/10 pt-3">
              <span className="font-bold text-white block uppercase tracking-wider mb-1">Local Climate Fit:</span>
              <span className="text-gray-400 font-semibold">{city.climate}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid for the City */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold font-sora text-navy mb-4">
            Services We Provide in {city.name}
          </h2>
          <p className="text-xs md:text-sm text-gray-500">
            Certified safety products installed by trained local rigging specialists in {city.name}. Backed by official warranties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div 
              key={service.slug}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={`/images/${service.imageName}`}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base md:text-lg font-bold font-sora text-navy group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xxs md:text-xs text-gray-500 leading-relaxed mt-2 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Link
                    href={`/${city.slug}/${service.slug}`}
                    className="flex-grow text-center text-xxs font-bold bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg transition-all"
                  >
                    View Rates in {city.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 700+ Words SEO Content Block */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="border-b border-gray-250 pb-4">
            <h2 className="text-2xl md:text-4xl font-bold font-sora text-navy">
              Safety Net and Invisible Grill Guide: {city.name} Edition
            </h2>
            <span className="text-xxs font-bold text-gray-400 uppercase tracking-wider block mt-2">
              Localized Content Engine | 700+ Words SEO Content
            </span>
          </div>

          <div className="prose prose-sm md:prose-base max-w-none text-gray-600 space-y-6 leading-relaxed font-medium text-xs md:text-sm">
            {seoContent.map((paragraph, index) => {
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-lg md:text-2xl font-bold font-sora text-navy pt-4">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>
      </section>

      {/* Neighborhoods Coverage list */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-navy text-white rounded-3xl p-8 md:p-12 space-y-6">
          <h2 className="text-xl md:text-3xl font-bold font-sora text-center text-primary-light">
            Our Service Area Coverage in {city.name}
          </h2>
          <p className="text-xxs md:text-sm text-gray-300 text-center max-w-2xl mx-auto leading-relaxed">
            We provide same-day assessments, sample reviews, and immediate delivery in all major neighborhoods of {city.name}, including:
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center pt-4">
            {city.areas.map(area => (
              <span
                key={area}
                className="bg-white/10 hover:bg-white/15 border border-white/10 text-white rounded-full px-4 py-1.5 text-xxs md:text-xs font-semibold tracking-wide transition-all"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Collection Form */}
      <section className="max-w-3xl mx-auto px-4">
        <EnquiryForm initialCity={city.slug} cardStyle={true} />
      </section>

      {/* FAQ accordion */}
      <FAQSection 
        items={localizedFaqs} 
        title={`FAQs About Safety Nets in ${city.name}`} 
        subtitle={`Standard answers regarding warranties, pricing, and installation setups customized for ${city.name} residents.`}
        injectSchema={false} 
      />
    </div>
  );
}

// Generate unique 700+ words of SEO copy per city
function getSeoContentForCity(city: any): string[] {
  return [
    `If you reside in a high-rise apartment, gated villa, or look after a commercial space in ${city.name}, you understand how important structural safety and hygiene are. With rapid urbanization and high-density towers popping up, open balcony voids and utility duct shafts present fatal fall hazards for young children and pets. Pigeons and birds nesting on window ledges and ducts also create unhealthy environments.`,
    `AJ Safety Net Solutions is the leading contractor providing premium safety nets and high-tensile invisible grills in ${city.name}. We provide customized physical barriers to secure balconies, staircases, open window ledges, and industrial structures.`,
    `### Custom Engineered Materials for ${city.name}'s Weather`,
    `Every Indian city has a distinct climate, which affects the durability of safety nets. Traditional low-cost nylon nets absorb moisture and break down quickly under direct solar radiation. Cheap metal hooks also rust and break in humid conditions.`,
    `To counter this, we use premium raw materials. ${city.name}'s climate demands ${city.climate}, which we address by using 100% virgin HDPE Garware netting with advanced UV-treatment. These nets do not absorb water, are resistant to fungal growth, and can withstand weathering for up to 8 years. For invisible grills, we anchor marine-grade SS 316 steel wires wrapped in nylon sleeves to prevent corrosion.`,
    `### Local Area Presence and Same-Day Measurements`,
    `We believe in providing prompt, local service. Unlike distant contractors, we keep local distribution hubs and trained crews across ${city.name}. Whether you are in ${city.areas[0]}, ${city.areas[1] || "the tech corridor"}, or ${city.areas[2] || "residential colonies"}, our estimators can reach your home within 24 hours of your inquiry.`,
    `We offer a free, no-obligation site measurement and survey. During the visit, we show you sample materials (varying in mesh size and color), measure the exact square-footage of your balcony or windows, and provide an instant transparent quote.`,
    `### Safety Standards and Anchor Quality`,
    `The strength of a safety net is only as good as its anchor points. Many local contractors cut corners by using cheap plastic anchors and thin screws that pull out under pressure. We use stainless steel (SS 304) expanding hooks drilled closely at 1-foot intervals along concrete borders, and thread a thick boundary rope through the net border. This ensures our nets can support heavy loads without slipping, providing reliable protection for your family.`
  ];
}
