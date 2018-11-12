import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Header extends Component {
  state = {};
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Planguru</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}
export default Header;
