import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

import './loginForm.scss';

const LoginForm = ({
  username,
  password,
  changeField,
  handleLogin,
  handleLogout,
  logged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  console.log(username);
  return (
    <div className="login-form">
      <h2>Connexion</h2>
      {logged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!logged && (
        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="username"
            placeholder="Adresse Email"
            manageChange={changeField}
            value={username}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            manageChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            Valider
          </button>
        </form>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  /** value for the username */
  username: PropTypes.string.isRequired,
  /** value for the password */
  password: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
  /** called when the form is submitted */
  handleLogin: PropTypes.func.isRequired,
  /** called when the "Déconnexion" button is clicked */
  handleLogout: PropTypes.func.isRequired,
  /** toggle between "connected" or "not connected" */
  logged: PropTypes.bool,
  /** message displayed when "connected" */
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  logged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
