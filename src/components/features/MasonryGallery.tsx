"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import ProjectCard from './ProjectCard';

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    tags?: string[];
    coverImage: string;
    images: string[];
}

interface MasonryGalleryProps {
    projects: Project[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ projects }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activePage, setActivePage] = useState(0);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    // Chunk projects into pages of 15
    const pageSize = 15;
    const pages = [];
    for (let i = 0; i < projects.length; i += pageSize) {
        pages.push(projects.slice(i, i + pageSize));
    }

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const width = scrollContainerRef.current.offsetWidth;
            const page = Math.round(scrollLeft / width);
            setActivePage(page);
        }
    };

    const scrollToPage = (index: number) => {
        if (scrollContainerRef.current) {
            const width = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollTo({
                left: width * index,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-4">More Masterpieces</h2>
                    <p className="text-slate-500 font-light">Explore our collection of bespoke creations</p>
                </motion.div>

                {/* Mobile View: Vertical List (All Items) */}
                <div className="lg:hidden columns-1 md:columns-2 gap-6 space-y-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>

                {/* Desktop View: Horizontal Scroll Pagination */}
                <div className="hidden lg:block relative">

                    {/* Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-12"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {pages.map((pageProjects, pageIndex) => (
                            <div
                                key={pageIndex}
                                className="min-w-full snap-center px-4"
                            >
                                <div className="columns-3 gap-6 space-y-6">
                                    {pageProjects.map((project) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            onClick={() => setSelectedProject(project)}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    {pages.length > 1 && (
                        <div className="flex justify-center gap-3 mt-4">
                            {pages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToPage(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activePage === index
                                        ? 'bg-yellow-600 w-8'
                                        : 'bg-slate-200 hover:bg-slate-300'
                                        }`}
                                    aria-label={`Go to page ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}

                </div>

            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl overflow-y-auto"
                    >
                        <div className="min-h-screen relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="fixed top-6 right-6 z-50 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                            >
                                <X size={24} className="text-slate-800" />
                            </button>

                            <div className="container mx-auto px-4 py-20 max-w-5xl">
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-center mb-12"
                                >
                                    <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                                        {selectedProject.category}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6">
                                        {selectedProject.title}
                                    </h2>
                                    <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {selectedProject.images.map((img, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 + idx * 0.1 }}
                                            className={`relative rounded-lg overflow-hidden ${idx === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${selectedProject.title} ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MasonryGallery;
