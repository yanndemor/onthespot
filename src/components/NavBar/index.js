// == Import npm
import React from 'react';

//!  Logo a récupérer panier et compte
import { ShoppingCart, User } from 'react-feather';
import PropTypes from 'prop-types';

// == Import
import './navbar.scss';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logoIconeBeach from 'src/assets/images/iconbeach.png';
import ButtonLogout from 'src/containers/ButtonLogout';

// == Composant
const NavBar = ({ isLogged }) => {
  console.log('navbar');
  return (
    <header className="container-fluid">
      <Navbar expand="lg" variant="dark">
        <NavLink to="/" className="navbar-brand">
          <img src={logoIconeBeach} alt="Logo On The Spot" />
        </NavLink>
        <NavLink to="/panier" className="navlink-cart mr-auto d-lg-none">
          <ShoppingCart size={30} />
        </NavLink>

<<<<<<< HEAD
    <div className="navbarX lg-d-flex col-sm-auto-d-grid">
      <Navbar className="navbar1" collapseOnSelect expand="sm" variant="dark">

        {/* <Navbar.Brand href="."> <img src={reactLogo} /></Navbar.Brand> */}
        <NavLink to="/panier" activeClassName="selected">
          <img src={logoIconeBeach} alt="" />
          <ShoppingCart size={40} />
          <User size={40} />
=======
        {/* <NavLink to="/" className="navlink-user ml-auto d-lg-none">
          <User size={20} />
>>>>>>> d2c74606aa65707be31c2f73a3d6806a7de9aa31
        </NavLink>
        <NavLink to="/" className="navlink-cart ml-auto d-lg-none">
          <ShoppingCart size={20} />
        </NavLink> */}
        <div className="header-title d-lg-none">On The Spot !!!</div>


        {isLogged ? (
          <NavLink to="/" className="navlink-user mr-auto d-lg-none">
            <User size={30} />
          </NavLink>
        ) : (
          <div></div>
        )}

        <Navbar.Toggle className="ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarNavAltMarkup" className="justify-content-end">
          <Nav>
            <NavLink to="/panier" className="navlink d-none d-lg-inline-block" activeClassName="active">
              <ShoppingCart size={20} /> Panier
            </NavLink>
            {isLogged && (
              <NavLink to="/" className="navlink d-none d-lg-inline-block" activeClassName="active">
                <User size={20} /> Mon compte
              </NavLink>
            )}
            <NavLink to="/products" className="navlink" activeClassName="active">
              Accueil
            </NavLink>
<<<<<<< HEAD
            <NavLink to="/commandes" className="navlink" activeClassName="selected">
              Commandes
=======
            {isLogged && (
              <NavLink to="/commandes" className="navlink" activeClassName="active">
                Commandes
>>>>>>> d2c74606aa65707be31c2f73a3d6806a7de9aa31
            </NavLink>
            )}
            <NavLink to="/qui-sommes-nous" className="navlink" activeClassName="active">
              Qui sommes nous ?
            </NavLink>
            <NavLink to="/contact" className="navlink" activeClassName="active">
              Contact
            </NavLink>
            <ButtonLogout />
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="header-title d-none d-lg-block text-center">On The Spot !!!</div>
    </header>
  );
};

NavBar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default NavBar;
