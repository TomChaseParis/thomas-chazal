import { Link } from "react-router-dom"
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import "./HeroImgStyles.css"
import IntroImg from "../../assets/hero2.webp"

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt="IntroImg" />
      </div>
      <div className='content'>
        <h1 className="content-title">Hi, my name is Thomas, front-end JS developer</h1>
        <div style={{ display: 'flex', gap: 15, justifyContent: 'center' }}>
          <Link to='/project'>
            <AwesomeButton style={{ fontSize: '18px' }} type="primary">Projets</AwesomeButton>
          </Link>
          <Link to='/contact'>
            <AwesomeButton style={{ fontSize: '18px' }} type="secondary">Contact</AwesomeButton>

          </Link>
        </div>
      </div>
    </div>
  );
};


export default HeroImg;
