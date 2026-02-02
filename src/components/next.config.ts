import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.ufs.sh', // your domain
        port: '', // leave empty unless you use a custom port
        pathname: '/**', // all paths under this domain
      },
      {
        protocol: 'https',
        hostname: '*.unsplash.com', // your domain
        port: '', // leave empty unless you use a custom port
        pathname: '/**', // all paths under this domain
      },
    ],
  },
};

export default nextConfig;
