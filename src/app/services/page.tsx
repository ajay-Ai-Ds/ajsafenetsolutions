import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare } from "lucide-react";
import { services } from "@/data/services";
import PriceTable from "@/components/PriceTable";

export const metadata = {
  title: "Our Services | Balcony Safety Nets & Invisible Grills",
  description: "Browse our 10 safety installation services: Pigeon nets, children fall protection, anti-monkey screens, sports meshes, and SS 316 invisible grills."
};

export default function ServicesPage() {
  const phone = "+919989391930";
  
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 space-y-16 md:space-y-24 animate-fade-reveal">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-xxs font-bold text-primary bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          What We Do
        </span>
        <h1 className="text-2xl md:text-5xl font-extrabold font-sora text-navy mb-4">
          Safety Net & Invisible Grill Services
        </h1>
        <p className="text-xs md:text-sm text-gray-500">
          From balcony fall barriers to heavy-duty industrial nets, we utilize virgin polymers and marine-grade steel to deliver robust protection.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <div 
            key={service.slug}
            className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Image Container */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={`/images/${service.imageName}`}
                alt={service.tagline}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <p className="text-xxs md:text-xs text-gray-500 leading-relaxed mt-2 line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              {/* Specs */}
              <div className="border-t border-gray-50 pt-3">
                <span className="text-xxs font-bold text-gray-400 block uppercase tracking-wider mb-2">Specifications</span>
                <div className="grid grid-cols-2 gap-2 text-xxs text-gray-600 font-semibold">
                  <div>
                    <span className="text-gray-400">Material:</span> {service.specs.Material?.slice(0, 15) || "HDPE"}
                  </div>
                  <div>
                    <span className="text-gray-400">Warranty:</span> {service.specs.Warranty || "3 Years"}
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="flex gap-2 pt-2">
                <Link
                  href={`/services/${service.slug}`}
                  className="flex-grow text-center text-xxs font-bold bg-gray-100 hover:bg-primary hover:text-white text-navy py-2.5 rounded-lg transition-all"
                >
                  Configure & Price
                </Link>
                <a
                  href={`tel:${phone}`}
                  className="bg-primary hover:bg-primary-dark text-white rounded-lg p-2.5 flex items-center justify-center shadow-md active:scale-95 transition-all"
                  title="Call Ajay Now"
                >
                  <Phone className="w-4.5 h-4.5" />
                </a>
                <a
                  href={`https://api.whatsapp.com/send?phone=${phone.replace("+", "")}&text=Hi, I am interested in ${service.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg p-2.5 flex items-center justify-center shadow-md active:scale-95 transition-all"
                  title="WhatsApp Inquiry"
                >
                  <MessageSquare className="w-4.5 h-4.5 fill-current" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Comparison Table Section */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-xl md:text-3xl font-extrabold font-sora text-navy">
            Quick Rate Comparison Calculator
          </h2>
          <p className="text-xxs md:text-xs text-gray-500 mt-2">
            Pricing is calculated per square foot of area covered, including all raw materials, drilling screws, wall brackets, and expert labor.
          </p>
        </div>
        
        <PriceTable />
      </div>
    </div>
  );
}
