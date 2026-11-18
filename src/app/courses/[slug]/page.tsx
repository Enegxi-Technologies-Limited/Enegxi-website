import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { coursesData } from '@/config/coursesData';
import {
SITE_NAME,
SITE_URL,
buildPageMetadata,
truncate,
} from '@/config/seo';
import { CourseDetailClient } from './CourseDetailClient';

interface PageProps {
params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
const { slug } = await params;
const course = coursesData.find((item) => item.slug === slug);

if (!course) {
    return { title: 'Course not found', robots: { index: false } };
}

const details = [course.duration, course.level].filter(Boolean).join(' | ');
const description = truncate(
    [course.description, details].filter(Boolean).join(' ')
);

return buildPageMetadata({
    title: `${course.title} Course`,
    description,
    path: `/courses/${course.slug}`,
});
}

export async function generateStaticParams() {
return coursesData.map((course) => ({
    slug: course.slug,
}));
}

export default async function CourseDetailPage({ params }: PageProps) {
const { slug } = await params;
const course = coursesData.find((item) => item.slug === slug);

if (!course) {
    notFound();
}

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    url: `${SITE_URL}/courses/${course.slug}`,
    educationalLevel: course.level,
    teaches: course.skills,
    inLanguage: 'en',
    provider: {
    '@type': 'EducationalOrganization',
    name: SITE_NAME,
    url: SITE_URL,
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
    <CourseDetailClient course={course} />
    </>
);
}