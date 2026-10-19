'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { Project } from '@/types/project';
import { projectsData } from '@/config/projectsData';

interface ProjectImageProps {
  project: Project;
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  project,
  src,
  alt,
  sizes,
  className,
  loading = 'lazy',
}) => {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const localProject = projectsData.find((item) =>
    item.id === project.id ||
    item.title.toLowerCase() === project.title.toLowerCase() ||
    item.title.toLowerCase().includes(project.title.toLowerCase()) ||
    project.title.toLowerCase().includes(item.title.toLowerCase()),
  );
  const fallbackSrc = localProject?.image ?? '/images/projects/project-placeholder.svg';
  const imageSrc = failedSource === src ? fallbackSrc : src;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes={sizes}
      loading={loading}
      unoptimized={imageSrc.startsWith('https://drive.google.com/')}
      className={className}
      onError={() => {
        if (imageSrc !== fallbackSrc) setFailedSource(src);
      }}
    />
  );
};
