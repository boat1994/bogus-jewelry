นี่คือ **`spec.md` ฉบับ "The Journey of Fit"** ที่ออกแบบใหม่ทั้งหมดครับ
-----

# SPEC.MD: Size Guide Page (Vertical Timeline Edition)

**Project:** BOGUS - Luxury Jewelry Broker
**Page Endpoint:** `/size-guide`
**Design Style:** Pinterest Vertical Timeline (เชื่อมต่อด้วยเส้นแกนกลาง)
**Theme:** Warm Luxury (`#FDFBF7` Background + Watercolor/Soft Imagery)

-----

## 1\. Design Concept (คอนเซ็ปต์การออกแบบ)

แทนที่จะแบ่งหน้าเป็นบล็อกๆ เราจะร้อยเรียงเนื้อหาเป็น **"เส้นทางแนวตั้ง" (Vertical Journey)** เหมือนหน้า Custom Order:

1.  **The Central Line:** มีเส้นแกนกลางลากยาวตลอดหน้า เพื่อนำสายตา
2.  **Step Nodes:** ใช้ป้าย "Option 1", "Option 2" เป็นจุดเชื่อมบนเส้น
3.  **Flow:**
      * **Start:** ความสำคัญของไซส์ (Hero)
      * **Option 1 (Best):** สั่งชุดวัดไซส์ฟรี (Lead Magnet)
      * **Option 2 (Fast):** วัดเอง (Diameter & Circumference)
      * **Reference:** ตารางเทียบไซส์
      * **Assurance:** นโยบายปรับไซส์

-----

## 2\. Page Structure & Components (โครงสร้าง)

### **Section 1: The Hook (Hero Section)**

  * **Style:** Minimal Center Text
  * **Content:**
      * `Tag`: FINDING YOUR PERFECT FIT
      * `H1`: สุนทรียภาพแห่งความพอดี
      * `Sub`: "เพราะความสบายในการสวมใส่ คือจุดเริ่มต้นของความมั่นใจ"

### **Section 2: The Timeline (ส่วนเนื้อหาหลัก)**

*ใช้โครงสร้าง `relative` มีเส้น `absolute` ตรงกลาง*

#### **Node A: The Premium Choice (บริการส่งชุดวัดไซส์)**

  * **Badge:** `RECOMMENDED` (สีทอง)
  * **Card Style:** พื้นขาว, ขอบทองจางๆ, มีเงา
  * **Layout:**
      * *Top:* รูป "กล่องอุปกรณ์วัดไซส์วางคู่การ์ด BOGUS"
      * *Bottom:* เนื้อหา "บริการส่งชุดวัดไซส์มาตรฐานถึงบ้าน ฟรี\!"
      * *CTA:* ปุ่ม "แอดไลน์ขอรับชุดวัดไซส์"

#### **Node B: The DIY Methods (วัดเองที่บ้าน)**

  * **Badge:** `SELF-MEASUREMENT` (สีกรมท่า)
  * **Layout:** แยกเป็น 2 การ์ดย่อย หรือ 1 การ์ดใหญ่ที่รวม 2 วิธี
      * *Method 1:* วัดเส้นผ่านศูนย์กลาง (รูปแหวนบนไม้บรรทัด)
      * *Method 2:* วัดรอบนิ้ว (รูปกระดาษพันนิ้ว)
      * *Note:* คำเตือนเรื่องความคลาดเคลื่อน

#### **Node C: The Size Chart (ตาราง)**

  * **Badge:** `SIZE CHART` (สีเทา)
  * **Card Style:** การ์ดสีขาวกว้างเต็มจอ (Full Width Card) ทับเส้นแกนกลาง
  * **Content:** ตารางไซส์ที่ออกแบบให้ Clean ที่สุด (Highlight ช่องไซส์ไทย)

