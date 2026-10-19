'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatBar } from '@/components/sections/StatBar';
import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';
import { HomeCoursesSection } from '@/components/sections/HomeCoursesSection';
import { PartnerConsultationSection } from '@/components/sections/PartnerConsultationSection';
import { ReviewSection } from '@/components/sections/ReviewSection';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full min-w-0"
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Stat Bar */}
      <StatBar />

      {/* What We Do Section */}
      <WhatWeDoSection />

      {/* Home Courses Section */}
      <HomeCoursesSection />

      {/* Partner Consultation Section */}
      <PartnerConsultationSection />

      {/* Student Reviews Marquee Section */}
      <ReviewSection />
    </motion.div>
  );
}