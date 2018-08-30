import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import firebase from 'firebase/app';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import registerServiceWorker from "./registerServiceWorker";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import App from "./scenes/App";

// Add social media icons
library.add(fab);

// Initialize Firebase
var config = {
  apiKey: "AIzaSyARro3Vj-i8QUJ-9E8UT7yD4ygRmGF-we4",
  authDomain: "new-new-d75cb.firebaseapp.com",
  databaseURL: "https://new-new-d75cb.firebaseio.com",
  projectId: "new-new-d75cb",
  storageBucket: "",
  messagingSenderId: "254583637908"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById("root"));
registerServiceWorker();
