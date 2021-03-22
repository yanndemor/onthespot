// == Import npm
import React from 'react';

import Products from 'src/components/Products'
// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    
    <h1>OnTheSpot</h1>
    <Products />
  </div>
);

// == Export
export default App;
