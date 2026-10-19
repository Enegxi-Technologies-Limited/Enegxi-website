'use client';

import React from 'react';
import { Badge } from '@/components/atoms/Badge';
import { motion } from 'framer-motion';

export const CohortTimeline: React.FC = () => {
const steps = [
    { step: '01', title: 'Submit Application', desc: 'Click apply and fill out your preferred track, experience level, and contact details.' },
    { step: '02', title: 'Track Alignment Review', desc: 'Our team contacts you to confirm track placement, schedule fit, and answer questions.' },
    { step: '03', title: 'Onboarding & Prep Kit', desc: 'Access pre-cohort orientation, tools setup instructions, and community channels.' },
    { step: '04', title: 'Day 1 Cohort Kickoff', desc: 'Join live orientation, meet your peer group, match with mentors, and start building.' },
];

return (
    <motion.section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.14 } } }}>
    <motion.div className="text-center max-w-2xl mx-auto space-y-2" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
        <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200 text-[10px] font-bold">
        HOW ADMISSIONS WORK
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
        Your Journey from Applicant to Practitioner
        </h2>
    </motion.div>

    <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
        {steps.map((item, idx) => (
        <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }} whileHover={{ y: -5, boxShadow: "0 12px 28px rgba(15, 23, 42, 0.1)" }} className="bg-white p-6 rounded-5px border border-slate-200/80 shadow-sm relative space-y-3">
            <span className="text-3xl font-black text-blue-100">{item.step}</span>
            <h3 className="text-base font-bold text-[#0B132B]">{item.title}</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
        ))}
    </motion.div>
    </motion.section>
);
};