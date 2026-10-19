'use client';

import React from 'react';
import { ProjectImage } from '@/components/cards/ProjectImage';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import { Badge } from '@/components/atoms/Badge';
import { ArrowRight, User } from 'lucide-react';

interface ProjectCardProps {
project: Project;
index?: number;
onClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0, onClick }) => {
return (
    <motion.article
    role="button"
    tabIndex={0}
    aria-haspopup="dialog"
    aria-label={`View details for ${project.title}`}
    onClick={() => onClick(project)}
    onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onClick(project);
        }
    }}
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    className="w-full cursor-pointer text-left bg-white rounded-5px border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all flex flex-col justify-between overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
    >
    <div className="space-y-4">
        {/* Project Thumbnail */}
        <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
        <ProjectImage
            project={project}
            src={project.image}
            alt={project.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading={index < 3 ? 'eager' : 'lazy'}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 z-10">
            <Badge className="bg-blue-600 text-white border-none text-[11px] font-bold px-3 py-1 shadow-md">
            {project.track}
            </Badge>
        </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
        <h3 className="text-xl font-extrabold text-[#0B132B] group-hover:text-blue-600 transition-colors">
            {project.title}
        </h3>

        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.map((tech) => (
            <span
                key={tech}
                className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-[11px] font-semibold"
            >
                {tech}
            </span>
            ))}
        </div>
        </div>
    </div>

    {/* Card Footer */}
    <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 min-w-0">
        <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="text-xs font-semibold text-slate-700 truncate">
            {project.creators.join(', ')}
        </span>
        </div>

        <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white font-bold text-xs rounded-5px shadow-sm shrink-0">
        <span>View Details</span>
        <ArrowRight className="w-3.5 h-3.5" />
        </span>
    </div>
    </motion.article>
);
};