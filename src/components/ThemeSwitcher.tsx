import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/switchers.css';

const ThemeSwitcher: React.FC = () => {
    const { t } = useTranslation();
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        const body = document.body;
        const isCurrentlyDark = body.classList.contains('dark');
        body.classList.toggle('dark', !isCurrentlyDark);
        body.classList.toggle('light', isCurrentlyDark);
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
            <div className="slider"></div>
        </button>
    );
};

export default ThemeSwitcher;
