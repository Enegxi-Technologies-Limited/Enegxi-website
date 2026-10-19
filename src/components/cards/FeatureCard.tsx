import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/utils/cn';
import { AnimatedCard } from '../motion/AnimatedCard';

interface FeatureCardProps {
title: string;
description: string;
icon: LucideIcon;
className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
title,
description,
icon: Icon,
className,
}) => {
return (
    <AnimatedCard className="h-full">
    <div
        className={cn(
        'group p-6 md:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-full',
        className
        )}
    >
        <div>
        <div className="w-12 h-12 rounded-xl bg-blue-50 text-electric flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-white transition-colors duration-300">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-dark mb-3 group-hover:text-electric transition-colors">
            {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
            {description}
        </p>
        </div>
    </div>
    </AnimatedCard>
);
};