const withPWA = require('next-pwa');
const urlPrefix = process.env.NODE_ENV === 'production' ? '/DevToysPWA' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: urlPrefix,
  assetPrefix: urlPrefix,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
  },
};

module.exports = withPWA(nextConfig);
