import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import authService from '../services/auth';

/* pages */
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';
import Example from '../pages/Example';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authService.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/signin', state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Example} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/example" component={Example} />

      <PrivateRoute path="/app" component={() => <h1>App</h1>} />

      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
