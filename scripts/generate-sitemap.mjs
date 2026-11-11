import { mkdir, writeFile } from 'node:fs/promises';

const siteUrl = (process.env.VITE_SITE_URL || '').replace(/\/$/, '');
const output = 'public/sitemap.xml';

if (!siteUrl) {
  console.warn('[SEO] VITE_SITE_URL is not configured; sitemap.xml was not generated.');
  process.exit(0);
}

/*
  ✏️ الموقع Single-page، فالرئيسية بس.
  لو ضفت صفحات مستقلة بـ React Router (زي /about أو /contact)
  ضيف مساراتها هنا.
*/
const routes = ['/'];

const lastmod = new Date().toISOString().split('T')[0];

const urls = routes
  .map(
    (route) =>
      `  <url>\n    <loc>${siteUrl}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

await mkdir('public', { recursive: true });
await writeFile(output, xml);
await writeFile(
  'public/robots.txt',
  `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${siteUrl}/sitemap.xml\n`
);

console.log(`[SEO] Generated ${output} with ${routes.length} URL(s).`);