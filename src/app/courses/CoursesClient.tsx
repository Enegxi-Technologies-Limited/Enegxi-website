'use client';

import { motion, type Variants } from 'framer-motion';
import { Badge } from '@/components/atoms/Badge';
import { CourseCard } from '@/components/cards/CourseCard';
import { coursesData } from '@/config/coursesData';

const containerVariants: Variants = {
hidden: { opacity: 0 },
visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
},
};

const cardVariants: Variants = {
hidden: { opacity: 0, y: 28 },
visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
},
};

export default function CoursesPage() {
return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden bg-[#181A1D] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#0528E1]/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl space-y-5 text-center">
        <Badge
            variant="outline"
            className="border-white/20 bg-white/10 px-3.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase"
        >
            EXPLORE OUR PROGRAMS
        </Badge>

        <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-5xl text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
        >
            Launch &amp; Scale Your Tech Career with Hands-On Experience
        </motion.h1>

        <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-2xl pt-1 text-sm leading-relaxed font-normal text-slate-300 sm:text-base"
        >
            Industry-aligned curricula designed to turn beginners and professionals into confident, market-ready practitioners.
        </motion.p>
        </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8" aria-label="Courses">
        <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
        {coursesData.map((course) => (
            <motion.div key={course.id || course.slug} variants={cardVariants}>
            <CourseCard course={course} />
            </motion.div>
        ))}
        </motion.div>
    </section>
    </main>
);
}
