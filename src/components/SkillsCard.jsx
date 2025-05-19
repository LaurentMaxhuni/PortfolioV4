import React, {useEffect} from "react";
import PropTypes from "prop-types";
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
        <a href={props.link} className="skills-link" target="_blank" rel="noreferrer noopener" aria-label="Visit Site">
          Visit Site
        </a>
      </div>
    </div>
  );
}

SkillsCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  delay: PropTypes.string,
};

export default SkillsCard;
