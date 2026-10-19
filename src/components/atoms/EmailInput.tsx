import React from 'react';
import { FormLabel } from './FormLabel';
import { FormErrorMessage } from './FormErrorMessage';
import { cn } from '@/utils/cn';

interface EmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
label?: string;
error?: string;
}

export const EmailInput = React.forwardRef<HTMLInputElement, EmailInputProps>(
({ label = 'Email Address', error, required, className, id = 'email', onChange, ...props }, ref) => {
    
    // Automatically strip any spaces typed or pasted into the email field
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\s/g, '');
    if (onChange) onChange(e);
    };

    return (
    <div className="w-full">
        {label && <FormLabel htmlFor={id} required={required}>{label}</FormLabel>}
        <input
        ref={ref}
        id={id}
        type="email"
        placeholder="example@domain.com"
        onChange={handleChange}
        className={cn(
            'w-full px-4 py-2.5 rounded-5px border border-gray-300 text-slate-dark placeholder-gray-400 focus:border-electric focus:ring-1 focus:ring-electric transition-colors duration-150 outline-none',
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

EmailInput.displayName = 'EmailInput';