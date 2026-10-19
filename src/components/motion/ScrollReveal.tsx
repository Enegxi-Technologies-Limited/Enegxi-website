'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ScrollRevealProps {
children: React.ReactNode;
direction?: 'up' | 'down' | 'left' | 'right' | 'none';
delay?: number;
duration?: number;
distance?: number;
once?: boolean;
staggerChildren?: number;
className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
children,
direction = 'up',
delay = 0,
duration = 0.5,
distance = 30,
once = true,
staggerChildren,
className,
}) => {
const getOffset = () => {
    switch (direction) {
    case 'up':
        return { y: distance, x: 0 };
    case 'down':
        return { y: -distance, x: 0 };
    case 'left':
        return { x: distance, y: 0 };
    case 'right':
        return { x: -distance, y: 0 };
    case 'none':
    default:
        return { x: 0, y: 0 };
    }
};

const offset = getOffset();

const variants: Variants = {
    hidden: {
    opacity: 0,
    ...offset,
    },
    visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
        ...(staggerChildren && { staggerChildren }),
    },
    },
};

return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once, margin: '-50px' }}
    variants={variants}
    className={cn(className)}
    >
    {children}
    </motion.div>
);
};