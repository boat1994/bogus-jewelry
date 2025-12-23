'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const DebugModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [info, setInfo] = useState<{
        userAgent: string;
        isTikTok: boolean;
        isIOS: boolean;
        vendor: string;
        opera: boolean;
    }>({
        userAgent: '',
        isTikTok: false,
        isIOS: false,
        vendor: '',
        opera: false,
    });

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || '';
        const isTikTok = /tiktok|musical_ly|bytedance|trill/i.test(userAgent);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const isIOS = /iPad|iPhone|iPod/i.test(userAgent) && !(window as any).MSStream;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const opera = (window as any).opera ? true : false;
        const vendor = navigator.vendor || '';

        setInfo({
            userAgent,
            isTikTok,
            isIOS,
            vendor,
            opera,
        });
    }, []);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-20 left-4 z-[10000] bg-red-600 text-white text-xs px-2 py-1 rounded shadow-lg opacity-50 hover:opacity-100"
            >
                Debug
            </button>
        );
    }

    return (
        <div className="fixed inset-0 z-[10000] bg-black/80 flex items-center justify-center p-4">
            <div className="bg-white text-black p-4 rounded-lg w-full max-w-lg shadow-xl overflow-hidden flex flex-col max-h-[80vh]">
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h3 className="font-bold text-lg text-red-600">TikTok Interceptor Debugger</h3>
                    <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-200 rounded">
                        <X size={24} />
                    </button>
                </div>

                <div className="overflow-y-auto space-y-4 text-xs font-mono break-all">
                    <div className="p-2 bg-gray-100 rounded">
                        <span className="font-bold block mb-1 text-gray-500">Is TikTok Detected?</span>
                        <span className={`text-lg font-bold ${info.isTikTok ? 'text-green-600' : 'text-red-600'}`}>
                            {info.isTikTok.toString().toUpperCase()}
                        </span>
                    </div>

                    <div className="p-2 bg-gray-100 rounded">
                        <span className="font-bold block mb-1 text-gray-500">Is iOS Detected?</span>
                        <span className={`text-lg font-bold ${info.isIOS ? 'text-green-600' : 'text-red-600'}`}>
                            {info.isIOS.toString().toUpperCase()}
                        </span>
                    </div>

                    <div className="p-2 bg-gray-100 rounded border border-gray-300">
                        <span className="font-bold block mb-1 text-gray-500">Navigator.userAgent</span>
                        <div className="bg-white p-2 rounded border border-gray-200">
                            {info.userAgent}
                        </div>
                    </div>

                    <div className="p-2 bg-gray-100 rounded border border-gray-300">
                        <span className="font-bold block mb-1 text-gray-500">Navigator.vendor</span>
                        <div className="bg-white p-2 rounded border border-gray-200">
                            {info.vendor || 'N/A'}
                        </div>
                    </div>
                </div>

                <div className="mt-4 pt-2 border-t text-center text-gray-400 text-[10px]">
                    Screen: {typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : ''}
                </div>
            </div>
        </div>
    );
};

export default DebugModal;
