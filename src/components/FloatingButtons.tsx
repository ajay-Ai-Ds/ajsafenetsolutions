"use client";

import React from "react";
import { Phone, MessageSquare } from "lucide-react";

export default function FloatingButtons() {
  const phone = "+919989391930";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone.replace("+", "")}&text=Hi%20AJ%20Safe%20Net%20Solutions,%20I%20am%20interested%20in%20your%20services.%20Please%20contact%20me.`;

  return (
    <>
      {/* Desktop Floating Action Buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-5 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 group cursor-pointer will-change-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="text-sm font-bold font-sora">WhatsApp Us</span>
        </a>

        {/* Call Now Button */}
        <a
          href={`tel:${phone}`}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 group cursor-pointer will-change-transform"
          aria-label="Call Owner"
        >
          <Phone className="w-5 h-5 fill-current animate-pulse group-hover:animate-none" />
          <span className="text-sm font-bold font-sora">Call Ajay</span>
        </a>
      </div>

      {/* Mobile Sticky CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-gray-150 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        {/* Call Button */}
        <a
          href={`tel:${phone}`}
          className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-2 border-r border-blue-700/20 text-xs font-sora tracking-wide uppercase cursor-pointer"
          aria-label="Call Ajay"
        >
          <Phone className="w-4 h-4 fill-current text-white" />
          <span>Call Ajay</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold flex items-center justify-center gap-2 text-xs font-sora tracking-wide uppercase cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-current text-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
