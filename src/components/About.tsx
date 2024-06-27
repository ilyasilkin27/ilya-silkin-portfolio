import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/about.css';
import Typewriter from './Typewriter';

const About: React.FC = () => {
    const { t } = useTranslation();
    const descriptions: string[] = t('about.description', { returnObjects: true }) as string[];

    return (
        <section id="about">
            <h2 className="neon-dark">{t('about.title')}</h2>
            <h3>{t('about.name')}</h3>
            <p>
                <b className="neon-dark">
                    <Typewriter texts={descriptions} />
                </b>
            </p>
        </section>
    );
};

export default About;
