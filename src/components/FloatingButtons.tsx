"use client";

import React from "react";
import { Phone, MessageSquare } from "lucide-react";

export default function FloatingButtons() {
  const phone = "+919989391930";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone.replace("+", "")}&text=Hi%20AJ%20Safety%20Net%20Solutions,%20I%20am%20interested%20in%20your%20services.%20Please%20contact%20me.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-5 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current animate-bounce group-hover:animate-none" />
        <span className="text-sm hidden sm:inline">WhatsApp Us</span>
      </a>

      {/* Call Now Button */}
      <a
        href={`tel:${phone}`}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 group"
        aria-label="Call Owner"
      >
        <Phone className="w-5 h-5 fill-current animate-pulse group-hover:animate-none" />
        <span className="text-sm hidden sm:inline">Call Now</span>
      </a>
    </div>
  );
}
