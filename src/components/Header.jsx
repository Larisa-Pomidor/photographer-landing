import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand>#PhotoShot</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto gap-5">
          <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "")}>Головна</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "link-active" : "")}>Наші останні роботи</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;