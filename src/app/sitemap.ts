import { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { blogs } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ajsafenetsolutions.com";
  const currentDate = new Date();

  // Core Static Pages
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/gallery",
    "/reviews",
    "/faq",
    "/services",
    "/cities",
    "/blog"
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  // Dynamic Service Pages
  const servicePages = services.map(s => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  // Dynamic City Pages
  const cityPages = cities.map(c => ({
    url: `${baseUrl}/${c.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  // Dynamic City + Service Pages
  const cityServicePages: any[] = [];
  cities.forEach(city => {
    services.forEach(service => {
      cityServicePages.push({
        url: `${baseUrl}/${city.slug}/${service.slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.8
      });
    });
  });

  // Dynamic Blog Post Pages
  const blogPages = blogs.map(b => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...cityServicePages,
    ...blogPages
  ];
}
