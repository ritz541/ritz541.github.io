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
            <a href="https://theflower.xyz" target="_blank" rel="noopener noreferrer" className="ticker">
                <div className="ticker-track">
                    {[...tickerHeadlines, ...tickerHeadlines].map((headline, i) => (
                        <React.Fragment key={i}>
                            <span className="ticker-item">{headline}</span>
                            <span className="ticker-sep">🌸</span>
                        </React.Fragment>
                    ))}
                </div>
            </a>

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
                        I build things for the internet. Websites, apps, weird automation
                        pipelines. Script kiddie turned developer — still chasing the
                        same thing I wanted as a kid: build something, ship it, watch
                        people use what I made.
                    </p>
                    <div className="about-note">
                        <a href={`mailto:` + 'riteshchavan@duck.com'}>riteshchavan@duck.com</a> for normal stuff.
                        <br />
                        <a href={`mailto:` + 'ritzchavan@proton.me'}>ritzchavan@proton.me</a> if you're a fed, a
                        recruiter who found my LinkedIn, or my mom.
                        It's on Proton. You know exactly why I have two emails.
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
                    <p className="n8n-head">TheFlower has no backend. Literally zero.</p>
                    <p className="n8n-desc">
                        The whole content pipeline — headlines, articles, scheduling,
                        publishing to the site — runs on n8n workflows I stitched together.
                        No server, no database, no CMS. Just webhooks doing all the work.
                        I didn't write a backend. I just connected boxes until it worked.
                    </p>
                    <div className="n8n-detail">
                        <strong>n8n</strong> — the whole pipeline, no code<br />
                        <strong>No backend</strong> — static site + webhooks<br />
                        <strong>2 VPS</strong> — one for projects, one for hermes<br />
                        <strong>ML/DL</strong> — coursework, still learning<br />
                        <strong>Deepseek</strong> — the only model that gets me
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
