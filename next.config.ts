import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https"
      },
      {
        hostname: "s.gravatar.com",
        protocol: "https"
      }
    ]
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/home",
  //       permanent: false,
  //     }
  //   ]
  // }
};

export default nextConfig;
