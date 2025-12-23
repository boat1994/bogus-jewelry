"use client";

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';

declare global {
    interface Window {
        JSMpeg: {
            Player: new (url: string, options: {
                canvas: HTMLCanvasElement;
                autoplay?: boolean;
                loop?: boolean;
                audio?: boolean;
                disableGl?: boolean;
                onPlay?: () => void;
                onPause?: () => void;
                onEnded?: () => void;
                onStalled?: () => void;
                onSourceEstablished?: () => void;
                onSourceCompleted?: () => void;
            }) => JSMpegPlayer;
        };
    }
}

interface JSMpegPlayer {
    destroy(): void;
    play(): void;
    pause(): void;
    stop(): void;
}

interface HeroVideoProps {
    onPlayStart?: () => void;
}

export default function HeroVideo({ onPlayStart }: HeroVideoProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const playerRef = useRef<JSMpegPlayer | null>(null);
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // 1. Detect Mobile
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const checkMobile = () => setIsMobile(window.innerWidth < 1024);
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return () => window.removeEventListener('resize', checkMobile);
        }
    }, []);

    // 2. Defer JS loading by 2.5s to prioritize LCP
    useEffect(() => {
        const timer = setTimeout(() => {
            if (typeof window !== 'undefined') {
                if (window.JSMpeg) {
                    setScriptLoaded(true);
                } else {
                    const script = document.createElement('script');
                    script.src = '/js/jsmpeg.min.js';
                    script.async = true;
                    script.onload = () => setScriptLoaded(true);
                    document.body.appendChild(script);
                }
            }
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    // 3. Initialize Player when script & mobile status are ready
    useEffect(() => {
        if (!scriptLoaded || isMobile === null || !canvasRef.current || !window.JSMpeg) return;

        // Cleanup old
        if (playerRef.current) {
            try { playerRef.current.destroy(); } catch (e) { }
        }

        const url = isMobile ? '/video/hero_video_mobile.ts' : '/video/hero_video.ts';

        const player = new window.JSMpeg.Player(url, {
            canvas: canvasRef.current,
            autoplay: true,
            loop: true,
            audio: false,
            disableGl: false,
            onPlay: () => {
                setIsPlaying(true);
                if (onPlayStart) onPlayStart();
            }
        });

        playerRef.current = player;

        // Try to play
        try { player.play(); } catch (e) { }

        // Visibility handler
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible' && playerRef.current) {
                try { playerRef.current.play(); } catch (e) { }
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (playerRef.current) {
                try { playerRef.current.destroy(); } catch (e) { }
            }
        };
    }, [scriptLoaded, isMobile]);

    return (
        <div className="relative w-full h-full bg-neutral-900 overflow-hidden">
            <canvas
                ref={canvasRef}
                className={`w-full h-full object-cover pointer-events-none transition-opacity duration-[1500ms] ease-in-out ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Optimized Poster/Placeholder for LCP - Opacity increased to 1.0 */}
            <div
                className={`absolute inset-0 bg-neutral-900 z-10 transition-opacity duration-[1500ms] ease-in-out flex items-center justify-center ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
                style={{ pointerEvents: 'none' }}
            >
                <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 opacity-100">
                    <Image
                        src="/logos/bogus_symbol_logo_transparent.png"
                        alt="BOGUS Jewelry Loading"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
