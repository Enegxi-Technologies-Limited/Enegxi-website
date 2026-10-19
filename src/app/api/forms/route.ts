import { NextResponse } from 'next/server';
import { FORMS_CONFIG } from '@/config/formsConfig';
import { FormType } from '@/types';

export async function POST(request: Request) {
  let body: { formType?: string; data?: Record<string, unknown> };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const { formType, data } = body;
  if (
    !formType ||
    !Object.prototype.hasOwnProperty.call(FORMS_CONFIG, formType) ||
    !data ||
    typeof data !== 'object' ||
    Array.isArray(data)
  ) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const config = FORMS_CONFIG[formType as FormType];
  const formData = new URLSearchParams();

  for (const [field, entryId] of Object.entries(config.fields)) {
    const value = data[field];
    if (typeof value === 'string' && value.trim()) {
      formData.set(entryId, value);
    }
  }

  if (formData.size === 0) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  try {
    const googleResponse = await fetch(config.actionUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
      cache: 'no-store',
    });

    const responseText = await googleResponse.text();
    const responseConfirmsSubmission =
      /your response has been (recorded|submitted)/i.test(responseText);

    if (!googleResponse.ok || !responseConfirmsSubmission) {
      return NextResponse.json({ success: false }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 502 });
  }
}
