/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: '', // Leave empty if no prefix is required, or use '/prefix' without trailing '/'
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
