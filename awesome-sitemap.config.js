/** @type {import('next-sitemap').IConfig} */
const policy = {
      userAgent: "*"
};
if(process.env.ENVIRONMENT !== "production"){
      policy.disallow = "/";
}
const config = {
      siteUrl: process.env.URL,
      generateRobotsTxt: true,
      generateIndexSitemap: false,
      sitemapSize: 1000,
      // optional
      robotsTxtOptions: {
            policies: [policy],
      //   additionalSitemaps: [
      //     'https://example.com/my-custom-sitemap-1.xml',
      //     'https://example.com/my-custom-sitemap-2.xml',
      //     'https://example.com/my-custom-sitemap-3.xml',
      //   ],
      },
      // outDir: "./out"
    }
    
    module.exports =  config