// == Import npm
import React from 'react';

// == Import
import './navbar.scss';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import reactLogo from 'src/components/App/react-logo.svg';

// == Composant
const NavBar = () => {
  console.log('navbar');
  return (

    <div className="navbarX">
      <Navbar className="navbar1" collapseOnSelect expand="sm" variant="dark">

        {/* <Navbar.Brand href="."> <img src={reactLogo} /></Navbar.Brand> */}
        <NavLink to="/" activeClassName="selected">
          <img src={reactLogo} />
        </NavLink>
        <h1>Test</h1>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-1">
            <NavLink to="/qui-sommes-nous" className="navlink" activeClassName="selected">
              Qui sommes nous ?
            </NavLink>
            <NavLink to="/contact" className="navlink" activeClassName="selected">
              Contact
            </NavLink>
            <NavLink to="/commandes" className="navlink" activeClassName="selected">
              Commandes
            </NavLink>
            <NavLink to="/connexion" className="navlink" activeClassName="selected">
              Connexion
            </NavLink>
          </Nav>
          {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

// == Export
export default NavBar;
