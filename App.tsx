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
                <section className="hero">
                    <p className="hero-role">Independent Product Engineer</p>
                    <h1 className="hero-name">{NAME}</h1>
                    <p className="hero-copy">
                        I build internet products end to end: product direction, interface design,
                        and frontend systems that ship fast and age well.
                    </p>

                    <div className="hero-meta" aria-label="Contact details">
                        <span>{LOCATION}</span>
                        <span className="meta-sep" aria-hidden="true">/</span>
                        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </div>
                </section>

                <section className="grid">
                    <section className="panel panel-main" aria-labelledby="work-heading">
                        <div className="panel-head">
                            <h2 id="work-heading">Selected Work</h2>
                            <p>Current projects and active experiments.</p>
                        </div>

                        <div className="work-list">
                            {PROJECTS.map((project, index) => (
                                <article key={index} className="work-item">
                                    <h3>
                                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                                            {project.name}
                                        </a>
                                    </h3>
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

                    <aside className="panel panel-side" aria-labelledby="links-heading">
                        <div className="panel-head">
                            <h2 id="links-heading">Links</h2>
                            <p>Where to find me online.</p>
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
                    <p>© {year} {NAME}</p>
                </footer>
            </main>
        </>
    );
};

export default App;
