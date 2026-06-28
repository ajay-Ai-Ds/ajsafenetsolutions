import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: {
    default: "AJ Safety Net Solutions | Pigeon Nets & Invisible Grills",
    template: "%s | AJ Safety Net Solutions"
  },
  description: "India's Trusted Safety Net & Invisible Grill Experts. High-quality Garware safety nets, pigeon protection mesh, and rustproof SS 316 invisible grills installed professionally with 3-10 years warranty. Free site visit.",
  keywords: ["Safety Nets", "Pigeon Safety Nets", "Invisible Grills", "Balcony Safety Nets", "Bird Nets Installation", "Children Safety Nets", "AJ Safety Nets", "Ajay Safety Nets"],
  metadataBase: new URL("https://www.ajsafenetsolutions.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "AJ Safety Net Solutions | India's Trusted Safety Net Experts",
    description: "Get professional, long-lasting safety nets and invisible grills installed. Starting from ₹20/sqft. Call or WhatsApp for a free site assessment today.",
    url: "https://www.ajsafenetsolutions.com",
    siteName: "AJ Safety Net Solutions",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AJ Safety Net Solutions | Safety Nets & Invisible Grills",
    description: "India's leading provider of balcony safety nets, pigeon nets, and modern invisible grills. Call +91 9989391930."
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
    "name": "AJ Safety Net Solutions",
    "url": "https://www.ajsafenetsolutions.com",
    "logo": "https://www.ajsafenetsolutions.com/images/ajslogo.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9989391930",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi", "Telugu", "Tamil", "Kannada"]
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AJ Safety Net Solutions",
    "image": "https://www.ajsafenetsolutions.com/images/ajslogo.webp",
    "@id": "https://www.ajsafenetsolutions.com/#localbusiness",
    "url": "https://www.ajsafenetsolutions.com",
    "telephone": "+919989391930",
    "email": "ajsafenetsolutions@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, Main Road, HSR Layout, Sector 2",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560102",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9128,
      "longitude": 77.6388
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
    "name": "AJ Safety Net Solutions",
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
