import React from 'react';
import '../styles/ProjectsSection.css';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

import { projects } from '../constants/ProjectsList';

function ProjectsSection() {
    return (
        <div className='projects-section' id='Projects'>
            <SectionTitle 
                title="what i've done"
            />

            <div className="projects-container">
                {projects.map(project => {
                    return (
                        <ProjectCard 
                            {...project} 
                            key={project.id} 
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectsSection;
