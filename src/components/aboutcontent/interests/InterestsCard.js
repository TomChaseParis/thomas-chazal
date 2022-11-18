import React from "react";
import "./InterestsStyles.css";

const InterestsCard = (props) => {
  return (
    <div className="interests-card">
      <img src={props.img} alt="interests" />
      <h3>{props.title}</h3>
      <p className="interests-text">{props.text}</p>
    </div>
  );
};

export default InterestsCard;
