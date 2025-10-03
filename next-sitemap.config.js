/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://kiddo-kingdom.com", // الدومين بتاعك
  generateRobotsTxt: true, // هيولّد robots.txt كمان
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: [
    "/admin", 
    "/admin/*", // لو مش عايز جوجل يعمل إندكس للوحة التحكم
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/*"], // امنع جوجل من إندكس صفحات الأدمن
      },
    ],
    additionalSitemaps: [
      "https://kiddo-kingdom.com/sitemap.xml", // ممكن تضيف سيت ماب تانية لو عايز
    ],
  },
};
