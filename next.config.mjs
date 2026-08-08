/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.ko-fi.com",
      },
      {
        protocol: "https",
        hostname: "openweathermap.org",
      },
    ],
  },
};

export default nextConfig;