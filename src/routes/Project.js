import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import HeroProject from '../components/heropoject/HeroProject';
import Work from '../components/workcard/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroProject heading="PROJETS." text="Plusieurs projets récents" />
      <Work />
      <Footer />
    </div>
  )
}

export default Project;