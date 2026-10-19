export type GalleryCategoryKey = 'cohort-sessions' | 'hackathons' | 'workshops' | 'graduation';

export interface GalleryItem {
id: string;
title: string;
category: GalleryCategoryKey;
imageUrl: string;
}

export interface GalleryCategorySection {
key: GalleryCategoryKey;
title: string;
subtitle: string;
pattern: 'pattern-a' | 'pattern-b';
items: GalleryItem[];
}