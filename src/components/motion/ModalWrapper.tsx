'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ModalWrapperProps {
isOpen: boolean;
onClose: () => void;
title?: string;
children: React.ReactNode;
maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
className?: string;
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
children,
maxWidth = 'lg',
className,
}) => {
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

return (
    <AnimatePresence>
    {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop Overlay */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="fixed inset-0 bg-slate-dark/70 backdrop-blur-xs"
            onClick={onClose}
        />

        {/* Animated Modal Card */}
        <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title || 'Enegxi Institute'}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{
            duration: 0.25,
            ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(
            'relative w-full max-h-[calc(100dvh-2rem)] bg-white rounded-5px shadow-2xl z-10 overflow-hidden flex flex-col',
            maxWidthClasses[maxWidth],
            className
            )}
        >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between p-6 border-b border-gray-100 bg-slate-50/50">
            <h3 className="text-lg font-bold text-black">
                {title || 'Enegxi Institute'}
            </h3>
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
            <div className="modal-scrollbar-hidden min-h-0 overflow-y-auto p-6 md:p-8">{children}</div>
        </motion.div>
        </div>
    )}
    </AnimatePresence>
);
};
