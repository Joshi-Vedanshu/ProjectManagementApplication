import React from "react";
import NavBar from "./NavBar";
import NavSide from "./NavSide";
import './Style.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

export function HeaderStories() {
  //this.props.passToParent(childValue);


  return (
        <div className="content-back">
            <Navbar  expand="lg">
      <Container fluid>
        <Nav.Link href="#home">Backlog</Nav.Link>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Iteration"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Sprint 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sprint 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Sprint 3
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Sprint 4
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        
        
  );
}

