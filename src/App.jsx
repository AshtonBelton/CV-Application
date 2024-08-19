import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeneralInformation from './components/GeneralInformation.jsx';
import EducationalExperience from './components/EducationalExperience.jsx';
import PracticalExperience from './components/PracticalExperience.jsx';

const App = () => {
  return (
    <div className='App'>
      <h1>CV Application</h1>
      <GeneralInformation />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
};


export default App
