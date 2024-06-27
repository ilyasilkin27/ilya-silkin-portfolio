import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/languageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <button className="language-switcher" onClick={toggleLanguage}>
            {i18n.t('button.switchLanguage')}
        </button>
    );
};

export default LanguageSwitcher;
