'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MoreHorizontal, Compass, X, Copy, Check, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

interface TikTokOverlayProps {
    isVisible: boolean;
    onClose: () => void;
    onCopyLineId: () => void;
    copied: boolean;
}

const TikTokOverlay = ({ isVisible, onClose, onCopyLineId, copied }: TikTokOverlayProps) => {
    // Prevent scrolling when overlay is active
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        };
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-6"
                    onClick={onClose}
                >
                    {/* Top Right Arrow Instructions */}
                    <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-2">
                        <motion.div
                            initial={{ y: 0, x: 0 }}
                            animate={{ y: -10, x: 10 }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 1,
                                ease: "easeInOut"
                            }}
                        >
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45 drop-shadow-[0_0_10px_rgba(6,199,85,0.6)]">
                                <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="#06C755" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.div>
                        <span className="text-white text-xl font-medium mr-10 mt-1">1. แตะเมนู</span>
                    </div>

                    {/* Close Button */}
                    {/* <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-6 left-6 text-white/50 hover:text-white p-2 z-10"
          >
            <X size={28} />
          </button> */}

                    {/* Glass Card */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-full max-w-sm bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 flex flex-col items-center text-center relative shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            boxShadow: "0 0 40px rgba(6, 199, 85, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1)"
                        }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-8">
                            เปิดในเบราว์เซอร์
                        </h2>

                        {/* Icons Flow */}
                        <div className="flex items-center justify-center gap-4 mb-8 w-full">
                            {/* 3 Dots */}
                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                                <MoreHorizontal size={40} className="text-black" />
                            </div>

                            <ArrowRight className="text-white/50" />

                            {/* Compass */}
                            <div className="w-20 h-20 rounded-full bg-[#06C755] flex items-center justify-center shadow-[0_0_20px_rgba(6,199,85,0.4)]">
                                <Compass size={40} className="text-white" />
                            </div>
                        </div>

                        <div className="space-y-1 mb-8">
                            <p className="text-white text-lg font-medium">
                                2. เลือก &apos;เปิดในเบราว์เซอร์&apos;
                            </p>
                            <p className="text-white/60">
                                เพื่อใช้งาน LINE
                            </p>
                        </div>

                        {/* Copy ID Button (Inside Card) */}
                        <button
                            onClick={(e) => { e.stopPropagation(); onCopyLineId(); }}
                            className="w-full py-4 rounded-2xl border border-[#06C755] text-[#06C755] hover:bg-[#06C755] hover:text-white transition-all font-medium flex items-center justify-center gap-2 group"
                        >
                            {copied ? <Check size={20} /> : <Copy size={20} />}
                            <span>{copied ? 'คัดลอกเรียบร้อย' : 'คัดลอก LINE ID'}</span>
                        </button>

                    </motion.div>

                    <div className="mt-8 text-white/30 text-xs">
                        แตะพื้นที่ว่างเพื่อปิด
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TikTokOverlay;
