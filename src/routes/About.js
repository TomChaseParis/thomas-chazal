import React, { useEffect } from 'react';

import Navbar from '../components/navbar/Navbar';
import HeroProject from '../components/heropoject/HeroProject'
import Footer from '../components/footer/Footer';
import AboutContent from '../components/aboutcontent/AboutContent';
import Interests from '../components/aboutcontent/interests/Interests';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Navbar />
      <HeroProject heading="A PROPOS." text="Développeur front-end" />
      <AboutContent />
      <Interests />
      <Footer />
    </div>
  )
}

export default About;