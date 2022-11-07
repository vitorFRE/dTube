/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['img.youtube.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
