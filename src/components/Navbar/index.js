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
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false,
      pages: ["home", "motive", "contact"],
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

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
      <div class="container">
        <Navbar light="light" expand="md">
          <NavbarBrand href="/">New New</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar="navbar">
            <Nav className="ml-auto" navbar="navbar">
              {navLinks}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}