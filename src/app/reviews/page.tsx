import React from "react";
import { Star, ShieldCheck, ThumbsUp } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import { reviews, getAverageRating } from "@/data/reviews";

export const metadata = {
  title: "Customer Reviews | AJ Safety Net Solutions",
  description: "Read customer testimonials and ratings for AJ Safety Net Solutions. See why 15,000+ homeowners trust us for safety installations."
};

export default function ReviewsPage() {
  const { rating, count } = getAverageRating();

  // Ratings distribution analysis
  const starCounts = [0, 0, 0, 0, 0]; // 1, 2, 3, 4, 5 stars
  reviews.forEach(r => {
    const starIdx = Math.max(1, Math.min(5, r.rating)) - 1;
    starCounts[starIdx]++;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 space-y-12 md:space-y-16 animate-fade-reveal">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-xxs font-bold text-primary bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          Testimonials
        </span>
        <h1 className="text-2xl md:text-5xl font-extrabold font-sora text-navy mb-4">
          Reviews from Happy Homeowners
        </h1>
        <p className="text-xs md:text-sm text-gray-500">
          We maintain a 4.9-star average rating across India, based on our durable materials, neat drilling, and responsive customer support.
        </p>
      </div>

      {/* Aggregated Rating Panel */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-gray-50/50 border border-gray-100 p-8 rounded-3xl items-center">
        {/* Big Number */}
        <div className="md:col-span-4 text-center space-y-2 border-b md:border-b-0 md:border-r border-gray-200/60 pb-6 md:pb-0 md:pr-8">
          <span className="text-5xl md:text-7xl font-extrabold font-sora text-navy block">
            {rating}
          </span>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-amber-500 fill-current"
              />
            ))}
          </div>
          <span className="text-xxs md:text-xs text-gray-400 font-bold block uppercase tracking-wider">
            Based on {count} Verified Reviews
          </span>
        </div>

        {/* Rating bars */}
        <div className="md:col-span-8 space-y-3">
          {[5, 4, 3, 2, 1].map(stars => {
            const countForStars = starCounts[stars - 1];
            const percentage = Math.round((countForStars / count) * 100);

            return (
              <div key={stars} className="flex items-center gap-4 text-xxs md:text-xs font-semibold">
                <span className="w-12 text-navy text-right whitespace-nowrap">{stars} Star</span>
                <div className="flex-grow h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="w-10 text-gray-400 text-right">{percentage}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Reviews List */}
      <div className="space-y-6">
        <h2 className="text-xl md:text-2xl font-bold font-sora text-navy flex items-center gap-2">
          <ThumbsUp className="w-5 h-5 text-primary" />
          Detailed Client Feedback
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map(review => (
            <div
              key={review.id}
              className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < review.rating ? "text-amber-500 fill-current" : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xxs text-gray-400 font-semibold">{review.date}</span>
                </div>

                <p className="text-xs md:text-sm text-gray-600 italic leading-relaxed mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                <div>
                  <h4 className="font-bold text-navy text-xs md:text-sm">{review.name}</h4>
                  <span className="text-xxs text-gray-400 font-medium block mt-0.5">
                    {review.location} | Service: <span className="text-primary font-bold">{review.service}</span>
                  </span>
                </div>
                
                <div className="flex items-center gap-1 text-xxs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  <ShieldCheck className="w-4.5 h-4.5" />
                  <span>Verified Purchase</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
