'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface AnimatedCardProps {
children: React.ReactNode;
className?: string;
hoverScale?: number;
hoverY?: number;
tapScale?: number;
onClick?: () => void;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
children,
className,
hoverScale = 1.02,
hoverY = -6,
tapScale = 0.98,
onClick,
}) => {
return (
    <motion.div
    whileHover={{
        scale: hoverScale,
        y: hoverY,
        transition: { duration: 0.25, ease: 'easeOut' },
    }}
    whileTap={{ scale: tapScale }}
    onClick={onClick}
    className={cn('transition-shadow duration-300', className)}
    >
    {children}
    </motion.div>
);
};