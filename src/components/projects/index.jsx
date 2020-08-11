import React from "react";

function Projects() {
  return (
    <div className="projects-page">
      <h1>What I worked on so far</h1>
      <div className="projects-grid grid">

        <div className="project one-third">
          <a href="https://renatacioltea.github.io/tic-tac-toe/" className="project-link" target="_blank">
            <span className="project-name"> Tic-tac-toe</span>
            <span className="project-more">View source code</span>
          </a>
          <div className="project-title"></div>
        </div>

        <div className="project one-third">
          <a href="https://renatacioltea.github.io/Weather-app/"  className="project-link" target="_blank">
            <span className="project-name"> Weather app</span>
            <span className="project-more">View source code</span>
          </a>
          <div className="project-title"></div>
        </div>

        <div className="project one-third">
          <a href="https://renatacioltea.github.io/Drum-kit-js/" className="project-link" target="_blank">
            <span className="project-name"> Drum kit</span>
            <span className="project-more">View source code</span>
          </a>
          <div className="project-title"></div>
        </div>

      </div>
      
    </div>
  );
}

export default Projects;
