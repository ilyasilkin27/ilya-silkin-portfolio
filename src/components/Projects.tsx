import React from 'react';
import { useTranslation } from 'react-i18next';

const projects = [
    {
        key: 'project1',
        link: 'https://github.com/peperopuripuri/react-chat',
        demo: 'https://frontend-chat-ru.hexlet.app/',
        img: require('../fixtures/react-chat.png'),
        alt: 'react-chat',
    },
    {
        key: 'project2',
        link: 'https://github.com/ilyasilkin27/reg-new-student-script',
    },
    {
        key: 'project3',
        link: 'https://github.com/ilyasilkin27/react-posts-app',
        demo: 'https://ilyasilkin27.github.io/react-posts-app/',
        img: require('../fixtures/react-post-app.png'),
        alt: 'react-post-app',
    },
    {
        key: 'project4',
        link: 'https://github.com/ilyasilkin27/proofreading-script',
    },
    {
        key: 'project5',
        link: 'https://github.com/peperopuripuri/RSS-Agregator',
        demo: 'https://frontend-project-11-inky.vercel.app/',
        img: require('../fixtures/rss-agregator.png'),
        alt: 'rss-agregator',
    },
    {
        key: 'project6',
        link: 'https://github.com/peperopuripuri/Difference-Calculator',
        demo: 'https://asciinema.org/a/552063',
    },
];

const Projects: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="projects">
            <h2>{t('projects.title')}</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className={`project-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
                        {project.img ? (
                            <div className="wrap-image">
                                <img src={project.img} alt={project.alt || 'Project Image'} className="project-img" />
                            </div>
                        ) : (
                            <div className="no-image"></div>
                        )}
                        <div className="project-info">
                            <h3>{t(`projects.${project.key}`)}</h3>
                            <p>{t(`projects.${project.key}Description`)}</p>
                            <div className="btns">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button className='viewCode'>{t('button.viewCode')}</button>
                                </a>
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <button className='demo'>{t('button.demo')}</button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
