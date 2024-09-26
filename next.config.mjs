/** @type {import('next').NextConfig} */
const nextConfig = {
  // without this config, images won't work
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
