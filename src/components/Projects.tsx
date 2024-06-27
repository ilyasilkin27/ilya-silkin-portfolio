import React from 'react';
import '../styles/projects.css';

const projects = [
    {
        title: 'Аналог Slack-чата на React',
        description: 'Проект представляет собой аналог популярного чата Slack, написанный на React.',
        link: 'https://github.com/peperopuripuri/react-chat',
    },
    {
        title: 'Приложение на TypeScript и React',
        description: 'Приложение отображает список постов на странице, используя TypeScript и React.',
        link: 'https://github.com/ilyasilkin27/react-posts-app',
    },
    {
        title: 'Автоматизированная регистрация студентов',
        description: 'Приложение для автоматизированной регистрации новых студентов с использованием API AmoCRM и Keycloak.',
        link: 'https://github.com/ilyasilkin27/reg-new-student-script',
    },
    {
        title: 'Консольное приложение для парсинга расписания',
        description: 'Консольное приложение, которое парсит сайт расписания и подсчитывает количество часов у преподавателей (JS и сторонние библиотеки).',
        link: 'https://github.com/ilyasilkin27/proofreading-script',
    },
    {
        title: 'RSS-агрегатор',
        description: 'Приложение RSS-агрегатор с деплоем на Vercel. Проект нацелен на отработку таких навыков, как: работа с DOM, webpack, Bootstrap, AJAX.',
        link: 'https://github.com/peperopuripuri/RSS-Agregator',
    },
    {
        title: 'Консольное приложение для вычисления различий в JSON/YML/YAML',
        description: 'Приложение принимает JSON/YML/YAML документы и вычисляет их различия. Проект нацелен на отработку навыков парсинга и форматирования данных, проектирования архитектуры приложений, работы с деревьями и написания unit-тестов.',
        link: 'https://github.com/peperopuripuri/Difference-Calculator',
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <button>Посмотреть код</button>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
