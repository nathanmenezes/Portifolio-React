import React from 'react';
import ProjectCard from '../ProjectCard';
import "./Projects.css"


function Projects() {
    return(
        <section>
            <div className="projects-header">
                <div className='texts'>
                    <h2>
                        <span>#</span>projetos
                    </h2>
                    <span id='line'></span>
                </div>
                <a href=''>Ver Todos</a>
            </div>
            <div className= "projects-cards">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}

export default Projects;