'use client';

import React, { useState } from 'react';
import type { CourseTypeKey } from '@/types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { courseFormSchema, CourseFormValues } from '@/utils/validationSchemas';
import { submitToGoogleForms } from '@/utils/submitToGoogleForms';
import { FORMS_CONFIG } from '@/config/formsConfig';
import { NameInput } from '../atoms/NameInput';
import { EmailInput } from '../atoms/EmailInput';
import { PhoneInput } from '../atoms/PhoneInput';
import { ExperienceSelect } from '../atoms/ExperienceSelect';
import { TextareaInput } from '../atoms/TextareaInput';
import { SubmitButton } from '../atoms/SubmitButton';
import { FormSuccessState } from './FormSuccessState';

interface CourseApplicationFormProps {
courseType?: CourseTypeKey;
onSuccess?: () => void;
}

export const CourseApplicationForm: React.FC<CourseApplicationFormProps> = ({
courseType = 'frontend',
onSuccess,
}) => {
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);

const courseConfig = FORMS_CONFIG[courseType] || FORMS_CONFIG.frontend;

const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
} = useForm<CourseFormValues>({
    resolver: zodResolver(courseFormSchema),
});

const onSubmit = async (data: CourseFormValues) => {
    setIsSubmitting(true);

    const success = await submitToGoogleForms(courseType, {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    experienceLevel: data.experienceLevel,
    motive: data.motivation,
    });

    setIsSubmitting(false);

    if (success) {
    setIsSuccess(true);
    reset();
    if (onSuccess) {
        onSuccess();
    }
    } else {
    alert('Failed to submit application. Please try again.');
    }
};

if (isSuccess) {
    return (
    <FormSuccessState
        title={`Application Submitted for ${courseConfig.title}!`}
        message="Our admissions team will review your application and contact you via email shortly."
        onReset={() => setIsSuccess(false)}
    />
    );
}

return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 md:p-8 rounded-5px shadow-sm border border-gray-100">
    <h3 className="text-xl font-bold text-slate-dark mb-2">Apply for {courseConfig.title}</h3>

    <NameInput
        id="fullName"
        label="Full Name"
        placeholder="Jane Doe"
        required
        error={errors.fullName?.message}
        {...register('fullName')}
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <EmailInput
        id="email"
        label="Email Address"
        required
        error={errors.email?.message}
        {...register('email')}
        />
        <PhoneInput
        id="phone"
        label="Phone Number"
        required
        error={errors.phone?.message}
        {...register('phone')}
        />
    </div>

    <ExperienceSelect
        id="experienceLevel"
        label="Current Experience Level"
        required
        error={errors.experienceLevel?.message}
        {...register('experienceLevel')}
    />

    <TextareaInput
        id="motivation"
        label="Why do you want to join this program?"
        placeholder="Tell us about your career goals and what you hope to achieve..."
        required
        error={errors.motivation?.message}
        {...register('motivation')}
    />

    <SubmitButton isLoading={isSubmitting}>
        Submit Application
    </SubmitButton>
    </form>
);
};
