import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import Contact from './routes/Contact'
import Skill from './routes/Skill';

function App() {
  function addTwoNum() {

  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skill />} />
      </Routes>
    </>
  );
}

export default App;
