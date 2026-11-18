import type { Metadata } from 'next';
import { coursesData } from '@/config/coursesData';
import { SITE_URL, buildPageMetadata } from '@/config/seo';
import CoursesClient from './CoursesClient';

export const metadata: Metadata = buildPageMetadata({
  title: 'Tech Courses and Career Training',
  description:
    "Explore Enegxi Institute's frontend, backend, full stack, mobile, product management and web design courses. Compare duration, skills and prerequisites.",
  path: '/courses',
});

export default function CoursesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Tech Courses and Career Training',
    url: `${SITE_URL}/courses`,
    description:
      'Practical technology courses from Enegxi Institute, including frontend, backend, full stack, mobile development, product management, and web design.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: coursesData.map((course, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/courses/${course.slug}`,
        name: course.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <CoursesClient />
    </>
  );
}