'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { luxuryTransition } from '@/utils/animations'
import { ChevronDown } from 'lucide-react'

interface HeroSectionProps {
  media: { type: 'video'; src: string } | { type: 'images'; src: string[] }
  badge?: string
  title: React.ReactNode
  description?: React.ReactNode
  height?: string
  interval?: number
  showScrollHint?: boolean
  overlayOpacity?: number // 0 to 100
  titleClassName?: string
  descriptionClassName?: string
}

const Reveal = ({
  children,
  delay = 0,
  className = '',
  immediate = false,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  immediate?: boolean
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView={immediate ? undefined : 'show'}
      animate={immediate ? 'show' : undefined}
      viewport={immediate ? undefined : { once: true, margin: '0px' }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: { ...luxuryTransition, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function HeroSection({
  media,
  badge,
  title,
  description,
  height = 'h-screen',
  interval = 5000,
  showScrollHint = false,
  overlayOpacity = 40,
  titleClassName = 'text-3xl md:text-5xl font-serif text-white mb-4 leading-tight drop-shadow-lg',
  descriptionClassName = 'text-white/80 font-light text-sm md:text-base mb-8 leading-relaxed max-w-xl mx-auto drop-shadow-md',
}: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (media.type !== 'images' || media.src.length <= 1) return
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % media.src.length)
    }, interval)
    return () => clearInterval(timer)
  }, [media, interval])

  return (
    <section
      className={`relative ${height} w-full flex items-center justify-center overflow-hidden bg-black`}
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {media.type === 'video' ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-cover opacity-${100 - overlayOpacity}`}
          >
            <source src={media.src} type="video/mp4" />
          </video>
        ) : (
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={media.src[currentImageIndex]}
                alt="Hero Background"
                fill
                className="object-cover"
                priority
                quality={100}
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
        )}

        {/* Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})` }}
        />

        {media.type === 'video' && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />
        )}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-20 text-center px-4 mt-16">
        {badge && (
          <Reveal immediate={true}>
            <span className="text-xs font-bold tracking-widest text-yellow-400 uppercase mb-4 block drop-shadow-md">
              {badge}
            </span>
          </Reveal>
        )}
        <Reveal delay={0.2} immediate={true}>
          <div className={titleClassName}>{title}</div>
        </Reveal>
        {description && (
          <Reveal delay={0.4} immediate={true}>
            <div className={descriptionClassName}>{description}</div>
          </Reveal>
        )}
      </div>

      {/* Scroll Hint */}
      {showScrollHint && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2 pointer-events-none"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest">Discover</span>
          <ChevronDown size={20} />
        </motion.div>
      )}
    </section>
  )
}
