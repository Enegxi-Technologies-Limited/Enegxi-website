'use client';

import React from 'react';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface CohortHeaderProps {
onApplyClick: () => void;
}

export const CohortHeader: React.FC<CohortHeaderProps> = ({ onApplyClick }) => {
return (
    <motion.section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.16 } } }}>
    <motion.div className="flex flex-wrap items-center justify-between gap-4" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}>
        <motion.div className="space-y-2 max-w-3xl" variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
        <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-blue-50 text-[#0528E1] border-blue-200 text-[10px] font-bold uppercase tracking-wider">
            Admissions & Ecosystem
            </Badge>
            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px] font-bold uppercase tracking-wider">
            Applications Open
            </Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B132B] tracking-tight">
            Cohort Intake & Strategic Partnerships
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Join our upcoming cohort to build industry-ready skills or collaborate with us as an enterprise partner, mentor, or tech sponsor.
        </p>
        </motion.div>

        <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
        <Button
            onClick={onApplyClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0528E1] hover:bg-blue-700 text-white font-bold text-sm rounded-5px shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]"
        >
            <span>Apply for Upcoming Cohort</span>
            <FiArrowRight />
        </Button>
        </motion.div>
    </motion.div>

    {/* Quick Intake Metrics Bar */}
    <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white rounded-5px border border-slate-200/80 shadow-sm mt-6" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
        <div>
        <span className="block text-[11px] font-bold uppercase text-slate-400">Target Cohort</span>
        <span className="text-sm font-extrabold text-[#0B132B]">Upcoming Intake</span>
        </div>
        <div>
        <span className="block text-[11px] font-bold uppercase text-slate-400">Duration</span>
        <span className="text-sm font-extrabold text-[#0B132B]">12 – 16 Weeks</span>
        </div>
        <div>
        <span className="block text-[11px] font-bold uppercase text-slate-400">Format</span>
        <span className="text-sm font-extrabold text-[#0B132B]">Hybrid & Live Online</span>
        </div>
        <div>
        <span className="block text-[11px] font-bold uppercase text-slate-400">Application Deadline</span>
        <span className="text-sm font-extrabold text-[#0528E1]">Enrollment Active</span>
        </div>
    </motion.div>
    </motion.section>
);
};
