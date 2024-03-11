import React from 'react';
import Header from './components/header/Header.js';
import Hero from './components/home/Home.js'
import About from './components/about/About.js'
import Skill from './components/skill/Skill.js'
import Projects from './components/projects/Projects.js'
import Contact from './components/contact/Contact.js'
import Footer from './components/footer/Footer.js'
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero /><hr />
      <About /><hr />
      <Skill /><hr />
      <Projects /><hr />
      <Contact />
      <Footer />
    </div>
  );
}

export default App