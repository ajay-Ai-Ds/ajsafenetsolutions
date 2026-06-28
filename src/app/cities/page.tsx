import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/data/cities";

export const metadata = {
  title: "Service Coverage Cities | AJ Safe Net Solutions",
  description: "AJ Safe Net Solutions provides professional safety net and invisible grill installation services in Vijayawada, Chennai, Bangalore, and Pune.",
  alternates: {
    canonical: "https://www.ajsafenetsolutions.com/cities"
  }
};

export default function CitiesHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 space-y-12 animate-fade-reveal">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-xxs font-bold text-primary bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          Locations
        </span>
        <h1 className="text-2xl md:text-5xl font-extrabold font-sora text-navy mb-4">
          Cities We Serve Across India
        </h1>
        <p className="text-xs md:text-sm text-gray-500">
          We operate local warehousing yards and skilled rigging crews in every city listed below, enabling prompt same-day measurement and next-day installation.
        </p>
      </div>

      {/* Grid of Cities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cities.map(city => (
          <div
            key={city.slug}
            className="border border-gray-100 hover:border-primary/20 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-350 flex flex-col justify-between group"
          >
            <div>
              <div className="bg-primary/10 p-3 h-11 w-11 rounded-xl text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base md:text-lg font-bold font-sora text-navy group-hover:text-primary transition-colors">
                {city.name}
              </h3>
              <p className="text-xxs text-gray-400 font-medium block mt-1 uppercase tracking-wider">
                {city.areas.length} Primary Neighborhoods Covered
              </p>
              <p className="text-xxs md:text-xs text-gray-500 leading-relaxed mt-3 line-clamp-3">
                Professional safety net dealers in {city.name}. Specialized in balcones fall nets, pigeon nets, and modern SS 316 invisible grills built for {city.climate.split(" ")[0]} weather conditions.
              </p>
            </div>

            <Link
              href={`/${city.slug}`}
              className="mt-6 flex items-center gap-1.5 text-xxs font-bold text-primary hover:text-primary-dark hover:underline transition-all"
            >
              Explore {city.name} Services
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
