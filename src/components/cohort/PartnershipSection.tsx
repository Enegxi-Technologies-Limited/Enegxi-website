'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { PartnerForm } from '@/components/forms/PartnerForm';
import { FiBriefcase, FiUsers, FiLayers, FiArrowRight, FiX } from 'react-icons/fi';

export const PartnershipSection: React.FC = () => {
const [isPartnerDrawerOpen, setIsPartnerDrawerOpen] = useState(false);

return (
    <motion.section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
    
    {/* PARTNERSHIP SLIDE-OVER DRAWER (From LEFT) */}
    <AnimatePresence>
        {isPartnerDrawerOpen && (
        <>
            {/* Backdrop */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPartnerDrawerOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Left Slide-over Drawer Panel */}
            <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed top-0 left-0 bottom-0 z-50 w-full max-w-lg bg-white shadow-2xl overflow-y-auto flex flex-col justify-between"
            >
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.15 } }} className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                    <Badge variant="outline" className="bg-blue-50 text-[#0528E1] border-blue-200 text-[10px] font-bold">
                    ENTERPRISE & COLLABORATION
                    </Badge>
                    <h2 className="text-xl font-extrabold text-[#0B132B] mt-1">
                    Partner With Enegxi
                    </h2>
                </div>
                <button
                    onClick={() => setIsPartnerDrawerOpen(false)}
                    className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                    <FiX className="text-xl" />
                </button>
                </div>

                {/* Integrated Partner Form */}
                <div className="pt-2">
                <PartnerForm />
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.25 } }} className="p-6 border-t border-slate-100 bg-slate-50 text-slate-500 text-xs text-center">
                For corporate partnerships & press inquiries: partners@enegxi.com
            </motion.div>
            </motion.div>
        </>
        )}
    </AnimatePresence>

    {/* PARTNERSHIP SECTION BANNER */}
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-[#181A1D] rounded-5px p-6 sm:p-10 lg:p-12 text-white grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Value Proposition */}
        <motion.div className="lg:col-span-7 space-y-6" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
        <div className="space-y-2">
            <Badge variant="outline" className="bg-white/10 text-white border-white/20 text-[10px] font-bold">
            ENTERPRISE & ECOSYSTEM
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Partner with Enegxi Institute
            </h2>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
            We collaborate with forward-thinking tech companies, startups, and institutions to bridge the talent gap, host customized training programs, and sponsor student cohorts.
        </p>

        <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -4 }} className="flex flex-col gap-2 p-3 bg-white/5 rounded-5px border border-white/10">
            <div className="w-12 text-xl h-8 rounded-5px flex items-center justify-start text-white">
                <FiBriefcase />
            </div>
            <h4 className="text-xs font-bold text-white">Hire Vetted Talent</h4>
            <p className="text-slate-400 text-[11px]">Direct access to job-ready graduates with portfolio projects.</p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -4 }} className="flex flex-col gap-2 p-3 bg-white/5 rounded-5px border border-white/10">
            <div className="w-12 text-xl h-8 rounded-5px flex items-center justify-start text-white">
                <FiUsers />
            </div>
            <h4 className="text-xs font-bold text-white">Corporate Upskilling</h4>
            <p className="text-slate-400 text-[11px]">Tailored training modules for engineering & product teams.</p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -4 }} className="flex flex-col gap-2 p-3 bg-white/5 rounded-5px border border-white/10">
            <div className="w-12 text-xl h-8 rounded-5px flex items-center justify-start text-white">
                <FiLayers />
            </div>
            <h4 className="text-xs font-bold text-white">Cohort Sponsorship</h4>
            <p className="text-slate-400 text-[11px]">Sponsor high-potential learners or provide project briefs.</p>
            </motion.div>
        </motion.div>
        </motion.div>

        {/* Action Callout Box with Drawer Trigger Button */}
        <motion.div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-5px p-6 sm:p-8 flex flex-col justify-center items-start space-y-4" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Badge variant="outline" className="bg-[#0528E1]/20 text-blue-300 border-[#0528E1] text-[10px] font-bold">
            BECOME A PARTNER
        </Badge>
        <h3 className="text-xl font-bold text-white">
            Ready to collaborate with our ecosystem?
        </h3>
        <p className="text-slate-300 text-xs leading-relaxed">
            Submit your organization details to explore talent recruitment, corporate upskilling, or cohort sponsorship opportunities.
        </p>
        <Button
            onClick={() => setIsPartnerDrawerOpen(true)}
            className="w-full py-3 bg-[#0528E1] hover:bg-blue-700 text-white font-bold text-xs rounded-5px transition-all flex items-center justify-center gap-2 shadow-sm shadow-blue-600/30"
        >
            <span>Inquire for Partnership</span>
            <FiArrowRight />
        </Button>
        </motion.div>

    </motion.div>
    </motion.section>
);
};