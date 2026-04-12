import React from 'react';
import { NAME, LOCATION, EMAIL, EMAIL_PRIVATE, SOCIAL_LINKS, PROJECTS } from './constants';
import Navbar from './components/Navbar';
import './index.css';

const App: React.FC = () => {
    const year = new Date().getFullYear();

    const tickerHeadlines = [
        "COFFEE MACHINE ACQUIRES SENTIENCE",
        "PLANT REFUSES TO GROW UNTIL IT RECEIVES AN APOLOGY",
        "LOCAL MAN DISCOVERS HE IS ACCIDENTALLY PART OF A SECRECY CULT",
        "TRAFFIC CONE PROMOTED TO INTERIM MAYOR",
        "CLOUDS VOTE 4-3 TO REMAIN GREY UNTIL TUESDAY",
        "BUREAUCRACY DECLARED MOST POPULAR HOBBY",
        "SCIENTISTS FIND NEW SPECIES OF DUST MITE",
    ];

    return (
        <>
            <div className="ticker" aria-hidden="true">
                <div className="ticker-track">
                    {[...tickerHeadlines, ...tickerHeadlines].map((headline, i) => (
                        <React.Fragment key={i}>
                            <span className="ticker-item">{headline}</span>
                            <span className="ticker-sep">🌸</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <Navbar />

            <div className="dashboard">
                <div className="panel panel-character">
                    <img
                        src="/anime-girl.png"
                        alt=""
                        className="character-img"
                        loading="eager"
                    />
                </div>

                <section className="panel panel-about">
                    <div className="panel-label">about.me</div>
                    <h1 className="about-name">Ritesh Chavan Patil</h1>
                    <p className="about-tagline">script kiddie → developer // 23 // {LOCATION}</p>
                    <p className="about-body">
                        I build internet products. Product direction, interface design,
                        and frontend systems. Sometimes it ships, sometimes it breaks.
                        Usually both. Script kiddie turned developer — still chasing the
                        dream I had as a kid: build apps, ship them, watch people use
                        what I made.
                    </p>
                    <div className="about-note">
                        Reach me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                        Three-letter agencies and my mom: use{' '}
                        <a href={`mailto:${EMAIL_PRIVATE}`}>{EMAIL_PRIVATE}</a>.
                        It's on Proton. You know what that means.
                    </div>
                </section>

                <section className="panel panel-projects">
                    <div className="panel-label">selected.work</div>
                    {PROJECTS.map((project, index) => (
                        <article key={index} className="project-item">
                            <div className="project-head">
                                <span className="project-num">0{index + 1}</span>
                                <h2 className="project-title">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        {project.name}
                                    </a>
                                </h2>
                            </div>
                            <p className="project-blurb">{project.byline}</p>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-footer">
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-url"
                                >
                                    {project.url}
                                </a>
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="panel panel-links">
                    <div className="panel-label">links</div>
                    <ul className="links-list">
                        {SOCIAL_LINKS.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="panel panel-n8n">
                    <div className="panel-label">stack.flex</div>
                    <p className="n8n-head">TheFlower runs on zero backend.</p>
                    <p className="n8n-desc">
                        The entire content pipeline — writing, editing, scheduling, publishing —
                        is automated through n8n workflows. No server, no database, no CMS.
                        Just webhooks and vibes.
                    </p>
                    <div className="n8n-detail">
                        <strong>n8n</strong> automation<br />
                        <strong>No backend</strong> — static + webhooks<br />
                        <strong>2 VPS</strong> — projects + hermes agent<br />
                        <strong>AI/ML</strong> coursework — DL, NLP<br />
                        <strong>Deepseek</strong> — GOAT for steering
                    </div>
                </section>
            </div>

            <footer className="dashboard-footer">
                <p className="footer-copy">© {year} {NAME} — all rights reserved, some wrongs too</p>
                <span className="footer-flower" aria-hidden="true">🌸</span>
            </footer>
        </>
    );
};

export default App;
