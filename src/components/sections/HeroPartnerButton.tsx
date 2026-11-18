'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Modal } from '../atoms/Modal';

// The form (react-hook-form + zod) only downloads when the modal is opened
const PartnerForm = dynamic(() =>
import('../forms/PartnerForm').then((module) => module.PartnerForm)
);

export function HeroPartnerButton() {
const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

return (
    <>
    {/* Triggers Partner Consultation Modal */}
    <button
        onClick={() => setIsPartnerModalOpen(true)}
        className="px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md hover:scale-105 active:scale-95 transition-all text-center"
    >
        WORK WITH US
    </button>

    {/* Partner Consultation Modal */}
    <Modal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
        title="Partner With Enegxi"
        eyebrow="Enterprise & Collaboration"
        variant="left-drawer"
    >
        <PartnerForm />
    </Modal>
    </>
);
}
