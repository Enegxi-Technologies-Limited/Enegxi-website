'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { consultationFormSchema, ConsultationFormValues } from '@/utils/validationSchemas';
import { submitToGoogleForms } from '@/utils/submitToGoogleForms';
import { NameInput } from '../atoms/NameInput';
import { EmailInput } from '../atoms/EmailInput';
import { PhoneInput } from '../atoms/PhoneInput';
import { ConsultationDropdown } from '../atoms/ConsultationDropdown';
import { TextareaInput } from '../atoms/TextareaInput';
import { SubmitButton } from '../atoms/SubmitButton';
import { FormSuccessState } from './FormSuccessState';

export const ConsultationForm: React.FC = () => {
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);

// Hook up React Hook Form with Zod validation resolver
const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
} = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema),
});

const onSubmit = async (data: ConsultationFormValues) => {
    setIsSubmitting(true);
    
    // Convert form payload to standard record for Google Forms submitter
    const success = await submitToGoogleForms('consultation', {
    fullName: `${data.firstName} ${data.lastName}`,
    email: data.companyEmail,
    phone: data.phone,
    preferredTrack: data.category,
    note: `Company: ${data.company}. ${data.message}`,
    });

    setIsSubmitting(false);

    if (success) {
    setIsSuccess(true);
    reset();
    } else {
    alert('Failed to submit consultation request. Please try again.');
    }
};

if (isSuccess) {
    return <FormSuccessState onReset={() => setIsSuccess(false)} />;
}

return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <NameInput
        id="firstName"
        label="First Name"
        required
        error={errors.firstName?.message}
        {...register('firstName')}
        />
        <NameInput
        id="lastName"
        label="Last Name"
        required
        error={errors.lastName?.message}
        {...register('lastName')}
        />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <NameInput
        id="company"
        label="Company / Organization"
        required
        allowSpecialCharacters
        error={errors.company?.message}
        {...register('company')}
        />
        <EmailInput
        id="companyEmail"
        label="Company Email"
        required
        error={errors.companyEmail?.message}
        {...register('companyEmail')}
        />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <PhoneInput
        id="phone"
        label="Phone Number"
        required
        error={errors.phone?.message}
        {...register('phone')}
        />
        <ConsultationDropdown
        id="category"
        label="How Can We Help You?"
        required
        error={errors.category?.message}
        {...register('category')}
        />
    </div>

    <TextareaInput
        id="message"
        label="Message / Details"
        placeholder="Tell us about your project or inquiry..."
        required
        error={errors.message?.message}
        {...register('message')}
    />

    <SubmitButton isLoading={isSubmitting}>
        Schedule Free Consultation
    </SubmitButton>
    </form>
);
};
