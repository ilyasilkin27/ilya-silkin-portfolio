import React from 'react';
import { useTranslation } from 'react-i18next';

const projects = [
    {
        key: 'project1',
        link: 'https://github.com/peperopuripuri/react-chat',
    },
    {
        key: 'project2',
        link: 'https://github.com/ilyasilkin27/react-posts-app',
    },
    {
        key: 'project3',
        link: 'https://github.com/ilyasilkin27/reg-new-student-script',
    },
    {
        key: 'project4',
        link: 'https://github.com/ilyasilkin27/proofreading-script',
    },
    {
        key: 'project5',
        link: 'https://github.com/peperopuripuri/RSS-Agregator',
    },
    {
        key: 'project6',
        link: 'https://github.com/peperopuripuri/Difference-Calculator',
    },
];

const Projects: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="projects">
            <h2>{t('projects.title')}</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{t(`projects.${project.key}`)}</h3>
                        <p>{t(`projects.${project.key}Description`)}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <button className='viewCode'>{t('button.viewCode')}</button>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
