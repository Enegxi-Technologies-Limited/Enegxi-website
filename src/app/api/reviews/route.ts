import { NextResponse } from 'next/server';
import { getReviewsFromSheet } from '@/utils/getReviewsFromSheet';

export async function GET() {
  const reviews = await getReviewsFromSheet();
  return NextResponse.json(reviews);
}
