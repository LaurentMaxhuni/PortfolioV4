import React from "react";
import hero from "../assets/icons/hero.svg";
import arrow from "../assets/icons/arrow.svg";
import Button from  "./Button";

function Hero() {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-evenly tw-relative">
              <img src={arrow} alt="" className="tw-absolute tw-left-[-12%]" />
              <h1 className="tw-text-7xl tw-font-bold tw-uppercase">
                Creative Web <br />{" "}
                <span className="tw-text-[var(--primary)]">Developer</span>
              </h1>
              <div className="mb-5 pb-3">
                <Button $type="primary">Hire Me</Button>
                <Button>Download CV</Button>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-6">
              <img src={hero} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
