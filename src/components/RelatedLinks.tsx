import React from 'react';
import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface RelatedLinkItem {
    title: string;
    description: string | React.ReactNode;
    href: string;
    icon?: LucideIcon;
    color?: string;
}

interface RelatedLinksProps {
    links: RelatedLinkItem[];
    title?: string;
}

const RelatedLinks: React.FC<RelatedLinksProps> = ({
    links,
    title = "บทความที่เกี่ยวข้อง"
}) => {
    return (
        <section className="container mx-auto px-4 max-w-4xl mb-16">
            <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-slate-200"></div>
                <h3 className="text-lg font-medium text-slate-400 uppercase tracking-widest">{title}</h3>
                <div className="h-px flex-1 bg-slate-200"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {links.map((link, index) => {
                    // Generate deterministic random-like positions based on index
                    const bgPosX = (index * 37) % 100;
                    const bgPosY = (index * 53) % 100;

                    return (
                        <Link
                            key={index}
                            href={link.href}
                            style={{
                                backgroundPosition: `${bgPosX}% ${bgPosY}%`,
                                backgroundSize: '400%'
                            }}
                            className="group relative block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300 bg-[url('/images/util_background.png')] overflow-hidden"
                        >
                            {/* Overlay to ensure text readability */}
                            <div className="absolute inset-0 bg-white/90 group-hover:bg-white/80 transition-colors duration-300" />
                            
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-lg ${link.color || 'bg-slate-100 text-slate-600'} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                        {link.icon ? <link.icon size={24} /> : <ArrowRight size={24} />}
                                    </div>
                                    <ArrowRight className="text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all" size={20} />
                                </div>

                                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-black">
                                    {link.title}
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                    {link.description}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default RelatedLinks;
