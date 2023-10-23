import React from "react"
import './Nav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Bio } from "../../data/details"

function NavBar() {
  return (
      <Navbar sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/" className="text-light">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#certification">Certifications</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <div className="btn-container-git">
              <a href={Bio.github} target="blank"><button>Github Profile</button></a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar