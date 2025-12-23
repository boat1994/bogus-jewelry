import { useState } from 'react';

export const useTikTokInterceptor = () => {
    const [copied, setCopied] = useState(false);
    const [showTikTokOverlay, setShowTikTokOverlay] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('@bogus');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleLineClick = (e: React.MouseEvent) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || '';

        // Improved detection for TikTok in-app browser (including 'trill' which is often used in newer/specific iOS builds)
        const isTikTok = /tiktok|musical_ly|bytedance|trill/i.test(userAgent);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const isIOS = /iPad|iPhone|iPod/i.test(userAgent) && !(window as any).MSStream;

        // Log for debugging in production if needed (can be removed later)
        console.log('TikTok Interceptor Debug:', { userAgent, isTikTok, isIOS });

        // NOTE: Force override for testing: || true is intentionally removed for production
        if (isTikTok && isIOS) {
            e.preventDefault();
            setShowTikTokOverlay(true);
        }
    };

    return {
        showTikTokOverlay,
        setShowTikTokOverlay,
        copied,
        handleCopy,
        handleLineClick
    };
};
