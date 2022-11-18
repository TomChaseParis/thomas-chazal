import "./WorkCardStyles.css";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import React, { useState } from "react";

const WorkCard = ({ imgSrc, title, text, linkURL }) => {
  const redirectToProject = (url) => {
    console.log(text)
    console.log(linkURL)
    // 👇️ setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer");
  };

  console.log('Work card ')

  return (
    <div className="project-card">
      <div>
        <img id="project-img" src={imgSrc} alt="project" />
        <h3 className="project-title">{title}</h3>
        <p>{text}</p>
      </div>
      <div onClick={() => {
        redirectToProject(linkURL)
      }}>
        <div className='pro-details'>

          <div className="project-card-btn">
            <AwesomeButton

              style={{ fontSize: '18px' }}
              type="primary">
              Voir projet
            </AwesomeButton>
          </div>
        </div>

      </div>

    </div>
  );
};

export default WorkCard;
