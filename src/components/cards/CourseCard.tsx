import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Course } from '@/types';
import { Badge } from '../atoms/Badge';

interface CourseCardProps {
course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
const keySkills = Array.isArray(course.skills) ? course.skills.slice(0, 3) : [];
return (
    <article className="h-full transition-transform duration-200 hover:-translate-y-1">
    <div className="flex h-full flex-col overflow-hidden rounded-5px border border-gray-100 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
        <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between gap-2 mb-4">
            <Badge variant="blue">{course.category}</Badge>
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>{course.duration}</span>
            </div>
        </div>

        <h3 className="text-xl font-bold text-slate-dark mb-2">
            {course.title}
        </h3>
        <p className="text-sm text-gray-600 mb-6 flex-1 line-clamp-3">
            {course.description}
        </p>

        <div className="space-y-2 mb-6">
            {keySkills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="truncate">{skill}</span>
            </div>
            ))}
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
            <Link
            href={`/courses/${course.slug}`}
            className="inline-flex w-full items-center justify-center rounded-5px bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:bg-blue-800 focus:outline-none"
            >
            Join Next Cohort
            </Link>
            <Link
            href={`/courses/${course.slug}`}
            className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:text-electric hover:border-electric transition-colors"
            title="View Course Details"
            >
            <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
        </div>
    </div>
    </article>
);
};
