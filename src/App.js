import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/header/Navigation'
import Home from './Components/Home';
// import ThirdSection from './Components/Sections/ThirdSection/ThirdSection'

function App() {

  return (
    <div className="App container">
      <Navigation/>
      <Home/>
    </div>
  );
}

export default App;


