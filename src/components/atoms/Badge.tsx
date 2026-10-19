import React from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
children: React.ReactNode;
variant?: 'blue' | 'dark' | 'outline';
className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'blue', className }) => {
const variants = {
    blue: 'bg-blue-50 text-electric border-blue-100',
    dark: 'bg-[#2D2F33] text-gray-200 border-transparent',
    outline: 'border-gray-200 text-gray-600 bg-white',
};

return (
    <span
    className={cn(
        'inline-flex items-center px-3 py-1 rounded-none text-[10px] font-semibold tracking-wider uppercase border',
        variants[variant],
        className
    )}
    >
    {children}
    </span>
);
};