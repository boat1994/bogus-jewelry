"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import GalleryProject from '@/components/features/GalleryProject';
import StickyCTA from '@/components/ui/StickyCTA';
import MasonryGallery from '@/components/features/MasonryGallery';

// --- Mock Data Generation ---
const availableImages = [
    "/images/our-gallery/mock-work1/IMG_8324.JPG",
    "/images/our-gallery/mock-work1/IMG_8326.JPG",
    "/images/our-gallery/mock-work1/IMG_8327.JPG",
    "/images/our-gallery/mock-work1/IMG_8576.JPG",
    "/images/our-gallery/mock-work2/IMG_3288.JPG",
    "/images/our-gallery/mock-work2/IMG_3292.JPG",
    "/images/our-gallery/mock-work2/IMG_3293.JPG",
    "/images/our-gallery/mock-work2/IMG_3296.JPG",
];

const categories = ["Engagement Ring", "Wedding Band", "Necklace", "Earrings", "Custom Design"];
const adjectives = ["Timeless", "Radiant", "Elegant", "Bespoke", "Luxurious", "Modern", "Classic", "Vintage"];

const generateMockProjects = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
        // Deterministically select images based on index to avoid hydration mismatch
        // We cycle through availableImages based on the project index
        const startIndex = i % availableImages.length;
        // Create a rotated copy of the array starting from startIndex
        const rotatedImages = [
            ...availableImages.slice(startIndex),
            ...availableImages.slice(0, startIndex)
        ];
        const projectImages = rotatedImages.slice(0, 4);

        return {
            id: i + 3, // Start ID after the featured ones
            title: `${adjectives[i % adjectives.length]} ${categories[i % categories.length]} ${i + 1}`,
            description: "A unique masterpiece crafted with precision and passion. Designed to capture the essence of your love story.",
            category: categories[i % categories.length],
            tags: [
                ["Diamond", "18k White Gold"],
                ["Sapphire", "Platinum"],
                ["Full Diamonds", "Custom"],
                ["Emerald", "VVS1"],
                ["Ruby", "Rose Gold"],
                ["Yellow Diamond", "Classic"],
                ["GIA Certified", "Solitaire"],
                ["Wedding Set", "Platinum"]
            ][i % 8],
            coverImage: projectImages[0],
            images: projectImages
        };
    });
};

const moreProjects = generateMockProjects(28); // 2 Featured + 28 More = 30 Total

const OurGalleryPage = () => {
    return (
        <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-yellow-100 pb-20">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-200/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto max-w-5xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase mb-6 block">
                            Our Masterpieces
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-800 mb-8 leading-tight">
                            มาส่องผลงาน<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 italic pr-2">
                                ความเนี๊ยบ
                            </span>
                            ของเรากันครับ
                        </h1>
                        <p className="text-slate-500 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            เตรียมใจเต้นแรงกับประกายเพชรที่สะกดทุกสายตา... <br className="hidden md:block" />
                            ผลงานจริงที่สวยยิ่งกว่าในฝัน รอให้คุณได้สัมผัส
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Masterpiece Banner */}
            <div className="container mx-auto px-4 max-w-6xl mb-20">
                <Link href="/masterpiece" className="group block relative h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/our-gallery/masterpeice-1/IMG_2467.JPG"
                        alt="The Masterpiece Collection"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-center md:text-left">
                        <span className="inline-block py-1 px-3 border border-yellow-500/50 rounded-full text-yellow-400 text-xs tracking-[0.2em] uppercase mb-4 backdrop-blur-sm">
                            Featured Masterpiece
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-4 uppercase tracking-wider">
                            Limitless Luxury
                        </h2>
                        <p className="text-slate-300 font-light text-lg max-w-xl mb-8">
                            สัมผัสความงามระดับ 8 กะรัต... ที่สุดแห่งงานหัตถศิลป์จาก BOGUS
                        </p>
                        <span className="inline-flex items-center text-white border-b border-yellow-500 pb-1 group-hover:text-yellow-400 transition-colors">
                            Discover the Collection <span className="ml-2">→</span>
                        </span>
                    </div>
                </Link>
            </div>

            {/* Featured Gallery List */}
            <div className="container mx-auto px-4 max-w-6xl mb-20">

                <GalleryProject
                    title="The Radiant Promise"
                    description="ความงดงามที่ลงตัวของแหวนเพชรเม็ดเดี่ยว (Solitaire) ที่ถูกเจียระไนอย่างประณีตบรรจง ตัวเรือนที่โอบอุ้มเพชรไว้อย่างอ่อนโยนแต่แข็งแรง สะท้อนแสงระยิบระยับจับตา ทุกองศาคือความสมบูรณ์แบบที่ไม่อาจละสายตาได้ นี่คือตัวแทนของคำมั่นสัญญาที่บริสุทธิ์และเป็นนิรันดร์"
                    emotionalTag="Pure Elegance"
                    align="left"
                    images={[
                        "/images/our-gallery/mock-work1/IMG_8324.JPG",
                        "/images/our-gallery/mock-work1/IMG_8326.JPG",
                        "/images/our-gallery/mock-work1/IMG_8327.JPG",
                        "/images/our-gallery/mock-work1/IMG_8576.JPG",
                    ]}
                />

                <div className="w-full h-px bg-slate-200/60 my-10" />

                <GalleryProject
                    title="Golden Symphony"
                    description="ศิลปะแห่งทองคำที่ถูกถักทอด้วยความตั้งใจ ผสานเข้ากับอัญมณีล้ำค่าอย่างลงตัว ความเงางามของทองคำขับเน้นความหรูหราและอบอุ่น ดีไซน์ที่ทันสมัยแต่ยังคงกลิ่นอายความคลาสสิก สวมใส่เมื่อไหร่ก็มอบความรู้สึกมั่นใจและโดดเด่นเหนือใคร ชิ้นงานที่ไม่ได้เป็นแค่เครื่องประดับ แต่คืองานศิลปะที่คุณสวมใส่ได้จริง"
                    emotionalTag="Timeless Luxury"
                    align="right"
                    images={[
                        "/images/our-gallery/mock-work2/IMG_3288.JPG",
                        "/images/our-gallery/mock-work2/IMG_3292.JPG",
                        "/images/our-gallery/mock-work2/IMG_3293.JPG",
                        "/images/our-gallery/mock-work2/IMG_3296.JPG",
                    ]}
                />

            </div>

            {/* Masonry Grid for More Projects */}
            <MasonryGallery projects={moreProjects} />

            <StickyCTA />
        </div>
    );
};

export default OurGalleryPage;
