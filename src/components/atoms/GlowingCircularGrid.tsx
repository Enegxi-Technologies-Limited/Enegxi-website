'use client';

import React from 'react';
import { motion } from 'framer-motion';

const rings = [
{ radius: 30, dots: 8 },
{ radius: 60, dots: 16 },
{ radius: 90, dots: 24 },
{ radius: 120, dots: 32 },
];

export const GlowingCircularGrid: React.FC = () => (
<motion.div
    initial={{ opacity: 0, y: 56 }}
    whileInView={{ opacity: 0.45, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
    className="pointer-events-none relative h-[clamp(220px,28vw,360px)] w-screen max-w-300 select-none"
    aria-hidden="true"
>
    <div className="absolute left-1/2 top-1/2 h-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
    <svg className="relative h-full w-full" viewBox="0 0 1200 360" preserveAspectRatio="none">
    <defs>
        <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
        </radialGradient>
    </defs>

    <rect
        x="594"
        y="249"
        width="12"
        height="12"
        rx="2"
        fill="url(#dotGlow)"
        className="animate-pulse"
        transform="rotate(45 600 255)"
    />

    {rings.map((ring, ringIdx) =>
        Array.from({ length: ring.dots }).map((_, dotIdx) => {
        const angle = (dotIdx / ring.dots) * 360;
        const radians = (angle * Math.PI) / 180;
        const horizontalRadius = (ring.radius / 120) * 560;
        const verticalRadius = (ring.radius / 120) * 155;
        const cx = Number((600 + horizontalRadius * Math.cos(radians)).toFixed(2));
        const cy = Number((255 + verticalRadius * Math.sin(radians)).toFixed(2));

        return (
            <rect
            key={`ring-${ringIdx}-dot-${dotIdx}`}
            x={cx - 3.5}
            y={cy - 3.5}
            width={7}
            height={7}
            rx={1.5}
            fill="#93C5FD"
            transform={`rotate(45 ${cx} ${cy})`}
            style={{
                opacity: 0.3 + ((dotIdx % 4) * 0.2),
                animation: `pulse 2.5s infinite ease-in-out ${(ringIdx * 0.4 + dotIdx * 0.1).toFixed(2)}s`,
            }}
            />
        );
        })
    )}
    </svg>
</motion.div>
);