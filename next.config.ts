import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [75, 100]
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
