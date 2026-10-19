'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Badge } from '../atoms/Badge';

// Directional Animation Variants
const animateFromTop: Variants = {
hidden: { opacity: 0, y: -60 },
visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
},
};

const animateFromTopRight: Variants = {
hidden: { opacity: 0, x: 60, y: -60 },
visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
},
};

const animateFromLeft: Variants = {
hidden: { opacity: 0, x: -60 },
visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
},
};

const animateFromCenter: Variants = {
hidden: { opacity: 0, scale: 0.85, y: -20 },
visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
},
};

const animateFromRight: Variants = {
hidden: { opacity: 0, x: 60 },
visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
},
};

const animateFromBottomLeft: Variants = {
hidden: { opacity: 0, x: -40, y: 60 },
visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.22 },
},
};

const animateFromBottom: Variants = {
hidden: { opacity: 0, y: 60 },
visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
},
};

const animateFromBottomRight: Variants = {
hidden: { opacity: 0, x: 50, y: 60 },
visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
},
};

export const PartnerSection: React.FC = () => {
return (
    <section className="w-full bg-white py-16 sm:py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
        
        {/* Left Column: Heading & Text */}
        <div className="lg:col-span-5 space-y-5">
            <div>
            <Badge variant="outline" className="bg-slate-100 border-slate-200 text-slate-600 text-[10px] px-3 py-1 font-bold tracking-wider uppercase">
                PARTNERS
            </Badge>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.12]">
            We Are In Partnership With
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-md pt-1">
            The best solutions are built through collaboration. That’s why we’re proud to partner with amazing institutions and firms worldwide.
            </p>
        </div>

        {/* Right Column: Compact Directional Flying Collage */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] h-[360px] sm:h-[400px]">
            
            {/* 1. Intel Logo - Enters from TOP */}
            <motion.div
                variants={animateFromTop}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute top-[2%] left-[34%] z-10 w-20 sm:w-24"
            >
                <Image
                src="/images/partners/intel.png"
                alt="Intel Technology Provider"
                width={100}
                height={100}
                className="w-full h-auto object-contain"
                />
            </motion.div>

            {/* 2. Blog 05 Image (Standing Team) - Enters from TOP-RIGHT */}
            <motion.div
                variants={animateFromTopRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute top-[8%] right-[2%] z-20 w-32 sm:w-38 rounded-sm overflow-hidden shadow-md"
            >
                <Image
                src="/images/partners/blog-05-600x425.png"
                alt="Team Collaboration"
                width={300}
                height={212}
                className="w-full h-auto object-cover"
                />
            </motion.div>

            {/* 3. Blog 06 Image (Meeting Group) - Enters from LEFT */}
            <motion.div
                variants={animateFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute top-[38%] left-[2%] z-20 w-24 sm:w-28 rounded-sm overflow-hidden shadow-md"
            >
                <Image
                src="/images/partners/blog-06-600x425.png"
                alt="Partner Discussion"
                width={200}
                height={142}
                className="w-full h-auto object-cover"
                />
            </motion.div>

            {/* 4. Acronis Banner - Enters from CENTER */}
            <motion.div
                variants={animateFromCenter}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute top-[32%] left-[28%] z-30 w-44 sm:w-52 shadow-md rounded-sm"
            >
                <Image
                src="/images/partners/acronis-logo2.png"
                alt="Acronis Gold Service Provider"
                width={300}
                height={120}
                className="w-full h-auto object-contain"
                />
            </motion.div>

            {/* 5. Blog 02 Image (Blueprint Overhead) - Enters from RIGHT */}
            <motion.div
                variants={animateFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute top-[44%] right-[0%] z-20 w-18 sm:w-22 rounded-sm overflow-hidden shadow-md"
            >
                <Image
                src="/images/partners/blog-02-600x425.png"
                alt="Project Planning Overhead"
                width={160}
                height={113}
                className="w-full h-auto object-cover"
                />
            </motion.div>

            {/* 6. Blog 07 Image (Desk Overhead) - Enters from BOTTOM-LEFT */}
            <motion.div
                variants={animateFromBottomLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute top-[68%] left-[12%] z-20 w-22 sm:w-26 rounded-sm overflow-hidden shadow-md"
            >
                <Image
                src="/images/partners/blog-07-600x425.png"
                alt="Design Session Overhead"
                width={180}
                height={128}
                className="w-full h-auto object-cover"
                />
            </motion.div>

            {/* 7. Dell Logo - Enters from BOTTOM */}
            <motion.div
                variants={animateFromBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute top-[65%] left-[38%] z-10 w-28 sm:w-36"
            >
                <Image
                src="/images/partners/del.png"
                alt="Dell PartnerDirect Registered"
                width={200}
                height={80}
                className="w-full h-auto object-contain"
                />
            </motion.div>

            {/* 8. Ubiquiti Logo - Enters from BOTTOM-RIGHT */}
            <motion.div
                variants={animateFromBottomRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute top-[68%] right-[4%] z-10 w-20 sm:w-24"
            >
                <Image
                src="/images/partners/ubiquiti.png"
                alt="Ubiquiti Networks"
                width={150}
                height={100}
                className="w-full h-auto object-contain"
                />
            </motion.div>

            </div>
        </div>

        </div>
    </div>
    </section>
);
};