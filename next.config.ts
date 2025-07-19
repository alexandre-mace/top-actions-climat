import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'em-content.zobj.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
