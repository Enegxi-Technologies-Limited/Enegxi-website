import type { Metadata } from 'next';
import { PageTransition } from '@/components/atoms/PageTransition';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatBar } from '@/components/sections/StatBar';
import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';
import { HomeCoursesSection } from '@/components/sections/HomeCoursesSection';
import { PartnerConsultationSection } from '@/components/sections/PartnerConsultationSection';
import { PhotoStack } from '@/components/sections/PhotoStack';
import { ReviewSection } from '@/components/sections/ReviewSection';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <StatBar />
      <WhatWeDoSection />
      <HomeCoursesSection />
      <PartnerConsultationSection />
      <PhotoStack />
      <ReviewSection />
    </PageTransition>
  );
}
