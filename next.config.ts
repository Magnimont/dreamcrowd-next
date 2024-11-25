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
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    UNSUBSCRIBE_SECRET: process.env.UNSUBSCRIBE_SECRET,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  },
};

export default nextConfig;
