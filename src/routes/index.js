import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
