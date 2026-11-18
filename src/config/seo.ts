import type { Metadata } from 'next';

// Use the exact version of the domain the live site ends up on (www or non-www)
export const SITE_URL = 'https://enegxi.com';
export const SITE_NAME = 'Enegxi Institute';
export const DEFAULT_OG_IMAGE = '/og-image.png';

/** Trim text to a search-friendly length without cutting a word in half. */
export function truncate(text: string, max = 158): string {
const clean = text.replace(/\s+/g, ' ').trim();
if (clean.length <= max) return clean;
return clean.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
}

interface PageSeoOptions {
/** Plain page title. The layout template adds "| Enegxi Institute". */
title: string;
description: string;
/** Path starting with "/", e.g. "/courses" */
path: string;
}

/**
 * Next.js replaces (not merges) openGraph and twitter from the parent layout,
 * so every page has to supply the full set. This keeps that in one place.
 */
export function buildPageMetadata({
title,
description,
path,
}: PageSeoOptions): Metadata {
const socialTitle = `${title} | ${SITE_NAME}`;
const image = {
    url: DEFAULT_OG_IMAGE,
    width: 1200,
    height: 630,
    alt: `${SITE_NAME} - Tech Career Training & IT Solutions`,
};

return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
    type: 'website',
    url: path,
    siteName: SITE_NAME,
    locale: 'en_NG',
    title: socialTitle,
    description,
    images: [image],
    },
    twitter: {
    card: 'summary_large_image',
    title: socialTitle,
    description,
    images: [image.url],
    },
};
}