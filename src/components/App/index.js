// == Import npm
import React from 'react';

// == Import
import Caroussel from 'src/components/Caroussel';
import NavBar from 'src/components/NavBar';
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    {/* <img src={reactLogo} alt="react logo" /> */}
    <Caroussel />
    <h1>OnTheSpot</h1>
  </div>
);

// == Export
export default App;
