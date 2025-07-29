/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXTAUTH_URL || 'https://www.deeproots.earth',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  exclude: ['/api/*', '/admin/*'],
  priority: 0.7,
};
