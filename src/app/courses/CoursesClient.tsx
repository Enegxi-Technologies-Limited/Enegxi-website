


import { Badge } from '@/components/atoms/Badge';
import { CourseCard } from '@/components/cards/CourseCard';
import { coursesData } from '@/config/coursesData';

export default function CoursesClient() {
return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden bg-[#181A1D] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#0528E1]/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl space-y-5 text-center">
        <Badge
            variant="outline"
            className="border-white/20 bg-white/10 px-3.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase"
        >
            EXPLORE OUR PROGRAMS
        </Badge>

        <h1
            className="mx-auto max-w-5xl text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
        >
            Launch &amp; Scale Your Tech Career with Hands-On Experience
        </h1>

        <p
            className="mx-auto max-w-2xl pt-1 text-sm leading-relaxed font-normal text-slate-300 sm:text-base"
        >
            Industry-aligned curricula designed to turn beginners and professionals into confident, market-ready practitioners.
        </p>
        </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8" aria-label="Courses">
        <div
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
        {coursesData.map((course) => (
            <div key={course.id || course.slug}>
            <CourseCard course={course} />
            </div>
        ))}
        </div>
    </section>
    </div>
);
}
