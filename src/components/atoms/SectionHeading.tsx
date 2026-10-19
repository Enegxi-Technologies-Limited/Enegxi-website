import React from 'react';
import { Badge } from './Badge';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
badge?: string;
title: string;
subtitle?: string;
centered?: boolean;
className?: string;
titleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
badge,
title,
subtitle,
centered = true,
className,
titleClassName,
}) => {
return (
    <div className={cn('flex flex-col', centered ? 'items-center text-center' : 'items-start text-left', className)}>
    {badge && <Badge className="mb-3">{badge}</Badge>}
    <h2 className={cn('text-3xl md:text-4xl font-extrabold text-slate-dark tracking-tight', titleClassName)}>
        {title}
    </h2>
    {subtitle && (
        <p className="mt-3 text-base md:text-lg text-gray-600 max-w-2xl font-normal">
        {subtitle}
        </p>
    )}
    </div>
);
};