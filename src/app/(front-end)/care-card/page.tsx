'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Diamond,
  SprayCan,
  Sparkles,
  Archive,
  Droplets,
  Ban,
  Wind,
  CheckCircle2,
  Gem,
  Coins,
  ShieldCheck,
  Layers
} from 'lucide-react';
import { luxuryTransition, quickTransition } from '@utils/animations';

// --- Animation Component ---
const Reveal = ({ children, delay = 0, className = "", immediate = false }: { children: React.ReactNode, delay?: number, className?: string, immediate?: boolean }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView={immediate ? undefined : "show"}
      animate={immediate ? "show" : undefined}
      viewport={immediate ? undefined : { once: true, margin: "0px" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: { ...quickTransition, delay }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Common Diamond Text Component
const DiamondInfo = () => (
  <p className="pt-2 mt-2 border-t border-dashed border-slate-200 text-sm">
    <strong className="text-slate-800">Diamond Care:</strong> เพชร ทั้งเพชรธรรมชาติและ Lab Grown Diamond มีคุณสมบัติดูดไขมันไว้ที่ผิวได้ง่ายจึงต้องทำความสะอาดสม่ำเสมอเพื่อให้เพชรเปล่งประกาย
  </p>
);

// ข้อมูลสำหรับ Silver 925
const silverSections = [
  {
    id: 1,
    title: "รู้จักแหวนวงโปรด",
    subtitle: "Know Your Ring",
    icon: <Diamond size={64} strokeWidth={1} className="text-slate-700" />,
    content: (
      <div className="space-y-3 text-slate-600">
        <p>
          <strong className="text-slate-800">Silver 925:</strong> สวยงามแต่ทำปฏิกิริยากับอากาศได้ (หมองลง) เป็นเรื่องปกติของธรรมชาติเงินแท้
        </p>
        <DiamondInfo />
      </div>
    )
  },
  {
    id: 2,
    title: "กฎเหล็กในการสวมใส่",
    subtitle: "The Golden Rules",
    icon: <SprayCan size={64} strokeWidth={1} className="text-slate-700" />,
    content: (
      <ul className="space-y-2 text-slate-600 list-none">
        <li className="flex items-start gap-2">
          <Ban size={18} className="mt-1 text-red-400 shrink-0" />
          <span>เลี่ยงสารเคมีรุนแรง (คลอรีน, น้ำยาย้อมผม)</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={18} className="mt-1 text-green-600 shrink-0" />
          <span><strong>&quot;สวยก่อนใส่&quot;</strong> ฉีดน้ำหอม ทาโลชั่น ให้แห้งสนิทก่อนสวมแหวนเสมอ</span>
        </li>
        <li className="flex items-start gap-2">
          <Ban size={18} className="mt-1 text-red-400 shrink-0" />
          <span>ถอดก่อนยกของหนักหรือออกกำลังกาย</span>
        </li>
      </ul>
    )
  },
  {
    id: 3,
    title: "เคล็ดลับคืนความเปล่งประกาย",
    subtitle: "Cleaning Ritual",
    icon: <Sparkles size={64} strokeWidth={1} className="text-slate-700" />,
    content: (
      <div className="space-y-3 text-slate-600">
        <div className="flex items-center gap-3">
          <div className="bg-slate-100 p-2 rounded-full"><Droplets size={16} /></div>
          <span>แช่น้ำอุ่นผสมน้ำยาล้างจาน 5-10 นาที</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-slate-100 p-2 rounded-full"><Sparkles size={16} /></div>
          <span>ใช้แปรงขนอ่อนขัดเบาๆ ที่หน้าเพชรและใต้กระเปาะ</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-slate-100 p-2 rounded-full"><Wind size={16} /></div>
          <span>ล้างน้ำสะอาด และ <strong>&quot;เป่าแห้งทันที&quot;</strong></span>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "การจัดเก็บอย่างถูกวิธี",
    subtitle: "Smart Storage",
    icon: <Archive size={64} strokeWidth={1} className="text-slate-700" />,
    content: (
      <div className="space-y-3 text-slate-600">
        <p>
          เมื่อไม่ได้สวมใส่ ศัตรูตัวสำคัญคือ <strong>&quot;อากาศ&quot;</strong>
        </p>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-center">
          โปรดเก็บใส่ <strong>ถุงซิปล็อค (Ziplock)</strong> <br />และรีดอากาศออกให้หมด
        </div>
        <p className="text-sm text-slate-500 text-center">
          *ช่วยป้องกันความชื้น สาเหตุหลักที่ทำให้เงินดำ*
        </p>
      </div>
    )
  }
];

// ข้อมูลสำหรับ Gold (9k, 14k, 18k)
const goldSections = [
  {
    id: 1,
    title: <>ประเภทงานทอง<br /> (Solid vs Plated)</>,
    subtitle: "Know Your Type",
    icon: <Layers size={64} strokeWidth={1} className="text-yellow-600" />,
    content: (
      <div className="space-y-3 text-slate-600">
        <div className="mb-3">
          <strong className="text-slate-800 block mb-1">🏆 งานทองเนื้อแท้ (Solid Gold):</strong>
          <span className="text-sm">สีเป็นเนื้อเดียวกันทั้งชิ้น ทนทานที่สุด หากเก่าสามารถขัดชุบให้เหมือนใหม่ได้เสมอ</span>
        </div>
        <div className="border-t border-dashed border-yellow-200 pt-2">
          <strong className="text-slate-800 block mb-1">✨ งานชุบทอง (Gold Plated):</strong>
          <span className="text-sm">เคลือบผิวบางๆ บนโลหะอื่น <strong>&quot;ห้ามขัดแรงเด็ดขาด&quot;</strong> เพราะสีจะหลุดลอกได้ตามอายุการใช้งาน</span>
        </div>
        <DiamondInfo />
      </div>
    )
  },
  {
    id: 2,
    title: "ข้อควรระวังเฉพาะ",
    subtitle: "Gold Handling Rules",
    icon: <Ban size={64} strokeWidth={1} className="text-yellow-600" />,
    content: (
      <ul className="space-y-2 text-slate-600 list-none">
        <li className="flex items-start gap-2">
          <Ban size={18} className="mt-1 text-red-400 shrink-0" />
          <span><strong>ระวังคลอรีน:</strong> ศัตรูตัวร้ายของทอง ทำให้โครงสร้างเปราะและแตกหักได้</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={18} className="mt-1 text-green-600 shrink-0" />
          <span><strong>สำหรับงานชุบ:</strong> หลีกเลี่ยงการเสียดสีและน้ำหอมโดยตรง เพื่อยืดอายุผิวเคลือบ</span>
        </li>
      </ul>
    )
  },
  {
    id: 3,
    title: "คืนความเงางามให้ทอง",
    subtitle: "Gold Cleaning Ritual",
    icon: <Sparkles size={64} strokeWidth={1} className="text-yellow-600" />,
    content: (
      <div className="space-y-3 text-slate-600">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-50 p-2 rounded-full"><Droplets size={16} className="text-yellow-700" /></div>
          <span>แช่น้ำอุ่นผสมน้ำยาล้างจาน 10-15 นาที</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-yellow-50 p-2 rounded-full"><Sparkles size={16} className="text-yellow-700" /></div>
          <span>ขัดเบาๆ (งานชุบห้ามใช้ผ้าขัดเงาเช็ดแรงๆ)</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-yellow-50 p-2 rounded-full"><Wind size={16} className="text-yellow-700" /></div>
          <span>ล้างสะอาดและซับให้แห้งทันที</span>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "การเก็บรักษาทอง",
    subtitle: "Gold Storage",
    icon: <Archive size={64} strokeWidth={1} className="text-yellow-600" />,
    content: (
      <div className="space-y-3 text-slate-600">
        <p>
          ป้องกันรอยขีดข่วน โดยเฉพาะทอง 18k ที่มีความนิ่ม
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-center">
          <strong>&quot;แยกชิ้นกันรอย&quot;</strong> <br /> เก็บแยกในกล่องบุผ้า หรือถุงแยกชิ้น เพราะทองขูดกันเองจะเป็นรอยขนแมว
        </div>
      </div>
    )
  }
];

// ข้อมูลสำหรับ Platinum
const platinumSections = [
  {
    id: 1,
    title: "รู้จักแพลตตินัม",
    subtitle: "The Noble Metal",
    icon: <ShieldCheck size={64} strokeWidth={1} className="text-zinc-500" />,
    content: (
      <div className="space-y-3 text-slate-600">
        <p>
          <strong className="text-slate-800">Pure & Rare:</strong> แพลตตินัมเป็นโลหะขาวบริสุทธิ์ ไม่ลอก ไม่ดำ และไม่ก่อให้เกิดการแพ้ (Hypoallergenic)
        </p>
        <p>
          <strong className="text-slate-800">Patina Effect:</strong> เมื่อใช้ไปนานๆ จะเกิดรอยขนแมวละเอียด (Satin finish) ซึ่งเป็นเสน่ห์ของความทนทานเนื้อโลหะไม่หายไปไหน
        </p>
        <DiamondInfo />
      </div>
    )
  },
  {
    id: 2,
    title: "ความทนทานที่เหนือกว่า",
    subtitle: "Strength & Durability",
    icon: <Gem size={64} strokeWidth={1} className="text-zinc-500" />,
    content: (
      <ul className="space-y-2 text-slate-600 list-none">
        <li className="flex items-start gap-2">
          <CheckCircle2 size={18} className="mt-1 text-green-600 shrink-0" />
          <span><strong>หนามเตยแข็งแรงที่สุด:</strong> เหมาะที่สุดสำหรับยึดเกาะเพชรเม็ดสำคัญ ไม่คลายตัวง่าย</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={18} className="mt-1 text-green-600 shrink-0" />
          <span><strong>เนื้อโลหะเหนียว:</strong> เมื่อเกิดรอยขีดข่วน เนื้อโลหะเพียงแค่ &quot;เคลื่อนตัว&quot; ออกด้านข้าง ไม่ได้หลุดหายไปเหมือนทอง</span>
        </li>
      </ul>
    )
  },
  {
    id: 3,
    title: "ดูแลแพลตตินัม",
    subtitle: "Platinum Care",
    icon: <Sparkles size={64} strokeWidth={1} className="text-zinc-500" />,
    content: (
      <div className="space-y-3 text-slate-600">
        <div className="flex items-center gap-3">
          <div className="bg-zinc-100 p-2 rounded-full"><Droplets size={16} className="text-zinc-600" /></div>
          <span>ทนทานต่อสารเคมีในชีวิตประจำวันได้ดี</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-zinc-100 p-2 rounded-full"><Sparkles size={16} className="text-zinc-600" /></div>
          <span>ทำความสะอาดด้วยน้ำสบู่และแปรงนุ่มเพื่อขจัดคราบมันที่เกาะเพชร</span>
        </div>
        <div className="bg-zinc-50 p-3 rounded text-xs text-zinc-500 mt-2">
          *หากต้องการให้เงาเหมือนใหม่ สามารถส่งขัดชุบได้โดยน้ำหนักไม่หาย*
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "การจัดเก็บ",
    subtitle: "Separate Storage",
    icon: <Archive size={64} strokeWidth={1} className="text-zinc-500" />,
    content: (
      <div className="space-y-3 text-slate-600">
        <p>
          แม้แพลตตินัมจะแข็งแกร่ง แต่ก็สามารถขูดขีดโลหะชนิดอื่นที่อ่อนกว่าได้
        </p>
        <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200 text-center">
          <strong>&quot;เก็บแยกเสมอ&quot;</strong> <br /> เพื่อป้องกันไม่ให้แพลตตินัมไปขูดขีดทองหรือเครื่องเงินชิ้นอื่นของคุณ
        </div>
      </div>
    )
  }
];

const JewelryCareCard = () => {
  const [activeTab, setActiveTab] = useState<'silver' | 'gold' | 'platinum'>('silver');

  const getSections = () => {
    switch (activeTab) {
      case 'gold': return goldSections;
      case 'platinum': return platinumSections;
      default: return silverSections;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-slate-200">
      {/* Hero Section */}
      <section className="pt-12 pb-6 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Reveal immediate={true}>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-4 leading-tight">
              ดูแลเครื่องประดับชิ้นโปรด<br />ให้สวยเหมือนวันแรก
            </h2>
          </Reveal>
          <Reveal delay={0.1} immediate={true}>
            <p className="text-slate-500 font-light leading-relaxed mb-8">
              เลือกประเภทวัสดุของคุณเพื่อดูวิธีการดูแลที่ถูกต้อง
            </p>
          </Reveal>

          {/* Material Selector Toggle */}
          <Reveal delay={0.1} immediate={true}>
            <div className="flex justify-center gap-2 mb-6 w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('silver')}
                className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-100 flex items-center gap-1.5 whitespace-nowrap ${activeTab === 'silver'
                  ? 'bg-slate-800 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
              >
                <Diamond size={16} className="w-4 h-4" />
                Silver 925
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('gold')}
                className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-100 flex items-center gap-1.5 whitespace-nowrap ${activeTab === 'gold'
                  ? 'bg-yellow-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-yellow-700 hover:bg-yellow-50'
                  }`}
              >
                <Coins size={16} className="w-4 h-4" />
                Gold 9k-18k
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('platinum')}
                className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-100 flex items-center gap-1.5 whitespace-nowrap ${activeTab === 'platinum'
                  ? 'bg-zinc-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-zinc-700 hover:bg-zinc-50'
                  }`}
              >
                <ShieldCheck size={16} className="w-4 h-4" />
                Platinum
              </motion.button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="container mx-auto px-4 pb-16 max-w-4xl">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >

          {getSections().map((section, index) => (
            <div
              key={`${activeTab}-${section.id}`}
              className={`p-8 rounded-sm shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05)] transition-all duration-100 border flex flex-col items-center text-center group bg-white ${activeTab === 'gold' ? 'border-yellow-50 hover:border-yellow-200' :
                activeTab === 'platinum' ? 'border-zinc-50 hover:border-zinc-200' :
                  'border-slate-100 hover:border-slate-100'
                }`}
            >
              {/* Image Area Placeholder */}
              <div className={`w-full h-48 mb-6 flex items-center justify-center rounded-sm border border-dashed transition-colors ${activeTab === 'gold' ? 'bg-yellow-50/30 border-yellow-200 group-hover:border-yellow-100' :
                activeTab === 'platinum' ? 'bg-zinc-50/30 border-zinc-200 group-hover:border-zinc-100' :
                  'bg-slate-50 border-slate-200 group-hover:border-slate-100'
                }`}>
                <div className="opacity-50 group-hover:opacity-80 transition-opacity duration-500 transform group-hover:scale-110">
                  {section.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-medium text-slate-800 mb-1">{section.title}</h3>
              <span className={`text-xs font-bold tracking-widest uppercase mb-6 block ${activeTab === 'gold' ? 'text-yellow-600' :
                activeTab === 'platinum' ? 'text-zinc-500' :
                  'text-slate-400'
                }`}>{section.subtitle}</span>

              <div className="text-sm leading-relaxed w-full text-left">
                {section.content}
              </div>
            </div>
          ))}

        </div>
      </main>
    </div>
  );
};

export default JewelryCareCard;