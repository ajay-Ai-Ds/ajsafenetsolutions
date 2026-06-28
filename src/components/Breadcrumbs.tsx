"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter(x => x);
  
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, c => c.toUpperCase());
    return { label, href };
  });

  const allItems = [{ label: "Home", href: "/" }, ...breadcrumbs];

  // Generate Breadcrumb Schema JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://www.ajsafenetsolutions.com${item.href}`
    }))
  };

  return (
    <nav className="py-3 px-4 md:px-8 max-w-7xl mx-auto flex items-center space-x-2 text-xs md:text-sm text-gray-500 font-medium border-b border-gray-100 bg-white" aria-label="Breadcrumb">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="flex items-center space-x-2 flex-wrap">
        <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
          <Home className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Home</span>
        </Link>
        
        {breadcrumbs.map((crumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <div key={crumb.href} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              {isLast ? (
                <span className="text-gray-900 font-semibold truncate max-w-[200px] md:max-w-none" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className="hover:text-primary transition-colors truncate max-w-[150px] md:max-w-none">
                  {crumb.label}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
