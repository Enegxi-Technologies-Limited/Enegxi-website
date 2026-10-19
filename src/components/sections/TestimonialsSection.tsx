import React from 'react';
import { ReviewCard } from '@/components/cards/ReviewCard';
import { getReviewsFromSheet } from '@/utils/getReviewsFromSheet';

export async function TestimonialsSection() {
const liveReviews = await getReviewsFromSheet();

// Return nothing if there are no reviews in the sheet
if (!liveReviews || liveReviews.length === 0) {
    return null;
}

// Take the last 4 reviews from the sheet and reverse them so the latest appears first
const displayReviews = liveReviews.slice(-4).reverse();

return (
    <section className="py-20 bg-slate-50/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-dark tracking-tight mb-4">
            What Our Alumni Say
        </h2>
        <p className="text-gray-600 text-base">
            Real stories and experiences from students who transformed their careers with Enegxi Institute.
        </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
        ))}
        </div>
    </div>
    </section>
);
}