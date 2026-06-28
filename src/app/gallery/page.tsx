import React from "react";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Installation Gallery | AJ Safety Net Solutions",
  description: "View our project photos showing pigeon safety netting, transparent balcony nets, and modern invisible grills installed across India."
};

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 space-y-10 animate-fade-reveal">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-xxs font-bold text-primary bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          Portfolio
        </span>
        <h1 className="text-2xl md:text-5xl font-extrabold font-sora text-navy mb-4">
          Our Installation Gallery
        </h1>
        <p className="text-xs md:text-sm text-gray-500">
          We take pride in delivering highly secure, neat, and long-lasting safety structures. Browse through photos of our completed work.
        </p>
      </div>

      <GalleryGrid />
    </div>
  );
}
