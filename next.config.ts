import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cloudinary-marketing-res.cloudinary.com"
      },
      {hostname: "assets.vercel.com"}
    ]
  }
};

export default nextConfig;
