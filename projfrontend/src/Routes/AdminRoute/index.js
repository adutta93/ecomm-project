import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../components/Auth/api";

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() && isAuthenticated().user.role === 1 ? (
        <Component {...props} />
      ) : (
        <Redirect to="/sign-in" />
      )
    }
  />
);

export default AdminRoute;
