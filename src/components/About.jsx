import React, {useEffect} from "react";
import aboutImage from "../assets/images/laurent-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {

  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);

  return (
    <section id="about" className="my-4 py-4">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-lg-6 col-xl-6 text-center text-lg-start mb-4 d-grid tw-place-content-center"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className="tw-text-5xl md:tw-text-7xl tw-font-bold">
              About <span className="tw-text-[var(--primary)]">me</span>
            </h1>
            <p className="tw-text-[var(--gray)] tw-font-light tw-my-3 tw-w-[100%] lg:tw-w-[85%]">
              Hi there! I&apos;m Laurent Maxhuni, a 14-year-old aspiring
              front-end developer with a passion for coding and creating
              dynamic, user-friendly web applications. With a solid foundation
              in HTML, CSS, JavaScript, and ReactJS, I love turning complex
              problems into simple, beautiful solutions. I&apos;ve also dived
              into Python to expand my skill set. My portfolio showcases various
              projects, including an AI chatbot, that highlight my dedication to
              learning and innovation. When I&apos;m not coding, you can find me
              exploring new technologies, gaming, or working on creative
              projects.
            </p>
          </div>
          <div
            className="col-12 col-lg-6 col-xl-6 d-flex justify-content-center"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <img src={aboutImage} alt="" className="img-fluid rounded-circle tw-border-[var(--primary)] tw-border-2 tw-shadow-lg tw-shadow-[var(--primary)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
