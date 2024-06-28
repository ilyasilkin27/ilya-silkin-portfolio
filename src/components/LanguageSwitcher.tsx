import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/switchers.css';

const LanguageSwitcher: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLanguage);
        setIsEnglish(newLanguage === 'en');
    };

    useEffect(() => {
        setIsEnglish(i18n.language === 'en');
    }, [i18n.language]);

    return (
        <button
            className={`switcher ${isEnglish ? 'on' : 'off'}`}
            onClick={toggleLanguage}
        >
            <div className="slider"></div>
        </button>
    );
};

export default LanguageSwitcher;
