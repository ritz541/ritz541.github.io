import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { MARATHI_NAME, SOCIAL_LINKS, LOCATION, YOUTUBE_PLAYLIST_EMBED, YOUTUBE_PLAYLIST_DIRECT, PORTRAIT_SIDE, PORTRAIT_FRONT, IMAGE_FIELD } from './constants';
import QuantumString from './components/QuantumString';
import MarathiRain from './components/MarathiRain';

// Loading Screen Component
const LoadingScreen: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const [text, setText] = useState(MARATHI_NAME);
    const fullText = MARATHI_NAME;
    const chars = "अआइईउऊऋएऐओऔकखगघचछजझटठडढणतथदधनपफबभमयरलवशषसहळक्षज्ञ!@#$%^&*";

    useEffect(() => {
        if (!isLoading) return;

        let iterations = 0;
        const interval = setInterval(() => {
            setText(fullText
                .split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return fullText[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("")
            );

            if (iterations >= fullText.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3; // Speed of decoding
        }, 50);

        return () => clearInterval(interval);
    }, [isLoading]);

    return (
        <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
            <div className="loading-text font-black tracking-widest text-[#ccff00] drop-shadow-[0_0_10px_rgba(204,255,0,0.8)]">
                {text}
            </div>
            <div className="loading-bar">
                <div className="loading-bar-inner"></div>
            </div>
            <p className="mt-6 text-[10px] tracking-[0.5em] text-white/30 uppercase font-medium" style={{ fontFamily: 'Gotu, sans-serif' }}>Igniting the Field</p>
        </div>
    );
};

// Social Icons Data
const SOCIAL_ICONS: Record<string, React.ReactNode> = {
    'Email': <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    'GitHub': <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />,
    'LinkedIn': <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />,
    'X': <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />,
    'Instagram': <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 3h9a4.5 4.5 0 014.5 4.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3z" />
};

const SOCIAL_STYLES: Record<string, string> = {
    'Email': 'border-[#EA4335] text-[#EA4335] bg-[#EA4335]/10',
    'GitHub': 'border-white text-white bg-white/10',
    'LinkedIn': 'border-[#0077b5] text-[#0077b5] bg-[#0077b5]/10',
    'X': 'border-white text-white bg-white/10',
    'Instagram': 'border-[#E1306C] text-[#E1306C] bg-[#E1306C]/10'
};

const App: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [showMusic, setShowMusic] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide loading screen after animation completes
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 40,
                y: (e.clientY / window.innerHeight - 0.5) * 40
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="relative selection:bg-white selection:text-black min-h-screen bg-[#030303] overflow-hidden">
            {/* Loading Screen */}
            <LoadingScreen isLoading={isLoading} />

            {/* Background Effects */}
            <MarathiRain />

            <Navbar onImageSelect={setEnlargedImage} />

            {/* Quantum String - Horizontal tripwire crossing center */}
            <div className="fixed top-1/2 left-0 w-full h-24 -translate-y-1/2 z-[40] pointer-events-auto">
                <QuantumString className="w-full h-full" />
            </div>

            {/* AI Human Link - Compact on mobile */}
            <a
                href="https://human.chavanpatil.com"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[60] group flex items-center gap-2 md:gap-4 bg-white text-black px-4 py-3 md:px-6 md:py-4 rounded-full font-bold text-xs md:text-sm tracking-wider md:tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span className="hidden sm:inline">AI HUMAN</span>
                <span className="sm:hidden">AI</span>
            </a>

            {/* Lightbox / Enlarged View Overlay */}
            {enlargedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-24 bg-black/95 backdrop-blur-3xl reveal-up cursor-zoom-out"
                    onClick={() => setEnlargedImage(null)}
                >
                    <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
                        <button className="absolute top-2 right-2 md:top-0 md:right-0 p-4 md:p-8 text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] font-black text-white/40 hover:text-[#ff2d55] active:text-[#ff2d55] transition-colors uppercase z-10">
                            CLOSE
                        </button>
                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="border border-white p-2 inline-block">
                                <img
                                    src={enlargedImage}
                                    className="max-w-full max-h-[80vh] object-contain"
                                    alt="Enlarged Artifact"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}



            {/* Atmospheric Ghost: Parallax side gaze */}
            <div
                className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.05] grayscale contrast-125 transition-transform duration-500 ease-out p-6"
                style={{
                    transform: `translate(${mousePos.x * 0.05}px, ${scrollY * -0.02}px) scale(1.05)`,
                }}
            >
                <div className="w-full h-full border border-white/30 p-2">
                    <img
                        src={PORTRAIT_SIDE}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Sensual Music Player Toggle - Compact on mobile */}
            <div className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-[70]">
                <div className="relative">
                    {showMusic && (
                        <div className="absolute bottom-16 md:bottom-20 left-0 w-[280px] md:w-[400px] aspect-video bg-black border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(255,45,85,0.1)] reveal-up flex flex-col">
                            <div className="p-2 md:p-3 bg-white/5 border-b border-white/10 flex justify-between items-center px-3 md:px-4">
                                <span className="text-[8px] md:text-[9px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[#ff2d55]">Vibes</span>
                                <a
                                    href={YOUTUBE_PLAYLIST_DIRECT}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[8px] md:text-[9px] font-black tracking-[0.1em] uppercase bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors"
                                >
                                    OPEN
                                </a>
                            </div>
                            <iframe
                                src={YOUTUBE_PLAYLIST_EMBED}
                                className="flex-1 w-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}

                    <button
                        onClick={() => setShowMusic(!showMusic)}
                        className={`group flex items-center gap-2 md:gap-4 bg-white/5 border border-white/10 hover:border-[#ff2d55]/40 backdrop-blur-3xl px-4 py-3 md:px-6 md:py-4 rounded-full transition-all active:scale-95 ${showMusic ? 'bg-white/20 border-[#ff2d55]/50' : ''}`}
                    >
                        <div className="flex items-center gap-1 md:gap-1.5 h-4">
                            <div className={`w-0.5 bg-[#ff2d55] animate-[bounce_1.5s_infinite] ${!showMusic && 'h-1 animate-none opacity-40'}`} style={{ height: showMusic ? '100%' : '20%' }}></div>
                            <div className={`w-0.5 bg-[#ff2d55] animate-[bounce_1.2s_infinite] ${!showMusic && 'h-2 animate-none opacity-40'}`} style={{ height: showMusic ? '80%' : '40%' }}></div>
                            <div className={`w-0.5 bg-[#ff2d55] animate-[bounce_1.8s_infinite] ${!showMusic && 'h-3 animate-none opacity-40'}`} style={{ height: showMusic ? '90%' : '60%' }}></div>
                        </div>
                        <span className="hidden sm:block text-[10px] tracking-[0.4em] font-black uppercase text-white/70">
                            {showMusic ? 'CLOSE' : 'MUSIC'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Hero: The Intimate Entry */}
            <section className="relative h-screen flex flex-col items-center justify-center px-4 md:px-8 overflow-hidden z-20">
                <div
                    className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0"
                    style={{
                        transform: `translate(${mousePos.x * -0.5}px, ${scrollY * 0.15}px)`,
                        transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
                    }}
                >
                    <h2 className="marathi-font text-[50vw] md:text-[38vw] font-black leading-none whitespace-nowrap tracking-tighter heat-pulse">
                        {MARATHI_NAME}
                    </h2>
                </div>

                <div className="z-10 text-center max-w-7xl reveal-up px-2 flex flex-col items-center">
                    <p className="serif-font italic text-xl md:text-5xl text-white/30 mb-4 md:mb-8 lowercase">
                        the radical leisure of
                    </p>
                    <h1 className="autour-font text-5xl sm:text-6xl md:text-[12rem] font-black tracking-tighter mb-6 md:mb-12 leading-[0.85] md:leading-[0.8] text-gradient uppercase">
                        Ritesh <br /> Chavan Patil
                    </h1>

                    {/* Circular Social Icons */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-8">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-white/5 ${SOCIAL_STYLES[link.name] || 'hover:bg-white hover:border-white hover:text-black'} hover:scale-110 active:scale-95 flex items-center justify-center transition-all duration-300 relative text-white/60`}
                                title={link.name}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 md:w-6 md:h-6 transition-colors"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    {SOCIAL_ICONS[link.name] || <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />}
                                </svg>
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 md:gap-12 text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] text-white/40 font-bold uppercase mt-12">
                        <div
                            className="flex items-center gap-3 cursor-help relative group"
                        >
                            <div className="status-pulse"></div>
                            <span className="text-center">DIGITALLY AVAILABLE</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            <span>HARVESTER OF THE SOIL</span>
                            <span className="hidden md:inline">•</span>
                            <span>EST. MCMXCIX</span>
                        </div>
                    </div>

                    {/* AI Made Badge - Fixed at bottom of hero content */}
                    <div className="mt-8">
                        <span className="text-[7px] md:text-[8px] tracking-[0.3em] md:tracking-[0.4em] text-white/10 uppercase">Crafted with AI</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;
