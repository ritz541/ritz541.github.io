
import React from 'react';
import { PORTRAIT_FRONT, PORTRAIT_SIDE, IMAGE_FIELD } from '../constants';

interface NavbarProps {
    onImageSelect: (url: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onImageSelect }) => {
    const artifacts = [
        { id: '01', label: 'PORTRAIT', url: PORTRAIT_FRONT },
        { id: '02', label: 'PROFILE', url: PORTRAIT_SIDE },
        { id: '03', label: 'ORIGIN', url: IMAGE_FIELD },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-4 md:py-6 flex justify-between items-start">
            <div className="flex flex-col gap-4 md:gap-6">
                <div className="text-base md:text-lg font-black tracking-tight uppercase group cursor-pointer text-white mix-blend-difference">
                    Ritesh <span className="opacity-40 group-hover:opacity-100 transition-opacity">Chavan Patil</span>
                </div>

                {/* Visual Gallery Thumbnails - Visible on all screens */}
                <div className="flex gap-2 md:gap-3">
                    {artifacts.map((art, index) => (
                        <button
                            key={art.id}
                            onClick={() => onImageSelect(art.url)}
                            className="group relative overflow-hidden rounded-lg active:scale-95 transition-transform"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image Container - Smaller on mobile */}
                            <div className="w-14 h-20 md:w-20 md:h-28 overflow-hidden rounded-lg border-2 border-white/5 group-hover:border-[#ff2d55]/60 transition-all duration-500">
                                <img
                                    src={art.url}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                    alt={art.label}
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-60 transition-opacity duration-500"></div>

                                {/* Accent Line */}
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff2d55] scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>

                            {/* Label - Hidden on mobile */}
                            <div className="absolute bottom-1.5 md:bottom-2 left-1.5 md:left-2 right-1.5 md:right-2">
                                <span className="text-[7px] md:text-[8px] font-black tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">{art.id}</span>
                                <p className="hidden md:block text-[9px] font-bold tracking-wider text-white/40 group-hover:text-[#ff2d55] transition-colors uppercase">{art.label}</p>
                            </div>

                            {/* Corner Accent - Hidden on mobile */}
                            <div className="hidden md:block absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#ff2d55] transition-colors"></div>
                        </button>
                    ))}
                </div>
            </div>

            <div className="text-[8px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.5em] text-white/20 uppercase mix-blend-difference">
                ARCHIVE
            </div>
        </nav>
    );
};

export default Navbar;
