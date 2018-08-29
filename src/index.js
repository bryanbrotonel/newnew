import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";

import App from "./scenes/App";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

library.add(fab);

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById("root"));
registerServiceWorker();
