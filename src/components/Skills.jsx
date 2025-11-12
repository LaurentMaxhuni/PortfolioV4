import { useEffect } from "react";
import SkillsCard from "./SkillsCard";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import python from "../assets/icons/python.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import vscode from "../assets/icons/vscode.svg";
import tailwind from "../assets/icons/tailwind-css.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import jquery from "../assets/icons/jquery.svg";
import node from "../assets/icons/node.svg";
import vue from "../assets/icons/vue.svg";
import angular from "../assets/icons/angular.svg";
import express from "../assets/icons/express.svg";
import mysql from "../assets/icons/mysql.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);

  return (
    <section id="skills" className="my-3 py-3">
      <div className="container d-flex justify-content-center flex-column align-items-center">
        <h1
          className="tw-text-6xl tw-font-bold"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          My <span className="tw-text-[var(--primary)]">Skills</span>
        </h1>
        <div className="skills-row tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-x-0 tw-gap-y-10 tw-my-20 tw-place-items-center tw-w-[90%]">
          <SkillsCard
            image={html}
            title="HTML"
            description="I have a solid understanding of HTML and its semantic elements, enabling me to create well-structured and accessible web pages."
            link="https://www.w3schools.com/html/"
            delay="100"
          />
          <SkillsCard
            image={css}
            title="CSS"
            description="I have a strong understanding of CSS and its properties, allowing me to create visually appealing and responsive designs."
            link="https://www.w3schools.com/css/"
            delay="200"
          />
          <SkillsCard
            image={js}
            title="JavaScript"
            description="I have a good understanding of JavaScript and its core concepts, enabling me to create interactive and dynamic web applications."
            link="https://www.javascript.com/"
            delay="300"
          />
          <SkillsCard
            image={react}
            title="React JS"
            description="I have experience with React and its ecosystem, allowing me to build single-page applications efficiently."
            link="https://reactjs.org/"
            delay="400"
          />
          <SkillsCard
            image={vue}
            title="Vue JS"
            description="I have experience with Vue.js, allowing me to build smooth, reactive user interfaces with a simple and flexible workflow."
            link="https://vuejs.org/"
            delay="100"
          />
          <SkillsCard
            image={angular}
            title="Angular JS"
            description="I have experience with Angular, enabling me to create scalable front-end applications using components and TypeScript."
            link="https://angular.dev/"
            delay="200"
          />
          <SkillsCard
            image={python}
            title="Python"
            description="I have a good understanding of Python and its syntax, enabling me to write clean and readable code."
            link="https://www.python.org/"
            delay="300"
          />
          <SkillsCard
            image={git}
            title="Git"
            description="I have experience with Git and version control, allowing me to collaborate with other developers and manage code effectively."
            link="https://git-scm.com/"
            delay="400"
          />
          <SkillsCard
            image={github}
            title="GitHub"
            description="I have experience with GitHub and its features, enabling me to host projects and collaborate with other developers."
            link="https://github.com/"
            delay="100"
          />
          <SkillsCard
            image={vscode}
            title="VSCode"
            description="I have experience with Visual Studio Code, enabling me to write code efficiently and use various extensions for development."
            link="https://code.visualstudio.com/"
            delay="200"
          />
          <SkillsCard
            image={tailwind}
            title="Tailwind CSS"
            description="I have experience with Tailwind CSS, enabling me to create responsive and visually appealing user interfaces."
            link="https://tailwindcss.com/"
            delay="300"
          />
          <SkillsCard
            image={bootstrap}
            title="Bootstrap 5"
            description="I have experience with Bootstrap 5, enabling me to create responsive and mobile-first designs quickly."
            link="https://getbootstrap.com/"
            delay="400"
          />
          <SkillsCard
            image={jquery}
            title="jQuery"
            description="I have experience with jQuery, enabling me to add interactivity and functionality to web pages."
            link="https://jquery.com/"
            delay="100"
          />
          <SkillsCard
            image={node}
            title="Node.js"
            description="I have experience with Node.js, enabling me to build server-side applications with JavaScript."
            link="https://nodejs.org/en/"
            delay="200"
          />
          <SkillsCard
            image={express}
            title="Express.js"
            description="I have experience with Express.js, allowing me to build backend APIs, manage routes, and handle server logic efficiently."
            link="https://expressjs.com/"
            delay="300"
          />
          <SkillsCard
            image={mysql}
            title="MySQL"
            description="I have experience with MySQL, enabling me to design and manage relational databases for web applications."
            link="https://www.mysql.com/"
            delay="400"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
