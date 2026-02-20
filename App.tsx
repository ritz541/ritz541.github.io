import React from 'react';
import { NAME, LOCATION, EMAIL, SOCIAL_LINKS, PROJECTS } from './constants';
import Navbar from './components/Navbar';
import './index.css';

// Platform Icons for the Bento Cards
const getPlatformIcon = (platform: string) => {
    switch (platform) {
        case 'X':
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>;
        case 'Instagram':
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>;
        case 'LinkedIn':
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
        case 'GitHub':
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>;
        case 'Medium':
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="6" ry="6"></ellipse><path d="M22 12c0 3.314-1.119 6-2.5 6S17 15.314 17 12s1.119-6 2.5-6 2.5 2.686 2.5 6Z"></path><path d="M5 12c0 3.314-2.239 6-5 6s-5-2.686-5-6 2.239-6 5-6 5 2.686 5 6Z"></path></svg>;
        case 'Email':
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>;
        default:
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>;
    }
};

const getProjectIcon = (name: string) => {
    if (name.includes('Dreamli')) return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5" /></svg>;
    if (name.includes('Human')) return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>;
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>;
}

const ArrowRightIcon = () => (
    <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
    </svg>
);

const App: React.FC = () => {
    return (
        <>
            <div className="mesh-glow-wrapper">
                <div className="mesh-orb orb-1"></div>
                <div className="mesh-orb orb-2"></div>
            </div>

            <Navbar />

            <main className="container">
                <div className="bento-grid">

                    {/* Intro Block: Spans 4 cols on mobile, 2 on tablet, 2 on desktop */}
                    <div className="bento-item col-span-4 md-col-span-2 row-span-2">
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h1>{NAME}</h1>
                                <p className="text-muted" style={{ maxWidth: '80%' }}>
                                    Crafting aesthetic digital experiences.
                                </p>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <span className="flex items-center gap-2 text-small text-muted">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    {LOCATION}
                                </span>
                                <span className="flex items-center gap-2 text-small text-muted">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    {EMAIL}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Generate Social/Feature Blocks */}
                    {SOCIAL_LINKS.slice(0, 4).map((link, index) => {
                        const parts = link.name.split(' → ');
                        const platform = parts[0];
                        const handle = parts[1] || '';

                        return (
                            <a
                                key={platform}
                                href={link.url}
                                target={platform === 'Email' ? '_self' : '_blank'}
                                rel={platform === 'Email' ? '' : 'noopener noreferrer'}
                                className={`bento-item bento-link col-span-2 md-col-span-1`}
                                style={{ animationDelay: `${(index + 1) * 0.05}s` }}
                            >
                                <ArrowRightIcon />
                                <div className="icon-wrapper">
                                    {getPlatformIcon(platform)}
                                </div>
                                <div>
                                    <h3 className="syne" style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{platform}</h3>
                                    <span className="text-small text-muted">{handle}</span>
                                </div>
                            </a>
                        );
                    })}

                    {/* Projects Section - spanning larger areas */}
                    {PROJECTS.map((project, index) => {
                        const parts = project.name.split(' → ');
                        const title = parts[0];
                        const description = parts[1] || '';

                        return (
                            <a
                                key={title}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`bento-item bento-link col-span-4 md-col-span-2 row-span-1`}
                                style={{ animationDelay: `${(index + 5) * 0.05}s`, background: 'var(--bg-base)' }}
                            >
                                <ArrowRightIcon />
                                <div className="flex items-center gap-4">
                                    <div className="icon-wrapper" style={{ margin: 0, backgroundColor: 'var(--bento-bg)' }}>
                                        {getProjectIcon(title)}
                                    </div>
                                    <div>
                                        <h3 className="syne" style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>{title}</h3>
                                        <span className="text-small text-muted">{description}</span>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>

                <div className="flex justify-between items-center text-muted text-small" style={{ borderTop: '1px solid var(--bento-border)', paddingTop: '2rem' }}>
                    <span>this website was built with ai (sorry, not sorry)</span>
                    <span>© 2026</span>
                </div>
            </main>

            <footer>
                {/* Footer content moved to the bottom of main for a tighter layout */}
            </footer>
        </>
    );
};

export default App;
