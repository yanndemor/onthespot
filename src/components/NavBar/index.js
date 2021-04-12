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
 /*  console.log('navbar'); */
  return (
    <header className="container-fluid">
      <Navbar expand="lg" variant="dark">
        <NavLink to="/" className="navbar-brand" exact>
          <img src={logoIconeBeach} alt="Logo On The Spot" />
        </NavLink>
        <NavLink to="/panier" className="navlink-cart mr-auto d-lg-none">
          <ShoppingCart size={30} />
        </NavLink>

        {/* <NavLink to="/" className="navlink-user ml-auto d-lg-none">
          <User size={20} />
        </NavLink>
        <NavLink to="/" className="navlink-cart ml-auto d-lg-none">
          <ShoppingCart size={20} />
        </NavLink> */}
        <div className="header-title d-lg-none">On The Spot !!!</div>

        {isLogged ? (
          <NavLink to="/compte" className="navlink-user mr-auto d-lg-none">
            <User size={30} />
          </NavLink>
        ) : (
          <div />
        )}

        <Navbar.Toggle className="ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarNavAltMarkup" className="justify-content-end">
          <Nav>
            <NavLink to="/panier" className="navlink d-none d-lg-inline-block" activeClassName="active">
              <ShoppingCart size={20} /> Panier
            </NavLink>
            <div className="dropdown-divider" />
            {isLogged && (
              <>
                <NavLink to="/compte" className="navlink d-none d-lg-inline-block" activeClassName="active">
                  <User size={20} /> Mon compte
                </NavLink>
                <div className="dropdown-divider" />
              </>
            )}
            <NavLink to="/" className="navlink" activeClassName="active" exact>
              Accueil
            </NavLink>
            <div className="dropdown-divider" />
            {isLogged && (
              <>
                <NavLink to="/commandes" className="navlink" activeClassName="active">
                  Commandes
                </NavLink>
                <div className="dropdown-divider" />
              </>
            )}
            <NavLink to="/qui-sommes-nous" className="navlink" activeClassName="active">
              Qui sommes nous ?
            </NavLink>
            <div className="dropdown-divider" />
            <NavLink to="/contact" className="navlink" activeClassName="active">
              Contact
            </NavLink>
            <div className="dropdown-divider" />
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
