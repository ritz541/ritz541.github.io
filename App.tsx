import React from 'react';
import { NAME, LOCATION, EMAIL, SOCIAL_LINKS, PROJECTS } from './constants';
import Navbar from './components/Navbar';
import './index.css';

const App: React.FC = () => {
    return (
        <>
            <Navbar />

            <main className="container">
                <section style={{ marginBottom: '3rem' }}>
                    <h1>{NAME}</h1>
                    <p className="text-small" style={{ marginBottom: '0.25rem' }}>{LOCATION}</p>
                    <p className="text-small" style={{ marginBottom: '2rem' }}>{EMAIL}</p>
                    
                    <h2>Socials</h2>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, marginBottom: '3rem' }}>
                        {SOCIAL_LINKS.map((link) => (
                            <li key={link.name} style={{ marginBottom: '0.25rem' }}>
                                <a
                                    href={link.url}
                                    target={link.name.includes('Email') ? '_self' : '_blank'}
                                    rel={link.name.includes('Email') ? '' : 'noopener noreferrer'}
                                    className="btn-link"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <h2>Projects</h2>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        {PROJECTS.map((project) => (
                            <li key={project.name} style={{ marginBottom: '0.25rem' }}>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-link"
                                >
                                    {project.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <p className="text-small" style={{ color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
                        this website was built with ai (sorry, not sorry)
                    </p>
                </section>
            </main>

            <footer>
                <div className="container">
                    <p>© 2025 Ritesh Chavan Patil</p>
                </div>
            </footer>
        </>
    );
};

export default App;
