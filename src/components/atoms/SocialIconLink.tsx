import React from 'react';
import { cn } from '@/utils/cn';

interface SocialIconLinkProps {
href: string;
icon: React.ReactNode;
label: string;
className?: string;
}

export const SocialIconLink: React.FC<SocialIconLinkProps> = ({
href,
icon,
label,
className,
}) => {
return (
    <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={cn(
        'w-10 h-10 rounded-full bg-slate-800 text-gray-300 hover:text-white hover:bg-blue-600 flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105',
        className
    )}
    >
    {icon}
    </a>
);
};