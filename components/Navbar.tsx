import React from 'react';

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
        <nav className="premium-nav">
            <div className="container flex justify-between items-center">
                <div className="nav-brand">
                    RCP.
                </div>
                <button
                    className="btn-icon"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    {theme === 'dark' ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
