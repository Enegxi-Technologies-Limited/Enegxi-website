import React from 'react';
import { FormErrorMessage } from './FormErrorMessage';
import { cn } from '@/utils/cn';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
label: React.ReactNode;
error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
({ label, error, className, id = 'checkbox', ...props }, ref) => {
    return (
    <div className="w-full">
        <label htmlFor={id} className="inline-flex items-start gap-2.5 cursor-pointer text-sm text-gray-600">
        <input
            ref={ref}
            id={id}
            type="checkbox"
            className={cn(
            'mt-0.5 h-4 w-4 rounded border-gray-300 text-electric focus:ring-electric transition duration-150 cursor-pointer',
            className
            )}
            {...props}
        />
        <span>{label}</span>
        </label>
        <FormErrorMessage message={error} />
    </div>
    );
}
);

Checkbox.displayName = 'Checkbox';