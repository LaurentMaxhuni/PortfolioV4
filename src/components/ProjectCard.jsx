import { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/projectCard.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectCard(props) {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-delay={props.delay}
      className="d-flex justify-content-center"
    >
      <div className="project-card">
        <div className="project-card-header">
          <figure>
            <img src={props.image} alt="" />
          </figure>
        </div>
        <div className="project-card-body my-3 mx-">
          <h3 className="project-card-title">{props.title}</h3>
          <p className="project-card-description">{props.description}</p>
          <div className="tw-flex tw-justify-between tw-self-end">
            <button className="project-card-link mt-4">
              <a href={props.link} target="_blank" rel="noreferrer noopener" aria-label="View Project">
                View Project
              </a>
            </button>
            <button className="project-card-link-secondary mt-4">
              <a href={props.repoLink} target="_blank" rel="noreferrer noopener" aria-label="View Repository">
                View Repository
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  repoLink: PropTypes.string,
  delay: PropTypes.number,
};

export default ProjectCard;
