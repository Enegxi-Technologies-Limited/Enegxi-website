'use client';

import React, { useState } from 'react';
import type { CourseTypeKey } from '@/types';
import { CohortApplicationDrawer } from '@/components/cohort/CohortApplicationDrawer';
import { CohortHeader } from '@/components/cohort/CohortHeader';
import { CohortTimeline } from '@/components/cohort/CohortTimeline';
import { CohortTracks } from '@/components/cohort/CohortTracks';
import { PartnershipSection } from '@/components/cohort/PartnershipSection';
import { CohortFaq } from '@/components/cohort/CohortFaq';
import { coursesData as courses } from '@/config/coursesData';

export default function CohortPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTrackKey, setSelectedTrackKey] = useState<CourseTypeKey | undefined>(undefined);

  const handleOpenDrawer = (trackKey?: CourseTypeKey) => {
    setSelectedTrackKey(trackKey);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pt-24 pb-20">
      {/* 1. Left Slide-Over Drawer */}
      <CohortApplicationDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        selectedTrackKey={selectedTrackKey}
      />

      {/* 2. Page Header & Key Metrics */}
      <CohortHeader onApplyClick={() => handleOpenDrawer()} />

      {/* 3. Admissions Timeline */}
      <CohortTimeline />

      {/* 4. Active Tracks Grid */}
      <CohortTracks
        courses={courses}
        onSelectTrack={(trackKey) => handleOpenDrawer(trackKey)}
      />

      {/* 5. Enterprise Partnership Section & Inquiry Form */}
      <PartnershipSection />

      {/* 6. FAQ Accordion */}
      <CohortFaq />
    </main>
  );
}