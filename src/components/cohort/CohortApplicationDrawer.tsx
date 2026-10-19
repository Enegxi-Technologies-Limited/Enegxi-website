'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/atoms/Badge';
import { CourseApplicationForm } from '@/components/forms/CourseApplicationForm';
import type { CourseTypeKey } from '@/types';
import { FiX } from 'react-icons/fi';
import { SOCIAL_LINKS } from '@/components/atoms/socialLinks';

interface CohortApplicationDrawerProps {
isOpen: boolean;
onClose: () => void;
selectedTrackKey?: CourseTypeKey;
}

export const CohortApplicationDrawer: React.FC<CohortApplicationDrawerProps> = ({
isOpen,
onClose,
selectedTrackKey,
}) => {
return (
    <AnimatePresence>
    {isOpen && (
        <>
        {/* Backdrop Overlay */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        />

        {/* Slide-over Drawer Panel from LEFT */}
        <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed top-0 left-0 bottom-0 z-50 w-full max-w-lg bg-white shadow-2xl overflow-y-auto flex flex-col justify-between"
        >
            <div className="p-6 sm:p-8 space-y-6">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                <Badge variant="outline" className="bg-blue-50 text-[#0528E1] border-blue-200 text-[10px] font-bold">
                    COHORT ENROLLMENT
                </Badge>
                <h2 className="text-xl font-extrabold text-[#0B132B] mt-1">
                    Start Your Application
                </h2>
                </div>
                <button
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                <FiX className="text-xl" />
                </button>
            </div>

            {/* Form Embedded in Drawer */}
            <div className="pt-2">
                <CourseApplicationForm courseType={selectedTrackKey} />
            </div>
            </div>

            {/* Drawer Footer Note */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 text-slate-500 text-xs text-center">
            Need guidance? Contact our admissions advisory team at {SOCIAL_LINKS.emailAddress}
            </div>
        </motion.div>
        </>
    )}
    </AnimatePresence>
);
};
