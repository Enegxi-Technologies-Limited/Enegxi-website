'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Modal } from '@/components/atoms/Modal';
import type { Project } from '@/types/project';
import { ProjectImage } from '@/components/cards/ProjectImage';
import { projectsData } from '@/config/projectsData';
import {  ExternalLink, Users } from 'lucide-react';

export default function ProjectsPage() {
const [selectedProject, setSelectedProject] = useState<Project | null>(null);
const [projects, setProjects] = useState<Project[]>([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    let cancelled = false;

    async function loadProjects() {
    try {
        const response = await fetch('/api/projects', { cache: 'no-store' });
        if (!response.ok) throw new Error(`Projects request failed (${response.status})`);
        const sheetProjects: Project[] = await response.json();
        if (!cancelled) setProjects(sheetProjects);
    } catch (error) {
        console.error('Could not load projects from Google Sheets; using local project data.', error);
        if (!cancelled) setProjects(projectsData);
    } finally {
        if (!cancelled) setIsLoading(false);
    }
    }

    void loadProjects();
    return () => { cancelled = true; };
}, []);

return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Section */}
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8"
        >
        <div className="space-y-2 max-w-2xl">
            <Badge
            variant="outline"
            className="bg-blue-50 text-blue-600 border-blue-200 text-[10px] font-bold uppercase tracking-wider"
            >
            STUDENT SHOWCASE & PORTFOLIO
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B132B] tracking-tight">
            Projects Built By Our Talent
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore real-world applications engineered by Enegxi Institute students during their training cohorts.
            </p>
        </div>

        </motion.div>

        {/* Projects Grid */}
        {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Loading projects">
            {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-80 animate-pulse rounded-5px border border-slate-200 bg-white" />
            ))}
        </div>
        ) : projects.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
            {projects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} onClick={setSelectedProject} />
            ))}
            </AnimatePresence>
        </motion.div>
        ) : (
        <p className="rounded-5px border border-slate-200 bg-white p-8 text-center text-slate-600">No projects have been published yet.</p>
        )}

        <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        maxWidth="4xl"
        >
        {selectedProject && (
            <div className="space-y-8">
            {/* Larger screenshot gallery */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {(selectedProject.screenshots?.length
                ? selectedProject.screenshots
                : [selectedProject.image]
                ).map((screenshot, index) => (
                <div
                    key={`${screenshot}-${index}`}
                    className="relative aspect-video overflow-hidden rounded-5px bg-slate-100"
                >
                    <ProjectImage
                    project={selectedProject}
                    src={screenshot}
                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 45vw, 640px"
                    className="object-cover"
                    />
                </div>
                ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-5">
                <div className="space-y-7 lg:col-span-3">
                <section className="space-y-2">
                    <h3 className="text-lg font-bold text-[#0B132B]">About the project</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{selectedProject.description}</p>
                </section>
                <section className="space-y-2">
                    <h3 className="text-lg font-bold text-[#0B132B]">Problem it addresses</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{selectedProject.problemStatement}</p>
                </section>
                <section className="space-y-3">
                    <h3 className="text-lg font-bold text-[#0B132B]">Tech stack</h3>
                    <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((technology) => (
                        <span key={technology} className="rounded-5px bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                        {technology}
                        </span>
                    ))}
                    </div>
                </section>
                </div>

                <aside className="space-y-5 lg:col-span-2">
                <section className="rounded-5px border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-3 flex items-center gap-2 text-[#0B132B]">
                    <Users className="h-5 w-5 text-blue-600" />
                    <h3 className="font-bold">Student team</h3>
                    </div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Collaborative project team</p>
                    <ul className="space-y-2">
                    {selectedProject.creators.map((creator) => (
                        <li key={creator} className="text-sm font-medium text-slate-800">{creator}</li>
                    ))}
                    </ul>
                </section>
                <section className="space-y-3">
                    <h3 className="text-lg font-bold text-[#0B132B]">Team contributions</h3>
                    <ul className="space-y-2">
                    {selectedProject.teamContributions.map((contribution) => (
                        <li key={contribution} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        <span>{contribution}</span>
                        </li>
                    ))}
                    </ul>
                </section>
                </aside>
            </div>

            <a
                href={selectedProject.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-5px bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700 sm:w-auto"
            >
                View Live Demo
                <ExternalLink className="h-4 w-4" />
            </a>
            </div>
        )}
        </Modal>

        {/* Bottom CTA Banner */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#0B132B] rounded-5px p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
        >
        <div className="space-y-2 max-w-xl text-center md:text-left z-10">
            <Badge
            variant="outline"
            className="bg-white/10 text-white border-white/20 text-[10px] font-bold"
            >
            BUILD REAL PROJECTS
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to build portfolio-worthy applications?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
            Join our hands-on training cohorts and build live applications guided by industry experts.
            </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto z-10">
            <Link href="/courses" className="w-full sm:w-auto">
            <Button className="w-full px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-5px shadow-md transition-all">
                Explore Courses
            </Button>
            </Link>
            <Link href="/cohort" className="w-full sm:w-auto">
            <Button className="w-full px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-5px border border-white/20 transition-all">
                Apply for Cohort
            </Button>
            </Link>
        </div>
        </motion.div>

    </div>
    </main>
);
}