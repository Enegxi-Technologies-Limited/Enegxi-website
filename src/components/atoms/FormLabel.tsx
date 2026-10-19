import React from 'react';

interface FormLabelProps {
htmlFor: string;
children: React.ReactNode; 
required?: boolean;    
}

export const FormLabel: React.FC<FormLabelProps> = ({ htmlFor, children, required = false }) => {
return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-slate-dark mb-1.5">
    {children}
    {required && <span className="text-red-500 ml-1">*</span>}
    </label>
);
};