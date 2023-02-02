import style from './style';
import React from 'react';

import { Navbar, Hero, Education, Work, Courses, Plans, Skills, Contact, ContactHero, Footer, Introduction } from './components';

const App = () => (
  <div className="relative">
    <div className="navBar w-full h-[8vh] bg-primary">
      <Navbar />
    </div>
    <div className="flex w-full flex-col bg-primary">
      <div className='flex flex-row'>
      <div className="w-1/2 flex-grow left-content ml-[5vw]">
        <div id="introduction">
          <Introduction />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="workExperiencie">
          <Work />
        </div>
        <div id="courses" className='flex w-full flex-row ml-[6vw]'>
          <Courses />
          <Plans />
        </div>
      </div>
      <div className="w-1/2 flex-grow right-content mr-[5vw]">
        <Hero />
        <div id='skills'>
          <Skills />
        </div>
        
      </div>
      </div>
      <div id='contact' className="flex w-full flex-row flex-grow px-[5vw]">
        <Contact />
        <ContactHero />
      </div>
    </div>
  </div>
  )

export default App