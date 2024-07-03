import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/about.css';
import Typewriter from './Typewriter';

const About: React.FC = () => {
    const { t } = useTranslation();
    const descriptions: string[] = t('about.description', { returnObjects: true }) as string[];

    return (
        <section id="about">
            <h2>{t('about.name')}</h2>
            <p>
                <b>
                    <Typewriter texts={descriptions} />
                </b>
            </p>
        </section>
    );
};

export default About;
