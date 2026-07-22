import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Shield, MessageSquare } from "lucide-react";
import { footerServiceLinks, footerCityLinks } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phone = "+918121488961";
  const email = "ajsafenetsolutions@gmail.com";
  
  return (
    <footer className="bg-navy border-t border-gray-800 text-gray-300 pt-16 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Info */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-gray-850 shrink-0">
              <Image
                src="/images/ajslogo.webp"
                alt="AJ Safety Net Solutions Logo"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <span className="font-extrabold font-sora text-sm md:text-base text-white tracking-tight">
              AJ Safety Net Solutions
            </span>
          </Link>
          
          <p className="text-xxs md:text-xs text-gray-400 leading-relaxed font-medium">
            India&apos;s Trusted Safety Net & Invisible Grill Experts. Providing premium Garware HDPE nets and marine-grade SS 316 invisible grills across all major cities in India.
          </p>
          
          <p className="text-xxs text-primary font-bold">
            Owner: Ajay | Service Coverage: All Major Cities Across India
          </p>
        </div>

        {/* Services Quick Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold font-sora text-white uppercase tracking-wider">
            Our Services
          </h4>
          <ul className="space-y-2 text-xxs md:text-xs font-semibold">
            {footerServiceLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary transition-colors block">
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-primary hover:underline transition-colors block">
                View All Services &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* Cities Quick Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold font-sora text-white uppercase tracking-wider">
            Top Cities Served
          </h4>
          <ul className="space-y-2 text-xxs md:text-xs font-semibold">
            {footerCityLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary transition-colors block">
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/cities" className="text-primary hover:underline transition-colors block">
                View All Cities &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold font-sora text-white uppercase tracking-wider">
            Contact Details
          </h4>
          <ul className="space-y-3 text-xxs md:text-xs font-semibold">
            {/* Phone */}
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
                {phone}
              </a>
            </li>
            {/* WhatsApp */}
            <li className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-500 fill-emerald-500/10 shrink-0" />
              <a
                href={`https://api.whatsapp.com/send?phone=${phone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Chat on WhatsApp
              </a>
            </li>
            {/* Email */}
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href={`mailto:${email}`} className="hover:text-primary transition-colors break-all">
                {email}
              </a>
            </li>
            {/* Address */}
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-400">
                1st Floor, Main Road, HSR Layout, Sector 2, Bangalore, KA, 560102 (H.O.)
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xxs text-gray-500 font-semibold gap-4">
        <p>
          &copy; {currentYear} AJ Safety Net Solutions. All rights reserved. 
        </p>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
          <Link href="/gallery" className="hover:text-primary">Gallery</Link>
          <Link href="/reviews" className="hover:text-primary">Reviews</Link>
        </div>
        <p className="text-gray-600">
          Designed for maximum child safety and pigeon exclusion.
        </p>
      </div>
    </footer>
  );
}
