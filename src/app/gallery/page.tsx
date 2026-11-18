import type { Metadata } from 'next';
import { buildPageMetadata } from '@/config/seo';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = buildPageMetadata({
title: 'Institute Gallery and Student Life',
description:
    'See life at Enegxi Institute in Akure: hackathon builds, live cohort workshops and graduation celebrations.',
path: '/gallery',
});

export default function GalleryPage() {
return <GalleryClient />;
}