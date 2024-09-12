@type {import('next').NextConfig}
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'wokwi.com',
      },
    ],
  },
};

export default nextConfig;
