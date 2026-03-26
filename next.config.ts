import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CHANGE: Enable static export for better SEO crawlability
  output: "export",

  // CHANGE: Add trailing slashes for consistent URLs
  trailingSlash: true,

  // CHANGE: Disable image optimization (required for static export)
  images: {
    unoptimized: true,
  },

  // CHANGE: Compress output for faster loading
  compress: true,

  // CHANGE: Removed async headers() - not compatible with output: "export"
  // Configure headers at your hosting provider level instead (Firebase hosting.json, Vercel vercel.json, etc.)
};

export default nextConfig;
