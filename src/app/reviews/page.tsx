'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { ReviewCard } from '@/components/cards/ReviewCard';
import { Dropdown } from '@/components/atoms/Dropdown';
import { Review } from '@/types/review';
import { FaStar, FaUser, FaAward } from 'react-icons/fa6';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRating, setSelectedRating] = useState<number | 'all'>('all');

  useEffect(() => {
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
  }, []);

  const filteredReviews = useMemo(
    () => reviews.filter((review) => selectedRating === 'all' || review.rating === selectedRating),
    [reviews, selectedRating],
  );

  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8"
        >
          <div className="space-y-2 max-w-2xl">
            <Badge variant="outline" className="bg-blue-50 text-[#0528E1] border-blue-200 text-[10px] font-bold uppercase tracking-wider">
              STUDENT FEEDBACK &amp; REVIEWS
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B132B] tracking-tight">What Our Students Say</h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Real feedback submitted directly by our students and cohort participants.</p>
          </div>
          <Link href="/cohort">
            <Button className="px-6 py-3.5 bg-[#0528E1] text-white font-bold text-xs sm:text-sm rounded-5px shadow-lg">
              Apply for Upcoming Cohort <span aria-hidden="true">?</span>
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <div className="relative bg-white p-6 rounded-5px border border-slate-200/80 shadow-xs flex items-center justify-between gap-4">
            <div><span className="block text-2xl font-black text-[#0B132B]">4.9 / 5.0</span><span className="text-xs font-semibold text-slate-500">Average Rating</span></div>
            <FaStar className="text-amber-400" />
          </div>
          <div className="relative bg-white p-6 rounded-5px border border-slate-200/80 shadow-xs flex items-center justify-between gap-4">
            <div><span className="block text-2xl font-black text-[#0B132B]">50+</span><span className="text-xs font-semibold text-slate-500">Students Empowered</span></div>
            <FaUser className="text-[#0528E1]" />
          </div>
          <div className="relative bg-white p-6 rounded-5px border border-slate-200/80 shadow-xs flex items-center justify-between gap-4">
            <div><span className="block text-2xl font-black text-[#0B132B]">92%</span><span className="text-xs font-semibold text-slate-500">Career Growth Rate</span></div>
            <FaAward className="text-red-500" />
          </div>
        </motion.div>

        <div className="w-full max-w-sm">
          <Dropdown
            id="review-rating-filter"
            value={selectedRating === 'all' ? 'all' : String(selectedRating)}
            options={[
              { value: 'all', label: `All Ratings (${reviews.length})` },
              ...[5, 4, 3, 2, 1].map((rating) => ({ value: String(rating), label: `${rating} Stars ?` })),
            ]}
            onChange={(event) => {
              const value = event.target.value;
              setSelectedRating(value === 'all' ? 'all' : Number(value));
            }}
            className="rounded-5px border-slate-200 px-4 py-2.5 text-sm"
          />
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-5px p-6 border border-slate-200/80 shadow-xs space-y-4 animate-pulse">
                <div className="h-4 bg-slate-200 rounded-5px w-1/3" />
                <div className="h-16 bg-slate-100 rounded-5px w-full" />
                <div className="h-10 bg-slate-200 rounded-full w-full" />
              </div>
            ))}
          </div>
        )}

        {!isLoading && filteredReviews.length > 0 && (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredReviews.map((review, index) => <ReviewCard key={review.id} review={review} index={index} />)}
            </AnimatePresence>
          </motion.div>
        )}

        {!isLoading && filteredReviews.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 bg-white rounded-5px border border-slate-200/80 p-8 space-y-3">
            <h3 className="text-lg font-bold text-[#0B132B]">No reviews found</h3>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">No reviews have been submitted yet or matched the selected rating.</p>
            <Button onClick={() => setSelectedRating('all')} className="mt-2 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-5px shadow-md hover:bg-slate-800 transition-all">Reset Filter</Button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-[#0B132B] rounded-5px p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
        >
          <div className="space-y-2 max-w-xl text-center md:text-left z-10">
            <Badge variant="outline" className="bg-white/10 text-white border-white/20 text-[10px] font-bold">START YOUR JOURNEY</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to write your own success story?</h2>
            <p className="text-slate-300 text-xs sm:text-sm">Enroll in our upcoming cohort or talk to an admissions counselor today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto z-10">
            <Link href="/courses" className="w-full sm:w-auto"><Button className="w-full px-6 py-3.5 bg-[#0528E1] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm rounded-5px shadow-lg transition-all">Explore Courses</Button></Link>
            <Link href="/cohort" className="w-full sm:w-auto"><Button className="w-full px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-5px border border-white/20 transition-all">Apply for Cohort</Button></Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
