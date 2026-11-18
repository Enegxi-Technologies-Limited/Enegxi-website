import Image from 'next/image';
import Link from 'next/link';
import { HeroPartnerButton } from './HeroPartnerButton';

export function HeroSection() {
return (
    <section className="relative w-full min-h-[calc(100svh-7.5rem)] flex items-center justify-center overflow-hidden py-6 sm:py-8 lg:py-10">
    {/* Background carousel: 7 seconds per photo, with no controls or indicators. */}
    <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
        src="/background-pictures/bgfake.jpg"
        alt=""
        fill
        preload
        className="hero-background-slide hero-background-slide--first object-cover object-center blur-[1px] scale-105"
        sizes="100vw"
        />
        <Image
        src="/background-pictures/background1.png"
        alt=""
        fill
        loading="eager"
        className="hero-background-slide hero-background-slide--second object-cover object-center blur-[1px] scale-105"
        sizes="100vw"
        />
        <Image
        src="/background-pictures/background2.png"
        alt=""
        fill
        loading="eager"
        className="hero-background-slide hero-background-slide--third object-cover object-center blur-[1px] scale-105"
        sizes="100vw"
        />
        {/* Dark tint keeps foreground text readable without hiding faces */}
        <div className="absolute inset-0 bg-black/35" />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 w-full flex flex-col items-center justify-center text-center space-y-4 sm:space-y-5">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.02]">
        Master the Skills <br className="hidden sm:inline" />
        That Build the Future
        </h1>

        <p
        className="hero-rise text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-3xl font-medium"
        style={{ animationDelay: '0.1s' }}
        >
        Our intensive, project-based training programs ensure you don&apos;t just keep up—you lead. Learn from seasoned software engineers who build and ship real products daily.
        </p>

        {/* Action buttons */}
        <div
        className="hero-rise flex flex-wrap items-center justify-center gap-4 pt-1"
        style={{ animationDelay: '0.25s' }}
        >
        <Link
            href="/cohort"
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md shadow-xl hover:scale-105 active:scale-95 transition-all text-center"
        >
            JOIN NEXT COHORT
        </Link>

        <HeroPartnerButton />
        </div>
    </div>
    </section>
);
}
