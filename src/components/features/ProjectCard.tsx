"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        category: string;
        tags?: string[];
        coverImage: string;
    };
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    return (
        <motion.div
            className="group relative w-full mb-6 break-inside-avoid cursor-pointer rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            onClick={onClick}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative w-full">
                <Image
                    src={project.coverImage}
                    alt={project.title}
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay - Always visible on mobile, hover on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">

                    <div className="transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2 block">
                            {project.category}
                        </span>

                        {/* Luxury Minimal Tags */}
                        {project.tags && (
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-[10px] uppercase tracking-wider text-white/90 border border-white/20 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="flex justify-between items-end">
                            <h3 className="text-white font-serif text-xl leading-tight max-w-[85%]">
                                {project.title}
                            </h3>
                            <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white shrink-0">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
