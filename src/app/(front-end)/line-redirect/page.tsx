'use client';

import React, { useEffect, useState } from 'react';

export default function LineRedirect() {
    const [os, setOs] = useState('unknown');

    // Shop ID and Message
    const lineId = '@bogus';
    const message = 'สนใจสินค้า ขอรายละเอียดเพิ่มเติมครับ';

    useEffect(() => {
        // 1. Detect OS
        if (typeof window !== 'undefined' && window.navigator) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
            if (/android/i.test(userAgent)) {
                setOs('android');
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
                setOs('ios');
            }
        }
    }, []);

    const handleRedirect = () => {
        const encodedMessage = encodeURIComponent(message);

        if (os === 'android') {
            // *** ANDROID NUKE OPTION: Intent Scheme ***
            // Add Friend / Open Profile intent is safer for "Contact Us"
            // Using the one compatible with the sticky button's original goal (ti/p)
            const intentUrl = `intent://ti/p/${lineId}#Intent;scheme=line;package=jp.naver.line.android;end`;

            // Note: User provided msg/text intent in example, but sticky button was ti/p. 
            // Using ti/p matches "Add Line" better.
            // If message is needed: `intent://msg/text/${encodedMessage}#Intent;scheme=line;package=jp.naver.line.android;end`

            window.location.href = intentUrl;

        } else {
            // *** iOS STANDARD OPTION ***
            // iOS requires user interaction for Universal Links in WebView
            // Using oaMessage to include the pre-filled message if supported, or fall back to ti/p
            // The user example used oaMessage.
            const iosUrl = `https://line.me/R/oaMessage/${lineId}/?${encodedMessage}`;
            window.location.href = iosUrl;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#06C755] text-white p-6">
            <div className="text-center max-w-sm">
                <h1 className="text-2xl font-bold mb-2">กำลังพาไปที่ LINE...</h1>
                <p className="mb-8 text-white/90">หากหน้านี้ไม่เปลี่ยน กรุณากดปุ่มด้านล่าง</p>

                {/* User Interaction Trigger */}
                <button
                    onClick={handleRedirect}
                    className="w-full bg-white text-[#06C755] font-bold text-lg py-4 px-8 rounded-full shadow-lg active:scale-95 transition-transform"
                >
                    เปิดแอป LINE ทันที 💬
                </button>

                <p className="mt-6 text-xs text-white/60">
                    System detected: {os === 'android' ? 'Android (Intent Mode)' : 'iOS (Universal Mode)'}
                </p>
            </div>
        </div>
    );
}
