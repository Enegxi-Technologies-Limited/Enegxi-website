import React from 'react';
import { FormLabel } from './FormLabel';
import { FormErrorMessage } from './FormErrorMessage';
import { cn } from '@/utils/cn';

interface NameInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
label?: string;
error?: string;
allowSpecialCharacters?: boolean;
}

export const NameInput = React.forwardRef<HTMLInputElement, NameInputProps>(
({ label = 'Full Name', error, required, className, id = 'fullName', onChange, allowSpecialCharacters = false, ...props }, ref) => {
    
    // Personal name fields accept letters and spaces only.
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!allowSpecialCharacters) {
        e.target.value = e.target.value.replace(/[^\p{L}\s]/gu, '');
    }
    if (onChange) onChange(e);
    };

    return (
    <div className="w-full">
        {label && <FormLabel htmlFor={id} required={required}>{label}</FormLabel>}
        <input
        ref={ref}
        id={id}
        type="text"
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

NameInput.displayName = 'NameInput';
