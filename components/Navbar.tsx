import React from 'react';
import { NAME } from '../constants';

const Navbar: React.FC = () => {
    type Theme = 'dark' | 'light';
    const [theme, setTheme] = React.useState<Theme>('dark');

    React.useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        const initialTheme = savedTheme || 'dark';
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
            <div className="nav-inner">
                <a href="/" className="brand-link">~/chavanpatil</a>
                <div className="nav-status">
                    <span className="status-dot">online</span>
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? '☀' : '☾'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
