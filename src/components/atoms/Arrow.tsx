'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface DottedArrowMatrixProps {
className?: string;
}

export const DottedArrowMatrix: React.FC<DottedArrowMatrixProps> = ({ className }) => {
// Wide upward-pointing arrow head pattern
const pattern = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
];

return (
    <div className={cn('flex flex-col items-center gap-1.5 sm:gap-2 select-none', className)}>
    {pattern.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1.5 sm:gap-2 justify-center">
        {row.map((cell, colIndex) => {
            if (cell === 0) {
            return <div key={colIndex} className="w-1.5 h-1.5 sm:w-2 sm:h-2 invisible" />;
            }
            return (
            <motion.div
                key={colIndex}
                initial={{ opacity: 0.3, scale: 0.8 }}
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.1, 0.8] }}
                transition={{
                duration: 3,
                repeat: Infinity,
                delay: (rowIndex + colIndex) * 0.04,
                ease: 'easeInOut',
                }}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-[#D4D8FF] rounded-[0.5px] shadow-[0_0_6px_rgba(212,216,255,0.4)]"
            />
            );
        })}
        </div>
    ))}
    </div>
);
};