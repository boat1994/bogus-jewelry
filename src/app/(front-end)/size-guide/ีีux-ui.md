นี่คือไฟล์ **`spec.md` สำหรับระบบ Animation** โดยเฉพาะครับ

หลักการสำคัญของ UX/UI สำหรับแบรนด์ Luxury คือ **"Motion must have meaning" (การเคลื่อนไหวต้องมีความหมาย)** ไม่ใช่แค่ขยับไปมา แต่ต้องช่วยนำสายตา (Guide), สร้างความต่อเนื่อง (Continuity), และให้ความรู้สึกนุ่มนวลมีราคา (Elegance)

เราจะไม่ใช้ Animation ที่ "เด้งดึ๋ง" หรือ "รวดเร็ว" แบบเว็บ Tech/Startup แต่เราจะเน้นความ **"Slow, Smooth & Fluid"** ครับ

-----

# SPEC.MD: Animation & Motion Design System

**Project:** BOGUS - Luxury Jewelry Broker
**Module:** Global Animation & Size Guide Interaction
**Library:** `framer-motion` (Recommended for Next.js/React)
**Design Principle:** "The Elegant Flow" - การเคลื่อนไหวที่นุ่มนวล เหมือนการไหลของน้ำหรือผ้าไหม

-----

## 1\. Motion Principles (หลักการเคลื่อนไหว)

### **1.1 Timing & Duration (จังหวะเวลา)**

  * **Standard Web:** ปกติใช้ 0.3s - 0.4s (เร็ว, กระชับ)
  * **BOGUS Luxury:** เราจะใช้ **0.6s - 1.2s** (ช้า, สง่างาม, ค่อยเป็นค่อยไป)
  * **Delay/Stagger:** การปรากฏของเนื้อหาต้องไม่มาพร้อมกัน แต่ต้อง "ไล่ระดับ" (Cascade) ทีละนิด (0.1s - 0.2s delay ระหว่างบรรทัด)

### **1.2 Easing (ความหน่วง)**

  * ห้ามใช้ `linear` หรือ `ease-in-out` แบบมาตรฐาน
  * ใช้ **Custom Bezier Curve** เพื่อความสมจริง: `[0.22, 1, 0.36, 1]` (ออกตัวเร็ว แล้วค่อยๆ ชะลอหยุดอย่างนุ่มนวล)
  * หรือใช้ **Spring Physics** ที่มีความหนืดสูง (High Damping) ไม่เด้งกลับ

-----

## 2\. Animation Types (ไลบรารีรูปแบบการเคลื่อนไหว)

### **Type A: Fade Up Reveal (การปรากฏตัว)**

*ใช้กับ: Text, Cards, Images เมื่อเลื่อนหน้าจอมาถึง*

  * **Initial:** `opacity: 0`, `y: 40px` (อยู่ต่ำกว่าตำแหน่งจริง 40px)
  * **Animate:** `opacity: 1`, `y: 0px`
  * **Transition:** Duration 0.8s, Ease `[0.22, 1, 0.36, 1]`

### **Type B: Draw Line (เส้นนำสายตา)**

*ใช้กับ: เส้นแกนกลางของ Timeline (Vertical Line)*

  * **Concept:** เส้นจะค่อยๆ "วาดตัวเอง" ลงมาตามการ Scroll ของผู้ใช้ (Scroll-linked)
  * **Implementation:** ใช้ SVG `strokeDasharray` และ `strokeDashoffset` ผูกกับ `useScroll` ของ Framer Motion

### **Type C: Parallax Image (ภาพมีมิติ)**

*ใช้กับ: รูปภาพใน Hero Section หรือ Background*

  * **Concept:** รูปภาพเคลื่อนที่ช้ากว่าการ Scroll เล็กน้อย (y: -10% ถึง 10%) เพื่อสร้างมิติความลึก

### **Type D: Soft Zoom (Ken Burns Effect)**

*ใช้กับ: รูปภาพสินค้า หรือ Hero Image*

  * **Action:** รูปภาพค่อยๆ ขยายขนาดขึ้นช้าๆ จาก `scale: 1` ไป `scale: 1.05` ในเวลา 10-15 วินาที (ช้ามากจนแทบไม่รู้ตัว แต่รู้สึกว่าภาพมีชีวิต)

-----

## 3\. Implementation Map: Size Guide Page

แผนการใส่ Animation ในหน้า Size Guide เพื่อสร้าง Storytelling:

### **3.1 Hero Section**

