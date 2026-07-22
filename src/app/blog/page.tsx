import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Safety Education Blog | AJ Safe Net Solutions",
  description: "Read expert articles on pigeon control health risks, child balcony fall prevention, and invisible grills comparisons. Get details from AJ Safe Net Solutions.",
  alternates: {
    canonical: "https://www.ajsafenetsolutions.com/blog"
  }
};

export default function BlogListingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 space-y-12 animate-fade-reveal">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-xxs font-bold text-primary bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          Safety Education
        </span>
        <h1 className="text-2xl md:text-5xl font-extrabold font-sora text-navy mb-4">
          Latest Safety & Bird Control Articles
        </h1>
        <p className="text-xs md:text-sm text-gray-600">
          Stay informed about apartment safety standards, respiratory risks associated with pigeons, and modern security grill alternatives in India.
        </p>
      </div>

      {/* Grid of Blogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(post => (
          <div
            key={post.slug}
            className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Featured Image */}
            <div className="relative h-52 w-full overflow-hidden bg-gray-150">
              <Image
                src={`/images/${post.featuredImage}`}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />
            </div>

            {/* Content Body */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xxs text-gray-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-sm md:text-base font-bold font-sora text-navy group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-xxs md:text-xs text-gray-500 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Action */}
              <div className="pt-2 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xxs text-gray-400 font-bold">
                  By {post.author.split(",")[0]}
                </span>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-dark group-hover:translate-x-0.5 transition-transform min-h-[44px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  Read: {post.title.length > 40 ? post.title.slice(0, 40) + '…' : post.title}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
