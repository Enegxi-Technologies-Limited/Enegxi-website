'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface FadeInProps {
children: React.ReactNode;
direction?: 'up' | 'down' | 'left' | 'right' | 'none';
delay?: number;
duration?: number;
distance?: number;
className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
children,
direction = 'up',
delay = 0,
duration = 0.5,
distance = 24,
className,
}) => {
const getDirections = () => {
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

const offset = getDirections();

return (
    <motion.div
    initial={{
        opacity: 0,
        ...offset,
    }}
    animate={{
        opacity: 1,
        x: 0,
        y: 0,
    }}
    transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
    }}
    className={cn(className)}
    >
    {children}
    </motion.div>
);
};