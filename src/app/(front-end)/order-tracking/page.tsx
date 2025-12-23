"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = () => {
    if (!orderId.trim()) {
      setStatus("กรุณากรอกรหัสคำสั่งซื้อ");
      return;
    }
    setLoading(true);
    setStatus(null);
    // Mock API delay
    setTimeout(() => {
      // Mocked responses based on simple rules
      const id = orderId.trim().toLowerCase();
      let mock = "สถานะ: อยู่ระหว่างจัดส่ง (Mock)";
      if (id.startsWith("cn")) mock = "สถานะ: รอการยืนยันการชำระเงิน";
      if (id.startsWith("dl")) mock = "สถานะ: จัดส่งสำเร็จ";
      setStatus(mock);
      setLoading(false);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-slate-200 py-12">
      <div className="container mx-auto px-4 max-w-xl">
        <h1 className="text-2xl md:text-3xl font-serif text-slate-800 mb-4">ติดตามคำสั่งซื้อ</h1>
        <p className="text-sm text-slate-600 mb-6">ใส่รหัสคำสั่งซื้อของคุณเพื่อดูสถานะ (ตัวอย่าง: <span className="font-mono">CN12345</span>, <span className="font-mono">DL98765</span>)</p>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <label className="block text-sm text-slate-700 mb-2">รหัสคำสั่งซื้อ</label>
          <div className="flex gap-2">
            <input
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="กรอกหมายเลขคำสั่งซื้อ"
              className="flex-1 px-3 py-2 border rounded-lg border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-200"
            />
            <button
              onClick={handleTrack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-600 transition"
            >
              {loading ? "กำลังค้นหา..." : "ติดตาม"}
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-4">
            {status ? (
              <div className="text-sm text-slate-700">{status}</div>
            ) : (
              <div className="text-sm text-slate-500">ยังไม่มีผลลัพธ์</div>
            )}
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-4">หมายเหตุ: หน้านี้เป็นตัวอย่างการติดตามแบบ Mock — เชื่อมต่อ API จริงได้ตามต้องการ</p>
      </div>
    </div>
  );
};

export default OrderTracking;
