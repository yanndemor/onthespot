// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import
import Carrousel from 'src/containers/Carrousel';
import NavBar from 'src/containers/NavBar';
import BreadCrumb from 'src/components/BreadCrumb';
// import Orders from 'src/components/Orders';
import Page from 'src/containers/Page';
// import ButtonLogout from 'src/containers/ButtonLogout';
import LoadingSpinner from 'src/components/LoadingSpinner';

import Footer from 'src/components/Footer';

import './styles.css';

// == Composant

const App = ({
  loadProduct,
  isLogged,
  loadCategories,
  loadDeliveryPoints,
  loading,
  user,
  checklogin,
}) => {
  useEffect(() => {
    loadProduct();
    loadCategories();
    loadDeliveryPoints();
    checklogin();
  }, []);
  return (
    <div className="app">
      <Router>
        <NavBar />
        {/* {isLogged && <div> Bon retour parmi nous {user.firstname}</div>} */}
        <BreadCrumb />
        {/* <Caroussel /> */}
        {loading && <LoadingSpinner />}
        {!loading && <Page />}
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
  loading: PropTypes.bool.isRequired,
  loadCategories: PropTypes.func.isRequired,
  // loadOrders: PropTypes.func.isRequired,
  loadDeliveryPoints: PropTypes.func.isRequired,
  // user: PropTypes.string.isRequired,
  checklogin: PropTypes.func.isRequired,

};
// == Export
export default App;
