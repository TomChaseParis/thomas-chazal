import React from "react";
import InterestsCard from "./InterestsCard";
import InterestsData from "./InterestsData";
import "./InterestsStyles.css";

const Interests = () => {
  return (
    <div className="interests">
      <h1 className="interests-title">Centres d'intérêt</h1>
      <div className="interests-container">
        {InterestsData.map((value, index) => {
          return (
            <InterestsCard
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

export default Interests;
