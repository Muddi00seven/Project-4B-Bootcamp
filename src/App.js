import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/header/Navigation'
function App() {
  let [menuState, setMenuState] = useState(false);

  return (
    <Router>
    <div className="App container">
      <Navigation/>
            <Routes>
        {/* <Route path="/" exact component={Home} /> */}
        {/* <Route path="/about" exact component={Aboutus} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/services" exact component={Services} /> */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
