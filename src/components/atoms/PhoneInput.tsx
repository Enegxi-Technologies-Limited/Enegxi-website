import React from 'react';
import { FormLabel } from './FormLabel';
import { FormErrorMessage } from './FormErrorMessage';
import { cn } from '@/utils/cn';

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
label?: string;
error?: string;
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
({ label = 'Phone Number', error, required, className, id = 'phone', onChange, ...props }, ref) => {
    
    // Allow numbers only & enforce max 10 digits
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbersOnly = e.target.value.replace(/\D/g, ''); 
    e.target.value = numbersOnly.slice(0, 11);              
    if (onChange) onChange(e);
    };

    return (
    <div className="w-full">
        {label && <FormLabel htmlFor={id} required={required}>{label}</FormLabel>}
        <input
        ref={ref}
        id={id}
        type="tel"
        maxLength={10}
        placeholder="8012345678"
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

PhoneInput.displayName = 'PhoneInput';