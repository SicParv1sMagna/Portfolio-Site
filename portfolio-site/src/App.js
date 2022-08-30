import React from 'react';
import NavBar from './Components/NavBar';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Achievements from './Components/Achievements';

import './styles.css';

const App = () => {
  return (
    <div className='App'>
      <div className='NavBar'>
        <NavBar />
      </div>
      <div className='Content'>
        <div className='ContentContainer'>
          <About />
          <Projects />
          <Skills />
          <Achievements />
        </div>
        asd
      </div>
    </div>
  );
}


export default App;
