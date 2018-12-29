import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from './Form';
import RestaurantsList from './RestaurantsList';
import Details from './Details';
import Error from './Error';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Form} exact />
      <Route path='/restaurantslist' component={RestaurantsList} />
      <Route path='/details/:id' component={Details} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Router;