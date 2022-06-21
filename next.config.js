// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["images.unsplash.com"],
//   },
// };

// module.exports = nextConfig;

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
