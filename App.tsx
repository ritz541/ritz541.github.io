import React from 'react';
import { NAME, LOCATION, SOCIAL_LINKS, PROJECTS } from './constants';
import './index.css';

/* cherry-blossom cursor */
function useCustomCursor() {
    React.useEffect(() => {
        const size = 32;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.font = `${size - 4}px serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('🌸', size / 2, size / 2);
            document.body.style.cursor = `url(${canvas.toDataURL()}) 16 16, auto`;
        }
    }, []);
}

const HERO_HEADLINES = [
    "COFFEE MACHINE ACQUIRES SENTIENCE",
    "PLANT REFUSES TO GROW UNTIL IT RECEIVES AN APOLOGY",
    "TRAFFIC CONE PROMOTED TO INTERIM MAYOR",
    "CLOUDS VOTE 4-3 TO REMAIN GREY UNTIL TUESDAY",
    "BUREAUCRACY DECLARED MOST POPULAR HOBBY",
    "SCIENTISTS FIND NEW SPECIES OF DUST MITE",
];

/* Scroll-reveal observer attached to every .reveal element */
function useRevealObserver() {
    React.useEffect(() => {
        const els = document.querySelectorAll('.reveal');
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        els.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);
}

/* ── App ─────────────────────────────────────── */

const App: React.FC = () => {
    const year = new Date().getFullYear();
    const [expandedProject, setExpandedProject] = React.useState<number | null>(null);
    const isTouchRef = React.useRef(false);
    useRevealObserver();
    useCustomCursor();

    /* detect touch device once */
    React.useEffect(() => {
        isTouchRef.current =
            'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }, []);

    /* theme toggle */
    const [theme, setTheme] = React.useState<'dark'|'light'>(() => {
        const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
        return (saved as 'dark'|'light'|null) ?? 'dark';
    });

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    return (
        <>
            {/* ── Ticker ────────────────────── */}
            <a
                href="https://theflower.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="ticker-kinetic"
            >
                <div className="ticker-track">
                    {[...HERO_HEADLINES, ...HERO_HEADLINES].map((h, i) => (
                        <React.Fragment key={i}>
                            <span className="ticker-item">{h}</span>
                            <span className="ticker-sep">🌸</span>
                        </React.Fragment>
                    ))}
                </div>
            </a>

            {/* ── Nav ──────────────────────── */}
            <nav className="minimal-nav">
                <a href="/" className="nav-brand">~/chavanpatil</a>
                <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === 'dark' ? '☀' : '☾'}
                </button>
            </nav>

            {/* ── Hero ─────────────────────── */}
            <header className="hero">
                <h1 className="hero-name">
                    RITESH
                </h1>
                <p className="hero-tagline">
                    script kiddie turned developer&nbsp;&nbsp;/&nbsp;&nbsp;
                    <span>building weird things on the internet</span>
                </p>
                <p className="hero-loc">Parewadi, MH, IN</p>
                <span className="hero-scroll">scroll</span>
            </header>

            {/* ── About ────────────────────── */}
            <section className="reveal section">
                <h2 className="section-header">
                    about<span>.</span>me
                </h2>
                <div className="about-grid">
                    <div>
                        <p className="about-headline">
                            I build things for the internet. Websites, apps, weird
                            automation pipelines. <em>Still chasing the same thing
                            I wanted as a kid</em>: build something, ship it, watch
                            people use it.
                        </p>
                        <p className="about-body">
                            23. Developer. Part-time script kiddie.
                            ML/DL student who hasn't figured out backpropagation
                            yet but keeps trying. The whole site content pipeline
                            runs on n8n — zero backend, just webhooks doing all
                            the lifting.
                        </p>
                        <p className="about-body">
                            <a href="mailto:riteshchavan@duck.com">riteshchavan@duck.com</a> for normal stuff.
                            <br />
                            <a href="mailto:ritzchavan@proton.me">ritzchavan@proton.me</a> if you're a fed,
                            a recruiter who found my LinkedIn, or my mom.
                            It's on Proton. You know exactly why.
                        </p>
                        <div className="email-note">
                            Deepseek is still the only model that gets me
                        </div>
                    </div>

                    <div className="about-image">
                        <img
                            src="/anime-girl.png"
                            alt=""
                            className="character-img"
                            loading="eager"
                        />
                    </div>
                </div>
            </section>

            {/* ── Projects ─────────────────── */}
            <section className="reveal section">
                <h2 className="section-header">
                    selected<span>.</span>work
                </h2>
                {PROJECTS.map((project, i) => (
                    <article
                        key={i}
                        className={`project-row${(expandedProject === i) ? ' expanded' : ''}`}
                        onClick={() => {
                            if (isTouchRef.current) {
                                setExpandedProject(expandedProject === i ? null : i);
                            }
                        }}
                    >
                        <div className="project-top">
                            <span className="project-num">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <h3 className="project-name">
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    {project.name}
                                </a>
                            </h3>
                        </div>
                        <div className="project-detail">
                            <p className="project-blurb">{project.byline}</p>
                            <p className="project-desc">{project.description}</p>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-url"
                            >
                                {project.url}
                            </a>
                            <div className="project-tags">
                                {project.tags.map((tag, ti) => (
                                    <span key={ti}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </section>

            {/* ── Stack ───────────────────── */}
            <section className="reveal section">
                <h2 className="section-header">
                    stack<span>.</span>flex
                </h2>
                <div className="stack-grid">
                    <div>
                        <p className="stack-head">
                            TheFlower has <span>no backend</span>. Literally zero.
                        </p>
                        <p className="stack-body">
                            The whole content pipeline — headlines, articles,
                            scheduling, publishing to the site — runs on n8n workflows
                            I stitched together. No server, no database, no CMS. Just
                            webhooks doing all the work. I didn't write a backend.
                            I just connected boxes until it worked.
                        </p>
                    </div>
                    <div className="stack-facts">
                        <strong>n8n</strong> — the whole pipeline, no code<br />
                        <strong>No backend</strong> — static site + webhooks<br />
                        <strong>2 VPS</strong> — one for projects, one for hermes<br />
                        <strong>ML/DL</strong> — coursework, still learning<br />
                        <strong>Deepseek</strong> — the only model that gets me
                    </div>
                </div>
            </section>

            {/* ── Links ───────────────────── */}
            <section className="reveal section">
                <h2 className="section-header">
                    else<span>.</span>where
                </h2>
                <div className="links-grid">
                    {SOCIAL_LINKS.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-item"
                        >
                            <span className="link-name">{link.name}</span>
                            <span className="link-arrow">→</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* ── Footer ──────────────────── */}
            <footer className="footer-section">
                <p className="footer-copy">
                    © {year} {NAME} — all rights reserved, some wrongs too
                </p>
                <span className="footer-flower" aria-hidden="true">🌸</span>
            </footer>
        </>
    );
};

export default App;
