'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Review } from '@/types/review';
import { Badge } from '@/components/atoms/Badge';
import { FiStar, FiCheckCircle } from 'react-icons/fi';

interface ReviewCardProps {
review: Review;
index?: number;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, index = 0 }) => {
// Generate initials for name badge
const initials = review.name
    ? review.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase()
    : 'EG';

return (
    <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    className="bg-white rounded-5px p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all flex flex-col justify-between space-y-5 relative overflow-hidden group"
    >
    {/* Top Accent Hover Bar */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#0528E1] to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="space-y-4">
        {/* Rating Stars & Verified Badge */}
        <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
            <FiStar
                key={i}
                className={`text-sm ${
                i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                }`}
            />
            ))}
        </div>

        <Badge
            variant="outline"
            className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px] font-bold flex items-center gap-1"
        >
            <FiCheckCircle className="text-emerald-600" />
            <span>Verified Student</span>
        </Badge>
        </div>

        {/* Review Feedback Text */}
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
        &ldquo;{review.reviewText}&rdquo;
        </p>
    </div>

    {/* Author Footer */}
    <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#0528E1]/10 border border-[#0528E1]/20 text-[#0528E1] font-extrabold text-xs flex items-center justify-center shrink-0">
        {initials}
        </div>

        <div className="min-w-0 flex-1">
        <h4 className="text-xs sm:text-sm font-extrabold text-[#0B132B] truncate">
            {review.name}
        </h4>
        <p className="text-[11px] font-medium text-slate-500 truncate">
            Enegxi Student
        </p>
        </div>

        {review.createdAt && (
        <span className="text-[10px] text-slate-400 font-medium shrink-0">
            {review.createdAt}
        </span>
        )}
    </div>
    </motion.div>
);
};