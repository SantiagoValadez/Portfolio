import React from 'react';
import './Projects.module.css';

function Projects() {
  const projects = [
    { title: 'Proyecto 1', description: 'Descripción breve del proyecto.', link: '#' },
    { title: 'Proyecto 2', description: 'Descripción breve del proyecto.', link: '#' },
  ];

  return (
    <section className="projects">
      <h2>Mis Proyectos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Ver más</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
