'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
{ name: 'Home', href: '/' },
{ name: 'Courses', href: '/courses' },
{ name: 'Cohort', href: '/cohort' },
{ name: 'Projects', href: '/projects' },
{ name: 'Gallery', href: '/gallery' },
];

export const Navbar: React.FC = () => {
const pathname = usePathname();
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const closeMobileMenu = () => setIsMobileMenuOpen(false);

return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-200">
    <div className="mx-auto flex h-20 w-full max-w-full items-center justify-between px-4 relative shadow-md sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
        <Image
            src="/images/logo/Enegxi-Institute-Logo.png"
            alt="Enegxi Institute Logo"
            width={140}
            height={36}
            priority
            className="h-8 w-auto object-contain"
        />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
            <Link
                key={link.href}
                href={link.href}
                className="relative py-1 text-sm font-bold text-slate-900 hover:text-black transition-colors group"
            >
                <span>{link.name}</span>

                {/* Underline Indicator */}
                {isActive ? (
                <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-900 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
                ) : (
                <div className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-slate-900 transition-all duration-300 group-hover:w-full rounded-full" />
                )}
            </Link>
            );
        })}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center">
        <Link
            href="/cohort/"
            className="inline-flex items-center justify-center font-semibold rounded-5px transition-all duration-200 focus:outline-none bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md active:bg-blue-800 px-4 py-2 text-sm"
        >
            Join Next Cohort
        </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-2 rounded-lg text-slate-900 hover:bg-gray-100 md:hidden transition-colors"
        aria-label="Toggle mobile menu"
        >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Floating Overlay Menu */}
        <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-2xl overflow-hidden md:hidden"
            >
            <div className="px-6 pt-4 pb-6 space-y-3">
                {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-bold text-slate-900 transition-colors ${
                        isActive
                        ? 'bg-slate-100 border-l-4 border-slate-900'
                        : 'hover:bg-slate-50'
                    }`}
                    >
                    <span>{link.name}</span>
                    </Link>
                );
                })}

                <div className="pt-2">
                <Link
                    href="/cohort/"
                    onClick={closeMobileMenu}
                    className="inline-flex items-center justify-center font-semibold rounded-5px transition-all duration-200 focus:outline-none bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md active:bg-blue-800 px-5 py-2.5 text-base w-full"
                >
                    Join Next Cohort
                </Link>
                </div>
            </div>
            </motion.div>
        )}
        </AnimatePresence>
    </div>
    </header>
);
};