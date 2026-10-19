'use client';

import React from 'react';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import type { Course, CourseTypeKey } from '@/types';
import { FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface CohortTracksProps {
courses: Course[];
onSelectTrack: (trackKey: CourseTypeKey) => void;
}

export const CohortTracks: React.FC<CohortTracksProps> = ({ courses, onSelectTrack }) => {
return (
    <motion.section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}>
    <motion.div className="flex flex-wrap items-end justify-between gap-4" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
        <div className="space-y-1">
        <Badge variant="outline" className="bg-blue-50 text-[#0528E1] border-blue-200 text-[10px] font-bold">
            AVAILABLE COURSES
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
            Choose Your Learning Track
        </h2>
        </div>
        <p className="text-slate-500 text-xs sm:text-sm max-w-md">
        Clicking apply on any course opens the application panel with that program pre-selected.
        </p>
    </motion.div>

    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
        {courses.map((course) => (
        <motion.div
            key={course.id || course.slug}
            variants={{ hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
            whileHover={{ y: -5, boxShadow: "0 14px 32px rgba(15, 23, 42, 0.12)" }}
            className="bg-white rounded-5px p-6 border border-slate-200/80 shadow-sm transition-shadow flex flex-col justify-between space-y-5"
        >
            <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
                <Badge variant="outline" className="bg-slate-100 text-slate-800 text-[10px] font-bold">
                {course.category || 'TECH TRACK'}
                </Badge>
                {course.level && (
                <span className="text-[11px] font-semibold text-slate-500">
                    {course.level}
                </span>
                )}
            </div>

            <h3 className="text-lg font-bold text-[#0B132B]">
                {course.title}
            </h3>

            <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
                {course.description}
            </p>

            <div className="flex items-center gap-4 text-xs font-medium text-slate-500 pt-2 border-t border-slate-100">
                {course.duration && (
                <span className="flex items-center gap-1">
                    <FiClock className="text-[#0528E1]" /> {course.duration}
                </span>
                )}
                {course.schedule && (
                <span className="flex items-center gap-1">
                    <FiCalendar className="text-[#0528E1]" /> {course.schedule}
                </span>
                )}
            </div>
            </div>

            <Button
            onClick={() => onSelectTrack(course.trackKey)}
            className="w-full py-2.5 px-4 bg-slate-900 hover:bg-[#0528E1] text-white font-bold text-xs rounded-5px transition-colors flex items-center justify-center gap-2"
            >
            <span>Apply for this Course</span>
            <FiArrowRight />
            </Button>
        </motion.div>
        ))}
    </motion.div>
    </motion.section>
);
};