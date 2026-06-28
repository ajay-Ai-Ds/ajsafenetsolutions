import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Heart, CheckSquare } from "lucide-react";

export const metadata = {
  title: "About Us | AJ Safe Net Solutions",
  description: "Learn more about AJ Safe Net Solutions, India's trusted safety net & invisible grill installer led by Ajay since 2019. 1000+ projects completed."
};

export default function About() {
  const qualities = [
    {
      title: "Garware Quality HDPE Nets",
      desc: "We exclusively source premium 100% virgin High-Density Polyethylene nets with dynamic UV resistance, ensuring up to 8 years of life in harsh climates.",
      icon: ShieldCheck
    },
    {
      title: "Precision Metal Crafting",
      desc: "Our invisible grills use marine-grade SS 316 wire cores wrapped in anti-friction nylon covers. Rustproof, high-security, and elegant.",
      icon: Award
    },
    {
      title: "Certified Installation Teams",
      desc: "Our team consists of highly experienced installers who utilize safety harnesses and strictly adhere to apartment regulations.",
      icon: CheckSquare
    },
    {
      title: "100% Customer Satisfaction",
      desc: "Owner Ajay oversees major operations. We provide a transparent pricing system with free assessment and official warranty cards.",
      icon: Heart
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 space-y-12 md:space-y-20 animate-fade-reveal">
      {/* Hero Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-block text-xxs font-bold text-primary bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider">
            About Our Company
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-sora text-navy tracking-tight leading-tight">
            Protecting Your Balconies & Windows Since 2019
          </h1>
          
          {/* Mandatory GEO About Content */}
          <div className="bg-gray-50 border border-gray-150 p-6 rounded-2xl">
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-semibold">
              AJ Safe Net Solutions, led by Ajay, is a professional safety net and invisible grill installation company operating since 2019. Serving Vijayawada, Chennai, Bangalore, and Pune with 1000+ successfully completed projects and a 5.0-star customer rating. The company specializes in SS316 marine-grade invisible grills and UV-resistant HDPE pigeon safety nets. Known for same-day response, transparent pricing with no hidden charges, and a 1-year installation warranty. Contact: +91 99893 91930
            </p>
          </div>

          <p className="text-xs md:text-sm text-gray-505 leading-relaxed font-medium">
            We started with a simple mission: to secure families living in high-rise apartments from fall hazards without creating a cage-like feeling. Today, we offer cutting-edge invisible grills, animal protection screens, pigeon exclusion meshes, and utility sports net setups that fit modern architectures perfectly.
          </p>
        </div>

        {/* Brand Image Grid */}
        <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <Image
            src="/images/2.jpeg"
            alt="AJ Safe Net Solutions Installation Team Work"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <span className="text-2xl font-bold font-sora block">5+ Years</span>
            <span className="text-xs text-gray-200">Owner-Led Expertise</span>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold font-sora text-navy mb-4">
            Our Commitment to Safety
          </h2>
          <p className="text-xs md:text-sm text-gray-500">
            We do not compromise on hardware, raw materials, or anchor hook spacing. Here is what makes us different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualities.map((q, idx) => {
            const Icon = q.icon;
            return (
              <div key={idx} className="bg-gray-50/50 border border-gray-100 p-6 md:p-8 rounded-3xl flex gap-4">
                <div className="bg-primary/10 p-3 text-primary h-12 w-12 shrink-0 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-navy text-sm md:text-base">{q.title}</h3>
                  <p className="text-xxs md:text-xs text-gray-500 leading-relaxed">{q.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quality Certification */}
      <div className="bg-navy text-white rounded-3xl p-8 md:p-12 text-center space-y-6 max-w-4xl mx-auto">
        <h3 className="text-xl md:text-3xl font-bold font-sora text-primary-light">
          Official Garware & SS 316 Warranty Certifications
        </h3>
        <p className="text-xxs md:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Every safety net installation is backed by an official warranty card covering color fading, tension sag, and weathering. Our SS 316 invisible grills come with a 10 year rustproof guarantee.
        </p>
      </div>
    </div>
  );
}
