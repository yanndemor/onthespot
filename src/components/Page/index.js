import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Products from 'src/containers/Products';
import PropTypes from 'prop-types';

import CGU from 'src/components/CGU';
import Product from 'src/components/Product';
import Contact from 'src/components/Contact';
import CGV from 'src/components/CGV';
import Orders from 'src/components/Orders';
import Order from 'src/components/Orders/Order';
import Cart from 'src/components/Cart';
import LoginForm from 'src/containers/LoginForm';

const Page = ({ isLogged }) => (
  <div className="page">
    <div className="page-content">
      <Switch>

        <Route path="/products">
          <div className="row position-relative">
            <div className="col-sm-8  ">
              <Products />
            </div>
            <div className="col-sm-4 position-relative">
              <Cart />
            </div>
          </div>
        </Route>
        <Route path="/cgu">
          <CGU />
        </Route>
        <Route path="/product/{slug}">
          <Product />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/order/{id}">
          <Order />
        </Route>
        <Route path="/cart/">
          <Cart />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/cgv">
          <CGV />
        </Route>
        <Route path="/connexion">
          {isLogged ? <Redirect to="/products" /> : <LoginForm />}
          {/* <Redirect to="/products" /> */}
        </Route>
        <Route path="/">
          <div>HomePage</div>
        </Route>

      </Switch>
    </div>
  </div>
);

Page.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Page;
