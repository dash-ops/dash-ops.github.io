import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/dash-ops-docs' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dash-ops-docs/' : '',
};

export default nextConfig;
