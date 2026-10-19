'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const statItems = [
{
    number: '4',
    boldLabel: 'Years',
    subLabel: 'Proven Track Record',
},
{
    number: '20',
    boldLabel: 'Software',
    subLabel: 'Engineers Trained',
},
{
    number: '14',
    boldLabel: 'Product',
    subLabel: 'Managers Graduates',
},
{
    number: '2',
    boldLabel: 'Awards',
    subLabel: 'Received',
},
];

export const StatBar: React.FC = () => {
return (
    <section className="w-full bg-white pb-10 sm:pb-12 pt-2">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Inset Top Horizontal Line */}
        <div className="w-full border-t border-gray-200/90 mb-20 sm:mb-6" />

        <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-300/80 items-center md:p-5"
        >
        {/* Clutch Review Item */}
        <div className="flex items-center space-x-3.5 lg:pr-6">
            <div className="flex flex-col justify-center">
            <span className="text-[9px] font-bold text-slate-500 tracking-wider uppercase mb-0.5">
                REVIEWED ON
            </span>
            <Image
                src="/images/partners/clutch-logo.svg"
                alt="Clutch Logo"
                width={75}
                height={22}
                className="object-contain h-5 w-auto"
            />
            </div>

            <div className="flex flex-col justify-center pt-1">
            {/* 5 Red Stars */}
            <div className="flex items-center space-x-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className="w-3.5 h-3.5 fill-[#FF3233]"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ))}
            </div>
            <span className="text-[11px] font-bold text-slate-600 tracking-wider">
                31 REVIEWS
            </span>
            </div>
        </div>

        {/* Dynamic Metric Items */}
        {statItems.map((stat, index) => (
            <div
            key={index}
            className="flex flex-col justify-center lg:px-6"
            >
            <div className="flex items-baseline space-x-1.5">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B]">
                {stat.number}
                </span>
                <span className="text-base sm:text-lg lg:text-xl font-bold text-[#0B132B]">
                {stat.boldLabel}
                </span>
            </div>
            <span className="text-xs sm:text-sm text-slate-600 font-medium">
                {stat.subLabel}
            </span>
            </div>
        ))}
        </motion.div>
    </div>
    </section>
);
};