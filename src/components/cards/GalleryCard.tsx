'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GalleryItem } from '@/types/gallery';
import { FiMaximize2 } from 'react-icons/fi';

interface GalleryCardProps {
item: GalleryItem;
variant: 'long' | 'small';
onClick: (item: GalleryItem) => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ item, variant, onClick }) => {
const heightStyles = variant === 'long' 
    ? 'h-[420px] sm:h-[480px]' 
    : 'h-[200px] sm:h-[232px]';

return (
    <motion.div
    initial={{ opacity: 0, y: 24, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.15 }}
    whileHover={{ y: -5, scale: 1.01 }}
    whileTap={{ scale: 0.985 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    onClick={() => onClick(item)}
    className={`group relative w-full ${heightStyles} rounded-5px overflow-hidden bg-slate-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/50`}
    >
    <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        loading={item.id === 'cs-1' || item.id === 'hk-3' || item.id === 'gr-2' ? 'eager' : 'lazy'}
        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
    />

    {/* Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

    {/* Card Content & Hover Trigger */}
    <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
        <div className="flex justify-end">
        <span className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white/80 group-hover:text-white group-hover:bg-[#0528E1] transition-all duration-300">
            <FiMaximize2 className="text-sm" />
        </span>
        </div>

        <div>
        <h4 className="text-white font-bold text-sm sm:text-base drop-shadow-md group-hover:translate-x-1 transition-transform duration-300">
            {item.title}
        </h4>
        </div>
    </div>
    </motion.div>
);
};
