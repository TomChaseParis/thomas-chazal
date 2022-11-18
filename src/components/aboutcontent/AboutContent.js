import './AboutContentStyles.css';
import { AwesomeButton } from 'react-awesome-button';
import React from 'react';
import { Link } from 'react-router-dom';
import React1 from '../../assets/react.webp';
import Dev1 from '../../assets/dev.webp';

const AboutContent = () => {

  return (
    <div className='about'>
      <div className='left'>
        <h1>Qui suis-je ?</h1>
        <p className='about-text'>Je m'appelle Thomas Chazal, je suis un développeur React front-end, habitant à Paris.
          Ayant toujours été passionné par le milieu de l'informatique et des nouvelles technologies, je me suis lancé dans le milieu du développement en 2021, en réalisant un bootcamp intensif au sein de la Passerelle 75010. J'y ai appris de solides bases en terme de languages de programmation tels que JavaScript, en l'employant avec ma librairie favorie, React.
        </p>
        <Link to="/contact">
          <AwesomeButton

            style={{ fontSize: '18px', marginBottom: '3rem' }}
            type="primary">
            Contact
          </AwesomeButton>
        </Link>
      </div>

      <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img style={{ width: '60%' }} src={React1} alt='react' />
          </div>
          <div className='img-stack bottom'>
            <img src={Dev1} alt='react' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutContent;