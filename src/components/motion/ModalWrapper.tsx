'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ModalWrapperProps {
isOpen: boolean;
onClose: () => void;
title?: string;
eyebrow?: string;
children: React.ReactNode;
maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
className?: string;
variant?: 'modal' | 'left-drawer';
}

const maxWidthClasses = {
sm: 'max-w-sm',
md: 'max-w-md',
lg: 'max-w-lg',
xl: 'max-w-xl',
'2xl': 'max-w-2xl',
'4xl': 'max-w-4xl',
};

export const ModalWrapper: React.FC<ModalWrapperProps> = ({
isOpen,
onClose,
title,
eyebrow,
children,
maxWidth = 'lg',
className,
variant = 'modal',
}) => {
const isLeftDrawer = variant === 'left-drawer';
// Prevent background body scrolling while modal is open
useEffect(() => {
    if (isOpen) {
    document.body.style.overflow = 'hidden';
    } else {
    document.body.style.overflow = 'unset';
    }
    return () => {
    document.body.style.overflow = 'unset';
    };
}, [isOpen]);

if (typeof document === 'undefined') return null;

return createPortal(
    <AnimatePresence>
    {isOpen && (
        <div className={cn('fixed inset-0 z-50 flex', isLeftDrawer ? 'items-stretch justify-start' : 'items-center justify-center p-4 sm:p-6')}>
        {/* Backdrop Overlay */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={cn('fixed inset-0 bg-slate-dark/70', isLeftDrawer ? 'backdrop-blur-md' : 'backdrop-blur-xs')}
            onClick={onClose}
        />

        {/* Animated Modal Card */}
        <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title || 'Enegxi Institute'}
            initial={isLeftDrawer ? { x: '-100%' } : { opacity: 0, scale: 0.95, y: 15 }}
            animate={isLeftDrawer ? { x: 0 } : { opacity: 1, scale: 1, y: 0 }}
            exit={isLeftDrawer ? { x: '-100%' } : { opacity: 0, scale: 0.95, y: 15 }}
            transition={{
            duration: 0.25,
            ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(
            'relative bg-white shadow-2xl z-10 overflow-hidden flex flex-col',
            isLeftDrawer
                ? 'h-[100dvh] w-full rounded-r-5px text-left sm:w-2/5 sm:min-w-[22rem] sm:max-w-3xl'
                : `w-full max-h-[calc(100dvh-2rem)] rounded-5px ${maxWidthClasses[maxWidth]}`,
            className
            )}
        >
            {/* Header */}
            <div className={cn('flex shrink-0 items-center justify-between border-b border-gray-100', isLeftDrawer ? 'px-8 py-8 sm:px-12' : 'p-6 bg-slate-50/50')}>
            <div>
            {isLeftDrawer && eyebrow && <p className="mb-2 inline-flex border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-blue-700">{eyebrow}</p>}
            <h3 className={cn('font-bold text-black', isLeftDrawer ? 'text-2xl sm:text-3xl' : 'text-lg')}>
                {title || 'Enegxi Institute'}
            </h3>
            </div>
            <button
                onClick={onClose}
                type="button"
                aria-label="Close modal"
                className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
            >
                <X className="w-5 h-5" />
            </button>
            </div>

            {/* Modal Content */}
            <div className={cn('modal-scrollbar-hidden min-h-0 overflow-y-auto', isLeftDrawer ? 'p-6 sm:p-8 lg:px-12' : 'p-6 md:p-8')}>{children}</div>
        </motion.div>
        </div>
    )}
    </AnimatePresence>,
    document.body
);
};
