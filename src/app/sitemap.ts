import type { MetadataRoute } from 'next';
import { coursesData } from '@/config/coursesData';

const SITE_URL = 'https://enegxi.com'; // match your live domain

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/courses', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/cohort', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/projects', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/gallery', priority: 0.5, changeFrequency: 'monthly' as const },
  ];

  const courseRoutes = coursesData.map((course) => ({
    path: `/courses/${course.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  return [...routes, ...courseRoutes].map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
