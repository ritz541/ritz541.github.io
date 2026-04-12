import React from 'react';
import { NAME, LOCATION, EMAIL, SOCIAL_LINKS, PROJECTS } from './constants';
import Navbar from './components/Navbar';
import './index.css';

const App: React.FC = () => {
    const year = new Date().getFullYear();
    const getProjectDomain = (url: string) => {
        try {
            return new URL(url).hostname.replace(/^www\./, '');
        } catch {
            return url;
        }
    };

    return (
        <>
            <Navbar />

            <main className="container site-main">
                <header className="masthead">
                    <span className="masthead-flower" aria-hidden="true">🌸</span>
                    <h1 className="masthead-name">{NAME}</h1>
                    <p className="masthead-tagline">
                        I build internet products. Product direction, interface design,
                        and frontend systems. Sometimes it ships, sometimes it breaks.
                        Usually both.
                    </p>
                    <p className="masthead-details">
                        {LOCATION} / <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </p>
                </header>

                <section className="grid">
                    <section className="panel panel-main">
                        <div className="section-header">
                            <h2>Selected Work</h2>
                        </div>

                        <div className="panel-head">
                            <h2>Current Projects & Active Experiments</h2>
                            <p>things i've been building, breaking, and rebuilding.</p>
                        </div>

                        <div className="work-list">
                            {PROJECTS.map((project, index) => (
                                <article key={index} className="work-item">
                                    <h3>
                                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                                            {project.name}
                                        </a>
                                    </h3>
                                    <p className="work-byline">{project.byline}</p>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="live-link"
                                        aria-label={`Open live website for ${project.name}`}
                                    >
                                        Live: {getProjectDomain(project.url)} <span>{project.url}</span>
                                    </a>
                                    <p>{project.description}</p>
                                    <div className="tags">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex}>{tag}</span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <aside className="panel panel-side">
                        <div className="section-header">
                            <h2>Links</h2>
                        </div>

                        <div className="panel-head">
                            <h2>Elsewhere</h2>
                            <p>where to find me when i'm not here.</p>
                        </div>

                        <ul className="links-list">
                            {SOCIAL_LINKS.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </section>

                <footer className="site-footer">
                    <p>© {year} {NAME}. All rights reserved. Some wrongs too.</p>
                </footer>
            </main>
        </>
    );
};

export default App;
