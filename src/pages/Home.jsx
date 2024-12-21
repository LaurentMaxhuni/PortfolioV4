import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import SkillsLevel from "../components/SkillsLevel";
import Projects from "../components/Projects";

function Home() {
  return <div className="d-flex flex-column">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <SkillsLevel />
    <Projects />
  </div>;
}

export default Home;
