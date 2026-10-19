'use client';

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../atoms/Button';

interface FormSuccessStateProps {
title?: string;
message?: string;
onReset?: () => void;
}

export const FormSuccessState: React.FC<FormSuccessStateProps> = ({
title = 'Submission Received!',
message = 'Thank you for reaching out. Our team will get back to you within 24 hours.',
onReset,
}) => {
useEffect(() => {
    // Trigger celebratory confetti burst on mount
    confetti({
    particleCount: 70,
    spread: 60,
    origin: { y: 0.7 },
    colors: ['#0022FF', '#DDE5FE', '#111827'],
    });
}, []);

return (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-xl">
    <div className="w-16 h-16 bg-blue-50 text-electric rounded-full flex items-center justify-center mb-4">
        <CheckCircle2 className="w-10 h-10" />
    </div>
    <h3 className="text-2xl font-bold text-slate-dark mb-2">{title}</h3>
    <p className="text-gray-600 max-w-md mb-6">{message}</p>
    {onReset && (
        <Button variant="outline" onClick={onReset}>
        Submit Another Request
        </Button>
    )}
    </div>
);
};