import React from 'react';
import NavBar from './Components/NavBar';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Achievements from './Components/Achievements';

import './styles.css';

const App = () => {
  document.addEventListener('mousemove', e => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = Math.round(e.pageX / w * 100);
    const y = Math.round(e.pageY / h * 100);
    document.body.style.background = `radial-gradient(at ${x}% ${y}%, rgba(10, 73, 128, 1), rgba(0, 0, 0, 1))`;
  });

  return (
    <div className='App'>
      <div className='NavBar'>
        <NavBar />
      </div>
      <div className='Content'>
        <div className='ContentContainer'>
          <About />
          <Projects />
          <div className='SkillsAchievements'>
            <Skills />
            <Achievements />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
