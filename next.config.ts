import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const nextConfig: NextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play.google.com",
      },
    ],
  },
});

export default nextConfig;
