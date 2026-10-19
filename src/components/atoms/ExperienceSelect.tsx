import React from 'react';
import { Dropdown, DropdownOption, DropdownChangeEvent } from './Dropdown';

interface ExperienceSelectProps {
label?: string;
error?: string;
required?: boolean;
value?: string;
onChange?: (e: DropdownChangeEvent) => void;
onBlur?: (e: DropdownChangeEvent) => void;
name?: string;
id?: string;
className?: string;
}

const EXPERIENCE_LEVELS: DropdownOption[] = [
{ value: 'Beginner', label: 'Beginner (No prior coding experience)' },
{ value: 'Intermediate', label: 'Intermediate (Built basic projects)' },
{ value: 'Advanced', label: 'Advanced (Looking to polish & master skills)' },
];

export const ExperienceSelect = React.forwardRef<HTMLInputElement, ExperienceSelectProps>(
(
    {
    label = 'Experience Level',
    id = 'experienceLevel',
    ...props
    },
    ref
) => {
    return (
    <Dropdown
        ref={ref}
        id={id}
        label={label}
        placeholder="Select your experience level..."
        options={EXPERIENCE_LEVELS}
        {...props}
    />
    );
}
);

ExperienceSelect.displayName = 'ExperienceSelect';
