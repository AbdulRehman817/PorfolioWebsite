/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/png", "image/avif", "image/webp   "],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgflip.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
