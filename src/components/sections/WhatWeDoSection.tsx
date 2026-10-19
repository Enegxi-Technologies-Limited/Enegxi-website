'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Badge } from '../atoms/Badge';
import { DottedArrowMatrix } from '../atoms/Arrow';

const sectionVariants: Variants = {
hidden: { opacity: 0, y: 20 },
visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] as const },
},
};

const gridContainerVariants: Variants = {
hidden: { opacity: 0 },
visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
},
};

const cardVariants: Variants = {
hidden: { opacity: 0, y: 20 },
visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1.0] as const },
},
};

const features = [
{
    iconSrc: '/images/feature-icons/no1.svg',
    title: 'Industry-Aligned Full-Stack Curriculum',
    description:
    'Master the entire software development lifecycle with our comprehensive programs. We provide intensive, project-based training in high-demand fields ensuring you graduate with the complete skill set employers need.',
},
{
    iconSrc: '/images/feature-icons/no2.svg',
    title: 'Project-Based Learning & Real-World Portfolios',
    description:
    "We believe in learning by building. Our students don't just learn theory; they apply it by developing real applications, from dynamic web platforms to functional mobile apps. You'll graduate with a robust portfolio of work that demonstrates your capabilities to future employers.",
},
{
    iconSrc: '/images/feature-icons/no3.svg',
    title: 'Expert Instructors from the Tech Frontlines',
    description:
    'Learn from the best. Our instructors are seasoned software engineers, developers, and tech leads who bring current industry practices, tools, and insights directly into the classroom. Gain invaluable knowledge about agile methodologies, modern frameworks, and production-level code.',
},
{
    iconSrc: '/images/feature-icons/no4.svg',
    title: 'Career Launchpad: From Training to Tech Career',
    description:
    'Your success is our ultimate goal. Beyond technical skills, we provide dedicated career support, including resume workshops, technical interview preparation, and networking opportunities with our industry partners, to effectively launch your career as a professional developer.',
},
];

export const WhatWeDoSection: React.FC = () => {
return (
    <section className="max-w-7xl mx-auto bg-white py-12 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Top Dark Banner Container */}
        <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full bg-[#232528] rounded-none p-8 sm:p-12 lg:p-14 overflow-hidden flex flex-col lg:flex-row justify-between items-stretch min-h-80 sm:min-h-90 gap-8"
        >
        {/* Left Side: Badge Top, Headline Bottom */}
        <div className="z-10 flex flex-col justify-between space-y-12 sm:space-y-16 max-w-xl">
            <div>
            <Badge variant="dark" className="bg-[#2D2F33] text-gray-200 border-none px-3 py-1">
                WHAT WE DO
            </Badge>
            </div>

            <motion.h2
            initial={{ opacity: 0, x: -72 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#E2E4FF]"
            >
            Simplifying IT <br />
            for a complex world.
            </motion.h2>
        </div>

        {/* Right Side: Upward Dotted Arrow Matrix */}
        <motion.div
            initial={{ opacity: 0, y: 72 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="z-10 self-center pt-6 lg:self-end lg:pt-0"
        >
            <DottedArrowMatrix />
        </motion.div>
        </motion.div>

        {/* 4 Feature Columns with Local Folder SVGs */}
        <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-14 sm:mb-5"
        >
        {features.map((feature, index) => (
            <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col space-y-4"
            >
            <div className="w-12 h-12 flex items-center justify-start">
                <Image
                src={feature.iconSrc}
                alt={feature.title}
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
                />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {feature.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {feature.description}
            </p>
            </motion.div>
        ))}
        </motion.div>

    </div>
    <div className="max-w-6xl mx-auto border-t border-gray-200/90 mt-24 sm:mt-6" />
    </section>
    
);
};
