import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";

import Loading from "./components/Loading";

const homeLoadable = Loadable({
  loader: () => import("./scenes/Home"),
  loading: Loading
})

const motiveLoadable = Loadable({
  loader: () => import("./scenes/Motive"),
  loading: Loading
});

const contactLoadable = Loadable({
  loader: () => import("./scenes/Contact"),
  loading: Loading
})

const Routes = () => (
  <Switch>
    <Redirect from="/home" to="/" />
    <Route exact={true} path="/" component={homeLoadable} />
    <Route exact={true} path="/motive" component={motiveLoadable} />
    <Route exact={true} path="/contact" component={contactLoadable} />
  </Switch>
);

export default Routes;
