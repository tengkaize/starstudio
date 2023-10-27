/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/starstudio",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
