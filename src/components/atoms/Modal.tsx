'use client';

import React from 'react';
import { ModalWrapper } from '../motion/ModalWrapper';

interface ModalProps {
isOpen: boolean;
onClose: () => void;
title?: string;
maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, maxWidth, children }) => {
return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title={title} maxWidth={maxWidth}>
    {children}
    </ModalWrapper>
);
};