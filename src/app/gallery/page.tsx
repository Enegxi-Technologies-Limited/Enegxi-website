'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { GalleryCard } from '@/components/cards/GalleryCard';
import { gallerySections } from '@/config/galleryData';
import { GalleryItem } from '@/types/gallery';
import { FiX } from 'react-icons/fi';
import { InstagramLink } from '@/components/atoms/socialLinks';

export default function GalleryPage() {
const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
    
    {/* Lightbox Modal */}
    <AnimatePresence>
        {selectedItem && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
            <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
            <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors"
            >
                <FiX className="text-xl" />
            </button>

            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-slate-950">
                <Image
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-contain"
                />
            </div>

            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
                <div>
                <Badge variant="outline" className="bg-[#0528E1]/20 text-blue-300 border-[#0528E1] text-[10px] font-bold uppercase mb-1">
                    {selectedItem.category.replace('-', ' ')}
                </Badge>
                <h3 className="text-xl font-extrabold">{selectedItem.title}</h3>
                </div>
            </div>
            </motion.div>
        </motion.div>
        )}
    </AnimatePresence>

    <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18, delayChildren: 0.12 } } }}>
        
        {/* Header & Instagram Button */}
        <motion.div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200/80 pb-8" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}>
        <motion.div className="space-y-2 max-w-2xl" variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
            <Badge variant="outline" className="bg-blue-50 text-[#0528E1] border-blue-200 text-[10px] font-bold uppercase tracking-wider">
            Life at Enegxi
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B132B] tracking-tight">
            Institute Gallery & Moments
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our vibrant ecosystem from intense hackathon builds and live cohort workshops to graduation celebrations.
            </p>
        </motion.div>

        <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="shrink-0"
        >
            <InstagramLink className="shrink-0" aria-label="View more on Instagram">
              <Button
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-5px shadow-md transition-all"
              >
                <span>View More on Instagram</span>
              </Button>
            </InstagramLink>
        </motion.div>
        </motion.div>

        {/* Rotated Fraction Category Sections */}
        {gallerySections.map((section) => {
        const items = section.items;

        return (
            <motion.section key={section.key} className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.16 } } }}>
            <motion.div className="space-y-1" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
                {section.title}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm">
                {section.subtitle}
                </p>
            </motion.div>

            {/* PATTERN A: Long | (Small / Small) | Long | (Small / Small) */}
            {section.pattern === 'pattern-a' && (
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
                <GalleryCard item={items[0]} variant="long" onClick={setSelectedItem} />
                
                <motion.div className="flex flex-col gap-4 justify-between" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
                    <GalleryCard item={items[1]} variant="small" onClick={setSelectedItem} />
                    <GalleryCard item={items[2]} variant="small" onClick={setSelectedItem} />
                </motion.div>

                <GalleryCard item={items[3]} variant="long" onClick={setSelectedItem} />

                <motion.div className="flex flex-col gap-4 justify-between" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
                    <GalleryCard item={items[4]} variant="small" onClick={setSelectedItem} />
                    <GalleryCard item={items[5]} variant="small" onClick={setSelectedItem} />
                </motion.div>
                </motion.div>
            )}

            {/* PATTERN B: (Small / Small) | Long | (Small / Small) | Long */}
            {section.pattern === 'pattern-b' && (
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
                <motion.div className="flex flex-col gap-4 justify-between" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
                    <GalleryCard item={items[0]} variant="small" onClick={setSelectedItem} />
                    <GalleryCard item={items[1]} variant="small" onClick={setSelectedItem} />
                </motion.div>

                <GalleryCard item={items[2]} variant="long" onClick={setSelectedItem} />

                <motion.div className="flex flex-col gap-4 justify-between" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
                    <GalleryCard item={items[3]} variant="small" onClick={setSelectedItem} />
                    <GalleryCard item={items[4]} variant="small" onClick={setSelectedItem} />
                </motion.div>

                <GalleryCard item={items[5]} variant="long" onClick={setSelectedItem} />
                </motion.div>
            )}
            </motion.section>
        );
        })}

    </motion.div>
    </main>
);
}