#### **Node D: Expert Tips (เกร็ดความรู้)**

  * **Badge:** `PRO TIPS` (สีเทา)
  * **Layout:** 3 Small Cards เรียงกัน (ช่วงเวลา, ข้อนิ้ว, หน้ากว้าง)

### **Section 3: Sticky Bottom (ส่วนท้าย)**

  * **Policy Bar:** แถบสีเทาอ่อน แจ้งเรื่อง "ปรับไซส์ฟรี 1 ครั้ง"
  * **Sticky CTA:** ปุ่ม "ทักไลน์สอบถาม" ลอยอยู่ด้านล่างเสมอ

-----

## 3\. Image Request List (รายการรูปที่ต้องใช้แบบลงดีเทล)

นี่คือลิสต์สำหรับนำไป Generate รูป (หรือถ่ายทำ) เพื่อให้ได้ภาพสไตล์ Watercolor/Soft Pinterest ที่เข้ากับธีมครับ

| Image ID | ตำแหน่งที่ใช้ | รายละเอียด (Prompt Description / Art Direction) | Mood & Tone |
| :--- | :--- | :--- | :--- |
| **IMG-01** | **Hero Banner** | ภาพระยะใกล้ (Close-up) ของมือผู้หญิงที่เรียวนิ้วสวยงาม กำลังสวมแหวนเพชรเม็ดเดี่ยวอย่างนุ่มนวล พื้นหลังเบลอ (Bokeh) แสงธรรมชาติอบอุ่น | Dreamy, Soft, Luxury |
| **IMG-02** | **Node A (Sizer Kit)** | ภาพ Flat Lay (มุมบน) ของ "พวงวัดไซส์แหวน" (Ring Sizer Set) ที่ทำจากวัสดุสีขาวหรือโลหะ วางอยู่คู่กับ "ซองจดหมาย/การ์ดกระดาษไข" ที่มีโลโก้ BOGUS ประทับตราครั่งสีทอง วางบนโต๊ะหินอ่อนหรือผ้าลินิน | Professional, Clean, Gift-like |
| **IMG-03** | **Node B (Ruler)** | ภาพ Illustration ลายเส้นผสมสีน้ำ (Watercolor Style): แหวนทองเกลี้ยงวางทาบอยู่บน "ไม้บรรทัดสเกลละเอียด" โดยขอบในของแหวนชนกับขีดเลข 0 พอดี มีลูกศรชี้เส้นผ่านศูนย์กลาง | Educational, Artistic, Clear |
| **IMG-04** | **Node B (Paper)** | ภาพ Illustration ลายเส้นผสมสีน้ำ: มือที่กำลังใช้ "แถบกระดาษยาว" พันรอบโคนนิ้วนาง และมีมืออีกข้างถือปากกากำลังจะขีดเส้นมาร์คจุด | Educational, Artistic, Soft |
| **IMG-05** | **Node D (Tips)** | ภาพไอคอนเชิงสัญลักษณ์ (Symbolic Icon) 3 ภาพ: <br>1. รูปดวงอาทิตย์/นาฬิกา (Time) <br>2. รูปโครงสร้างกระดูกนิ้วมือ (Knuckle) <br>3. รูปแหวนวงกว้าง vs วงแคบ (Band Width) | Minimal, Line Art with Gold Accents |

-----

## 4\. Implementation To-Do List (แผนงานลงรายละเอียด)

### **Phase 1: Setup & Assets**

  - [ ] **Create Component:** สร้างไฟล์ `SizeGuidePage.tsx`
  - [ ] **Install Packages:** ตรวจสอบว่ามี `lucide-react` (สำหรับไอคอน) และ `framer-motion` (ถ้าต้องการ Animation ตอนเลื่อนลง)
  - [ ] **Prepare Images:** นำ Prompt ในข้อ 3 ไป Generate รูป หรือใช้ Placeholder Image (`/images/placeholder/sizer-kit.png`) ไปก่อน
  - [ ] **Define Data:** สร้างตัวแปร Array สำหรับเก็บข้อมูลตารางไซส์ (Size Data) เพื่อให้แก้ใขง่ายในอนาคต

