import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Products from 'src/components/Products';
import CGV from 'src/components/CGV';

const Page = () => (
  <div className="page">
    <div className="page-content">
      <Switch>
        <Route path="/products/">
          <Products />
        </Route>
        <Route path="/cgv">
          <CGV />
        </Route>
        <Route path="/">
          <div>HomePage</div>
        </Route>
      </Switch>
    </div>
  </div>
);

export default Page;
