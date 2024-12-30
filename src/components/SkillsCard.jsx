import React, {useEffect} from "react";
import "../styles/SkillsCard.css";
import AOS from "aos";
import "aos/dist/aos.css";

function SkillsCard(props) {

  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);

  return (
    <div className="skills-card d-flex justify-content-center" data-aos="zoom-in" data-aos-delay={props.delay}>
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