### **Phase 2: HTML Structure (The Skeleton)**

  - [ ] **Main Container:** สร้าง `div` หลัก ตั้งค่า `min-h-screen bg-[#FDFBF7]`
  - [ ] **Hero Section:** ใส่ Title และ Subtitle ตรงกลาง
  - [ ] **Timeline Wrapper:** สร้าง `div` ที่เป็น `relative` container สำหรับส่วนเนื้อหา
  - [ ] **Central Line:** สร้าง `div` เส้นตรงกลาง (`absolute left-1/2 w-[1px] bg-slate-200`)
  - [ ] **Step 1 (Sizer Kit):**
      - สร้าง Badge "RECOMMENDED"
      - สร้าง Card ที่มีรูปอยู่ด้านบน และ Text + ปุ่ม CTA อยู่ด้านล่าง
  - [ ] **Step 2 (DIY Methods):**
      - สร้าง Badge "SELF-MEASUREMENT"
      - สร้าง Flex Container แบ่งซ้ายขวา (บน Desktop) หรือ บนล่าง (Mobile) สำหรับ 2 วิธี
  - [ ] **Step 3 (Table):**
      - สร้าง Badge "SIZE CHART"
      - สร้าง `<table>` ภายใน Card สีขาว
  - [ ] **Step 4 (Tips):**
      - สร้าง Grid 3 ช่องสำหรับการ์ด Tips

### **Phase 3: Styling (Tailwind CSS)**

  - [ ] **Timeline Badges:** ใช้ style `bg-[#0B1021] text-white px-4 py-1 rounded-full border-[3px] border-[#FDFBF7]` เพื่อให้ดูเหมือนลอยอยู่
  - [ ] **Cards:** ใช้ style `bg-white border border-slate-100 rounded-xl p-6 shadow-sm`
  - [ ] **Table:**
      - ปรับ Header ให้เป็นสีกรมท่า (`bg-slate-900 text-white`)
      - ปรับ Row ให้มีเส้นแบ่งบางๆ (`border-b border-slate-100`)
      - **Highlight:** ใส่สีพื้นหลัง `bg-yellow-50/50` ให้กับ Column ไซส์ไทย
  - [ ] **Typography:** เช็คฟอนต์ Headings ให้เป็น Serif (`font-serif`) และ Body เป็น Sans (`font-sans`)

### **Phase 4: Logic & Interactions**

  - [ ] **Toggle Button (Optional):** ในตารางไซส์ อาจเพิ่มปุ่มสลับหน่วย (mm / cm) ถ้าจำเป็น
  - [ ] **Line Redirect:** ผูกฟังก์ชัน `onClick` ของปุ่มขอชุดวัดไซส์ ให้ลิงก์ไปที่ `https://line.me/R/ti/p/@bogus`
  - [ ] **Responsive Check:**
      - เช็คตารางไซส์ในมือถือ ต้องเลื่อนซ้ายขวาได้ (`overflow-x-auto`)
      - เช็ค Layout ของ Timeline ในมือถือ เส้นแกนกลางอาจต้องขยับไปชิดซ้าย หรือซ่อนไปเลยแล้วเรียงการ์ดลงมาแทน

### **Phase 5: Content Injection**

  - [ ] Copy ข้อความภาษาไทย/อังกฤษ ที่เตรียมไว้ใน Spec ก่อนหน้านี้มาใส่
  - [ ] ตรวจสอบคำผิดและ Tone of Voice

-----

**Note for Dev:** ใช้โครงสร้าง Code เดียวกับ `CustomOrderPage` (example.tsx) ได้เลย แต่เปลี่ยน data array จาก `steps` เป็น `methods` และเปลี่ยน layout ของตารางไซส์ให้เป็น Component แยก (`<SizeTable />`) เพื่อความสะอาดของโค้ดครับ