'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormLabel } from './FormLabel';
import { FormErrorMessage } from './FormErrorMessage';
import { cn } from '@/utils/cn';

export interface DropdownOption {
value: string;
label: string;
}

export interface DropdownChangeEvent {
target: { name?: string; value: string };
type?: string;
}

export interface DropdownProps {
label?: string;
error?: string;
required?: boolean;
placeholder?: string;
options: DropdownOption[];
value?: string;
onChange?: (e: DropdownChangeEvent) => void;
onBlur?: (e: DropdownChangeEvent) => void;
name?: string;
id?: string;
className?: string;
}

export const Dropdown = React.forwardRef<HTMLInputElement, DropdownProps>(
(
    {
    label,
    error,
    required,
    placeholder = 'Select an option...',
    options,
    value: propValue,
    onChange,
    onBlur,
    name,
    id,
    className,
    },
    ref
) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(propValue || '');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const elementId = id || name || 'dropdown-select';
    const currentValue = propValue !== undefined ? propValue : internalValue;
    const selectedOption = options.find((opt) => opt.value === currentValue);

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) {
            setIsOpen(false);
            if (onBlur) onBlur({ target: { name, value: currentValue }, type: 'blur' });
        }
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onBlur, currentValue, name]);

    const handleSelect = (optionValue: string) => {
    setInternalValue(optionValue);
    setIsOpen(false);

    if (onChange) {
        onChange({ target: { name, value: optionValue } });
    }
    if (onBlur) onBlur({ target: { name, value: optionValue }, type: 'blur' });
    };

    return (
    <div className="w-full" ref={dropdownRef}>
        {label && <FormLabel htmlFor={elementId} required={required}>{label}</FormLabel>}

        <input
        type="hidden"
        ref={ref}
        name={name}
        id={elementId}
        value={currentValue}
        />

        <div className="relative mt-1">
        <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={cn(
            'w-full flex items-center justify-between px-4 py-3 rounded-5px border bg-white text-left font-medium transition-all duration-200 outline-none',
            isOpen
                ? 'border-blue-600 ring-2 ring-blue-100 shadow-sm'
                : 'border-gray-200 hover:border-gray-300',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-100',
            className
            )}
            aria-expanded={isOpen}
        >
            <span className={cn('block truncate text-sm', !selectedOption ? 'text-gray-400 font-normal' : 'text-slate-900 font-semibold')}>
            {selectedOption ? selectedOption.label : placeholder}
            </span>

            <ChevronDown
            className={cn(
                'w-4 h-4 text-gray-500 transition-transform duration-200 shrink-0 ml-2',
                isOpen && 'rotate-180 text-blue-600'
            )}
            />
        </button>

        <AnimatePresence>
            {isOpen && (
            <motion.ul
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 4, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="absolute z-50 w-full max-h-60 overflow-auto bg-white border border-gray-100 rounded-5px shadow-xl p-1.5 focus:outline-none space-y-0.5"
            >
                {options.map((option) => {
                const isSelected = option.value === currentValue;

                return (
                    <li
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={cn(
                        'group flex items-center justify-between px-3.5 py-2.5 rounded-5px text-sm font-medium cursor-pointer transition-all duration-150',
                        isSelected
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-slate-700 hover:bg-blue-50/80 hover:text-blue-600'
                    )}
                    >
                    <span className="truncate">{option.label}</span>

                    <Check
                        className={cn(
                        'w-4 h-4 text-blue-600 shrink-0 ml-2 transition-opacity duration-150',
                        isSelected
                            ? 'opacity-100'
                            : 'opacity-0 group-hover:opacity-100'
                        )}
                    />
                    </li>
                );
                })}
            </motion.ul>
            )}
        </AnimatePresence>
        </div>

        <FormErrorMessage message={error} />
    </div>
    );
}
);

Dropdown.displayName = 'Dropdown';
