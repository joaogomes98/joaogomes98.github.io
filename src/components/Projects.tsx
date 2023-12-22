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
                        <div className="project-info">
                            <h3>MATCHBOX</h3>
                            <span>An app for project matchmaking that matches people and ideas.</span>
                            <div className="button" id="primary">View Details</div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src="./images/snackerz-logo.png" alt="project-1"></img>
                        <div className="project-info">
                            <h3>SNACKERZ</h3>
                            <span>An app for food ordering revolving around snacks.</span>
                            <div className="button" id="primary">View Details</div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src="./images/animalcare-logo.png" alt="project-1"></img>
                        <div className="project-info">
                            <h3>ANIMALCARE</h3>
                            <span>An app for animal adoption and the preservation of the wildlife.</span>
                            <div className="button" id="primary">View Details</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Projects;