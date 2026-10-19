'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Modal } from '../atoms/Modal';
import { PartnerForm } from '../forms/PartnerForm';

// Typed Framer Motion variants for staggered text & CTA entry
const containerVariants: Variants = {
hidden: { opacity: 0 },
visible: {
    opacity: 1,
    transition: {
    staggerChildren: 0.18,
    delayChildren: 0.1,
    },
},
};

const itemVariants: Variants = {
hidden: { opacity: 0, y: 24 },
visible: {
    opacity: 1,
    y: 0,
    transition: { 
    duration: 0.6, 
    ease: [0.215, 0.61, 0.355, 1.0] as const 
    },
},
};

export const HeroSection: React.FC = () => {
const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

return (
    <>
    {/* LAYER 1: Relative Outer Wrapper */}
    <section className="relative w-full min-h-137.5 sm:min-h-162.5 lg:min-h-180 flex items-center justify-center overflow-hidden py-16 sm:py-24">
        
        {/* LAYER 2: Absolute Image & Blur Overlay */}
        <div className="absolute inset-0 z-0">
        <Image
            src="/images/background-pictures/bgfake.jpg"
            alt="Enegxi Institute Students"
            fill
            priority
            className="object-cover object-center blur-[1px] scale-105"
            sizes="100vw"
        />
        {/* Dark tint keeps foreground text readable without hiding faces */}
        <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* LAYER 3: Responsive Content Container with Motion */}
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 w-full flex flex-col items-center justify-center text-center space-y-6"
        >
        <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-tight leading-[1.05]"
        >
            Master the Skills <br className="hidden sm:inline" />
            That Build the Future
        </motion.h1>

        <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-3xl font-medium"
        >
            Our intensive, project-based training programs ensure you don&apos;t just keep up—you lead. Learn from seasoned software engineers who build and ship real products daily.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
            {/* Navigates to Cohorts Page */}
            <Link
            href="/cohort"
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md shadow-xl hover:scale-105 active:scale-95 transition-all text-center"
            >
            JOIN NEXT COHORT
            </Link>

            {/* Triggers Partner Consultation Modal */}
            <button
            onClick={() => setIsPartnerModalOpen(true)}
            className="px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md hover:scale-105 active:scale-95 transition-all text-center"
            >
            WORK WITH US
            </button>
        </motion.div>
        </motion.div>
    </section>

    {/* Partner Consultation Modal */}
    <Modal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
        title="Partner & Hire with Enegxi"
    >
        <div className="p-4 sm:p-6">
        <PartnerForm />
        </div>
    </Modal>
    </>
);
};