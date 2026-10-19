import { z } from 'zod';

const STRICT_EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_DIGITS_REGEX = /^\d{9,10}$/;
const NO_NUMBERS_REGEX = /^[\p{L}\s]+$/u;
const TEXTAREA_SAFE_REGEX = /^[a-zA-Z0-9\s.,!?\-_()'":;@#&/]*$/;

export const nameSchema = z
.string()
.min(2, 'Name must be at least 2 characters')
.regex(NO_NUMBERS_REGEX, 'Name can contain letters and spaces only');

export const emailSchema = z
.string()
.min(1, 'Email is required')
.regex(STRICT_EMAIL_REGEX, 'Please enter a valid email address (e.g. name@domain.com)');

export const phoneSchema = z
.string()
.regex(PHONE_DIGITS_REGEX, 'Phone number must be between 9 and 10 digits');

export const textareaSchema = z
.string()
.min(10, 'Please provide at least 10 characters')
.regex(TEXTAREA_SAFE_REGEX, 'Text contains unsupported special characters');

// 1. Consultation Form Schema
export const consultationFormSchema = z.object({
firstName: nameSchema,
lastName: nameSchema,
company: z.string().min(2, 'Company/Organization name is required'),
companyEmail: emailSchema,
phone: phoneSchema,
category: z.string().min(1, 'Please select how we can help you'),
message: textareaSchema,
});

// 2. Course Application Form Schema (Shared by all 6 courses)
export const courseFormSchema = z.object({
fullName: nameSchema,
email: emailSchema,
phone: phoneSchema,
experienceLevel: z.string().min(1, 'Please select your experience level'),
motivation: textareaSchema,
});

// 3. Partner Inquiry Form Schema
export const partnerFormSchema = z.object({
companyName: z.string().min(2, 'Company name is required'),
contactName: nameSchema,
workEmail: emailSchema,
category: z.string().min(1, 'Please select a partnership category'),
projectDetails: textareaSchema,
});

// Export TypeScript Types derived automatically from Zod
export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;
export type CourseFormValues = z.infer<typeof courseFormSchema>;
export type PartnerFormValues = z.infer<typeof partnerFormSchema>;
