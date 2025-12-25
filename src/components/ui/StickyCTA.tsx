'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Copy, Check } from 'lucide-react'
import TikTokOverlay from '../TikTokOverlay'
import { useTikTokInterceptor } from '@/hooks/useTikTokInterceptor'

import { usePathname } from 'next/navigation'

const StickyCTA = () => {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const { showTikTokOverlay, setShowTikTokOverlay, copied, handleCopy, handleLineClick } =
    useTikTokInterceptor()
  const lastScrollY = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let ticking = false

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY

      // Reset the inactivity timer on every scroll event
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // If user stops scrolling for 2 seconds, show the button
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true)
      }, 2000)

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Show if scrolling up
          if (currentScrollY < lastScrollY.current) {
            setIsVisible(true)
          }
          // Hide if scrolling down and past 100px
          else if (currentScrollY > 100 && currentScrollY > lastScrollY.current) {
            setIsVisible(false)
          }
          lastScrollY.current = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', updateScrollDirection, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])
  // Hide on contact page
  if (pathname === '/contact') return null

  return (
    <>
      <TikTokOverlay
        isVisible={showTikTokOverlay}
        onClose={() => setShowTikTokOverlay(false)}
        onCopyLineId={handleCopy}
        copied={copied}
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-8 right-6 z-50 pointer-events-none"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 pointer-events-auto">
              <button
                onClick={handleCopy}
                className="bg-white text-slate-400 hover:text-[#06C755] p-3 rounded-full shadow-lg shadow-green-900/10 transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
                aria-label="Copy Line ID"
              >
                {copied ? <Check size={20} className="text-[#06C755]" /> : <Copy size={20} />}
              </button>

              <Link
                href="/line-redirect"
                target="_blank"
                onClick={handleLineClick}
                className="shadow-lg shadow-green-900/20 bg-[#06C755] hover:bg-[#05b64d] text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                แอดไลน์เพื่อประเมินราคา
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] bg-slate-900/90 text-white px-8 py-6 rounded-2xl shadow-2xl backdrop-blur-sm flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-[#06C755] flex items-center justify-center mb-1">
              <Check size={28} className="text-white" />
            </div>
            <p className="font-bold text-lg">คัดลอกเรียบร้อย</p>
            <p className="text-sm text-slate-300">Line ID: @bogus</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default StickyCTA
