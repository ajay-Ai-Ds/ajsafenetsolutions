"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MessageSquare, Phone, ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  {
    src: "/images/balcony2.webp",
    title: "India's Trusted Safety Net Experts",
    tagline: "High-Tensile Balcony Safety Nets",
    desc: "Complete protection for children and pets starting from ₹20/sqft. Same-day professional installation available."
  },
  {
    src: "/images/balconygrill.webp",
    title: "Premium Stainless Steel Invisible Grills",
    tagline: "Unobstructed Views & Uncompromised Safety",
    desc: "Modern rust-proof SS 316 cables replacing bulky metal bars. Ideal for window and balcony structures."
  },
  {
    src: "/images/bird.jpg",
    title: "Permanent Pigeon Exclusion Netting",
    tagline: "Keep Balconies Sanitary & Safe",
    desc: "UV-resistant monofilament transparent nets that exclude pigeons without blocking fresh breeze and light."
  },
  {
    src: "/images/ductarea2.webp",
    title: "Certified Fall Prevention Networks",
    tagline: "Guard Railing & Open Voids Protection",
    desc: "Double-knotted HDPE safety mesh engineered to support up to 100 kg. Standard conforming anchor locks."
  },
  {
    src: "/images/6.jpeg",
    title: "Durable Weatherproof Outdoor Nets",
    tagline: "UV-Stabilized Anti-Bird Systems",
    desc: "Garware raw materials that withstand extreme Indian summer heat and heavy monsoons. 3-5 years warranty."
  },
  {
    src: "/images/grillnight.jpeg",
    title: "Modern Window Security Infrastructure",
    tagline: "Elegant Invisible Cable Grills",
    desc: "2.0mm highly robust steel strands with protective teflon coatings. Smart alarm system compatible."
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const phone = "+919989391930";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone.replace("+", "")}&text=Hi%20AJ%20Safety%20Net%20Solutions,%20I%20am%20interested%20in%20a%20free%20site%20visit%20and%20quote.`;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden bg-navy">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {carouselImages.map((slide, idx) => {
          const isActive = currentSlide === idx;

          return (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Image */}
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                sizes="100vw"
                priority={idx === 0}
                className="object-cover object-center scale-102"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />

              {/* Slide Content */}
              {isActive && (
                <div className="absolute inset-0 flex items-center z-20">
                  <div className="max-w-4xl mx-auto px-6 md:px-12 w-full text-white space-y-4 md:space-y-6 animate-fade-reveal">
                    {/* Badge */}
                    <span className="inline-block bg-primary/20 text-primary-light border border-primary/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                      {slide.tagline}
                    </span>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-sora tracking-tight leading-tight max-w-2xl text-shadow-sm">
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="text-sm md:text-lg text-gray-200 max-w-xl font-medium leading-relaxed">
                      {slide.desc}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2 flex-wrap">
                      <a
                        href={`tel:${phone}`}
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 text-xs md:text-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                      >
                        <Phone className="w-4.5 h-4.5" />
                        Call Owner Ajay
                      </a>
                      
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 text-xs md:text-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                      >
                        <MessageSquare className="w-4.5 h-4.5 fill-current" />
                        WhatsApp Enquiry
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Manual Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-navy/40 hover:bg-navy/75 text-white p-2.5 rounded-full backdrop-blur-sm border border-white/10 transition-all active:scale-90 hover:scale-105 cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-navy/40 hover:bg-navy/75 text-white p-2.5 rounded-full backdrop-blur-sm border border-white/10 transition-all active:scale-90 hover:scale-105 cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              currentSlide === idx ? "w-8 bg-primary" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
