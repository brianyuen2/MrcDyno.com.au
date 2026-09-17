import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/dyno-tuning", destination: "/#performance", permanent: true },
      { source: "/servicing", destination: "/#performance", permanent: true },
      { source: "/performance", destination: "/#performance", permanent: true },
      { source: "/contact-us", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
