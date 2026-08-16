import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/rand-eye-institute").
// Unset locally and on root-domain hosts like Vercel or a custom domain.
// NEXT_PUBLIC_* so src/lib/asset.ts can reach it from the client bundle too —
// unoptimized next/image does not apply basePath on its own.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  // This app is its own workspace (the parent folder holds sibling client sites)
  turbopack: { root: __dirname },
  // Fully static site — exportable to any static host
  output: "export",
  basePath,
  // Emits /contact/index.html, which GitHub Pages serves reliably
  trailingSlash: true,
  // No Image Optimization server on static hosting
  images: { unoptimized: true },
};

export default nextConfig;
