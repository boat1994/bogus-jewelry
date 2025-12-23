"use client";

import React from 'react';
import Image from 'next/image';
import { PenTool, Heart, ShieldCheck, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Testimonials from '@/components/features/Testimonials';
import RelatedLinks from '@/components/RelatedLinks';
import { luxuryTransition } from '@utils/animations';
import { Container } from '@/components/ui/Container';
import HeroVideo from '@/components/features/HeroVideo';
import JsonLd from '@/components/JsonLd';

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function HomePage() {
  const [isVideoReady, setIsVideoReady] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-slate-200">
      <JsonLd />
      {/* Hero Video Section */}
      <section className="relative h-screen w-full overflow-hidden bg-white">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 z-10" /> {/* Subtle overlay for text readability */}
          <HeroVideo onPlayStart={() => setIsVideoReady(true)} />
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 h-full flex flex-col justify-end items-center text-center pb-32 md:pb-40 pointer-events-none">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVideoReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="floating-hero relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto mb-6 pointer-events-auto"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/logos/bogus_symbol_logo_transparent.png"
                  alt="BOGUS Jewelry Logo"
                  fill
                  className="object-contain drop-shadow-lg"
                  priority
                />
              </motion.div>
              <h1 className="text-lg md:text-xl text-white/90 tracking-widest uppercase max-w-2xl mx-auto drop-shadow-md font-medium">
                Ideal Cut for Everyone
              </h1>
            </motion.div>
          </Container>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* Testimonials Section */}
      {/* <Testimonials /> */}

      {/* Related Links Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background with zoom and overlay */}
        <div
          className="absolute inset-0 bg-[url('/images/util_background.png')] bg-no-repeat opacity-60"
          style={{
            backgroundSize: '400%',
            backgroundPosition: '25% 75%'
          }}
        />
        <div className="absolute inset-0 bg-[#FDFBF7]/90" />

        <div className="relative z-10">
          <Reveal delay={0.2}>
            <RelatedLinks
              title="โบกัสยินดีให้บริการครับ"
              links={[
                {
                  title: 'สั่งทำเครื่องประดับ',
                  description: 'ออกแบบและสั่งทำเครื่องประดับในแบบของคุณเอง',
                  href: '/how-to-custom-order',
                  icon: PenTool,
                  color: 'bg-amber-100 text-amber-800'
                },
                {
                  title: 'เปรียบเทียบวัสดุ',
                  description: 'ข้อมูลเจาะลึก Silver, Gold 9k-18k และ Platinum',
                  href: '/material-compare',
                  icon: ShieldCheck,
                  color: 'bg-blue-100 text-blue-800'
                },
                {
                  title: 'การดูแลรักษา',
                  description: 'คู่มือดูแลเครื่องประดับให้สวยเหมือนใหม่',
                  href: '/care-card',
                  icon: Heart,
                  color: 'bg-rose-100 text-rose-800'
                },
                {
                  title: 'ติดต่อเรา',
                  description: <>สอบถามข้อมูลเพิ่มเติมหรือ <br />ขอคำปรึกษาเกี่ยวกับเครื่องประดับ</>,
                  href: '/contact',
                  icon: MessageCircle,
                  color: 'bg-emerald-100 text-emerald-800'
                }
              ]}
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
