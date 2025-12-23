"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import StickyCTA from '@/components/ui/StickyCTA';
import { ChevronDown } from 'lucide-react';

const MasterpiecePage = () => {
    return (
        <div className="bg-black text-white font-sans selection:bg-yellow-900 selection:text-white overflow-x-hidden">

            {/* --- Section 1: The Grand Reveal (Hero) --- */}
            <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center bg-black">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                    >
                        <source src="/images/our-gallery/masterpeice-1/video/IMG_2524.MP4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 border border-yellow-600/50 rounded-full text-yellow-500 text-xs tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                            The Masterpiece Collection
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 uppercase tracking-widest leading-none" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
                            Limitless<br />Luxury
                        </h1>
                        <p className="text-slate-300 font-light text-lg md:text-xl tracking-wide max-w-2xl mx-auto mb-12">
                            ที่สุดแห่งงานหัตถศิลป์... บทพิสูจน์ความเชี่ยวชาญที่ไร้ขีดจำกัดจาก BOGUS
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Hint */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 flex flex-col items-center gap-2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-xs uppercase tracking-widest">Discover</span>
                    <ChevronDown size={20} />
                </motion.div>
            </section>

            {/* --- Section 2: The Story of 470k --- */}
            <section className="py-24 md:py-32 px-4 bg-[#0a0a0a] overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                        {/* Image (Macro/Close-up) */}
                        <div className="w-full md:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="relative aspect-[4/5] rounded-sm overflow-hidden"
                            >
                                <Image
                                    src="/images/our-gallery/masterpeice-1/IMG_2467.JPG"
                                    alt="Close up of diamond links"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full md:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                                    วิศวกรรม<br />แห่งความงาม
                                    <span className="block text-xl md:text-2xl text-yellow-600/80 mt-2 italic font-sans font-light">Engineered Elegance</span>
                                </h2>
                                <div className="space-y-6 text-slate-400 font-light leading-relaxed text-lg">
                                    <p>
                                        มากกว่าเครื่องประดับ คือสถาปัตยกรรมบนเรือนร่าง... สร้อยคอเส้นนี้ถูกรังสรรค์ขึ้นด้วย <strong className="text-white font-medium">ทองคำแท้ (Solid 18k Gold)</strong> ที่คำนวณน้ำหนักมาอย่างแม่นยำ
                                    </p>
                                    <p>
                                        ทุกข้อต่อ (Link) ถูกออกแบบให้ขยับได้อย่างอิสระและนุ่มนวล รับกับสรีระช่วงคออย่างสมบูรณ์แบบ ผสานกับการฝัง <strong className="text-white font-medium">เพชร CVD น้ำงามคัดพิเศษระดับ Ideal Cut รวม 8.00 กะรัต</strong> ที่เรียงร้อยกันอย่างไร้รอยต่อ เพื่อประกายที่เจิดจรัสที่สุดในทุกการเคลื่อนไหว
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 3: Technical Specifications --- */}
            <section className="py-24 px-4 bg-black relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-900/30 to-transparent" />

                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">Technical Specifications</h2>
                        <div className="w-20 h-0.5 bg-yellow-700 mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-yellow-900/20 border border-yellow-900/20">
                        {[
                            { label: "Diamond Weight", value: "Total 8.00 Carats (approx.)" },
                            { label: "Diamond Quality", value: "CVD Type IIa / D-F Color / VVS-VS Clarity / Ideal Cut" },
                            { label: "Metal", value: "Solid 18k Gold / Platinum (Customizable)" },
                            { label: "Craftsmanship", value: "Hand-set Pave / Articulated Links" }
                        ].map((spec, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#050505] p-8 md:p-12 text-center hover:bg-[#0a0a0a] transition-colors duration-300"
                            >
                                <h3 className="text-yellow-600 text-sm uppercase tracking-widest mb-3">{spec.label}</h3>
                                <p className="text-white text-lg md:text-xl font-serif">{spec.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Section 4: The Value Proposition --- */}
            <section className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-600/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto max-w-2xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="border border-[#C5A059] bg-white/5 backdrop-blur-sm p-10 md:p-16 text-center relative"
                    >
                        {/* Decorative corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#C5A059]" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#C5A059]" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#C5A059]" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#C5A059]" />

                        <h3 className="text-slate-300 text-sm uppercase tracking-[0.2em] mb-6">Estimated Value</h3>
                        <div className="text-4xl md:text-6xl font-serif text-white mb-2">
                            ~ 470,000 THB
                        </div>
                        <p className="text-slate-500 text-xs italic mb-10 max-w-md mx-auto leading-relaxed">
                            *ราคาโดยประมาณ (Estimated Price) อ้างอิงจากราคาทองคำแท่งที่ 35,000 บาท ราคาจริงอาจมีการเปลี่ยนแปลงขึ้นลงตามราคาทองคำตลาดโลกและน้ำหนักเพชรจริง ณ วันที่สั่งทำ
                        </p>

                        <Link
                            href="https://line.me/R/ti/p/@bogus.diamond"
                            target="_blank"
                            className="inline-block bg-[#C5A059] text-black px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#d4b06a] transition-colors duration-300"
                        >
                            Inquire Now
                        </Link>
                    </motion.div>

                    <div className="text-center mt-16 max-w-xl mx-auto">
                        <p className="text-slate-400 font-light leading-relaxed">
                            สินค้านี้เป็นงานสั่งทำพิเศษ (Made to Order) ที่เราจะผลิตขึ้นใหม่เพื่อคุณโดยเฉพาะ สามารถปรับเปลี่ยนสเปคทอง (9k, 14k, 18k) หรือขนาดเพชรได้ตามงบประมาณที่คุณกำหนด
                        </p>
                    </div>
                </div>
            </section>

            <StickyCTA />
        </div>
    );
};

export default MasterpiecePage;
