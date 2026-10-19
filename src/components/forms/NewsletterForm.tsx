'use client';

import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

export const NewsletterForm: React.FC = () => {
const [email, setEmail] = useState('');
const [loading, setLoading] = useState(false);
const [subscribed, setSubscribed] = useState(false);
const [error, setError] = useState('');

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
    setError('Please enter a valid email address');
    return;
    }

    setError('');
    setLoading(true);

    // Simulate quick subscription
    setTimeout(() => {
    setLoading(false);
    setSubscribed(true);
    setEmail('');
    }, 800);
};

if (subscribed) {
    return (
    <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium py-2">
        <CheckCircle2 className="w-5 h-5" />
        <span>Thank you for subscribing to our newsletter!</span>
    </div>
    );
}

return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
    <div className="relative flex items-center">
        <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value.replace(/\s/g, ''))}
        placeholder="Enter your email address..."
        className="w-full px-4 py-3 pr-12 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:border-electric text-sm"
        />
        <button
        type="submit"
        disabled={loading}
        aria-label="Subscribe to newsletter"
        className="absolute right-1.5 p-2 bg-electric text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        </button>
    </div>
    {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </form>
);
};