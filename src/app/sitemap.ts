import type { MetadataRoute } from 'next';
import { COURTS } from '@/constants/sportsDisciplines';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/eg`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/ksa`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/projects`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/news-clients`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE_URL}/careers`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/businesses/sports`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE_URL}/businesses/play`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/businesses/scapes`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/businesses/tech`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/businesses/aquatics`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
  ];

  const sportRoutes: MetadataRoute.Sitemap = COURTS.map((court) => ({
    url: `${SITE_URL}/businesses/sports/${court.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...sportRoutes];
}
