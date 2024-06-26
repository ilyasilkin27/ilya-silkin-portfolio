import React from 'react';
import '../styles/projects.css';

const projects = [
    {
        title: 'Project 1',
        description: 'Description for project 1',
        link: 'https://example.com/project1'
    },
    {
        title: 'Project 2',
        description: 'Description for project 2',
        link: 'https://example.com/project2'
    },
    // Add more projects here
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
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
