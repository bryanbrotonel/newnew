import React, { Component } from "react";
import Routes from "routes";

import logo from "./../../logo.svg";

import { NavBar } from "components/Navbar";
import { Footer } from "components/Footer";

import "./../../scss/App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="NavBar">
          <NavBar />
        </div>
        <div className="body">
          <Routes />
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
