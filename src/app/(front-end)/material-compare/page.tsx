'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldCheck,
  Coins,
  Activity,
  ListFilter,
  Weight,
  Star,
  PenTool,
  Heart,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import RelatedLinks from '@/components/RelatedLinks';

import type { ReactNode, ComponentType } from 'react';

type Material = {
  id: string;
  name: string;
  thaiName: string;
  purity: number;
  alloyColor: string;
  mainColor: string;
  textColor: string;
  borderColor: string;
  bgGradient: string;
  accentColor: string;
  description: ReactNode;
  ctaText: string;
};

type Criteria = {
  id: string;
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  values: Record<string, { text: ReactNode; score: number; color?: string }>;
};

// Rating Stars Component - displays stars from right to left
const RatingStars = ({ count, color = 'text-yellow-500' }: { count: number; color?: string }) => {
  return (
    <div className="flex flex-row-reverse gap-0.5 items-center justify-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? `${color} fill-current` : 'text-slate-200'}
        />
      ))}
    </div>
  );
};

const MaterialComparison = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleScroll = () => {
      // Only track scroll on mobile/tablet where scrolling is enabled
      if (window.innerWidth >= 768) return;

      const scrollLeft = container.scrollLeft;
      const cardWidth = 280 + 16;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveCardIndex(index);
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. ข้อมูลวัสดุ (Materials Data) - Enhanced with Emotional Benefits
  const materials: Material[] = [
    {
      id: 'silver',
      name: 'Silver 925',
      thaiName: 'เงินแท้ 92.5%',
      purity: 92.5,
      alloyColor: 'bg-slate-100',
      mainColor: 'bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500',
      textColor: 'text-slate-700',
      borderColor: 'border-slate-300',
      bgGradient: 'bg-gradient-to-br from-slate-50 to-slate-100',
      accentColor: 'bg-slate-400',
      description: <>โลหะยอดนิยม <br /> ที่ให้ความขาวสว่างในราคาที่จับต้องได้ แต่ต้องการการดูแลเอาใจใส่</>,
      ctaText: 'ปรึกษา & สั่งทำ (Silver 925)',
    },
    {
      id: '9k',
      name: 'Gold 9k',
      thaiName: 'ทอง 37.5%',
      purity: 37.5,
      alloyColor: 'bg-amber-50',
      mainColor: 'bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-500',
      textColor: 'text-amber-800',
      borderColor: 'border-amber-200',
      bgGradient: 'bg-gradient-to-br from-amber-50 to-yellow-50',
      accentColor: 'bg-amber-400',
      description: <>ทางเลือกสุดคุ้ม<br />แข็งแรงที่สุดในตระกูลทอง <br />เหมาะสำหรับใส่ลุยๆ ทุกวัน</>,
      ctaText: 'ปรึกษา & สั่งทำ (Gold 9k)',
    },
    {
      id: '14k',
      name: 'Gold 14k',
      thaiName: 'ทอง 58.5%',
      purity: 58.5,
      alloyColor: 'bg-yellow-100',
      mainColor: 'bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600',
      textColor: 'text-yellow-900',
      borderColor: 'border-yellow-300',
      bgGradient: 'bg-gradient-to-br from-yellow-50 to-amber-50',
      accentColor: 'bg-yellow-500',
      description: <>จุดสมดุลที่ลงตัว <br />ระหว่างความแข็งแรงและสีทองที่สวยงาม <br />มาตรฐานยอดนิยมในอเมริกา</>,
      ctaText: 'ปรึกษา & สั่งทำ (Gold 14k)',
    },
    {
      id: '18k',
      name: 'Gold 18k',
      thaiName: 'ทอง 75%',
      purity: 75,
      alloyColor: 'bg-orange-100',
      mainColor: 'bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600',
      textColor: 'text-orange-900',
      borderColor: 'border-orange-300',
      bgGradient: 'bg-gradient-to-br from-orange-50 to-amber-100',
      accentColor: 'bg-orange-500',
      description: <>มาตรฐานสากลของ Fine Jewelry <br />ให้สีทองที่อิ่มสวยและมูลค่าสูงที่สุด <br />ในกลุ่มทอง</>,
      ctaText: 'ปรึกษา & สั่งทำ (Gold 18k)',
    },
    {
      id: 'platinum',
      name: 'Platinum',
      thaiName: 'แพลตตินัม 95%',
      purity: 95,
      alloyColor: 'bg-zinc-100',
      mainColor: 'bg-gradient-to-br from-zinc-400 via-slate-500 to-zinc-600',
      textColor: 'text-zinc-900',
      borderColor: 'border-zinc-300',
      bgGradient: 'bg-gradient-to-br from-zinc-50 to-slate-100',
      accentColor: 'bg-zinc-500',
      description: <>ที่สุดของโลหะขาวบริสุทธิ์ <br />หายาก ทนทาน และหนักแน่น</>,
      ctaText: 'ปรึกษา & สั่งทำ (Platinum)',
    }
  ];

  // 2. ข้อมูลเปรียบเทียบ (Comparison Criteria) - Re-framed for Emotional Benefits
  const criteria: Criteria[] = [
    {
      id: 'price',
      label: 'ความคุ้มค่า & ราคา',
      icon: Coins,
      values: {
        silver: { text: '฿', score: 1, color: 'text-slate-600' },
        '9k': { text: '฿฿', score: 2, color: 'text-slate-600' },
        '14k': { text: '฿฿฿', score: 3, color: 'text-slate-600' },
        '18k': { text: '฿฿฿฿', score: 4, color: 'text-slate-600' },
        platinum: { text: '฿฿฿฿฿', score: 5, color: 'text-slate-600' }
      }
    },
    {
      id: 'weight',
      label: 'สัมผัสแห่งมูลค่า (น้ำหนัก)',
      icon: Weight,
      values: {
        silver: { text: <RatingStars count={2} color="text-slate-500" />, score: 2, color: '' },
        '9k': { text: <RatingStars count={2} color="text-slate-400" />, score: 1, color: '' },
        '14k': { text: <RatingStars count={3} color="text-slate-600" />, score: 3, color: '' },
        '18k': { text: <RatingStars count={4} color="text-slate-700" />, score: 4, color: '' },
        platinum: { text: <RatingStars count={5} color="text-slate-800" />, score: 5, color: '' }
      }
    },
    {
      id: 'durability',
      label: 'ความทนทานต่อการใช้งานจริง',
      icon: ShieldCheck,
      values: {
        silver: { text: <RatingStars count={2} color="text-slate-500" />, score: 2, color: '' },
        '9k': { text: <RatingStars count={5} color="text-yellow-600" />, score: 5, color: '' },
        '14k': { text: <RatingStars count={5} color="text-yellow-600" />, score: 5, color: '' },
        '18k': { text: <RatingStars count={4} color="text-yellow-600" />, score: 4, color: '' },
        platinum: { text: <RatingStars count={5} color="text-slate-600" />, score: 5, color: '' }
      }
    },
    {
      id: 'tarnish',
      label: 'ความเปล่งประกาย & การดูแล',
      icon: Sparkles,
      values: {
        silver: { text: <span>หมองตามธรรมชาติ<br />(ขัดออกได้)</span>, score: 1, color: 'text-slate-500' },
        '9k': { text: 'เงางามทนทาน', score: 3, color: 'text-yellow-600' },
        '14k': { text: 'เงางามยาวนาน', score: 4, color: 'text-yellow-600' },
        '18k': { text: 'เปล่งประกายตลอดกาล', score: 5, color: 'text-green-600' },
        platinum: { text: 'เปล่งประกายตลอดกาล', score: 5, color: 'text-green-600' }
      }
    },
    {
      id: 'sensitivity',
      label: 'ความอ่อนโยนต่อผิว',
      icon: Activity,
      values: {
        silver: { text: 'ปานกลาง', score: 3, color: 'text-slate-500' },
        '9k': { text: 'ดี', score: 3, color: 'text-slate-500' },
        '14k': { text: 'ดี', score: 4, color: 'text-green-600' },
        '18k': { text: 'ดีมาก', score: 5, color: 'text-green-600' },
        platinum: { text: 'ดีที่สุด', score: 5, color: 'text-green-600 font-semibold' }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-slate-200 pb-2">

      {/* Hero Section */}
      <section className="pt-10 pb-8 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl  text-slate-800 mb-3 leading-tight">
            เลือก คุณค่า <br />ที่สะท้อนตัวตนของคุณ
          </h2>
          <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">
            เปรียบเทียบความแตกต่าง  <br /> เพื่อค้นหาสิ่งที่ตอบโจทย์ไลฟ์สไตล์ <br />และงบประมาณของคุณได้ดีที่สุด
          </p>
        </div>
      </section>

      {/* 1. Visual Breakdown Cards - Snap scroll on mobile, Flex wrap on desktop */}
      <section className="container mx-auto px-4 mb-12 max-w-7xl">
        <div ref={scrollContainerRef} className="overflow-x-scroll snap-x snap-mandatory scroll-smooth hide-scrollbar pb-4 -mx-4 px-4 md:overflow-visible md:snap-none md:px-0">
          <div className="flex gap-4 md:flex-wrap md:justify-center">
            {materials.slice().reverse().map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`${item.bgGradient} w-[280px] flex-shrink-0 snap-center p-5 rounded-xl border-2 ${item.borderColor} shadow-lg hover:shadow-xl transition-all flex flex-col relative overflow-hidden group`}
              >
                {/* Decorative gradient overlay */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${item.mainColor} opacity-10 rounded-full blur-3xl -mr-16 -mt-16`}></div>

                <div className="mb-3 flex justify-between items-start relative z-10">
                  <div>
                    <h3 className={`text-2xl font-bold ${item.textColor}`}>{item.name}</h3>
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">{item.thaiName}</span>
                  </div>
                  <div className={`text-xs px-3 py-1.5 rounded-full ${item.accentColor} text-white font-bold shadow-md`}>
                    {item.purity}%
                  </div>
                </div>

                {/* Enhanced Purity Bar Chart */}
                <div className="mb-4 relative z-10">
                  <div className="h-4 w-full flex rounded-full overflow-hidden bg-white/50 shadow-inner border border-white/30">
                    <div className={`h-full ${item.mainColor} shadow-md`} style={{ width: `${item.purity}%` }}></div>
                    <div className={`h-full ${item.alloyColor} flex-1`}></div>
                  </div>
                </div>

                <p className={`text-sm ${item.textColor} leading-relaxed relative z-10 font-medium mb-4 min-h-[80px]`}>
                  {item.description}
                </p>
              </div>
            ))}
            {/* Spacer for mobile centering - ensures last card can be centered */}
            <div className="min-w-[calc(50vw-140px)] h-1 flex-shrink-0 md:hidden" aria-hidden="true"></div>
          </div>
        </div>

        {/* Dot Indicators - Mobile Only */}
        <div className="flex justify-center mt-4 gap-2 md:hidden">
          {materials.slice().reverse().map((material, i) => (
            <div
              key={material.id}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeCardIndex
                ? `${material.accentColor} scale-125`
                : 'bg-slate-300'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* 2. Comparison Section (Adaptive Layout) */}
      <section className="container mx-auto px-4 max-w-5xl mb-12">
        <h3 className="text-lg text-slate-800 mb-4 md:mb-6 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
          <ListFilter size={20} className="text-slate-400" /> เจาะลึกคุณสมบัติ
        </h3>

        {/* === MOBILE VIEW (Topic Cards) === */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {criteria.map((c) => (
            <div key={c.id} className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                <c.icon size={18} className="text-slate-500" />
                <span className="font-medium text-slate-700">{c.label}</span>
              </div>
              <div className="divide-y divide-slate-50">
                {materials.slice().reverse().map((m: Material) => {
                  const val = c.values[m.id];
                  return (
                    <div key={m.id} className="flex items-center justify-between px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${m.accentColor}`}></div>
                        <span className="text-sm text-slate-600 font-medium">{m.name}</span>
                      </div>
                      <span className={`text-sm ${val.color}`}>{val.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* === DESKTOP VIEW (Table) === */}
        <div className="hidden md:block bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="px-4 py-4 font-medium tracking-wider w-40">คุณสมบัติ</th>
                  {materials.slice().reverse().map(m => (
                    <th key={m.id} className={`px-4 py-4 font-medium text-center min-w-[100px] ${m.textColor}`}>
                      {m.name.replace('Gold ', '').replace('Silver ', '')}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {criteria.map((c, idx) => (
                  <tr key={c.id} className={`hover:bg-slate-50/50 ${idx % 2 === 1 ? 'bg-slate-50/30' : ''}`}>
                    <td className="px-4 py-4 font-medium text-slate-700 flex items-center gap-2">
                      <c.icon size={16} className="text-slate-400 shrink-0" /> {c.label}
                    </td>
                    {materials.slice().reverse().map((m: Material) => {
                      const val = c.values[m.id];
                      return (
                        <td key={m.id} className={`px-4 py-4 text-center ${val.color}`}>
                          {val.text}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Summary Recommendation */}
      <section className="container mx-auto px-4 max-w-4xl mb-16">
        <div className="p-6 md:p-8 bg-white border border-dashed border-slate-300 rounded-xl">
          <h4 className=" text-lg text-slate-800 mb-6 text-center">สรุป: เลือกอันไหนดี?</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <strong className="text-slate-700">Silver 925</strong>
              </div>
              <p className="text-slate-500 font-light leading-relaxed">ทางเลือกของสายแฟชั่น <br /> เน้นเปลี่ยนสไตล์ได้บ่อย <br /> ในราคาที่จับต้องได้ง่ายที่สุด</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <strong className="text-yellow-700">Gold 9k</strong>
              </div>
              <p className="text-slate-500 font-light leading-relaxed">
                แกร่ง ทนทาน คุ้มค่าที่สุด <br /> เหมาะสำหรับใส่ติดนิ้วลุยงานหนักได้ทุกวัน
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-600"></div>
                <strong className="text-yellow-800">Gold 14k / 18k</strong>
              </div>
              <p className="text-slate-500 font-light leading-relaxed">มาตรฐาน Fine Jewelry ระดับโลก <br /> ให้สีทองสวยหรู ขับผิว และเป็นสินทรัพย์ที่มีมูลค่าในตัว</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-zinc-500"></div>
                <strong className="text-zinc-700">Platinum</strong>
              </div>
              <p className="text-slate-500 font-light leading-relaxed">ที่สุดของความบริสุทธิ์และทนทาน <br /> ไม่เปลี่ยนสีตลอดกาล <br /> เหมาะสำหรับแหวนแต่งงานที่ต้องการสื่อถึงรักนิรันดร์</p>
            </div>
          </div>
        </div>

        {/* --- Section 4: Sticky CTA --- */}


      </section>

      {/* 4. Related Links */}
      <RelatedLinks
        links={[
          {
            title: 'สั่งทำเครื่องประดับ',
            description: 'ขั้นตอนการสั่งทำเครื่องประดับในแบบของคุณเอง ตั้งแต่การออกแบบจนถึงขั้นตอนการผลิต',
            href: '/how-to-custom-order',
            icon: PenTool,
            color: 'bg-amber-100 text-amber-600'
          },
          {
            title: 'การดูแลรักษา',
            description: 'คู่มือการดูแลรักษาเครื่องประดับให้สวยงามยาวนาน ทั้งทอง เงิน และพลอย',
            href: '/care-card',
            icon: Heart,
            color: 'bg-rose-100 text-rose-600'
          }
        ]}
      />

    </div>
  );
};

export default MaterialComparison;