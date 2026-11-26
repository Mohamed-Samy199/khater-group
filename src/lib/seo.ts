import type { Metadata } from 'next';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.khater-group.com'
).replace(/\/$/, '');

export const SITE_NAME = 'Khater Group';
export const DEFAULT_OG_IMAGE = '/og-image.png';

export interface PageSeoInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
}: PageSeoInput): Metadata {
  const canonical = path === '/' ? '/' : path;
  const fullTitle = path === '/' ? title : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: canonical,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Khater Group',
    alternateName: 'Khater Sports',
    url: SITE_URL,
    foundingDate: '1987',
    description:
      'Khater Group is an integrated solutions company delivering sports infrastructure, active playgrounds, architectural landscapes, arena electronics, and Olympic aquatic complexes across Egypt, Saudi Arabia, and MENA.',
    email: 'info@khatersports.com',
    telephone: '+201001204191',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Namaa Building, Ramsis Extension St., Nasr City',
        addressLocality: 'Cairo',
        addressCountry: 'EG',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '3729 Khalid Ibn Luai 7480',
        addressLocality: 'Jeddah',
        addressCountry: 'SA',
      },
    ],
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path?: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: `${SITE_URL}${item.path === '/' ? '' : item.path}` } : {}),
    })),
  };
}

export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
