// == Import npm
import React from 'react';
import { ShoppingCart, User } from 'react-feather';

// == Import
import './navbar.scss';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// == Composant
const NavBar = () => {
  console.log('navbar');
  return (

    <div className="navbarX lg-d-flex col-sm-auto-d-grid">
      <Navbar className="navbar1" collapseOnSelect expand="sm" variant="dark">
<<<<<<< HEAD

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
=======
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
>>>>>>> 0b1bab33545cb62ba34f369ba2a5164e4703afdb
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
