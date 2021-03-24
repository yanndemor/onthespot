// == Import npm
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
// == Import
import Caroussel from 'src/components/Caroussel';
import NavBar from 'src/components/NavBar';
// import Orders from 'src/components/Orders';
import Page from 'src/components/Page';
<<<<<<< HEAD
import Footer from 'src/components/Footer';
import reactLogo from './react-logo.svg';
=======

>>>>>>> 0b1bab33545cb62ba34f369ba2a5164e4703afdb
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Router>
      <NavBar />
      <h1>OnTheSpot</h1>
      <Caroussel />
      <Page />
<<<<<<< HEAD
      {/* <Orders /> */}
      <Footer />
=======
>>>>>>> 0b1bab33545cb62ba34f369ba2a5164e4703afdb
    </Router>
  </div>
);

// == Export
export default App;
