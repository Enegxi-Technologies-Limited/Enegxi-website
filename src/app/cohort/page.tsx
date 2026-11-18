import type { Metadata } from 'next';
import { buildPageMetadata } from '@/config/seo';
import CohortClient from './CohortClient';

export const metadata: Metadata = buildPageMetadata({
  title: 'Apply for the Next Cohort',
  description:
    'Apply for the next Enegxi Institute cohort in Akure. Choose a frontend, backend, full stack, mobile, product or web design track and learn through hands-on projects.',
  path: '/cohort',
});

export default function CohortPage() {
  return <CohortClient />;
}