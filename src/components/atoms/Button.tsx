import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
variant?: 'primary' | 'secondary' | 'outline' | 'dark';
size?: 'sm' | 'md' | 'lg';
children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
variant = 'primary',
size = 'md',
className,
children,
...props
}) => {
const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-5px transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md active:bg-blue-800',
    secondary: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    dark: 'bg-slate-900 text-white hover:bg-slate-800',
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
};

return (
    <button
    className={cn(baseStyles, variants[variant], sizes[size], className)}
    {...props}
    >
    {children}
    </button>
);
};