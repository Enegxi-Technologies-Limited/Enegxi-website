'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/atoms/Badge';
import { CourseApplicationForm } from '@/components/forms/CourseApplicationForm';
import type { Course } from '@/types';
import { 
FiClock, 
FiCalendar, 
FiBarChart2, 
FiCheckCircle, 
FiChevronDown, 
FiArrowLeft,
FiBookOpen,
FiLayers
} from 'react-icons/fi';

interface CourseDetailClientProps {
course: Course;
}

export const CourseDetailClient: React.FC<CourseDetailClientProps> = ({ course }) => {
const [openModule, setOpenModule] = useState<number | null>(0);

const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
};

const outline = course.outline || [];
const skills = course.skills || [];
const prerequisites = course.prerequisites || ['Basic computer literacy', 'Passion to learn and build real projects'];

return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
    
    {/* 1. HERO HEADER */}
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[#181A1D] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
        <Image
            src="/images/background-pictures/coursedetailsbg.png"
            alt="Course background design"
            fill
            priority
            className="object-cover opacity-15 mix-blend-luminosity"
        />
        {/* Gradient Overlay for Text Readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#181A1D] via-[#181A1D]/90 to-[#181A1D]/75" /> */}
        </div>

        {/* Accent Glow */}
        <div className="absolute top-0 right-1/4 z-0 w-96 h-96 bg-[#0528E1]/20 rounded-full blur-3xl pointer-events-none" />

        <motion.div 
        className="relative z-10 mx-auto w-full max-w-7xl space-y-6" 
        initial="hidden" 
        animate="visible" 
        variants={{ 
            hidden: { opacity: 0 }, 
            visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } 
        }}
        >
        <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
        >
            <FiArrowLeft className="text-sm" /> Back to all courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.div 
            className="lg:col-span-8 space-y-4" 
            variants={{ 
                hidden: { opacity: 0, x: -70 }, 
                visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } 
            }}
            >
            <div className="flex flex-wrap items-center gap-2">
                <Badge
                variant="outline"
                className="bg-white/10 border-white/20 text-white text-[10px] px-3 py-1 font-bold tracking-wider uppercase"
                >
                {course.category || 'TECH TRACK'}
                </Badge>
                {course.level && (
                <Badge
                    variant="outline"
                    className="bg-[#0528E1]/40 border-[#0528E1] text-blue-200 text-[10px] px-3 py-1 font-bold tracking-wider uppercase"
                >
                    {course.level}
                </Badge>
                )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                {course.title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl pt-1">
                {course.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 max-w-xl">
                {course.duration && (
                <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
                    <FiClock className="text-[#0528E1] text-base shrink-0" />
                    <span>{course.duration}</span>
                </div>
                )}
                {course.schedule && (
                <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
                    <FiCalendar className="text-[#0528E1] text-base shrink-0" />
                    <span>{course.schedule}</span>
                </div>
                )}
                {course.level && (
                <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
                    <FiBarChart2 className="text-[#0528E1] text-base shrink-0" />
                    <span>{course.level}</span>
                </div>
                )}
            </div>
            </motion.div>
        </div>
        </motion.div>
    </section>

    {/* 2. MAIN CONTENT GRID */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Details & Syllabus */}
        <div className="lg:col-span-7 space-y-10">
            {skills.length > 0 && (
            <div className="bg-white rounded-5px p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
                <div className="flex items-center gap-2 text-[#0B132B]">
                <FiLayers className="text-[#0528E1] text-xl" />
                <h2 className="text-lg sm:text-xl font-bold">Skills & Technologies You Will Master</h2>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((skill, idx) => (
                    <span
                    key={idx}
                    className="px-3 py-1.5 bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold rounded-lg border border-slate-200/60"
                    >
                    {skill}
                    </span>
                ))}
                </div>
            </div>
            )}

            {outline.length > 0 && (
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#0B132B]">
                <FiBookOpen className="text-[#0528E1] text-xl" />
                <h2 className="text-xl sm:text-2xl font-bold">Curriculum & Module Outline</h2>
                </div>

                <div className="space-y-3">
                {outline.map((item, idx) => {
                    const isOpen = openModule === idx;
                    const moduleTitle = item.title || `Module ${idx + 1}`;

                    return (
                    <div
                        key={idx}
                        className="bg-white rounded-5px border border-slate-200/80 overflow-hidden shadow-sm transition-all"
                    >
                        <button
                        onClick={() => toggleModule(idx)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-[#0B132B] hover:bg-slate-50 transition-colors"
                        >
                        <span className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0528E1] text-xs font-extrabold flex items-center justify-center shrink-0">
                            {idx + 1}
                            </span>
                            {moduleTitle}
                        </span>
                        <FiChevronDown
                            className={`text-slate-400 text-lg shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#0528E1]' : ''
                            }`}
                        />
                        </button>

                        <AnimatePresence initial={false}>
                        {isOpen && (
                            <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            >
                            <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-slate-600 text-xs sm:text-sm space-y-2">
                                <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                            </div>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                    );
                })}
                </div>
            </div>
            )}

            <div className="bg-white rounded-5px p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-[#0B132B]">Prerequisites & Eligibility</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {prerequisites.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2">
                    <FiCheckCircle className="text-emerald-600 text-base shrink-0 mt-0.5" />
                    <span>{req}</span>
                </li>
                ))}
            </ul>
            </div>
        </div>

        {/* Right Column: Course-Locked Form */}
        <div className="lg:col-span-5 sticky top-24">
            <div className="bg-white rounded-5px p-6 sm:p-8 shadow-md border border-slate-200/80 space-y-5">
            <div className="space-y-1.5 border-b border-slate-100 pb-4">
                <Badge variant="outline" className="bg-blue-50 text-[#0528E1] border-blue-200 text-[10px] font-bold">
                ENROLLMENT OPEN
                </Badge>
                <h3 className="text-xl font-extrabold text-[#0B132B]">
                Apply for {course.title}
                </h3>
                <p className="text-slate-500 text-xs">
                Fill out the form below to secure your slot for the upcoming cohort.
                </p>
            </div>

            <CourseApplicationForm courseType={course.trackKey} />
            </div>
        </div>

        </div>
    </section>
    </main>
);
};