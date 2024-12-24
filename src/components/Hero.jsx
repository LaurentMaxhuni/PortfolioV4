import React, { useEffect } from "react";
import hero from "../assets/icons/hero.svg";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="home" className="tw-mt-[150px] tw-h-auto md:tw-h-[100dvh]">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center tw-relative mt-3 mb-3 text-center text-lg-start"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h1 className="tw-text-5xl md:tw-text-7xl tw-font-bold tw-uppercase">
                Creative Web <br />
                <span className="tw-text-[var(--primary)]">Developer</span>
              </h1>
              <div className="mt-5">
                <Button
                  $type="primary"
                  data-aos="zoom-in-up"
                  data-aos-delay="1500"
                >
                  <a
                    href="https://www.linkedin.com/in/laurent-maxhuni-56a394304/"
                    target="_blank"
                    referrerPolicy="noopener noreferrer"
                    className="tw-no-underline"
                  >
                    Hire Me
                  </a>
                </Button>
                <Button data-aos="zoom-in-up" data-aos-delay="2000">
                  <a
                    href="../../laurentmaxhuni.pdf"
                    download="laurentmaxhuni.pdf"
                    className="tw-no-underline"
                  >
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 col-xl-6 d-flex justify-content-center"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <img src={hero} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
