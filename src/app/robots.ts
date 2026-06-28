import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.ajsafenetsolutions.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/pigeon-nets-*", "/pigeon-safety-nets-*"],
        disallow: ["/admin/", "/private/", "/cgi-bin/", "/temp/", "/*?*sort=", "/*?*page="]
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/"
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/"
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
