import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Signup from "../components/Auth/Signup";
import Signin from "../components/Auth/Signin";
import UserDashboard from "../components/User/Dashboard"
import AdminDashboard from "../components/Admin/Dashboard"

//protected routes
import PrivateRoute from './PrivateRoute'
import AdminRoute from './AdminRoute'

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/sign-in" component={Signin} />
        <PrivateRoute exact path="/user/dashboard" component={UserDashboard} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
