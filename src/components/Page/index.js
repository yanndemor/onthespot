import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Products from 'src/containers/Products';

import CGU from 'src/components/CGU';
import Product from 'src/components/Product';
import Contact from 'src/components/Contact';
import CGV from 'src/components/CGV';
import Orders from 'src/components/Orders';
import Order from 'src/components/Orders/Order';
import Cart from 'src/components/Cart';
import LoginForm from 'src/components/LoginForm';

const Page = () => (
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
          <LoginForm />
        </Route>
        <Route path="/">
          <div>HomePage</div>
        </Route>

      </Switch>
    </div>
  </div>
);

export default Page;

{/* <div class="row">
<div class="col-xs-8 content">Content goes here...</div> 
<div class="col-xs-3 col-xs-offset-1 sidebar-outer" >
    <div class="fixed col-xs-3">
        <img class="img-responsive"
             src="http://placekitten.com/300/200"/>
        Some links go here.
    </div>
</div>
</div> */}
