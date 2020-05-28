import React from 'react';
import Home from './components/home/Home'
import Navigation from './components/navigation/Navigation'
import AboutMe from './components/aboutMe/AboutMe'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <Navigation/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
