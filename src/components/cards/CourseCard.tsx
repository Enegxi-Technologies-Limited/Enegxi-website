import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Course } from '@/types';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { AnimatedCard } from '@/components/motion/AnimatedCard';

interface CourseCardProps {
course: Course;
onApplyClick?: (courseSlug: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onApplyClick }) => {
const keySkills = Array.isArray(course.skills) ? course.skills.slice(0, 3) : [];
return (
    <AnimatedCard className="h-full">
    <div className="flex flex-col bg-white rounded-5px border border-gray-100 shadow-sm overflow-hidden h-full">
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
            <Button
            variant="primary"
            size="sm"
            className="w-full"
            onClick={() => onApplyClick && onApplyClick(course.slug)}
            >
            Join Next Cohort
            </Button>
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
    </AnimatedCard>
);
};