import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Products from 'src/components/Products';

const Page = () => (
  <div className="page">
    <div className="page-content">
      <Switch>
        <Route path="/products/">
          <Products />
        </Route>
        <Route path="/">
          <div>HomePage</div>
        </Route>
      </Switch>
    </div>
  </div>
);

export default Page;
