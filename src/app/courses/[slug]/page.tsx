import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { coursesData } from '@/config/coursesData';
import { CourseDetailClient } from './CourseDetailClient';

interface PageProps {
params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
const { slug } = await params;
const course = coursesData.find((item) => item.slug === slug);

if (!course) {
    return { title: 'Course not found' };
}

const description = `${course.description} ${course.duration} | ${course.level} | Enegxi Institute.`;

return {
    title: `${course.title} Course`,
    description,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
        title: `${course.title} Course | Enegxi Institute`,
        description,
        type: 'article',
    },
};
}

export async function generateStaticParams() {
return coursesData.map((course) => ({
    slug: course.slug,
}));
}

export default async function CourseDetailPage({ params }: PageProps) {
const resolvedParams = await params;
const course = coursesData.find((item) => item.slug === resolvedParams.slug);

if (!course) {
    notFound();
}

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    courseCode: course.slug,
    educationalLevel: course.level,
    teaches: course.skills,
    provider: {
        '@type': 'Organization',
        name: 'Enegxi Institute',
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
