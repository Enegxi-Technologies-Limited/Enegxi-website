'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Badge } from '../atoms/Badge';

// Motion animation variants
const containerVariants: Variants = {
hidden: { opacity: 0 },
visible: {
    opacity: 1,
    transition: {
    staggerChildren: 0.1,
    delayChildren: 0.15,
    },
},
};

const cardVariants: Variants = {
hidden: { opacity: 0, y: 20 },
visible: {
    opacity: 1,
    y: 0,
    transition: {
    duration: 0.5,
    ease: [0.215, 0.61, 0.355, 1.0] as const,
    },
},
};

const courses = [
{
    iconSrc: '/images/courses-icon/frontend.png',
    title: 'Frontend Development',
    slug: 'frontend-engineering',
    description:
    "Master the art of creating stunning, responsive user interfaces. From HTML/CSS fundamentals to advanced React, Vue, and Angular frameworks, you'll build portfolios that impress employers.",
},
{
    iconSrc: '/images/courses-icon/backend.png',
    title: 'Backend Development',
    slug: 'backend-engineering',
    description:
    'Become the architect behind powerful applications. Learn to build robust APIs, manage databases, and create scalable server-side solutions that handle millions of users.',
},
{
    iconSrc: '/images/courses-icon/fullstack.png',
    title: 'Full Stack Engineering',
    slug: 'fullstack-development',
    description:
    'Become a complete developer who builds end-to-end applications. Master both frontend and backend technologies to create full-featured products independently. This comprehensive program transforms you into the most versatile and in-demand type of developer in the industry.',
},
{
    iconSrc: '/images/courses-icon/productmanagement.png',
    title: 'Product Management',
    slug: 'product-management',
    description:
    'Bridge the gap between business and technology. Learn to define product vision, prioritize features, and lead cross-functional teams to launch products that users love and businesses profit from.',
},
{
    iconSrc: '/images/courses-icon/mobiledev.png',
    title: 'Mobile Development',
    slug: 'mobile-app-development',
    description:
    'Build native and cross-platform mobile applications that users love. From concept to App Store, master the complete mobile development lifecycle.',
},
{
    iconSrc: '/images/courses-icon/webdev.png',
    title: 'Web Development',
    slug: 'web-design-development',
    description:
    'Our web development services can help you establish an impactful online presence and reach your target audience effectively.',
},
];

export const HomeCoursesSection: React.FC = () => {
return (
    <section className="w-full bg-[#BACDEB] py-16 sm:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Header Block: Badge, Title Left & Join Next Cohort Button Right */}
        <div className="space-y-3">
        <div>
            <Badge variant="outline" className="bg-white/80 border-white/60 text-slate-700 text-[10px] px-3 py-1 font-bold">
            HOW WE DO
            </Badge>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-1">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B132B] tracking-tight">
            Courses
            </h2>

            <Link
            href="/cohort"
            className="group inline-flex items-center justify-center gap-2.5 self-start px-6 py-3.5 text-xs font-semibold tracking-wider text-black transition-all sm:self-auto sm:text-sm"
            >
            <span className="relative uppercase">
                JOIN NEXT COHORT
                <span aria-hidden="true" className="absolute -bottom-1 left-0 h-0.5 w-full bg-black/15">
                <span className="block h-full w-0 bg-black transition-[width] duration-300 ease-out group-hover:w-full group-focus-visible:w-full" />
                </span>
            </span>
            <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            </Link>
        </div>
        </div>

        {/* 3x2 Grid of White Course Cards */}
        <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
        {courses.map((course, index) => (
            <motion.div
            key={index}
            variants={cardVariants}
            className="h-full"
            >
            <Link
                href={`/courses/${course.slug}`}
                aria-label={`View ${course.title} course details`}
                className="flex h-full flex-col justify-between space-y-6 rounded-[5px] border border-white/60 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 sm:p-10"
            >
            <div className="space-y-5">
                <div className="w-12 h-12 flex items-center justify-start">
                <Image
                    src={course.iconSrc}
                    alt={course.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                />
                </div>

                <h3 className="text-2xl font-extrabold text-[#0B132B] tracking-tight">
                {course.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {course.description}
                </p>
            </div>
            </Link>
            </motion.div>
        ))}
        </motion.div>

    </div>
    </section>
);
};