import React from 'react';
import './css/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 data-aos="fade-left">My Projects</h2>
      <div className="project-list">
        {/* Adicione seus projetos aqui */}
        <div
          className="project-item"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <h3>Projeto 1</h3>
          <p>Descrição do projeto 1.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
