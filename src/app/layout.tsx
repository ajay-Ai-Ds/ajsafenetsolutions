import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: {
    default: "AJ Safe Net Solutions | Invisible Grills & Pigeon Safety Nets in Vijayawada, Chennai, Bangalore, Pune",
    template: "%s | AJ Safe Net Solutions | Call +91 99893 91930"
  },
  description: "Expert invisible grills & pigeon safety net installation in Vijayawada, Chennai, Bangalore & Pune. 1000+ projects, 5★ rated, SS316 grills from ₹100/sqft. Free site visit. Call Ajay: +91 99893 91930",
  keywords: ["Safety Nets", "Pigeon Safety Nets", "Invisible Grills", "Balcony Safety Nets", "Bird Nets Installation", "Children Safety Nets", "AJ Safe Net Solutions", "Ajay Safety Nets Vijayawada"],
  metadataBase: new URL("https://www.ajsafenetsolutions.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "AJ Safe Net Solutions | Invisible Grills & Pigeon Safety Nets in Vijayawada, Chennai, Bangalore, Pune",
    description: "Expert invisible grills & pigeon safety net installation in Vijayawada, Chennai, Bangalore & Pune. 1000+ projects, 5★ rated, SS316 grills from ₹100/sqft. Free site visit. Call Ajay: +91 99893 91930",
    url: "https://www.ajsafenetsolutions.com",
    siteName: "AJ Safe Net Solutions",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AJ Safe Net Solutions | Safety Nets & Invisible Grills",
    description: "Professional invisible grills & safety nets in Vijayawada, Chennai, Bangalore, Pune. Call +91 99893 91930."
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global Schemas: Organization, LocalBusiness, and WebSite SearchAction
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AJ Safe Net Solutions",
    "url": "https://www.ajsafenetsolutions.com",
    "logo": "https://www.ajsafenetsolutions.com/images/ajslogo.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-99893-91930",
      "contactType": "customer service",
      "areaServed": ["IN-AP", "IN-TN", "IN-KA", "IN-MH"],
      "availableLanguage": ["en", "Hindi", "Telugu", "Tamil", "Kannada"]
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AJ Safe Net Solutions",
    "owner": {
      "@type": "Person",
      "name": "Ajay"
    },
    "image": "https://www.ajsafenetsolutions.com/images/ajslogo.webp",
    "@id": "https://www.ajsafenetsolutions.com/#localbusiness",
    "url": "https://www.ajsafenetsolutions.com",
    "telephone": "+919989391930",
    "email": "ajsafenetsolutions@gmail.com",
    "priceRange": "₹₹",
    "foundingDate": "2019",
    "numberOfEmployees": "5+",
    "areaServed": ["Vijayawada", "Chennai", "Bangalore", "Pune"],
    "serviceType": ["Invisible Grills", "Pigeon Safety Nets", "Balcony Safety Nets"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "500"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Benz Circle, MG Road",
      "addressLocality": "Vijayawada",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "520010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 16.5062,
      "longitude": 80.6480
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.ajsafenetsolutions.com",
    "name": "AJ Safe Net Solutions",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.ajsafenetsolutions.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Sora:wght@100..800&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Structured Schema Injections */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-gray-900 pt-16 md:pt-20">
        <Navbar />
        <Breadcrumbs />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
