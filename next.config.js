// /** @type {import('next').NextConfig} */

const { redirect } = require("next/dist/server/api-utils");

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
  // redirects: async() =>{
  //   return [
  //     {
  //       source: '/',
  //       destination: '/blog',
  //       permanent: false,
  //     }
  //   ]
  // },
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
