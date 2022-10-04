const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  reactStrictMode: true,
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  env: {
      NEXT_PUBLIC_ENV: 'PRODUCTION', //your next configs goes here
  },
})