import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

import "./styles.css";

export class NavBar extends React.Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false,
      pages: ["home", "motive", "share"],
      width: 0
    };
  }

  componentDidMunt() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClick() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      this.state.width > 767
    ) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const navLinks = this.state.pages.map(page => {
      return (
        <NavItem key={page}>
          <NavLink
            onClick={this.handleClick}
            to={"/" + page}
            activeStyle={{
              fontWeight: "bold"
            }}
            className="text-capitalize"
            tag={RRNavLink}
          >
            {page}
          </NavLink>
        </NavItem>
      );
    });

    return (
      <div className="container">
        <Navbar light={true} expand="md">
          <NavbarBrand href="/">
            <img
              src={require("img/logo.png")}
              height="30"
              alt="New New Logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              {navLinks}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
