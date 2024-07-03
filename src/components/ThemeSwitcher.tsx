import React, { useState, useEffect } from 'react';
import '../styles/switchers.css';

const ThemeSwitcher: React.FC = () => {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        const body = document.body;
        const isCurrentlyDark = body.classList.contains('dark');
        if (isCurrentlyDark) {
            body.classList.remove('dark');
            body.classList.add('light');
        } else {
            body.classList.remove('light');
            body.classList.add('dark');
        }
        setIsDark(!isCurrentlyDark);
    };

    useEffect(() => {
        const body = document.body;
        setIsDark(body.classList.contains('dark'));
    }, []);

    return (
        <button
            className={`switcher ${isDark ? 'on' : 'off'}`}
            onClick={toggleTheme}
        >
            <span className="indicator">☀️</span>
            <div className="slider"></div>
            <span className="indicator">🌙</span>
        </button>
    );
};

export default ThemeSwitcher;
