import { FormType } from '@/types';

export async function submitToGoogleForms(
formType: FormType,
data: Record<string, string>
): Promise<boolean> {
try {
    const response = await fetch('/api/forms', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ formType, data }),
    });
    if (!response.ok) return false;

    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
} catch (error) {
    console.error('Failed to submit form:', error);
    return false;
}
}
