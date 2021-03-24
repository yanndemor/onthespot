import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Products from 'src/components/Products';
import Orders from 'src/components/Orders';
import Cart from 'src/components/Cart';

const Page = () => (
  <div className="page">
    <div className="page-content">
      <Switch>
        <Route path="/products/">
          <Products />
        </Route>
        <Route path="/cart/">
          <Cart />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/">
          <div>HomePage</div>
        </Route>
      </Switch>
    </div>
  </div>
);

export default Page;
