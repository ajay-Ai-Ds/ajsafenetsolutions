import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: "/invisible-grills.html",
        destination: "/services/invisible-grills",
        permanent: true,
      },
      {
        source: "/invisible-grills-vijayawada.html",
        destination: "/vijayawada/invisible-grills",
        permanent: true,
      },
      {
        source: "/invisible-grills-chennai.html",
        destination: "/chennai/invisible-grills",
        permanent: true,
      },
      {
        source: "/invisible-grills-bangalore.html",
        destination: "/bangalore/invisible-grills",
        permanent: true,
      },
      {
        source: "/invisible-grills-pune.html",
        destination: "/pune/invisible-grills",
        permanent: true,
      },
      {
        source: "/pigeon-safety-nets.html",
        destination: "/services/pigeon-safety-nets",
        permanent: true,
      },
      {
        source: "/pigeon-nets-vijayawada.html",
        destination: "/vijayawada/pigeon-safety-nets",
        permanent: true,
      },
      {
        source: "/pigeon-nets-chennai.html",
        destination: "/chennai/pigeon-safety-nets",
        permanent: true,
      },
      {
        source: "/pigeon-nets-bangalore.html",
        destination: "/bangalore/pigeon-safety-nets",
        permanent: true,
      },
      {
        source: "/balcony-safety-nets.html",
        destination: "/services/balcony-safety-nets",
        permanent: true,
      },
      {
        source: "/children-safety-nets.html",
        destination: "/services/children-safety-nets",
        permanent: true,
      },
      {
        source: "/pet-safety-nets.html",
        destination: "/services/pet-safety-nets",
        permanent: true,
      },
      {
        source: "/mosquito-nets.html",
        destination: "/services/mosquito-nets",
        permanent: true,
      },
      {
        source: "/cricket-nets.html",
        destination: "/services/cricket-nets",
        permanent: true,
      },
      {
        source: "/pricing.html",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/gallery.html",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/blog/index.html",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/invisible-grills-vs-traditional-grills.html",
        destination: "/blog/invisible-grills-vs-traditional-grills",
        permanent: true,
      },
      {
        source: "/blog/pigeon-net-price-vijayawada.html",
        destination: "/blog/pigeon-net-price-vijayawada",
        permanent: true,
      },
      {
        source: "/blog/balcony-safety-nets-guide.html",
        destination: "/blog/balcony-safety-nets-guide",
        permanent: true,
      },
      {
        source: "/blog/how-to-choose-safety-nets.html",
        destination: "/blog/how-to-choose-safety-nets",
        permanent: true,
      },
      {
        source: "/blog/invisible-grills-maintenance-tips.html",
        destination: "/blog/invisible-grills-maintenance-tips",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
