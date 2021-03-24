// == Import npm
import React from 'react';
import { ShoppingCart, User } from 'react-feather';

// == Import
import './navbar.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// == Composant
const NavBar = () => {
  console.log('navbar');
  return (

    <div className="navbarX lg-d-flex col-sm-auto-d-grid">
      <Navbar className="navbar1" collapseOnSelect expand="sm" variant="dark">
        <div className="shopping-cart ">
          <ShoppingCart />
        </div>
        <div className="user-account ">
          <User />
        </div>
        <div className="Title lg-d-flex align-center">OnTheSpot</div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav col-lg" />
        <Navbar.Collapse id="responsive-navbar-nav col-lg">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

// == Export
export default NavBar;
