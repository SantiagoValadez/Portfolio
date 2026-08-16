import React from 'react';
import { motion } from 'framer-motion';
import './Projects.module.css';

function Projects() {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción breve del proyecto.',
      link: '#',
      stack: ['React', 'Node.js', 'MySQL'],
      featured: true,
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción breve del proyecto.',
      link: '#',
      stack: ['JavaScript', 'Vite', 'APIs'],
      featured: false,
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-header">
        <p className="eyebrow">Work</p>
        <h2>Production-ready solutions built with precision and impact.</h2>
        <p className="projects-intro">
          A curated selection of projects that showcase my approach to solving real problems through clean code, thoughtful design, and full ownership of the delivery.
        </p>
      </div>

      <div className="featured-wrap">
        {projects.filter((project) => project.featured).map((project, index) => (
          <motion.article
            key={project.title}
            className="featured-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.12 }}
          >
            <div className="featured-label">Featured Work</div>
            <div className="featured-body">
              <div className="featured-visual" aria-hidden="true" />
              <div className="featured-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.stack.map((item) => (
                    <span key={item} className="tech-pill">{item}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  View case study
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className={`project-card ${project.featured ? 'featured-project' : ''}`}
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.12 }}
          >
            <div className="project-image" aria-hidden="true" />
            <div className="project-content">
              <div className="title-row">
                <h3>{project.title}</h3>
                {project.featured && <span className="mini-badge">Featured</span>}
              </div>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.stack.map((item) => (
                  <span key={item} className="tech-pill">{item}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                Learn more
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
