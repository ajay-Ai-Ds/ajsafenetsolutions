import React from "react";
import Link from "next/link";
import { Check, Shield, MessageSquare, Phone } from "lucide-react";
import { services } from "@/data/services";

export default function PriceTable() {
  const phone = "+919989391930";
  
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-xl bg-white animate-fade-reveal">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-navy text-white text-sm md:text-base border-b border-gray-800">
            <th className="p-4 font-semibold font-sora">Service Name</th>
            <th className="p-4 font-semibold font-sora">Ideal Application</th>
            <th className="p-4 font-semibold font-sora">Warranty Details</th>
            <th className="p-4 font-semibold font-sora text-center">Estimated Price</th>
            <th className="p-4 font-semibold font-sora text-center">Inquiry</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-xs md:text-sm text-gray-700">
          {services.map((service, index) => {
            const waText = `Hi, I am interested in ${service.name}. Please share price estimate.`;
            const waUrl = `https://api.whatsapp.com/send?phone=${phone.replace("+", "")}&text=${encodeURIComponent(waText)}`;
            
            return (
              <tr 
                key={service.slug} 
                className={`hover:bg-green-50/50 transition-colors duration-150 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
              >
                {/* Service Name */}
                <td className="p-4 font-semibold text-gray-900">
                  <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors">
                    {service.name}
                  </Link>
                </td>
                
                {/* Ideal Application */}
                <td className="p-4 max-w-xs md:max-w-md">
                  <div className="flex items-start gap-1.5">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{service.shortDesc}</span>
                  </div>
                </td>
                
                {/* Warranty */}
                <td className="p-4 font-medium text-gray-600 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-emerald-500" />
                    <span>{service.specs.Warranty || "1 Year Warranty"}</span>
                  </div>
                </td>
                
                {/* Price Range */}
                <td className="p-4 text-center font-bold text-primary whitespace-nowrap text-sm md:text-base">
                  {service.priceRange}
                </td>
                
                {/* CTAs */}
                <td className="p-4">
                  <div className="flex justify-center items-center gap-2">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-3 hover:scale-105 transition-all shadow-md"
                      title="Inquire on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                    </a>
                    <a
                      href={`tel:${phone}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 hover:scale-105 transition-all shadow-md"
                      title="Call Installer"
                    >
                      <Phone className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
