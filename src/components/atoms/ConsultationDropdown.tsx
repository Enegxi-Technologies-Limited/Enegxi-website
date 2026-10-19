import React from 'react';
import { Dropdown, type DropdownChangeEvent, type DropdownOption } from './Dropdown';

interface ConsultationDropdownProps {
  label?: string;
  error?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: DropdownChangeEvent) => void;
  onBlur?: (event: DropdownChangeEvent) => void;
  name?: string;
  id?: string;
  className?: string;
}

const CONSULTATION_OPTIONS: DropdownOption[] = [
  { value: 'Training and Development', label: 'Training and Development' },
  { value: 'Product Development (MVP)', label: 'Product Development (MVP)' },
  { value: 'Managed Services', label: 'Managed Services' },
  { value: 'IT Consulting & Advisory', label: 'IT Consulting & Advisory' },
  { value: 'Cyber Security', label: 'Cyber Security' },
  { value: 'Web Development', label: 'Web Development' },
  { value: 'Mobile Development', label: 'Mobile Development' },
  { value: 'Cloud Services', label: 'Cloud Services' },
  { value: 'Other', label: 'Other' },
];

export const ConsultationDropdown = React.forwardRef<HTMLInputElement, ConsultationDropdownProps>(
  ({ label = 'How Can We Help You?', id = 'category', ...props }, ref) => (
    <Dropdown
      ref={ref}
      id={id}
      label={label}
      placeholder="Select Option"
      options={CONSULTATION_OPTIONS}
      {...props}
    />
  )
);

ConsultationDropdown.displayName = 'ConsultationDropdown';