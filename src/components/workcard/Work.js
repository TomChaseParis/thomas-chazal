import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkData from "./WorkData";
import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projets</h1>
      <div className="project-container">
        {WorkData.map((value, index) => {
          return (
            <WorkCard
              linkURL={value.linkURL}
              key={index}
              imgSrc={value.imgSrc}
              title={value.title}
              text={value.text}
              view={value.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
