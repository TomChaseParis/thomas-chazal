import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import HeroProject from '../components/heropoject/HeroProject';
import Skills from '../components/skills/Skills';

const Skill = () => {
  return (
    <div>
      <Navbar />
      <HeroProject heading="COMPETENCES." text="Plusieurs compétences à mon actif" />
      <Skills />
      <Footer />
    </div>
  )
}

export default Skill;