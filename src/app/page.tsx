import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Phone, MessageSquare, ShieldCheck, Award, Users, CheckCircle, Zap } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import EnquiryForm from "@/components/EnquiryForm";
import FAQSection from "@/components/FAQSection";
import PriceTable from "@/components/PriceTable";
import { services } from "@/data/services";
import { getGlobalFAQs } from "@/data/faqs";

const GalleryGrid = dynamic(() => import("@/components/GalleryGrid"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));

export default function Home() {
  const phone = "+918121488961";
  const email = "ajsafenetsolutions@gmail.com";
  const globalFaqs = getGlobalFAQs();
  
  const stats = [
    { label: "Completed Projects", value: "1000+", icon: CheckCircle },
    { label: "Experience", value: "15+ Years", icon: Award },
    { label: "Customer Rating", value: "5.0 Stars", icon: Users },
    { label: "Installation Warranty", value: "3-5 Years", icon: ShieldCheck }
  ];

  const features = [
    {
      title: "SS 316 Marine-Grade Invisible Grills",
      desc: "Rustproof and corrosion-resistant high-tensile steel cables supporting up to 400 kg of load, ensuring modern security."
    },
    {
      title: "100% UV-Resistant Garware HDPE Nets",
      desc: "Engineered from virgin polymers to withstand heavy solar radiation and Indian monsoons without sag or degradation."
    },
    {
      title: "Same Day Response & Free Survey",
      desc: "Get immediate measurements and sample assessments at your balcony or window. Fully free site visits."
    },
    {
      title: "Certified Safety Installations",
      desc: "Our technicians wear safety harnesses, use professional tools, and ensure double border rope tensioning."
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24 bg-white animate-fade-reveal">
      {/* Hero Carousel */}
      <section className="relative z-10">
        <HeroCarousel />
      </section>

      {/* Trust & Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-navy text-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-800">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="bg-primary/20 p-3 rounded-full text-primary-light">
                  <Icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xl md:text-3xl font-extrabold font-sora text-primary-light animate-pulse">
                  {stat.value}
                </span>
                <span className="text-xxs md:text-xs text-gray-300 font-medium">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xxs font-bold text-primary bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            Safety Solutions
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold font-sora text-navy mb-4">
            Our Premium Protection Services
          </h2>
          <p className="text-xs md:text-sm text-gray-600">
            Select from our extensive catalog of certified safety netting and invisible grill products. Expert same-day installation and durable materials guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map(service => (
            <div 
              key={service.slug}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={`/images/${service.imageName}`}
                  alt={service.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xxs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                  Est. {service.priceRange}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base md:text-lg font-bold font-sora text-navy group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xxs md:text-xs text-gray-600 leading-relaxed mt-2 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <span key={i} className="text-xxs font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                        {feat.split(" ").slice(0, 2).join(" ")}...
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex gap-2 pt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex-grow text-center text-xs font-bold bg-gray-100 hover:bg-primary hover:text-white text-navy py-3 px-3 rounded-lg transition-all min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                  >
                    View Details
                  </Link>
                  <a
                    href={`tel:${phone}`}
                    className="bg-primary hover:bg-primary-dark text-white rounded-lg p-3 flex items-center justify-center shadow-md active:scale-95 transition-all min-w-[44px] min-h-[44px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                    aria-label={`Call about ${service.name}`}
                  >
                    <Phone className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${phone.replace("+", "")}&text=Hi,%20I%20am%20interested%20in%20${service.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg p-3 flex items-center justify-center shadow-md active:scale-95 transition-all min-w-[44px] min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                    aria-label={`WhatsApp inquiry about ${service.name}`}
                  >
                    <MessageSquare className="w-4.5 h-4.5 fill-current" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-navy hover:bg-navy-light text-white text-xs md:text-sm font-bold px-6 py-3.5 rounded-full transition-all shadow-md min-h-[44px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            View All 10 Safety Services &rarr;
          </Link>
        </div>
      </section>

      {/* Structured GEO About Section (Wikipedia style entity signal) */}
      <section className="bg-gray-50 py-16 md:py-20 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold font-sora text-navy text-center">
            About AJ Safe Net Solutions
          </h2>
          <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-sm space-y-4">
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-normal">
              <strong>AJ Safe Net Solutions</strong>, led by Ajay, is a professional safety net and invisible grill installation company operating since 2019. Serving Vijayawada, Hyderabad, Chennai, Bangalore, and Pune with 1000+ successfully completed projects and a 5.0-star customer rating. The company specializes in SS316 marine-grade invisible grills and UV-resistant HDPE pigeon safety nets. Known for same-day response, transparent pricing with no hidden charges, and a 3-5 year installation warranty. Contact: +91 8121488961
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xxs md:text-xs text-gray-600 border-t border-gray-100 pt-4 font-semibold">
              <div>
                <strong>Founder/Owner:</strong> Ajay
              </div>
              <div>
                <strong>Established:</strong> 2019 (15+ Years Experience)
              </div>
              <div>
                <strong>Primary Base:</strong> Vijayawada / Hyderabad
              </div>
              <div>
                <strong>Materials:</strong> SS316 Marine Grade, Garware UV-stabilized HDPE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Key Features Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-block text-xxs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
            Why Choose Us
          </span>
          
          <h2 className="text-2xl md:text-4xl font-bold font-sora text-navy leading-tight">
            Professional Safety Net & Invisible Grill Contractors
          </h2>
          
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            For over 5 years, AJ Safe Net Solutions has secured homes, high-rise balconies, stairwells, offices, and plumbing ducts from accidental fall risks and pigeon droppings. We serve Vijayawada, Hyderabad, Chennai, Bangalore, and Pune with certified technicians and BIS-certified safety products.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {features.map((feat, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="bg-primary/10 p-2 h-10 w-10 shrink-0 flex items-center justify-center rounded-lg text-primary">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xs md:text-sm">{feat.title}</h3>
                  <p className="text-xxs text-gray-600 leading-relaxed mt-1">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Side */}
        <div id="enquiry-form">
          <EnquiryForm />
        </div>
      </section>

      {/* How It Works (Process) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold font-sora text-navy mb-4">
            Our Simple 4-Step Process
          </h2>
          <p className="text-xs md:text-sm text-gray-600">
            From initial phone call to completed installation, we ensure a seamless and hassle-free service experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Contact Us", desc: "Call or WhatsApp your balcony requirements to Owner Ajay (+91 8121488961)." },
            { step: "02", title: "Free Site Survey", desc: "Our local technicians visit your home to measure the exact balcony or window dimensions." },
            { step: "03", title: "Professional Mount", desc: "We drill SS hooks at 1-foot spacing, tension the UV-treated safety nets, and lock anchors." },
            { step: "04", title: "Clean Up & Handover", desc: "Our team vacuums the drilling dust, inspects the tension knots, and delivers the warranty card." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all relative group">
              <div className="text-3xl font-extrabold text-primary/10 group-hover:text-primary/20 transition-colors absolute top-4 right-4">
                {item.step}
              </div>
              <h3 className="font-bold font-sora text-navy text-sm md:text-base mb-2 pt-4">
                {item.title}
              </h3>
              <p className="text-xxs md:text-xs text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Gallery Preview Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold font-sora text-navy mb-3">
              Gallery of Our Installations
            </h2>
            <p className="text-xs md:text-sm text-gray-600 max-w-lg">
              Explore filterable high-quality images showcasing our actual safety net and invisible grill works.
            </p>
          </div>
          
          <Link
            href="/gallery"
            className="text-xxs md:text-xs font-bold text-primary hover:underline transition-all mt-4 md:mt-0 min-h-[44px] flex items-center"
          >
            View Full Gallery &rarr;
          </Link>
        </div>

        <GalleryGrid />
      </section>

      {/* Testimonials Slider */}
      <Testimonials />

      {/* FAQ Accordion Section */}
      <FAQSection items={globalFaqs} />

      {/* Conversion Banner Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-10">
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-3xl p-8 md:p-14 text-center shadow-xl space-y-6">
          <h2 className="text-2xl md:text-4xl font-extrabold font-sora tracking-tight">
            Schedule Your Free Measurement Today!
          </h2>
          <p className="text-xs md:text-lg text-green-100 max-w-xl mx-auto font-medium">
            Contact Owner Ajay directly on phone or WhatsApp. We serve Vijayawada, Hyderabad, Chennai, Bangalore, and Pune with verified experts.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap pt-2">
            <a
              href={`tel:${phone}`}
              className="bg-navy hover:bg-navy-light text-white font-bold py-3.5 px-8 rounded-full shadow-md text-xs md:text-sm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Call +91 8121488961
            </a>
            
            <a
              href={`https://api.whatsapp.com/send?phone=${phone.replace("+", "")}&text=Hi%20AJ%20Safe%20Net%20Solutions,%20please%20arrange%20a%20free%20site%20assessment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-green-50 font-bold py-3.5 px-8 rounded-full shadow-md text-xs md:text-sm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
