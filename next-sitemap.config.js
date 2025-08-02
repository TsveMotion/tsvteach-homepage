/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tsvteach.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
        crawlDelay: 1,
      },
    ],
    additionalSitemaps: [
      'https://tsvteach.com/sitemap.xml',
    ],
  },
  exclude: ['/api/*', '/_next/*', '/admin/*'],
  changefreq: 'daily',
  priority: 1.0,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Customize URLs for better SEO
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }

    // Default transformation for other pages
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
