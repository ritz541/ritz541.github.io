import React from 'react';
import { NAME } from '../constants';

const Navbar: React.FC = () => {
    type Theme = 'dark' | 'light';
    const [theme, setTheme] = React.useState<Theme>('light');

    React.useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        const initialTheme = savedTheme || 'light';
        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <nav className="simple-nav">
            <div className="container nav-inner">
                <a href="/" className="brand-link">{NAME}</a>
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    {theme === 'dark' ? 'Light' : 'Dark'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
