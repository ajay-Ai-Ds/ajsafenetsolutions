import React from "react";
import FAQSection from "@/components/FAQSection";
import { faqs } from "@/data/faqs";

export const metadata = {
  title: "Frequently Asked Questions | AJ Safety Net Solutions",
  description: "Get answers to pricing, raw materials, mesh configurations, warranties, and emergency safety guidelines for safety nets and invisible grills."
};

export default function FAQPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 space-y-6 animate-fade-reveal">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block text-xxs font-bold text-primary bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          FAQ Center
        </span>
        <h1 className="text-2xl md:text-5xl font-extrabold font-sora text-navy mb-4">
          All Safety Net FAQs
        </h1>
        <p className="text-xs md:text-sm text-gray-500">
          We believe in absolute transparency. Browse our comprehensive list of frequently asked questions regarding materials, structural anchorage, payments, and site surveys.
        </p>
      </div>

      <FAQSection 
        items={faqs} 
        title="Comprehensive Q&A Index" 
        subtitle="Filter by category or read through general, pricing, and structural questions." 
        injectSchema={true} 
      />
    </div>
  );
}
