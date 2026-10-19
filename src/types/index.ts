// Re-export entity types from individual files
export * from './review';
export * from './gallery';

// 1. All valid form keys across the site
export type FormType =
| 'frontend'
| 'backend'
| 'fullstack'
| 'productManagement'
| 'mobile'
| 'web'
| 'partner'
| 'consultation';

export type CourseTypeKey = Exclude<FormType, 'partner' | 'consultation'>;

// 2. Google Form Configuration Types
export interface GoogleFormFieldMap {
title?: string;
slug?: string;
actionUrl: string;
fields: Record<string, string>;
}

export type FormsConfigMap = Record<FormType, GoogleFormFieldMap>;

// 3. Course Structure Types
export interface CourseModule {
title: string;
detail: string;
}

export interface Course {
id: string;
slug: string;
title: string;
category: string;
trackKey: CourseTypeKey;
description: string;
duration: string;
level: string;
mode: string;
schedule: string;
skills: string[];
prerequisites: string[];
outline: CourseModule[];
}

// 4. Form Submission Payload Interfaces
export interface ApplicationFormData {
fullName: string;
email: string;
phone: string;
experienceLevel?: string;
motive?: string;
[key: string]: unknown;
}

export interface PartnerFormData {
organizationName: string;
contactName: string;
email: string;
phone: string;
partnershipType: string;
message: string;
}

export interface ConsultationFormData {
fullName: string;
email: string;
phone: string;
preferredTrack: string;
preferredTime: string;
note?: string;
}