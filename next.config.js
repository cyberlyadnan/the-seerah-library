/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost",'m.media-amazon.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
