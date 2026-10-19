import { NextResponse } from 'next/server';
import { getProjectsFromSheet } from '@/utils/getProjectsFromSheet';

export async function GET() {
  try {
    return NextResponse.json(await getProjectsFromSheet());
  } catch (error) {
    console.error('Error fetching projects from Google Sheet:', error);
    return NextResponse.json({ error: 'Could not load projects.' }, { status: 502 });
  }
}
