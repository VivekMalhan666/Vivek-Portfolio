import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CHANGE: Enable static export for better SEO crawlability
  output: "export",

  // CHANGE: Add trailing slashes for consistent URLs
  trailingSlash: true,

  // CHANGE: Enable image optimization
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [425, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // CHANGE: Compress output for faster loading
  compress: true,

  // CHANGE: Generate sitemap and robots.txt
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
