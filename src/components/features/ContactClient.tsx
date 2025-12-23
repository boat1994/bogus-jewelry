'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Home, PenTool, ShieldCheck, Heart, Search, ArrowRight, Copy, Check } from 'lucide-react';

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Link configuration
const links = [
  {
    href: 'https://www.tiktok.com/@bogusbkk?_t=ZS-8yydfBG5TUY&_r=1',
    text: 'TikTok',
    icon: <Image className='ml-[-8px]' src="/logos/tiktok_logo.png" alt="Tiktok Icon" width={28} height={28} />,
    className: '',
  },
  {
    href: 'https://www.instagram.com/bogus.bkk/',
    text: 'Instagram',
    icon: <Image src="/logos/ig_logo.png" alt="Instagram Icon" width={28} height={28} />,
    className: '',
  },
];

const internalLinks = [
  { href: '/', label: 'หน้าแรก', icon: Home },
  { href: '/how-to-custom-order', label: 'สั่งทำเครื่องประดับ', icon: PenTool },
  { href: '/material-compare', label: 'เปรียบเทียบวัสดุ', icon: ShieldCheck },
  { href: '/care-card', label: 'ดูแลรักษา', icon: Heart },
  // { href: '/order-tracking', label: 'ติดตามออเดอร์', icon: Search },
];

import TikTokOverlay from '../TikTokOverlay';
import { useTikTokInterceptor } from '@/hooks/useTikTokInterceptor';

// ... (existing imports)

export default function ContactClient() {
  const { showTikTokOverlay, setShowTikTokOverlay, copied, handleCopy, handleLineClick } = useTikTokInterceptor();

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-slate-200 flex items-start justify-center p-4 overflow-y-auto">
      <TikTokOverlay
        isVisible={showTikTokOverlay}
        onClose={() => setShowTikTokOverlay(false)}
        onCopyLineId={handleCopy}
        copied={copied}
      />
      <motion.main
        className="w-full max-w-md mx-auto text-center pt-8 pb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Image
            src="/logos/bogus_logo.png"
            alt="BOGUS Brand Logo"
            width={200}
            height={200}
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-auto mb-6 rounded-full object-cover shadow-sm"
          />
        </motion.div>

        <motion.div className="mb-10 space-y-2" variants={itemVariants}>
          <h1 className="text-2xl font-serif italic text-slate-900">BOGUS</h1>
          <p className="text-slate-600 font-medium">
            The Art of Fine Jewelry
            <br />
            <span className="text-sm font-normal text-slate-500">รังสรรค์ด้วยหัวใจ ประณีตในทุกรายละเอียด</span>
          </p>
        </motion.div>

        <nav className="relative flex flex-col items-center space-y-4" aria-label="Social and contact links">

          {/* Special Line Contact Card */}
          <motion.div variants={itemVariants} className="w-full">
            <div className="w-full p-5 rounded-2xl bg-white border border-[#06C755]/20 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#06C755]"></div>

              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#06C755]/10">
                    <Image src="/logos/LINE_Brand_icon.png" alt="LINE Icon" width={32} height={32} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-slate-800 text-lg">สอบถาม / สั่งผลิต</h3>
                    <p className="text-sm text-slate-500 font-medium">LINE ID: @bogus</p>
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2.5 rounded-full bg-slate-50 hover:bg-[#06C755]/10 text-slate-400 hover:text-[#06C755] transition-all active:scale-95"
                  aria-label="Copy Line ID"
                >
                  {copied ? <Check size={20} className="text-[#06C755]" /> : <Copy size={20} />}
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="https://line.me/R/ti/p/@bogus"
                  target="_blank"
                  onClick={handleLineClick}
                  className="w-full py-3.5 bg-[#06C755] hover:bg-[#05b64d] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-green-200 active:scale-[0.98]"
                >
                  แอดไลน์เลย
                </Link>
                <p className="text-[11px] text-slate-400 font-medium">
                  *หากกดปุ่มไม่ติด ให้กดค้างเพื่อเปิดลิงก์ <br />
                  หรือกดปุ่ม Copy ด้านบนเพื่อเพิ่มเพื่อนในไลน์ด้วยตัวเอง
                </p>
              </div>
            </div>
          </motion.div>

          {links.map((link, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full">
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-full py-4 px-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-center justify-between ${link.className}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <span className="font-semibold text-slate-800 group-hover:text-slate-900">{link.text}</span>
                </div>
                <ArrowRight className="text-slate-300 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" size={20} />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Internal Links - Grid Layout */}
        <motion.div className="mt-12 w-full" variants={itemVariants}>
          <div className="flex items-center gap-4 mb-6 px-4">
            <div className="h-px flex-1 bg-slate-200"></div>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">เมนูอื่นๆ</span>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>

          <div className="grid grid-cols-3 gap-3 px-4">
            {internalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="w-full aspect-square bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <link.icon size={24} className="text-slate-400 group-hover:text-slate-600" />
                <span className="text-xs font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>

      </motion.main>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-slate-900/90 text-white px-8 py-6 rounded-2xl shadow-2xl backdrop-blur-sm flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-[#06C755] flex items-center justify-center mb-1">
              <Check size={28} className="text-white" />
            </div>
            <p className="font-bold text-lg">คัดลอกเรียบร้อย</p>
            <p className="text-sm text-slate-300">Line ID: @bogus</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
