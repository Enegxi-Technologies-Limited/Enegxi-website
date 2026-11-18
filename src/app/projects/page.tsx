import type { Metadata } from 'next';
import { buildPageMetadata } from '@/config/seo';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = buildPageMetadata({
title: 'Student Projects and Portfolio',
description:
    'Explore real-world applications built by Enegxi Institute students during their training cohorts, with live demos, tech stacks and team contributions.',
path: '/projects',
});

export default function ProjectsPage() {
return <ProjectsClient />;
}