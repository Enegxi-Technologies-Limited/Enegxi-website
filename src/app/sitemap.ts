import type { MetadataRoute } from 'next';
import { coursesData } from '@/config/coursesData';

const siteUrl = 'https://enegxi.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/courses', '/cohort', '/projects', '/gallery', '/reviews'];

  return [
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : path === '/courses' ? 0.9 : 0.7,
    })),
    ...coursesData.map((course) => ({
      url: `${siteUrl}/courses/${course.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
