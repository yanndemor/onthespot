import React from 'react';

import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Products from 'src/containers/Products';
import Categories from 'src/containers/Categories';
import PropTypes from 'prop-types';

import CGU from 'src/components/CGU';
import Product from 'src/containers/Product';
import CartProduct from 'src/containers/CartProduct';
import LoginForm from 'src/containers/LoginForm';
import Contact from 'src/components/Contact';
import CGV from 'src/components/CGV';
import Orders from 'src/containers/Orders';
import Order from 'src/components/Orders/Order';
import Cart from 'src/containers/Cart';
import LoadingSpinner from 'src/components/LoadingSpinner';
import RegistrationForm from '../../containers/RegistrationForm';

const Page = ({ isLogged, loading }) => (
  <div className="page">
    <div className="page-content">
      <Switch>

        <Route path="/produits/:slug" exact>
          <div className="row mx-0 position-relative">
            <div className="col-sm-8  ">
              <Products />
            </div>
            <div className="col-sm-4 position-relative">
              <Cart />
            </div>
          </div>
        </Route>
        <Route path="/produit/:slug" exact>
          <div className="row position-relative">
            {loading && <LoadingSpinner />}
            {!loading && (
            <div className="col-sm-8  ">
              <Product className="" />
            </div>
            )}
            <div className="col-sm-4 ">
              <Cart />
            </div>
          </div>
        </Route>
        <Route path="/cgu">
          <CGU />
        </Route>
        <Route path="/panier" exact>
          <div className="row position-relative">
            {loading && <LoadingSpinner />}
            {!loading && (
            <div className="col-sm-8  ">
              <CartProduct />
            </div>
            )}
            <div className="col-sm-4 ">
              <Cart />
            </div>
          </div>
        </Route>
        <Route path="/commandes">
          <Orders />
        </Route>

        <Route path="/commande/{id}">
          <Order />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/cgv">
          <CGV />
        </Route>
        <Route path="/connexion">
          {isLogged ? <Redirect to="/products" /> : <div><LoginForm /><RegistrationForm /></div>}
          {/* <Redirect to="/products" /> */}
        </Route>
        <Route path="/categorie/:slug" exact>
          <div>Ici bientôt une category</div>
        </Route>
        <Route path="/categories">
          {loading && <LoadingSpinner />}
          {!loading && (
          <div>
            <Categories />
          </div>
          )}
        </Route>
        <Route path="/">
          {loading && <LoadingSpinner />}
          {!loading && (
          <div>
            <Categories />
          </div>
          )}
        </Route>

      </Switch>
    </div>
  </div>
);

Page.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Page;
