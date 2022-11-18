import React from "react"
import SkillsCard from "./SkillsCard"
import SkillsData from "./SkillsData"

import "./SkillsCardStyles.css"


const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-title">Compétences</h1>
      <div className="skills-container">
        {SkillsData.map((value, index) => {
          return (
            <SkillsCard
              key={index}
              img={value.img}
              title={value.title}
              text={value.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
