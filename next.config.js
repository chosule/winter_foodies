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
    domains: ['via.placeholder.com']
  }
}


module.exports = nextConfig
