import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";

const Routes = () => (
  <Switch>
    <Redirect from="/home" to="/" />
  </Switch>
)

export default Routes;
