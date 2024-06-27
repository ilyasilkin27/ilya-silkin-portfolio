import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/themeSwitcher.css';

const ThemeSwitcher: React.FC = () => {
    const { t } = useTranslation();

    const toggleTheme = () => {
        const body = document.body;
        const isDark = body.classList.contains('dark');
        body.classList.toggle('dark', !isDark);
        body.classList.toggle('light', isDark);

        // Переключаем классы для всех элементов с неоном
        const elements = document.querySelectorAll('.neon-dark, .neon-light');
        elements.forEach(el => {
            el.classList.toggle('neon-dark', !isDark);
            el.classList.toggle('neon-light', isDark);
        });
    };

    return (
        <button className="theme-switcher" onClick={toggleTheme}>
            {t('button.switchTheme')}
        </button>
    );
};

export default ThemeSwitcher;
