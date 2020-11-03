import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Signup from "../components/Auth/Signup";
import Signin from "../components/Auth/Signin";
function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/sign-in" component={Signin} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
