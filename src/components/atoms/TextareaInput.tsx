import React from 'react';
import { FormLabel } from './FormLabel';
import { FormErrorMessage } from './FormErrorMessage';
import { cn } from '@/utils/cn';

interface TextareaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
label?: string;
error?: string;
}

export const TextareaInput = React.forwardRef<HTMLTextAreaElement, TextareaInputProps>(
({ label, error, required, className, id = 'message', rows = 4, onChange, ...props }, ref) => {
    
    // Real-time guard: strip characters outside the allowed safe text/punctuation set
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z0-9\s.,!?\-_()'":;@#&/]/g, '');
    if (onChange) onChange(e);
    };

    return (
    <div className="w-full">
        {label && <FormLabel htmlFor={id} required={required}>{label}</FormLabel>}
        <textarea
        ref={ref}
        id={id}
        rows={rows}
        onChange={handleChange}
        className={cn(
            'w-full px-4 py-2.5 rounded-5px border border-gray-300 text-slate-dark placeholder-gray-400 focus:border-electric focus:ring-1 focus:ring-electric transition-colors duration-150 outline-none resize-y',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
        )}
        {...props}
        />
        <FormErrorMessage message={error} />
    </div>
    );
}
);

TextareaInput.displayName = 'TextareaInput';