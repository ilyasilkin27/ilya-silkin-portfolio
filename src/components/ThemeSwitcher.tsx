import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/themeSwitcher.css';

const ThemeSwitcher: React.FC = () => {
    const { t } = useTranslation();
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        const body = document.body;
        const isCurrentlyDark = body.classList.contains('dark');
        body.classList.toggle('dark', !isCurrentlyDark);
        body.classList.toggle('light', isCurrentlyDark);
        setIsDark(!isCurrentlyDark);

        // Переключаем классы для всех элементов с неоном
        const elements = document.querySelectorAll('.neon-dark, .neon-light');
        elements.forEach(el => {
            el.classList.toggle('neon-dark', !isCurrentlyDark);
            el.classList.toggle('neon-light', isCurrentlyDark);
        });
    };

    useEffect(() => {
        const body = document.body;
        setIsDark(body.classList.contains('dark'));
    }, []);

    return (
        <button 
            className={`theme-switcher ${isDark ? 'dark' : 'light'}`} 
            onClick={toggleTheme}
        >
            {t('button.switchTheme')}
        </button>
    );
};

export default ThemeSwitcher;
