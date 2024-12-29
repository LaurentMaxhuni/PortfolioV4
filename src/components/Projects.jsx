import React from "react";
import ProjectCard from "./ProjectCard";
import vuentai from "../assets/images/vuentai.png";
import weatherio from "../assets/images/weatherio.png";
import threees from "../assets/images/3es.png";
import brainwave from "../assets/images/brainwave.png";
import quickit from "../assets/images/quickit.png";
import xinder from  "../assets/images/xinder.png";


function Projects() {
  return (
    <section id="projects" className="my-3">
      <div className="container">
        <h2
          className="tw-text-uppercase tw-text-center tw-font-bold tw-text-5xl md:tw-text-7xl tw-overflow-hidden"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          My <span className="tw-text-[var(--primary)]">Projects</span>
        </h2>
        <div className="projects-row tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-place-items-center tw-gap-10 my-4">
          <ProjectCard
            image={vuentai}
            title="Vuentai"
            description="An AI Application with various chatbots such as AI Code, AI Designer, etc."
            link="https://vuentai.netlify.app"
            delay="100"
          />
          <ProjectCard
            image={weatherio}
            title="Weatherio"
            description="A Weather Application that provides weather information of any city."
            link="https://weatherio-la.netlify.app"
            delay="200"
          />
          <ProjectCard
            image={threees}
            title="3es Shape Store"
            description="A 3D Shape Store where users can buy and sell 3D shapes."
            link="https://3es.netlify.app"
            delay="300"
          />
          <ProjectCard
            image={brainwave}
            title="Brainwave"
            description="A Landing Page for a website builder company, where users can build their pages with no code."
            link="https://brain-wave-io.netlify.app"
            delay="100"
          />
          <ProjectCard
            image={quickit}
            title="Quickit"
            description="Quickit is an AI Dashboard, which utilizes AI to respond to users."
            link="https://quickit.netlify.app"
            delay="200"
          />
          <ProjectCard
            image={xinder}
            title="Xinder"
            description="A art gallery website where users can view and purchase art pieces."
            link="https://xinder.netlify.app"
            delay="300"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
