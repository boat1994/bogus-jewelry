'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Quote } from 'lucide-react';

// Mock Data
const testimonials = [
    {
        id: 1,
        name: "คุณพลอย",
        role: "Custom Ring",
        quote: "ประทับใจมากค่ะ ทางร้านให้คำแนะนำดีมาก ตั้งแต่เลือกเพชรจนถึงออกแบบตัวเรือน งานจริงสวยกว่าในรูปอีกค่ะ ใส่แล้วมีแต่คนทัก",
        avatar: "/images/avatars/avatar-placeholder-1.png" // Placeholder
    },
    {
        id: 2,
        name: "คุณนัท",
        role: "Wedding Band",
        quote: "สั่งทำแหวนแต่งงานกับที่นี่ ไม่ผิดหวังเลยครับ งานละเอียดมาก ราคาสมเหตุสมผล บริการหลังการขายก็ดีเยี่ยม แนะนำเลยครับ",
        avatar: "/images/avatars/avatar-placeholder-2.png"
    },
    {
        id: 3,
        name: "คุณเมย์",
        role: "Diamond Earrings",
        quote: "ต่างหูสวยมากค่ะ เพชรเล่นไฟดีมาก ดีไซน์เก๋ไม่ซ้ำใคร ชอบตรงที่ทางร้านช่วยออกแบบให้เข้ากับบุคลิกของเรา ขอบคุณนะคะ",
        avatar: "/images/avatars/avatar-placeholder-3.png"
    },
    {
        id: 4,
        name: "คุณบี",
        role: "Gold Necklace",
        quote: "สร้อยคอทอง 18k งานสั่งทำพิเศษ สวยถูกใจมากค่ะ งานเนี๊ยบมาก ใส่ติดตัวตลอดเลย เพื่อนๆ ถามตลอดว่าซื้อที่ไหน",
        avatar: "/images/avatars/avatar-placeholder-4.png"
    },
    {
        id: 5,
        name: "คุณเอก",
        role: "Engagement Ring",
        quote: "แหวนหมั้นวงนี้แฟนชอบมากครับ ขอบคุณทีมงาน Bogus ที่ช่วยดูแลทุกขั้นตอน ทำให้วันสำคัญของเราสมบูรณ์แบบครับ",
        avatar: "/images/avatars/avatar-placeholder-5.png"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

export default function Testimonials() {
    return (
        <section className="py-16 md:py-24 bg-[#FDFBF7] relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">

                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-4">Voice of Our Clients</h2>
                        <p className="text-slate-500 font-light">ความประทับใจจากลูกค้าที่ไว้วางใจให้เราดูแล</p>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative"
                >
                    {/* Mobile: Horizontal Scroll */}
                    <div className="flex md:hidden overflow-x-auto gap-4 pb-8 snap-x hide-scrollbar -mx-4 px-4">
                        {testimonials.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                className="flex-shrink-0 w-[280px] snap-center"
                            >
                                <div className="h-full bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative">
                                    <Quote className="absolute top-6 right-6 text-slate-100" size={40} />

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative flex-shrink-0">
                                            {/* Placeholder Avatar - using a div with initials if image fails or just a generic color */}
                                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 font-serif text-lg">
                                                {item.name.charAt(0)}
                                            </div>
                                            {/* Uncomment when real images are available
                                    <Image 
                                        src={item.avatar} 
                                        alt={item.name} 
                                        fill 
                                        className="object-cover"
                                    />
                                    */}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800">{item.name}</h3>
                                            <p className="text-xs text-slate-500 uppercase tracking-wider">{item.role}</p>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 font-light leading-relaxed italic relative z-10">
                                        &quot;{item.quote}&quot;
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Desktop: Grid Layout */}
                    <div className="hidden md:grid grid-cols-3 gap-6">
                        {testimonials.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                className="h-full"
                            >
                                <div className="h-full bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col relative group">
                                    <Quote className="absolute top-8 right-8 text-slate-100 group-hover:text-slate-200 transition-colors" size={48} />

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden relative flex-shrink-0">
                                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 font-serif text-xl">
                                                {item.name.charAt(0)}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 text-lg">{item.name}</h3>
                                            <p className="text-xs text-slate-500 uppercase tracking-wider">{item.role}</p>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 font-light leading-relaxed italic relative z-10">
                                        &quot;{item.quote}&quot;
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
