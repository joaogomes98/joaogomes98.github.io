import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="Projects">
        <div className="projects-container">
            <div className="projects-intro">
                <h2>Projects</h2>
                <span>
                    Step into my design realm! Here, you'll find a curated collection of my diverse projects. 
                    From user-centric interfaces to innovative design solutions, feel free to explore and get a glimpse into my creative journey. 
                    Your curiosity is encouraged—click away!
                </span>
            </div>
            <div className="projects-cards-container">
                <div className="row">
                    <div className="project-card">
                        <img src="./images/matchbox-logo.png" alt="project-1"></img>
                    </div>
                    <div className="project-card">
                        <img src="./images/snackerz-logo.png" alt="project-1"></img>
                    </div>
                    <div className="project-card">
                        <img src="./images/animalcare-logo.png" alt="project-1"></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Projects;