1.  **Image:** โหลดมาแล้วค่อยๆ Soft Zoom (Type D)
2.  **Text (H1):** Fade Up (Type A) - Delay 0.2s
3.  **Subtitle:** Fade Up (Type A) - Delay 0.4s

### **3.2 The Timeline (หัวใจสำคัญ)**

1.  **Central Line:**
      * ใช้ **Type B (Draw Line)**
      * เส้นสีเทาจางๆ (`bg-slate-200`) เป็นเส้นฐาน (Guide)
      * เส้นสีทอง (`bg-yellow-600`) วิ่งทับเส้นฐานลงมา ตามตำแหน่ง Scroll ของผู้ใช้งาน (Progressive)
2.  **Steps (Nodes):**
      * เมื่อเส้นสีทองวิ่งผ่าน Node ใด ให้ Node นั้น **Fade In + Scale Up** เล็กน้อย
      * **Cards:** ใช้ **Type A (Fade Up)** เมื่อ Viewport มองเห็น (Viewport Enter)

### **3.3 Micro-interactions (ปุ่มและการ์ด)**

  * **Button Hover:**
      * ไม่เปลี่ยนสีทันที (Don't snap)
      * ใช้ `transition: background-color 0.4s ease`
      * Scale Up เล็กน้อย `scale: 1.02` (แบบนุ่มนวล)
  * **Card Hover:**
      * ยกตัวขึ้นเล็กน้อย `y: -5px`
      * เงา (Shadow) ฟุ้งกระจายมากขึ้น

-----

## 4\. Technical Snippets (Framer Motion)

### **4.1 Config (ตั้งค่ากลาง)**

```javascript
// animationConfig.js
export const luxuryTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] // Custom Bezier for luxury feel
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Delay between each child
    }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: luxuryTransition }
};
```

### **4.2 The Scroll Line Component (เส้น Timeline)**

```tsx
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollLine = () => {
  const { scrollYProgress } = useScroll();
  // ใช้ Spring เพื่อให้เส้นวิ่งตาม Scroll แบบนุ่มๆ ไม่แข็งทื่อ
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 -translate-x-1/2">
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute top-0 left-0 w-full h-full bg-[#C5A059]" // สีทอง
      />
    </div>
  );
};
```

-----

## 5\. Accessibility (A11y) - ข้อควรระวัง

Animation ที่ดีต้องไม่รบกวนผู้ใช้บางกลุ่ม:

1.  **Prefers-reduced-motion:**
      * ตรวจสอบการตั้งค่า OS ของผู้ใช้ หากเขาปิด Animation เราต้องปิดด้วย
      * *Framer Motion Solution:* ใช้ `<MotionConfig reducedMotion="user">` เพื่อจัดการอัตโนมัติ
2.  **Performance:**
      * Animate เฉพาะค่า `opacity` และ `transform` (translate, scale) เท่านั้น
      * หลีกเลี่ยงการ Animate ค่า `width`, `height`, `left`, `top` เพราะจะทำให้เว็บกระตุก (Repaint)

-----

## 6\. Todo List for Developer

  - [ ] **Install:** `npm install framer-motion`
  - [ ] **Config:** สร้างไฟล์ `utils/animations.ts` เพื่อเก็บค่า `luxuryTransition` และ Variants ต่างๆ
  - [ ] **Component:** สร้าง `<Reveal>` component เพื่อใช้ห่อเนื้อหาที่ต้องการให้ Fade Up ง่ายๆ
      * *Example Usage:* `<Reveal><h1 .../></Reveal>`
  - [ ] **Timeline:** สร้าง Logic ของเส้นกลาง (Central Line) ให้ผูกกับ Scroll Progress
  - [ ] **Optimization:** เพิ่ม `will-change: transform` ใน CSS ของ Elements ที่มีการเคลื่อนไหวเยอะๆ
  - [ ] **Check:** ทดสอบบนมือถือ (Mobile) ว่า Animation ไม่ทำให้การ Scroll ติดขัด

-----

**สรุป:** การใช้ Animation ตาม Spec นี้ จะทำให้หน้า Size Guide ของ BOGUS ไม่ใช่แค่หน้าข้อมูลนิ่งๆ แต่จะมีความรู้สึกเหมือน **"การคลี่ม้วนกระดาษโบราณ"** หรือ **"การเล่าเรื่อง"** ที่ค่อยๆ เปิดเผยเนื้อหาอย่างมีจังหวะจะโคน ซึ่งช่วยเพิ่มมูลค่าแบรนด์ได้มหาศาลครับ