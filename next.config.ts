import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zupikgtoimkjpcfiwbes.supabase.co",
        pathname: "/storage/v1/object/public/ChipFix/**",
      },
    ],
  },
};

export default nextConfig;
