import type { Metadata } from 'next';
import { coursesData } from '@/config/coursesData';
import CoursesClient from './CoursesClient';

export const metadata: Metadata = {
  title: 'Tech Courses and Career Training',
  alternates: { canonical: '/courses' },
  description:
    'Explore Enegxi Institute training in frontend, backend, full stack, mobile development, product management, and web design. Compare course duration, skills, and prerequisites.',
  openGraph: {
    title: 'Tech Courses and Career Training | Enegxi Institute',
    description:
      'Explore practical technology courses at Enegxi Institute and find the right track for your career goals.',
    type: 'website',
  },
};

export default function CoursesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Tech Courses and Career Training',
    description:
      'Practical technology courses from Enegxi Institute, including frontend, backend, full stack, mobile development, product management, and web design.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: coursesData.map((course, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Course',
          name: course.title,
          description: course.description,
          courseCode: course.slug,
          provider: { '@type': 'Organization', name: 'Enegxi Institute' },
        },
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
