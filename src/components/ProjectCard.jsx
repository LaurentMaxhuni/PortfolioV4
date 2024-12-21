import React from "react";
import "../styles/ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <img src={props.image} alt="" />
      </div>
      <div className="project-card-body my-3">
        <h3 className="project-card-title">{props.title}</h3>
        <p className="project-card-description">{props.description}</p>
        <button className="project-card-link tw-mt-2"><a href={props.link}>View Project</a></button>
      </div>
    </div>
  );
}

export default ProjectCard;
