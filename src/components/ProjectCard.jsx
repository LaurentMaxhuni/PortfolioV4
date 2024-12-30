import React, { useEffect } from "react";
import "../styles/ProjectCard.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectCard(props) {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);
  return (
    <div data-aos="zoom-in-down" data-aos-delay={props.delay} className="d-flex justify-content-center">
      <div className="project-card">
        <div className="project-card-header">
          <img src={props.image} alt="" />
        </div>
        <div className="project-card-body my-3">
          <h3 className="project-card-title">{props.title}</h3>
          <p className="project-card-description">{props.description}</p>
          <button className="project-card-link mt-4">
            <a href={props.link} target="_blank" rel="noreferrer noopener">
              View Project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
