'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Ruler, Fingerprint, Info, ChevronRight, Check, Clock, Bone, ArrowLeftRight } from 'lucide-react';
import { luxuryTransition, scrollSpringConfig } from '@utils/animations';
import { ringSizes } from './data';

// --- Components ---

const Reveal = ({ children, delay = 0, className = "", immediate = false }: { children: React.ReactNode, delay?: number, className?: string, immediate?: boolean }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView={immediate ? undefined : "show"}
      animate={immediate ? "show" : undefined}
      viewport={immediate ? undefined : { once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: { ...luxuryTransition, delay }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Badge = ({ children, color = "navy" }: { children: React.ReactNode, color?: "navy" | "gold" | "gray" }) => {
  const colors = {
    navy: "bg-[#0B1021] text-white border-[#FDFBF7]",
    gold: "bg-[#C5A059] text-white border-[#FDFBF7]",
    gray: "bg-slate-500 text-white border-[#FDFBF7]"
  };

  return (
    <span className={`inline-block px-4 py-1 rounded-full border-[3px] text-xs font-bold tracking-wider mb-4 shadow-sm ${colors[color]}`}>
      {children}
    </span>
  );
};

// --- Sections ---

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/placeholder/hero-bg.jpg')] bg-cover bg-center" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <Reveal immediate={true}>
          <span className="text-[#C5A059] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Finding Your Perfect Fit
          </span>
        </Reveal>
        <Reveal delay={0.2} immediate={true}>
          <h1 className="text-3xl md:text-5xl font-serif text-[#0B1021] mb-6 leading-tight px-2 break-words">
            ค้นพบขนาดที่ใช่... <br className="hidden md:block" /> เพื่อสัมผัสที่ลงตัว
          </h1>
        </Reveal>
        <Reveal delay={0.4} immediate={true}>
          <p className="text-slate-600 text-sm md:text-xl max-w-[280px] md:max-w-2xl mx-auto font-light leading-relaxed">
            &quot;เพราะความสบายในการสวมใส่ คือจุดเริ่มต้นของความมั่นใจ&quot;
          </p>
        </Reveal>
      </div>
    </section>
  );
};

const NodeSizerKit = () => {
  return (
    <div className="relative z-10 mb-24 md:mb-32">
      <div className="flex flex-col items-center">
        <Reveal>
          <Badge color="gold">RECOMMENDED</Badge>
        </Reveal>

        <Reveal delay={0.2} className="w-full max-w-4xl">
          <div className="bg-white border border-slate-100 rounded-xl p-6 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-500 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#C5A059]" />

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 text-left">
                <h3 className="text-xl md:text-2xl font-serif text-[#0B1021] mb-4 truncate">บริการส่งชุดวัดไซส์มาตรฐาน</h3>
                <p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed line-clamp-3 md:line-clamp-none">
                  เพื่อให้แหวนวงสำคัญพอดีกับนิ้วของคุณที่สุด... หลังจากยืนยันแบบและชำระค่ามัดจำแล้ว ทางร้านจะ จัดส่งชุดวัดไซส์มาตรฐานไปให้ทดลองสวมใส่ถึงบ้านเป็นขั้นตอนแรกทันทีครับ
                </p>

                {/* 3-Step Flow (Mobile Vertical / Desktop Horizontal) */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-0 relative mb-8">
                  {/* Step 1 */}
                  <div className="flex flex-row md:flex-col items-center gap-3 md:gap-0 w-full md:w-1/3 z-10">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0 md:mb-2">
                      <Check className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-medium text-slate-800 text-left md:text-center break-words">
                      แจ้งแอดมิน
                    </p>
                  </div>
                  {/* Step 2 */}
                  <div className="flex flex-row md:flex-col items-center gap-3 md:gap-0 w-full md:w-1/3 z-10">
                    <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 shrink-0 md:mb-2">
                      <Clock className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-medium text-slate-800 text-left md:text-center break-words">
                      รอรับชุดวัดไซส์
                    </p>
                  </div>
                  {/* Step 3 */}
                  <div className="flex flex-row md:flex-col items-center gap-3 md:gap-0 w-full md:w-1/3 z-10">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0 md:mb-2">
                      <Fingerprint className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-medium text-slate-800 text-left md:text-center break-words">
                      วัดขนาดที่พอดี
                    </p>
                  </div>
                </div>

                <a
                  href="https://line.me/R/ti/p/@bogus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full md:w-auto bg-[#0B1021] text-white px-8 py-3 rounded-full hover:bg-[#1a233b] transition-colors duration-300 group-hover:scale-105 transform text-sm md:text-base"
                >
                  แอดไลน์ขอรับชุดวัดไซส์
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                {/* Placeholder for Sizer Kit Image */}
                <div className="w-full aspect-square bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-xs md:text-sm">
                  [IMG-02: Sizer Kit Flat Lay]
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

const NodeDIY = () => {
  return (
    <div className="relative z-10 mb-24 md:mb-32">
      <div className="flex flex-col items-center">
        <Reveal>
          <Badge color="navy">SELF-MEASUREMENT</Badge>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
          {/* Method 1 */}
          <Reveal delay={0.2} className="h-full">
            <div className="bg-white border border-slate-100 rounded-xl p-6 md:p-8 shadow-sm h-full hover:-translate-y-1 transition-transform duration-500">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-[#0B1021]">
                <Ruler className="w-6 h-6" />
              </div>
              <h4 className="text-xl md:text-2xl font-serif text-[#0B1021] mb-3 truncate">วิธีที่ 1: วัดเส้นผ่านศูนย์กลาง</h4>
              <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                หากมีแหวนเดิมที่ใส่ได้พอดี ให้วัดเส้นผ่านศูนย์กลาง &quot;ด้านใน&quot; ของแหวน (ไม่รวมขอบ) หน่วยเป็นมิลลิเมตร
              </p>
              <div className="aspect-video bg-slate-50 rounded-lg mb-4 flex items-center justify-center text-slate-400 text-xs md:text-sm">
                [IMG-03: Ruler Measurement]
              </div>
              <p className="text-xs text-slate-500 italic">
                *วิธีนี้เหมาะสำหรับผู้ที่มีแหวนเดิมอยู่แล้ว
              </p>
            </div>
          </Reveal>

          {/* Method 2 */}
          <Reveal delay={0.4} className="h-full">
            <div className="bg-white border border-slate-100 rounded-xl p-6 md:p-8 shadow-sm h-full hover:-translate-y-1 transition-transform duration-500">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-[#0B1021]">
                <Fingerprint className="w-6 h-6" />
              </div>
              <h4 className="text-xl md:text-2xl font-serif text-[#0B1021] mb-3 truncate">วิธีที่ 2: วัดรอบนิ้ว</h4>
              <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                ใช้กระดาษตัดเป็นแถบยาว พันรอบโคนนิ้วให้พอดี (ไม่แน่นหรือหลวมเกินไป) ขีดเส้นมาร์คจุดที่กระดาษชนกัน แล้วนำมาวัดความยาว
              </p>
              <div className="aspect-video bg-slate-50 rounded-lg mb-4 flex items-center justify-center text-slate-400 text-xs md:text-sm">
                [IMG-04: Paper Measurement]
              </div>
              <p className="text-xs text-red-500 italic">
                *ระวัง: กระดาษมีความยืดหยุ่น อาจคลาดเคลื่อนได้ง่าย
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

const SizeTable = () => {
  return (
    <div className="relative z-10 mb-24 md:mb-32">
      <div className="flex flex-col items-center">
        <Reveal>
          <Badge color="gray">SIZE CHART</Badge>
        </Reveal>

        <Reveal delay={0.2} className="w-full max-w-4xl">
          <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto pb-2">
              <table className="w-full min-w-[350px] text-[10px] xs:text-xs md:text-base text-left">
                <thead className="bg-[#0B1021] text-white">
                  <tr>
                    <th className="px-2 py-3 md:px-6 md:py-4 font-medium whitespace-nowrap">Thai Size</th>
                    <th className="px-2 py-3 md:px-6 md:py-4 font-medium whitespace-nowrap">Diameter (mm)</th>
                    <th className="px-2 py-3 md:px-6 md:py-4 font-medium whitespace-nowrap">Circum. (mm)</th>
                    <th className="px-2 py-3 md:px-6 md:py-4 font-medium whitespace-nowrap">US Size</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ringSizes.map((size, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="px-2 py-2 md:px-6 md:py-3 font-bold text-[#0B1021] bg-yellow-50/30">
                        {size.thSize}
                      </td>
                      <td className="px-2 py-2 md:px-6 md:py-3 text-slate-600">{size.diameter}</td>
                      <td className="px-2 py-2 md:px-6 md:py-3 text-slate-600">{size.circumference}</td>
                      <td className="px-2 py-2 md:px-6 md:py-3 text-slate-600">{size.usSize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

const NodeTips = () => {
  const tips = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "ช่วงเวลาที่เหมาะสม",
      desc: "นิ้วมือมักจะขยายตัวเล็กน้อยในช่วงบ่ายหรือเย็น แนะนำให้วัดไซส์ในช่วงเวลานี้เพื่อให้ได้ขนาดที่ใส่สบายที่สุด"
    },
    {
      icon: <Bone className="w-6 h-6" />,
      title: "ข้อนิ้วใหญ่",
      desc: "หากคุณมีข้อนิ้วใหญ่กว่าโคนนิ้ว ให้เลือกไซส์ที่สามารถผ่านข้อนิ้วได้ แต่ไม่หลวมจนหมุนไปมาที่โคนนิ้ว"
    },
    {
      icon: <ArrowLeftRight className="w-6 h-6" />,
      title: "หน้ากว้างของแหวน",
      desc: "แหวนที่มีหน้ากว้าง (Wide Band) จะรู้สึกแน่นกว่าแหวนปกติ แนะนำให้เผื่อไซส์เพิ่มขึ้น 0.5 - 1 ไซส์"
    }
  ];

  return (
    <div className="relative z-10 mb-24">
      <div className="flex flex-col items-center">
        <Reveal>
          <Badge color="gray">PRO TIPS</Badge>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
          {tips.map((tip, index) => (
            <Reveal key={index} delay={index * 0.1} className="h-full">
              <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm h-full flex flex-col items-center text-center hover:shadow-md transition-shadow min-h-[120px]">
                <div className="w-12 h-12 bg-[#FDFBF7] rounded-full flex items-center justify-center mb-4 text-[#C5A059]">
                  {tip.icon}
                </div>
                <h5 className="font-serif text-[#0B1021] mb-2 text-lg md:text-xl truncate w-full">{tip.title}</h5>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-4">
                  {tip.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

const StickyBottom = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 py-4 px-4 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center text-sm text-slate-600">
          <Info className="w-4 h-4 mr-2 text-[#C5A059]" />
          <span>BOGUS Care: บริการปรับไซส์ฟรี 1 ครั้ง ภายใน 30 วัน</span>
        </div>
        <a
          href="https://line.me/R/ti/p/@bogus"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto bg-[#0B1021] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a233b] transition-colors text-center"
        >
          ทักไลน์สอบถามผู้เชี่ยวชาญ
        </a>
      </div>
    </div>
  );
};

// --- Main Page ---

const SizeGuidePage = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-32 font-sans selection:bg-[#C5A059] selection:text-white">
      <HeroSection />

      <div className="container mx-auto px-4 relative">
        <div className="relative z-10">
          <NodeSizerKit />
          <NodeDIY />
          <SizeTable />
          <NodeTips />
        </div>
      </div>

      <StickyBottom />
    </div>
  );
};

export default SizeGuidePage;
