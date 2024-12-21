import React from "react";
import ProgressBar from "react-animated-progress-bar";
import "../styles/SkillLevelBar.css";
import CountUp from "react-countup";

function SkillLevelBar(props) {
  return (
    <div>
      <hr />
      <div className="d-flex flex-column flex-lg-row gap-4 align-items-center tw-w-full justify-content-between my-3 py-3">
        <div className="d-flex flex-row align-items-center">
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
          <CountUp
            end={props.percentage}
            suffix="%"
            className="mx-3 tw-text-3xl tw-font-bold"
          />
        </div>

        <div className="d-flex flex-row align-items-center">
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

export default SkillLevelBar;
