'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { partnerFormSchema, PartnerFormValues } from '@/utils/validationSchemas';
import { submitToGoogleForms } from '@/utils/submitToGoogleForms';
import { NameInput } from '../atoms/NameInput';
import { EmailInput } from '../atoms/EmailInput';
import { CategorySelect } from '../atoms/CategorySelect';
import { TextareaInput } from '../atoms/TextareaInput';
import { SubmitButton } from '../atoms/SubmitButton';
import { FormSuccessState } from './FormSuccessState';

export const PartnerForm: React.FC = () => {
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);

const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
} = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema),
});

const onSubmit = async (data: PartnerFormValues) => {
    setIsSubmitting(true);

    const success = await submitToGoogleForms('partner', {
    organizationName: data.companyName,
    contactName: data.contactName,
    email: data.workEmail,
    partnershipType: data.category,
    message: data.projectDetails,
    });

    setIsSubmitting(false);

    if (success) {
    setIsSuccess(true);
    reset();
    } else {
    alert('Failed to submit partnership request. Please try again.');
    }
};

if (isSuccess) {
    return (
    <FormSuccessState
        title="Partnership Request Received!"
        message="Thank you for your interest in partnering with us. Our corporate relations team will reach out shortly."
        onReset={() => setIsSuccess(false)}
    />
    );
}

return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 md:p-8 rounded-5px shadow-sm border border-gray-100">
    <div className="space-y-4">
        <NameInput
        id="companyName"
        label="Company / Organization Name"
        allowSpecialCharacters
        required
        error={errors.companyName?.message}
        {...register('companyName')}
        />
        <NameInput
        id="contactName"
        label="Contact Person Name"
        required
        error={errors.contactName?.message}
        {...register('contactName')}
        />
    
        <EmailInput
        id="workEmail"
        label="Work Email Address"
        required
        error={errors.workEmail?.message}
        {...register('workEmail')}
        />
        <CategorySelect
        id="category"
        label="Partnership Interest"
        required
        error={errors.category?.message}
        {...register('category')}
        />
    </div>
    <TextareaInput
        id="projectDetails"
        label="Project / Inquiry Details"
        placeholder="Describe how you would like to collaborate with us..."
        required
        error={errors.projectDetails?.message}
        {...register('projectDetails')}
    />

    <SubmitButton isLoading={isSubmitting}>
        Submit Partnership Inquiry
    </SubmitButton>
    </form>
);
};
