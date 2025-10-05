import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '',
  assetPrefix: '',
  distDir: 'out',
  skipTrailingSlashRedirect: true,
  // Enable hash routing for GitHub Pages
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
