import React from "react";
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
import SkillLevelBar from "./SkillLevelBar";

function SkillsLevel() {
  return (
    <section className="my-3">
      <div className="container">
        <h1
          className="tw-text-6xl tw-font-bold tw-text-center"
          data-aos="zoom-out-down"
          data-aos-duration="1000"
        >
          My <span className="tw-text-[var(--primary)]">Skill</span> Level
        </h1>
        <div className="row my-5">
          <SkillLevelBar title="HTML" image={html} percentage={100} />
          <SkillLevelBar title="CSS" image={css} percentage={90} />
          <SkillLevelBar title="JavaScript" image={js} percentage={85} />
          <SkillLevelBar title="React JS" image={react} percentage={75} />
          <SkillLevelBar title="Python" image={python} percentage={50} />
          <SkillLevelBar title="Git" image={git} percentage={60} />
          <SkillLevelBar title="GitHub" image={github} percentage={60} />
          <SkillLevelBar title="VS Code" image={vscode} percentage={80} />
          <SkillLevelBar
            title="Tailwind CSS"
            image={tailwind}
            percentage={90}
          />
          <SkillLevelBar title="Bootstrap" image={bootstrap} percentage={95} />
          <SkillLevelBar title="jQuery" image={jquery} percentage={65} />
          <SkillLevelBar title="Node JS" image={node} percentage={20} />
        </div>
      </div>
    </section>
  );
}

export default SkillsLevel;
