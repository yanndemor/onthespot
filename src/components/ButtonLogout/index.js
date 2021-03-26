import React from 'react';
import PropTypes from 'prop-types';

import './buttonLogout.scss';

const ButtonLogout = ({ handleLogout }) => (
  <div className="container mb-1">
    <button
      type="button"
      className="login-form-button"
      onClick={handleLogout}
    >
      Déconnexion
    </button>
  </div>

);

ButtonLogout.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default ButtonLogout;
