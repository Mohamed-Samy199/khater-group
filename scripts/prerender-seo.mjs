import { mkdir, readFile, writeFile } from 'node:fs/promises';

/* ✏️ بيانات الـ SEO بتاعة الموقع، عدّلها براحتك */
const SITE_URL = (process.env.VITE_SITE_URL || '').replace(/\/$/, '');
const SITE_NAME = 'Khater Group';
const DEFAULT_IMAGE = '/og-image.png'; // حط صورة المشاركة في فولدر public

const SEO = {
  title: 'Khater Group | Sports, Aquatics, Tech, Scapes & Play',
  description:
    'Khater Group delivers specialized solutions across five sectors: Sports, Aquatics, Tech, Scapes and Play, with offices in Cairo and Jeddah.',
  keywords:
    'Khater Group, Khater Sports, Khater Aquatics, Khater Tech, Khater Scapes, Khater Play, sports courts, swimming pools, Egypt, Saudi Arabia',
  type: 'website',
};

/* الموقع Single-page، فالرئيسية بس. ضيف مسارات لو عملت صفحات حقيقية */
const routes = ['/'];

const absoluteUrl = (path = '/') => (SITE_URL ? `${SITE_URL}${path === '/' ? '' : path}` : '');

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function metaTag(attribute, name, content) {
  if (!content) return '';
  return `<meta ${attribute}="${escapeHtml(name)}" content="${escapeHtml(content)}" />`;
}

function noscriptBody() {
  return `<main><h1>${escapeHtml(SITE_NAME)}</h1><p>${escapeHtml(SEO.description)}</p><nav><a href="#services">Services</a> <a href="#contact">Contact</a></nav></main>`;
}

const template = await readFile('dist/index.html', 'utf8');

for (const pathname of routes) {
  const canonical = absoluteUrl(pathname);
  const image = absoluteUrl(DEFAULT_IMAGE);

  let html = template
    .replace(/<html lang="[^"]+"[^>]*>/, '<html lang="en" dir="ltr">')
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(SEO.title)}</title>`);

  // description و keywords: لو موجودين يتبدلوا، ولو مش موجودين يتضافوا
  const descriptionTag = metaTag('name', 'description', SEO.description);
  const keywordsTag = metaTag('name', 'keywords', SEO.keywords);

  html = /<meta name="description"[^>]*>/.test(html)
    ? html.replace(/<meta name="description"[^>]*>/, descriptionTag)
    : html.replace('</head>', `    ${descriptionTag}\n  </head>`);

  html = /<meta name="keywords"[^>]*>/.test(html)
    ? html.replace(/<meta name="keywords"[^>]*>/, keywordsTag)
    : html.replace('</head>', `    ${keywordsTag}\n  </head>`);

  const socialTags = [
    metaTag('property', 'og:type', SEO.type),
    metaTag('property', 'og:title', SEO.title),
    metaTag('property', 'og:description', SEO.description),
    metaTag('property', 'og:site_name', SITE_NAME),
    canonical ? metaTag('property', 'og:url', canonical) : '',
    image ? metaTag('property', 'og:image', image) : '',
    metaTag('name', 'twitter:card', image ? 'summary_large_image' : 'summary'),
    metaTag('name', 'twitter:title', SEO.title),
    metaTag('name', 'twitter:description', SEO.description),
    image ? metaTag('name', 'twitter:image', image) : '',
    canonical ? `<link rel="canonical" href="${escapeHtml(canonical)}" />` : '',
  ]
    .filter(Boolean)
    .join('\n    ');

  html = html.replace('</head>', `    ${socialTags}\n  </head>`);

  html = /<noscript>[\s\S]*?<\/noscript>/.test(html)
    ? html.replace(/<noscript>[\s\S]*?<\/noscript>/, `<noscript>${noscriptBody()}</noscript>`)
    : html.replace('</body>', `  <noscript>${noscriptBody()}</noscript>\n</body>`);

  const outputDir = pathname === '/' ? 'dist' : `dist${pathname}`;
  await mkdir(outputDir, { recursive: true });
  await writeFile(`${outputDir}/index.html`, html);
}

console.log(
  `[SEO] Prerendered ${routes.length} public route(s)${SITE_URL ? ` for ${SITE_URL}` : ''}.`
);