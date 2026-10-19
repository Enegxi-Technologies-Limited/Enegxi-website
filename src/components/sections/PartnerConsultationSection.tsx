'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SlArrowRight } from 'react-icons/sl';
import { Badge } from '../atoms/Badge';
import { ConsultationForm } from '../forms/ConsultationForm';
import { PiArrowBendLeftDownBold } from "react-icons/pi";

// Animation Variants for Benefits (Slide Up Staggered)
const benefitsContainerVariants: Variants = {
hidden: { opacity: 0 },
visible: {
    opacity: 1,
    transition: {
    staggerChildren: 0.1,
    delayChildren: 0.1,
    },
},
};

const benefitItemVariants: Variants = {
hidden: { opacity: 0, y: 20 },
visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
},
};

// Animation Variants for What Happens Next (Slide In From Left Staggered)
const stepsContainerVariants: Variants = {
hidden: { opacity: 0 },
visible: {
    opacity: 1,
    transition: {
    staggerChildren: 0.18,
    delayChildren: 0.2,
    },
},
};

const stepItemVariants: Variants = {
hidden: { opacity: 0, x: -30 },
visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
},
};

const benefitsList = [
['Client-oriented', 'Results-driven'],
['Independent', 'Problem-solving'],
['Competent', 'Transparent'],
];

export const PartnerConsultationSection: React.FC = () => {
return (
    <section className="relative w-full overflow-hidden">
    {/* Background Split: Edge-to-edge Dark Top + Light Blue Gradient Bottom */}
    <div className="absolute inset-0 flex flex-col pointer-events-none z-0">
        <div className="h-[352px] w-full bg-[#181A1D] sm:h-[416px]" />
        <div className="flex-1 w-full bg-linear-to-br from-[#E2EBF7] via-[#D0E0F7] to-[#B5CEF3]" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left Column Container */}
        <div className="lg:col-span-6 flex flex-col">
            
            {/* 1. DARK COMPARTMENT: Badge at top, H2 at base */}
            <div className="flex h-[320px] flex-col justify-between pb-12 pt-1 sm:h-[360px] sm:pb-14">
            <div>
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white text-[10px] px-3 py-1 font-bold tracking-wider">
                CONTACT US
                </Badge>
            </div>

            <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-[1.15] tracking-tight pb-2"
            >
                Partner with the Next<br className="hidden sm:inline" /> Generation of Tech Talent
            </motion.h2>
            </div>

            {/* 2. LIGHT COMPARTMENT: From Tackle to What Happens Next */}
            <div className="pt-6 sm:pt-8 space-y-7 text-[#0B132B]">
            <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                Tackle your real-world projects with our brightest minds and our expert guidance
            </p>

            <div className="text-sm sm:text-base font-bold text-[#0B132B]">
                Call us at: <a href="tel:07037934192" className="hover:underline text-black font-extrabold">07037934192</a>
            </div>

            {/* Your Benefits Section (Slides UP Staggered) */}
            <div className="space-y-3 pt-1">
                <h3 className="text-sm font-bold text-[#0B132B]">
                Your benefits:
                </h3>
                
                <motion.div 
                variants={benefitsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-y-3 gap-x-4 max-w-md"
                >
                {benefitsList.map(([col1, col2], idx) => (
                    <React.Fragment key={idx}>
                    <motion.div variants={benefitItemVariants} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
                        <span className="w-4 h-4 rounded-full bg-[#0528E1] flex items-center justify-center text-white shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        </span>
                        {col1}
                    </motion.div>

                    <motion.div variants={benefitItemVariants} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
                        <span className="w-4 h-4 rounded-full bg-[#0528E1] flex items-center justify-center text-white shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        </span>
                        {col2}
                    </motion.div>
                    </React.Fragment>
                ))}
                </motion.div>
            </div>

            {/* What Happens Next Section (Slides IN From Left Staggered with SlArrowRight) */}
            <div className="pt-4 space-y-4">
                <h3 className="text-sm font-bold text-[#0B132B]">
                What happens next?
                </h3>

                <motion.div 
                variants={stepsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-2 text-slate-800 max-w-lg"
                >
                <motion.div variants={stepItemVariants} className="flex items-start gap-2 flex-1">
                    <span className="text-lg font-extrabold text-[#0B132B] leading-none">1</span>
                    <p className="text-[11px] sm:text-xs leading-snug font-medium">
                    We Schedule a call at your convenience
                    </p>
                </motion.div>

                <SlArrowRight className="hidden sm:block text-slate-400 text-lg shrink-0 mx-1" />

                <motion.div variants={stepItemVariants} className="flex items-start gap-2 flex-1">
                    <span className="text-lg font-extrabold text-[#0B132B] leading-none">2</span>
                    <p className="text-[11px] sm:text-xs leading-snug font-medium">
                    We do a discovery and consulting meeting
                    </p>
                </motion.div>

                <SlArrowRight className="hidden sm:block text-slate-400 text-lg shrink-0 mx-1" />

                <motion.div variants={stepItemVariants} className="flex items-start gap-2 flex-1">
                    <span className="text-lg font-extrabold text-[#0B132B] leading-none">3</span>
                    <p className="text-[11px] sm:text-xs leading-snug font-medium">
                    We prepare a proposal
                    </p>
                </motion.div>
                </motion.div>
            </div>

            </div>
        </div>

        {/* Right Column: Floating Schedule Card & Consultation Form */}
        <div className="lg:col-span-6">
        <div className="bg-white rounded-md p-6 sm:p-8 shadow-xl border border-slate-100/80 space-y-6">
            
            {/* Header Title with Curved Arrow Divider */}
            <div className="text-center space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B]">
                Schedule a Free Consultation
            </h3>

            {/* Horizontal line - Arrow - Horizontal line */}
            <div className="flex items-center justify-center gap-2 w-full pt-1">
                <div className="h-[1px] bg-slate-200 flex-1" />
                <PiArrowBendLeftDownBold className="text-slate-900 text-xl shrink-0" />
                <div className="h-[1px] bg-slate-200 flex-1" />
            </div>
            </div>

            {/* Consultation Form Component */}
            <ConsultationForm />

            </div>
        </div>

        </div>
    </div>
    </section>
);
};