/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eventectivemedia.blob.core.windows.net',
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
