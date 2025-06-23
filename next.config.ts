import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // The proxy is added to bypass the missing CORS configuration in the server.
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`
      }
    ]
  }
};

export default nextConfig;
