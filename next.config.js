/** @type {import('next').NextConfig} */
const withExportImages = require("next-export-optimize-images");

const nextConfig = withExportImages({
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "mblogthumb-phinf.pstatic.net",
      "media.istockphoto.com",
      "cdn.pixabay.com",
      "via.placeholder.com",
    ],
  },
});

module.exports = nextConfig;
