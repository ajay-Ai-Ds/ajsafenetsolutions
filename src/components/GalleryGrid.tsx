"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";

const categories = [
  { slug: "all", name: "All Work" },
  { slug: "grills", name: "Invisible Grills" },
  { slug: "pigeon", name: "Pigeon Nets" },
  { slug: "balcony", name: "Balcony Nets" },
  { slug: "other", name: "Other Nets" }
];

export default function GalleryGrid() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeTab === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="space-y-8 animate-fade-reveal">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map(tab => (
          <button
            key={tab.slug}
            onClick={() => setActiveTab(tab.slug)}
            className={`px-4 py-2.5 rounded-full font-semibold font-sora text-xs md:text-sm border transition-all duration-200 cursor-pointer min-h-[44px] flex items-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
              activeTab === tab.slug
                ? "bg-primary border-primary text-white shadow-md shadow-primary/20 scale-105"
                : "border-gray-200 text-gray-700 hover:border-primary hover:text-primary hover:bg-green-50/10"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedImage(item);
              }
            }}
            role="button"
            aria-label={`View image: ${item.title}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-md">
                <ZoomIn className="w-5 h-5" />
              </div>
              <h4 className="font-bold font-sora text-sm md:text-base mb-1">{item.title}</h4>
              <span className="text-xxs text-primary-light font-bold uppercase tracking-wider">
                {item.category.replace(/-/g, " ")}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-fade-reveal"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-navy/80 hover:bg-navy text-white p-3 rounded-full shadow-lg transition-transform hover:rotate-90 duration-300 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Container */}
            <div className="relative h-[300px] sm:h-[450px] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                priority
              />
            </div>

            {/* Meta Info */}
            <div className="p-6 bg-white">
              <span className="text-xxs font-bold text-primary uppercase tracking-wider block mb-1">
                Category: {selectedImage.category}
              </span>
              <h3 className="text-lg md:text-xl font-bold font-sora text-navy mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
