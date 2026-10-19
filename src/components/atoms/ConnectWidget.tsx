'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ChevronDown } from 'lucide-react';
import {
FaWhatsapp,
FaPhone,
FaEnvelope,
FaLocationDot,
FaInstagram,
} from 'react-icons/fa6';
import { EMAIL_HREF, SOCIAL_LINKS } from './socialLinks';

export const ConnectWidget: React.FC = () => {
const [isOpen, setIsOpen] = useState(false);

// Dynamic Google Maps URL for Enegxi Institute address
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    '4, Penial Plaza, Ita Oniyan, Oyemekun Rd, Akure 340212, Ondo'
)}`;

const contactOptions = [
    {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: SOCIAL_LINKS.whatsapp,
    bgColor: 'bg-[#25D366]',
    icon: <FaWhatsapp className="w-5 h-5 text-white" />,
    },
    {
    id: 'phone',
    label: 'Call Us',
    href: SOCIAL_LINKS.phone,
    bgColor: 'bg-[#00E676]',
    icon: <FaPhone className="w-4 h-4 text-white" />,
    },
    {
    id: 'email',
    label: 'Email Us',
    href: EMAIL_HREF,
    bgColor: 'bg-[#FF4D4D]',
    icon: <FaEnvelope className="w-4 h-4 text-white" />,
    },
    {
    id: 'location',
    label: 'Location',
    href: googleMapsUrl,
    bgColor: 'bg-[#34A853]',
    icon: <FaLocationDot className="w-4 h-4 text-white" />,
    },
    {
    id: 'instagram',
    label: 'Instagram',
    href: SOCIAL_LINKS.instagram,
    bgColor: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
    icon: <FaInstagram className="w-5 h-5 text-white" />,
    },
];

return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    {/* Pop-up Dialog */}
    <AnimatePresence>
        {isOpen && (
        <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mb-4 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        >
            {/* Modal Header */}
            <div className="bg-[#A482D2] px-5 py-3.5 text-white flex items-center justify-between">
            <span className="text-lg font-bold tracking-wide">Welcome!</span>
            <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close connect widget"
                className="rounded-md p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
                <ChevronDown className="h-5 w-5" />
            </button>
            </div>

            {/* Modal Body */}
            <div className="p-5">
            <p className="text-slate-600 text-sm font-medium mb-4">
                How can we help you? :-)
            </p>

            {/* Action Circle Icons */}
            <div className="flex items-center gap-3">
                {contactOptions.map((item) => (
                <a
                    key={item.id}
                    href={item.href}
                    target={item.id === 'email' || item.id === 'phone' ? undefined : '_blank'}
                    rel={item.id === 'email' || item.id === 'phone' ? undefined : 'noopener noreferrer'}
                    aria-label={item.label}
                    className={`w-10 h-10 rounded-full ${item.bgColor} flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-transform duration-200`}
                >
                    {item.icon}
                </a>
                ))}
            </div>
            </div>
        </motion.div>
        )}
    </AnimatePresence>

    {/* Floating Circular Trigger with Hover Tooltip */}
    <div className="relative flex items-center group">
        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-slate-800 text-xs font-semibold rounded-lg shadow-lg border border-gray-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none select-none">
        {isOpen ? 'Hide' : 'Connect with Us'}
        </span>

        {/* Circular Action Button */}
        <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close connect widget' : 'Open connect widget'}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#A482D2] hover:bg-[#936fc4] text-white flex items-center justify-center shadow-2xl transition-all hover:scale-105 active:scale-95 focus:outline-none"
        >
        {/* Animated Spinning Icon */}
        <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex items-center justify-center"
        >
            {isOpen ? (
            <X className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2.5]" />
            ) : (
            <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white" />
            )}
        </motion.div>
        </button>
    </div>
    </div>
);
};
