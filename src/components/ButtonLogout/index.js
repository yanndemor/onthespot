import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './buttonLogout.scss';

const ButtonLogout = ({ isLogged, handleLogout }) => (
  isLogged ? (
    <a onClick={handleLogout} className="navlink">
      Déconnexion
    </a>
  ) : (
    <>
      <NavLink to="/connexion" className="navlink" activeClassName="active">
        Connexion
      </NavLink>
      <NavLink to="/connexion" className="navlink" activeClassName="active">
        Inscription
      </NavLink>
    < />
  )
);

ButtonLogout.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default ButtonLogout;
