'use client';

import React from 'react';
import { ModalWrapper } from '../motion/ModalWrapper';

interface ModalProps {
isOpen: boolean;
onClose: () => void;
title?: string;
eyebrow?: string;
maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
variant?: 'modal' | 'left-drawer';
children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, eyebrow, maxWidth, variant, children }) => {
return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title={title} eyebrow={eyebrow} maxWidth={maxWidth} variant={variant}>
    {children}
    </ModalWrapper>
);
};
