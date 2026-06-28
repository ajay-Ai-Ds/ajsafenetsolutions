"use client";

import React, { useState } from "react";
import { Star, Shield, ArrowLeft, ArrowRight } from "lucide-react";
import { reviews } from "@/data/reviews";

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = { mobile: 1, tablet: 2, desktop: 3 };

  const handlePrev = () => {
    setStartIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex(prev => Math.min(prev + 1, reviews.length - 3));
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold font-sora text-navy mb-4">
              What Our Customers Say
            </h2>
            <p className="text-sm md:text-base text-gray-500 max-w-xl leading-relaxed">
              We take pride in securing homes and commercial spaces across India. Hear from our satisfied clients.
            </p>
          </div>
          
          {/* Slider buttons */}
          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-3 rounded-full border transition-all ${
                startIndex === 0 
                  ? "border-gray-100 text-gray-300 cursor-not-allowed" 
                  : "border-gray-200 text-navy hover:bg-gray-50 active:scale-95"
              }`}
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= reviews.length - 3}
              className={`p-3 rounded-full border transition-all ${
                startIndex >= reviews.length - 3 
                  ? "border-gray-100 text-gray-300 cursor-not-allowed" 
                  : "border-gray-200 text-navy hover:bg-gray-50 active:scale-95"
              }`}
              aria-label="Next testimonials"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${startIndex * (100 / 3.05)}%)` }}
          >
            {reviews.map(review => (
              <div
                key={review.id}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 bg-gray-50/50 border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? "text-amber-500 fill-current" : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs md:text-sm text-gray-600 italic leading-relaxed mb-6">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <h4 className="font-bold text-navy text-sm">{review.name}</h4>
                    <span className="text-xxs text-gray-400 font-medium">{review.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xxs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
