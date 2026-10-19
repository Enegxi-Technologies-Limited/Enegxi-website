import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
isLoading?: boolean;
children: React.ReactNode;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
isLoading = false,
children,
className,
disabled,
...props
}) => {
return (
    <button
    type="submit"
    disabled={isLoading || disabled}
    className={cn(
        'w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-5px hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed',
        className
    )}
    {...props}
    >
    {isLoading ? (
        <span className="flex items-center gap-2">
        <Loader2 className="w-5 h-5 animate-spin" />
        Submitting...
        </span>
    ) : (
        children
    )}
    </button>
);
};