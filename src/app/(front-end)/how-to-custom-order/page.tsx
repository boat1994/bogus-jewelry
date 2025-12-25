'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { Gem, ShieldCheck, Sparkles, PenTool, Heart } from 'lucide-react'
import RelatedLinks from '@/components/RelatedLinks'
import Testimonials from '@/components/features/Testimonials'

import { luxuryTransition, scrollSpringConfig } from '@utils/animations'

// --- Animation Components ---

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

const ScrollLine = () => {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, scrollSpringConfig)

  return (
    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block z-0">
      <motion.div
        style={{ scaleY, transformOrigin: 'top' }}
        className="absolute top-0 left-0 w-full h-full bg-[#C5A059]" // Gold color
      />
    </div>
  )
}

const heroImages = [
  '/images/custom-order/carosel/1.JPG',
  '/images/custom-order/carosel/2.JPG',
  '/images/custom-order/carosel/3.JPG',
]

const CustomOrderPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const steps = [
    {
      id: 1,
      title: 'ปรึกษาและประเมินราคา',
      engTitle: 'Consultation',
      image: '/images/custom-order/pinterest-style/step1-consultation.png',
      color: 'from-blue-50 to-indigo-50 border-blue-100 text-blue-600',
      description: (
        <span>
          แจ้งงบประมาณ (Budget){' '}
          <Link
            href="/material-compare"
            className="underline decoration-slate-300 hover:text-yellow-600 hover:decoration-yellow-600 transition-colors"
          >
            เลือกวัสดุ (Silver/Gold/Platinum)
          </Link>{' '}
          และชนิดเพชรที่ต้องการ พร้อมพูดคุยเรื่องดีไซน์
        </span>
      ),
    },
    {
      id: 2,
      title: 'ยืนยันและมัดจำ',
      engTitle: 'Deposit & Confirm',
      image: '/images/custom-order/pinterest-style/step2-deposit.png',
      color: 'from-emerald-50 to-teal-50 border-emerald-100 text-emerald-600',
      description: 'สรุปสเปคงานอย่างละเอียด และชำระค่ามัดจำ 50% ของราคาสินค้าเพื่อเริ่มดำเนินการ',
      tag: 'มัดจำ 50%',
      note: 'มีใบเสนอราคาและหลักฐานยืนยันผ่าน Line OA',
    },
    {
      id: 3,
      title: 'ผลิตชิ้นงาน',
      engTitle: 'Crafting Creation',
      image: '/images/custom-order/pinterest-style/step3-crafting.png',
      color: 'from-amber-50 to-orange-50 border-amber-100 text-amber-600',
      description: 'ช่างฝีมือเริ่มดำเนินการผลิตตามแบบ ระยะเวลาผลิตมาตรฐานประมาณ 2-3 สัปดาห์',
      tag: 'Craftsmanship Quality',
      note: '*แจ้งคิวผลิตที่แน่นอนให้ทราบเป็นรายกรณี (Case-by-case)',
    },
    {
      id: 4,
      title: 'ตรวจงานและชำระส่วนที่เหลือ',
      engTitle: 'QC & Final Payment',
      image: '/images/custom-order/pinterest-style/step4-qc.png',
      color: 'from-purple-50 to-fuchsia-50 border-purple-100 text-purple-600',
      description:
        'เมื่อผลิตเสร็จ ทางร้านจะส่งรูปภาพและวิดีโอคมชัดให้ตรวจสอบความเรียบร้อย ก่อนชำระยอด 50% ที่เหลือ',
      tag: 'จ่ายส่วนที่เหลือ',
      note: 'เห็นของจริงก่อนจ่ายครบ',
    },
    {
      id: 5,
      title: 'จัดส่งสินค้า',
      engTitle: 'Safe Delivery',
      image: '/images/custom-order/pinterest-style/step5-delivery.png',
      color: 'from-slate-50 to-gray-50 border-slate-200 text-slate-600',
      description:
        'เลือกช่องทางจัดส่งได้ตามสะดวก ทั้ง EMS ทั่วไทย (ฟรี) หรือ Messenger ส่งด่วนใน กทม.',
      tag: 'จัดส่งฟรี / ส่งด่วน',
      note: 'มีประกันสินค้าสูญหายสำหรับ EMS',
    },
  ]

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-yellow-100 pb-6 relative">
      {/* --- Section 1: Hero Section (The Hook) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0 z-0">
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
                src={heroImages[currentImageIndex]}
                alt="Custom Order Process"
                fill
                className="object-cover"
                priority
                quality={100}
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto relative z-20 text-center px-4 mt-16">
          <Reveal immediate={true}>
            <span className="text-xs font-bold tracking-widest text-yellow-400 uppercase mb-4 block drop-shadow-md">
              Custom Made Jewelry
            </span>
          </Reveal>
          <Reveal delay={0.2} immediate={true}>
            <h1 className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight drop-shadow-lg">
              From Imagination to Reality: <br />
              <span className="text-white/90 italic">Craft Your Unique Jewelry</span>
            </h1>
          </Reveal>
          <Reveal delay={0.4} immediate={true}>
            <p className="text-white/80 font-light text-sm md:text-base mb-8 leading-relaxed max-w-xl mx-auto drop-shadow-md">
              จากจินตนาการสู่ความจริง... สั่งทำเครื่องประดับที่ทำมา <br />
              เพื่อคุณโดยเฉพาะกับ Bogus
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- Section 2: The 5-Step Timeline --- */}
      <section className="container mx-auto px-4 max-w-5xl py-1 relative z-10 mt-12">
        <div className="text-center mb-16">
          <Reveal immediate={true}>
            <h2 className="text-2xl text-slate-800">5 ขั้นตอนง่ายๆ สู่แหวนในฝัน</h2>
            <p className="text-sm text-slate-500 mt-2">ระยะเวลาโดยรวมประมาณ 2-3 สัปดาห์</p>
          </Reveal>
        </div>

        <div className="relative">
          {/* Central Line (Desktop Only) */}
          <ScrollLine />

          <div className="space-y-16 md:space-y-24 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Step Marker */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-slate-200 rounded-full items-center justify-center z-10 shadow-sm">
                  <span className="text-[10px] font-bold text-slate-400">{step.id}</span>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 px-4 text-center md:text-left">
                  <Reveal
                    delay={0.2}
                    className={`${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                    immediate={index === 0}
                  >
                    <span className="inline-block md:hidden bg-slate-800 text-white text-[18px] px-6 py-2 rounded-full font-bold tracking-wider mb-3">
                      ขั้นตอนที่ {step.id}
                    </span>
                    <h3 className="text-xl font-serif text-slate-800 mb-1">{step.title}</h3>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block mb-4">
                      {step.engTitle}
                    </span>
                    <p className="text-sm text-slate-600 font-light leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div
                      className={`flex flex-col gap-2 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} items-center`}
                    >
                      {step.tag && (
                        <span className="inline-block bg-yellow-50 text-yellow-700 text-xs px-3 py-1 rounded-full border border-yellow-100">
                          {step.tag}
                        </span>
                      )}
                      {step.note && (
                        <span className="text-[10px] text-slate-400 italic">{step.note}</span>
                      )}
                    </div>
                  </Reveal>
                </div>

                {/* Image/Visual */}
                <div className="w-full md:w-1/2 px-4">
                  <Reveal delay={0.4} immediate={index === 0}>
                    <div
                      className={`aspect-[4/3] rounded-2xl bg-white border border-slate-100 flex items-center justify-center relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-500`}
                    >
                      {/* Main Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: Why Trust Us? --- */}
      <section className="bg-white mt-10  border-t border-slate-100 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal>
            <h2 className="text-xl font-serif text-slate-800 text-center mt-10 mb-10">
              มาตรฐานที่คุณมั่นใจได้
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trust Badge 1 */}
            <Reveal delay={0.1}>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600">
                  <Gem size={24} />
                </div>
                <h3 className="font-medium text-slate-800 mb-2">Real Gold Guarantee</h3>
                <p className="text-sm text-slate-500 font-light">
                  รับประกันเปอร์เซ็นต์ทอง 9k, 14k, 18k และ Platinum ได้มาตรฐานสากล
                </p>
              </div>
            </Reveal>

            {/* Trust Badge 2 */}
            <Reveal delay={0.2}>
              <div className="text-center p-4 border-t md:border-t-0 md:border-l border-slate-100">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-medium text-slate-800 mb-2">Certified Diamonds</h3>
                <p className="text-sm text-slate-500 font-light">
                  เพชรเม็ดกลางขนาดตามกำหนด มีใบเซอร์ GIA/IGI ยืนยันความถูกต้อง
                </p>
              </div>
            </Reveal>

            {/* Trust Badge 3 */}
            <Reveal delay={0.3}>
              <div className="text-center p-4 border-t md:border-t-0 md:border-l border-slate-100">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-medium text-slate-800 mb-2">After-Sales Care</h3>
                <p className="text-sm text-slate-500 font-light">
                  บริการดูแลหลังการขาย ขัดชุบฟรี 1 ครั้ง และตรวจสอบหนามเตยฟรีตลอดอายุ
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Testimonials Section */}
        {/* <Testimonials /> */}

        {/* 4. Related Links */}
        <Reveal delay={0.4}>
          <RelatedLinks
            links={[
              {
                title: 'เปรียบเทียบวัสดุในการทำจิวเวลรี่',
                description:
                  'เปรียบเทียบวัสดุในการทำจิวเวลรี่ ตั้งแต่ทอง 9k, 14k, 18k และ Platinum',
                href: '/material-compare',
                icon: PenTool,
                color: 'bg-amber-100 text-amber-600',
              },
              {
                title: 'การดูแลรักษา',
                description: 'คู่มือการดูแลรักษาเครื่องประดับให้สวยงามยาวนาน ทั้งทอง เงิน และพลอย',
                href: '/care-card',
                icon: Heart,
                color: 'bg-rose-100 text-rose-600',
              },
            ]}
          />
        </Reveal>
      </section>

      {/* --- Section 4: Sticky CTA --- */}
    </div>
  )
}

export default CustomOrderPage
