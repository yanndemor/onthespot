import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Products from 'src/components/Products';
import CGU from 'src/components/CGU';
import Product from 'src/components/Product';
import Contact from 'src/components/Contact';

const Page = () => (
  <div className="page">
    <div className="page-content">
      <Switch>

        <Route path="/products/">
          <Products />
        </Route>
        <Route path="/cgu">
          <CGU />
        </Route>
        <Route path="/product/">
          <Product />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <div>HomePage</div>
        </Route>

      </Switch>
    </div>
  </div>
);

export default Page;
