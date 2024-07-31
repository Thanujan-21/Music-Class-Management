import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./icons/logo.svg";

function Navigationbar() {
  return (
    <div>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        collapseOnSelect
        expand="lg"
        sticky="top"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="/home">
            <img
              src={logo}
              alt="logo"
              className="d-inline-block align-top"
            ></img>
            Sarigama
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/teacher">Teacher</Nav.Link>
              <Nav.Link href="/student">Student</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
