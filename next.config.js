/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ],
  },
};

module.exports = nextConfig;
