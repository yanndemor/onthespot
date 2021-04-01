// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import
import Caroussel from 'src/components/Caroussel';
import NavBar from 'src/containers/NavBar';
// import Orders from 'src/components/Orders';
import Page from 'src/containers/Page';
import ButtonLogout from 'src/containers/ButtonLogout';

import Footer from 'src/components/Footer';

import './styles.css';

// == Composant
const App = ({
  loadProduct,
  isLogged,
  loadCategories,
  loadOrders,
  loadDeliveryPoints,
}) => {
  useEffect(() => {
    loadProduct();
    loadCategories();
    loadOrders();
    loadDeliveryPoints();
  }, []);

  return (
    <div className="app">
      <Router>
        <NavBar />
        {isLogged && <div> Bon retour parmi nous Gerard</div>}
        {/* <Caroussel /> */}
        <Page />

        {/* <Orders /> */}
        <Footer />

      </Router>
    </div>
  );
};

App.propTypes = {
//   // fonction qui permet de charger les recettes
//   // pas de paramètre
  loadProduct: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loadCategories: PropTypes.func.isRequired,
  loadOrders: PropTypes.func.isRequired,
  loadDeliveryPoints: PropTypes.func.isRequired,

};
// == Export
export default App;
