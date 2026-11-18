'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { ReviewCard } from '@/components/cards/ReviewCard';
import { Review } from '@/types/review';
import { FiArrowRight as ArrowIcon } from 'react-icons/fi';

const EMPTY_REVIEWS: Review[] = [];

interface ReviewSectionProps {
  initialReviews?: Review[];
}

interface SpotlightCardProps {
  review: Review;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ review }) => {
  return (
    <div
      className="w-77.5 shrink-0 py-4 sm:w-95"
    >
      <ReviewCard review={review} />
    </div>
  );
};

export const ReviewSection: React.FC<ReviewSectionProps> = ({ initialReviews = EMPTY_REVIEWS }) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isLoading, setIsLoading] = useState(initialReviews.length === 0);

  useEffect(() => {
    if (initialReviews.length > 0) return;

    let cancelled = false;
    async function loadReviews() {
      setIsLoading(true);
      try {
        const response = await fetch('/api/reviews', { cache: 'no-store' });
        if (!response.ok) throw new Error(`Reviews request failed (${response.status})`);
        const sheetData: Review[] = await response.json();
        if (!cancelled) setReviews(sheetData);
      } catch (error) {
        if (!cancelled) {
          console.error('Error loading reviews:', error);
          setReviews([]);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    void loadReviews();
    return () => { cancelled = true; };
  }, [initialReviews]);

  if (isLoading) {
    return (
      <section className="py-20 bg-slate-50/50 border-y border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="h-6 w-32 bg-slate-200 rounded-5px animate-pulse" />
          <div className="h-10 w-64 bg-slate-200 rounded-5px animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-44 bg-white rounded-5px border border-slate-200 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) return null;

  // Keep the homepage carousel lightweight even when the sheet contains many reviews.
  const baseList = reviews.slice(0, 8);
  const marqueeItems = [...baseList, ...baseList];

  return (
    <section className="py-20 bg-slate-50/50 border-y border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-2xl">
            <Badge variant="outline" className="bg-blue-50 text-[#0528E1] border-blue-200 text-[10px] font-bold uppercase tracking-wider">
              STUDENT FEEDBACK
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B132B] tracking-tight">What Our Students Say</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Real stories and experiences from learners who transformed their tech careers with Enegxi Institute.
            </p>
          </div>
          <Link href="/reviews">
            <Button className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#0528E1] bg-white border border-blue-200 rounded-5px shadow-xs hover:bg-blue-50 transition-all group">
              <span>View All Reviews</span>
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden py-6 cursor-grab active:cursor-grabbing"
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
        <div className="review-marquee flex w-max items-center gap-6">
          {marqueeItems.map((review, index) => (
            <SpotlightCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};
