// == Import npm
import React from 'react';
import LoginForm from 'src/containers/LoginForm';
// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <h1>OnTheSpot</h1>
    <LoginForm />
  </div>
);

// == Export
export default App;
