import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProgressBar from "react-animated-progress-bar";
import "../styles/skillLevelBar.css";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import AOS from "aos";
import "aos/dist/aos.css";

function SkillLevelBar(props) {
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);

  return (
    <div>
      <hr />
      <div className="d-flex flex-column flex-lg-row gap-4 align-items-center tw-w-full justify-content-between my-3 py-3">
        <div
          className="d-flex flex-row align-items-center skill-level-bar"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <ProgressBar
            width=""
            height="20px"
            rect
            fontColor="white"
            percentage={props.percentage}
            rectPadding="1px"
            rectBorderRadius="25px"
            trackPathColor="transparent"
            trackBorderColor="grey"
            scrollArea="document"
            defColor={{
              excellent: "var(--primary)",
              poor: "var(--primary)",
              fair: "var(--primary)",
              good: "var(--primary)",
            }}
          />
          <CountUp start={0} end={props.percentage} suffix="%">
            {({ countUpRef, start }) => {
              return (
                <ReactVisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible && !hasStarted) {
                      start();
                      setHasStarted(true); // Mark the animation as started
                    }
                  }}
                  delayedCall
                >
                  <h1
                    className="mx-3 tw-text-3xl tw-font-bold"
                    ref={countUpRef}
                  />
                </ReactVisibilitySensor>
              );
            }}
          </CountUp>
        </div>

        <div
          className="d-flex flex-row align-items-center skill-level-bar tw-overflow-hidden"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h1 className="tw-font-bold tw-text-3xl">{props.title}</h1>
          <img
            src={props.image}
            alt=""
            className="tw-w-[50px] tw-h-[50px] mx-3"
          />
        </div>
      </div>
      <hr />
    </div>
  );
}

SkillLevelBar.propTypes = {
  title: PropTypes.string,
  percentage: PropTypes.number,
  image: PropTypes.string,
};

export default SkillLevelBar;
