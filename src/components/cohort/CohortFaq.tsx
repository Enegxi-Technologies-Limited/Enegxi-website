'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/atoms/Badge';
import { FiChevronDown } from 'react-icons/fi';

export const CohortFaq: React.FC = () => {
const [openFaq, setOpenFaq] = useState<number | null>(null);

const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
};

const faqs = [
    {
    q: 'Do I need prior coding or technical experience to apply?',
    a: 'Not for beginner-level tracks. Our foundational cohorts start from first principles. Advanced specialized tracks will indicate their prerequisite skills on the track details.',
    },
    {
    q: 'What is the format and weekly schedule of the cohort classes?',
    a: 'We offer live interactive classes, hands-on weekend workshops, and asynchronous project lab sessions designed to accommodate both students and working professionals.',
    },
    {
    q: 'Is laptop hardware provided, or do I need my own equipment?',
    a: 'You will need a functional laptop with at least 8GB RAM and a stable internet connection to actively participate in coding labs and collaborative projects.',
    },
    {
    q: 'Are certificates provided upon completion?',
    a: 'Yes, graduates who complete at least 80% of project assignments and the final capstone project receive a verifiable Certificate of Completion.',
    },
];

return (
    <motion.section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}>
    <motion.div className="text-center space-y-2" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
        <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200 text-[10px] font-bold">
        FREQUENTLY ASKED QUESTIONS
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
        Admissions FAQ
        </h2>
    </motion.div>

    <motion.div className="space-y-3" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
        {faqs.map((faq, idx) => {
        const isOpen = openFaq === idx;
        return (
            <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } }} className="bg-white rounded-5px border border-slate-200/80 overflow-hidden shadow-sm">
            <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-bold text-sm text-[#0B132B] hover:bg-slate-50 transition-colors"
            >
                <span>{faq.q}</span>
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
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                    <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm border-t border-slate-100 pt-3">
                    {faq.a}
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
            </motion.div>
        );
        })}
    </motion.div>
    </motion.section>
);
};