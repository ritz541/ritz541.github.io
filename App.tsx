
import React, { useEffect, useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import { MARATHI_NAME, SOCIAL_LINKS, LOCATION, YOUTUBE_PLAYLIST_EMBED, YOUTUBE_PLAYLIST_DIRECT, PORTRAIT_SIDE, PORTRAIT_FRONT } from './constants';





// Loading Screen Component
const LoadingScreen: React.FC<{ isLoading: boolean }> = ({ isLoading }) => (
    <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
        <div className="loading-text">चव्हाणपाटील</div>
        <div className="loading-bar">
            <div className="loading-bar-inner"></div>
        </div>
        <p className="mt-6 text-[10px] tracking-[0.5em] text-white/30 uppercase font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>Igniting the Field</p>
    </div>
);

const App: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [showMusic, setShowMusic] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [showWatcher, setShowWatcher] = useState(false);
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
        <div className="relative selection:bg-[#ff2d55] selection:text-white min-h-screen bg-[#030303] overflow-x-hidden">
            {/* Loading Screen */}
            <LoadingScreen isLoading={isLoading} />



            <Navbar onImageSelect={setEnlargedImage} />

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
                            <img
                                src={enlargedImage}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                                alt="Enlarged Artifact"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Atmospheric Ghost: Parallax side gaze */}
            <div
                className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.02] grayscale contrast-125 transition-transform duration-500 ease-out"
                style={{
                    transform: `translate(${mousePos.x * 0.05}px, ${scrollY * -0.02}px) scale(1.05)`,
                }}
            >
                <img
                    src={PORTRAIT_SIDE}
                    alt=""
                    className="w-full h-full object-cover"
                />
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
            <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-32 md:pt-0 overflow-hidden z-20">
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

                <div className="z-10 text-center max-w-7xl reveal-up px-2">
                    <p className="serif-font italic text-xl md:text-5xl text-white/30 mb-4 md:mb-8 lowercase">
                        the radical leisure of
                    </p>
                    <h1 className="autour-font text-5xl sm:text-6xl md:text-[12rem] font-black tracking-tighter mb-6 md:mb-12 leading-[0.85] md:leading-[0.8] text-gradient uppercase">
                        Ritesh <br /> Chavan Patil
                    </h1>

                    <div className="flex flex-col items-center justify-center gap-4 md:gap-12 text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] text-white/40 font-bold uppercase mt-6 md:mt-12">
                        <div
                            className="flex items-center gap-3 cursor-help relative group"
                            onMouseEnter={() => setShowWatcher(true)}
                            onMouseLeave={() => setShowWatcher(false)}
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
                </div>

                <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4">
                    <div className="w-px h-8 md:h-16 bg-gradient-to-b from-[#ff2d55]/40 to-transparent"></div>
                    <span className="text-[7px] md:text-[8px] tracking-[0.3em] md:tracking-[0.5em] text-[#ff2d55]/40 uppercase font-black">SCROLL</span>
                </div>
            </section>

            {/* Transition Area: The return to Soil */}
            <section className="relative z-30 py-16 md:py-32 px-4 md:px-8 flex justify-center border-y border-white/5 bg-gradient-to-b from-transparent to-[#0a0a0a]">
                <div className="max-w-4xl text-center">
                    <h3 className="serif-font italic text-2xl md:text-5xl text-white/20 mb-8 md:mb-12 px-4">"The digital world is a playground; the soil is the truth."</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {[
                            { label: "STATUS", val: "RADICAL AUTONOMY" },
                            { label: "FUTURE", val: "THE HARVEST" },
                            { label: "BOSSES", val: "ZERO / NEVER" },
                            { label: "DESIRE", val: "CONSTANT" }
                        ].map(stat => (
                            <div key={stat.label} className="flex flex-col gap-1 md:gap-2">
                                <span className="text-[7px] md:text-[8px] tracking-[0.3em] md:tracking-[0.4em] text-[#ff2d55]/50 font-black">{stat.label}</span>
                                <span className="text-[9px] md:text-[10px] tracking-[0.1em] md:tracking-[0.2em] text-white/60 font-bold uppercase">{stat.val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer: Text-only Social Links */}
            <footer className="py-12 md:py-24 px-4 md:px-8 bg-black border-t border-white/5 relative z-30">
                <div className="max-w-7xl mx-auto flex flex-col items-center">

                    <div className="flex flex-wrap justify-center gap-3 md:gap-x-8 md:gap-y-6 mb-12 md:mb-20 max-w-4xl">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs md:text-sm font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/30 px-4 py-2 md:px-8 md:py-3 rounded-full border border-white/10 hover:border-[#ff2d55]/20 hover:bg-[#ff2d55]/[0.05] hover:text-[#ff2d55] active:bg-[#ff2d55]/10 active:text-[#ff2d55] transition-all duration-300 flex items-center justify-center"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="w-full pt-8 md:pt-12 border-t border-white/5 flex flex-col items-center gap-6 md:gap-8 text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] text-white/20 font-bold uppercase">
                        <div className="marathi-font text-xl md:text-2xl opacity-20 select-none">
                            {MARATHI_NAME}
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span>BOUNDLESS ACCESS &copy; 2025</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            <span>{LOCATION}</span>
                            <span className="text-[#ff2d55]/40">ONE OF ONE</span>
                        </div>
                    </div>

                    {/* AI Made Badge */}
                    <div className="mt-8 md:mt-12 pt-6 border-t border-white/5 w-full text-center">
                        <span className="text-[7px] md:text-[8px] tracking-[0.3em] md:tracking-[0.4em] text-white/10 uppercase">Crafted with AI</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
