import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import SkillsLevel from "../components/SkillsLevel";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return <div className="d-flex flex-column">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <SkillsLevel />
    <Projects />
    <Contact />
    <hr />
    <Footer />
  </div>;
}

export default Home;
