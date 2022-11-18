import React from 'react';
import './SkillsCardStyles.css';


const SkillsCard = (props) => {
  return (
    <div className='skills-card'>
    <img src={props.img} alt='skills' />
    <h3 className='skills-title-2'>{props.title}</h3>
    <p className='skills-text'>{props.text}</p>
</div>
  )
}

export default SkillsCard