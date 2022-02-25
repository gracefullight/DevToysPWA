const urlPrefix = process.env.NODE_ENV === 'production' ? '/DevToysPWA' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: urlPrefix,
  assetPrefix: urlPrefix,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
