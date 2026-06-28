"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, Shield } from "lucide-react";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { headerLinks } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const pathname = usePathname();
  const phone = "+919989391930";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-navy/95 border-b border-gray-800 shadow-md backdrop-blur-md py-3" 
            : "bg-navy border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-xl border border-white/10 group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/images/ajslogo.webp"
                alt="AJ Safety Net Solutions Logo"
                fill
                sizes="(max-width: 768px) 48px, 64px"
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="font-extrabold font-sora text-sm md:text-lg text-white leading-tight tracking-tight">
                AJ Safety Net Solutions
              </span>
              <span className="text-xxs text-gray-400 font-medium">
                India&apos;s Trusted Safety Net & Invisible Grill Experts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {headerLinks.map(link => {
              const isActive = pathname === link.href;

              // Services dropdown
              if (link.name === "Services") {
                return (
                  <div 
                    key={link.name} 
                    className="relative group/menu"
                    onMouseEnter={() => setActiveDropdown("services")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 rounded-lg font-semibold font-sora text-xs md:text-sm text-gray-200 hover:text-white transition-colors cursor-pointer">
                      <span>Services</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover/menu:rotate-180" />
                    </button>
                    
                    <div className="absolute top-full left-0 w-64 bg-navy border border-gray-800 rounded-xl shadow-2xl p-2 hidden group-hover/menu:block animate-fade-reveal mt-1">
                      <div className="grid grid-cols-1 gap-1">
                        {services.map(s => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="px-3 py-2 rounded-lg text-xxs md:text-xs text-gray-300 hover:bg-gray-800 hover:text-white transition-all font-semibold"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Cities dropdown
              if (link.name === "Cities") {
                return (
                  <div 
                    key={link.name} 
                    className="relative group/menu"
                    onMouseEnter={() => setActiveDropdown("cities")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 rounded-lg font-semibold font-sora text-xs md:text-sm text-gray-200 hover:text-white transition-colors cursor-pointer">
                      <span>Cities</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover/menu:rotate-180" />
                    </button>
                    
                    <div className="absolute top-full left-0 w-56 bg-navy border border-gray-800 rounded-xl shadow-2xl p-2 hidden group-hover/menu:block animate-fade-reveal mt-1">
                      <div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto">
                        {cities.map(c => (
                          <Link
                            key={c.slug}
                            href={`/${c.slug}`}
                            className="px-3 py-2 rounded-lg text-xxs md:text-xs text-gray-300 hover:bg-gray-800 hover:text-white transition-all font-semibold"
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg font-semibold font-sora text-xs md:text-sm transition-colors ${
                    isActive 
                      ? "text-primary bg-primary/10 font-bold" 
                      : "text-gray-200 hover:text-white hover:bg-gray-800/40"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Call CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              +91 9989391930
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-primary p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-navy/95 pt-20 px-6 overflow-y-auto flex flex-col justify-between pb-8 lg:hidden animate-fade-reveal">
          <div className="space-y-4">
            {headerLinks.map(link => {
              const isDropdown = link.name === "Services" || link.name === "Cities";

              if (isDropdown) {
                const dropId = link.name.toLowerCase();
                const isDropActive = activeDropdown === dropId;
                const dropItems = link.name === "Services" ? services : cities;

                return (
                  <div key={link.name} className="border-b border-gray-850 pb-2">
                    <button
                      onClick={() => toggleDropdown(dropId)}
                      className="w-full flex items-center justify-between font-semibold font-sora text-base text-gray-200 py-2 focus:outline-none cursor-pointer"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${isDropActive ? "rotate-185 text-primary" : ""}`} />
                    </button>
                    
                    {isDropActive && (
                      <div className="pl-4 mt-2 grid grid-cols-2 gap-2 pb-2">
                        {dropItems.map((item: any) => {
                          const href = link.name === "Services" ? `/services/${item.slug}` : `/${item.slug}`;
                          return (
                            <Link
                              key={item.slug}
                              href={href}
                              className="text-xs font-semibold text-gray-400 hover:text-white py-1 block"
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block py-2 border-b border-gray-850 font-semibold font-sora text-base transition-colors ${
                    isActive ? "text-primary border-primary font-bold" : "text-gray-200 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 space-y-4">
            <a
              href={`tel:${phone}`}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-full text-sm shadow-lg shadow-primary/20"
            >
              <Phone className="w-4 h-4" />
              Call Now: +91 9989391930
            </a>
          </div>
        </div>
      )}
    </>
  );
}
