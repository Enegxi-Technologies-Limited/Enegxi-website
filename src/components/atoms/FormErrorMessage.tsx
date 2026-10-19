import React from 'react';

interface FormErrorMessageProps {
message?: string;
}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ message }) => {
if (!message) return null;

return (
    <p className="mt-1 text-xs text-red-500 font-medium animate-fadeIn">
    {message}
    </p>
);
};