import React from "react";
import { Route, Redirect } from "react-router-dom";
import {isAuthenticated} from '../../components/Auth/api'

const ProvateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated() ? (
        <Redirect to="/sign-in" />
      ) : (
        <Component {...props} />
      )
    }
  />
);


export default ProvateRoute;