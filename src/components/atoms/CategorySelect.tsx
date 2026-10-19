import React from 'react';
import { Dropdown, DropdownOption, DropdownChangeEvent } from './Dropdown';

interface CategorySelectProps {
label?: string;
error?: string;
required?: boolean;
options?: DropdownOption[];
value?: string;
onChange?: (e: DropdownChangeEvent) => void;
onBlur?: (e: DropdownChangeEvent) => void;
name?: string;
id?: string;
className?: string;
}

const DEFAULT_CATEGORIES: DropdownOption[] = [
{ value: 'Hire Graduates', label: 'Hire Graduates' },
{ value: 'Corporate Training', label: 'Corporate Training' },
{ value: 'Workspace Partnership', label: 'Workspace Partnership' },
{ value: 'General Inquiry', label: 'General Inquiry' },
];

export const CategorySelect = React.forwardRef<HTMLInputElement, CategorySelectProps>(
(
    {
    label = 'How Can We Help You?',
    options = DEFAULT_CATEGORIES,
    id = 'category',
    ...props
    },
    ref
) => {
    return (
    <Dropdown
        ref={ref}
        id={id}
        label={label}
        placeholder="Select an option..."
        options={options}
        {...props}
    />
    );
}
);

CategorySelect.displayName = 'CategorySelect';
