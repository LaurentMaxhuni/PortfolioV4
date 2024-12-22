import React from "react";
import hero from "../assets/icons/hero.svg";
import Button from "./Button";

function Hero() {
  return (
    <>
      <section id="home" className="mt-5 mb-3 py-5 tw-h-[100dvh]">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center tw-relative mt-3 mb-3 text-center text-lg-start">
              <h1 className="tw-text-5xl md:tw-text-7xl tw-font-bold tw-uppercase">
                Creative Web <br />
                <span className="tw-text-[var(--primary)]">Developer</span>
              </h1>
              <div className="mt-5">
                <Button $type="primary">
                  <a
                    href="https://www.linkedin.com/in/laurent-maxhuni-56a394304/"
                    target="_blank"
                    referrerPolicy="noopener noreferrer"
                    className="tw-no-underline"
                  >
                    Hire Me
                  </a>
                </Button>
                <a
                  href="../../laurentmaxhuni.pdf"
                  download="laurentmaxhuni.pdf"
                  className="tw-no-underline"
                >
                  <Button>Download CV</Button>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-6 d-flex justify-content-center">
              <img src={hero} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
