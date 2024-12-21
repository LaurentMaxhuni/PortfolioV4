import React from "react";
import "../styles/SkillsCard.css";

function SkillsCard(props) {
  return (
    <div className="skills-card d-flex justify-content-center">
      <img src={props.image} alt="" className="skills-image" />
      <div className="skills-card-hover">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.link} className="skills-link">
          Visit Site
        </a>
      </div>
    </div>
  );
}

export default SkillsCard;
