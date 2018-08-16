import React, { Component } from "react";
import Routes from "routes";

import logo from "./../../logo.svg";

import { NavBar } from "components/Navbar";

import "./../../scss/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;
