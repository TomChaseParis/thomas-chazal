import React from "react";
import Footer from "../components/footer/Footer";
import HeroImg from "../components/hero/HeroImg";
import Navbar from "../components/navbar/Navbar";
import Work from "../components/workcard/Work";
import Skills from "../components/skills/Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
