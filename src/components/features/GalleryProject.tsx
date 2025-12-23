"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

interface GalleryProjectProps {
    title: string;
    description: string;
    emotionalTag?: string; // e.g., "Pure Joy", "Timeless"
    images: string[];
    align?: 'left' | 'right';
}

const GalleryProject: React.FC<GalleryProjectProps> = ({
    title,
    description,
    emotionalTag,
    images,
    align = 'left'
}) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className={`flex flex-col ${align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 py-20 items-start`}>

            {/* Text Content - Sticky on Desktop */}
            <div className="w-full lg:w-1/3 lg:sticky lg:top-32 self-start">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {emotionalTag && (
                        <span className="inline-block text-xs font-bold tracking-[0.2em] text-yellow-600 uppercase mb-4 border-b border-yellow-200 pb-1">
                            {emotionalTag}
                        </span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-6 leading-tight">
                        {title}
                    </h2>
                    <p className="text-slate-600 font-light leading-relaxed text-lg mb-8">
                        {description}
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-transparent rounded-full" />
                </motion.div>
            </div>

            {/* Image Grid */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {images.map((src, index) => {
                    // Create a varied grid layout
                    const isLarge = index === 0 || index === 3;

                    return (
                        <motion.div
                            key={index}
                            className={`relative group cursor-zoom-in overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 ${isLarge ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/5]'}`}
                            initial={{ y: 40, scale: 0.95 }}
                            whileInView={{ y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={() => setSelectedImage(src)}
                        >
                            <Image
                                src={src}
                                alt={`${title} - View ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-slate-800 shadow-lg">
                                    <Maximize2 size={20} />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl h-[80vh] md:h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Full screen view"
                                fill
                                className="object-contain"
                                quality={100}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalleryProject;
