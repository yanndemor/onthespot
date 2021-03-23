// == Import npm
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// == Import
import Caroussel from 'src/components/Caroussel';
import NavBar from 'src/components/NavBar';
// import Orders from 'src/components/Orders';
import Page from 'src/components/Page';
import reactLogo from './react-logo.svg';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Router>
      <NavBar />
      <img src={reactLogo} alt="react logo" />
      <Caroussel />
      <h1>OnTheSpot</h1>
      <Page />
      {/* <Orders /> */}
    </Router>

  </div>
);

// == Export
export default App;
