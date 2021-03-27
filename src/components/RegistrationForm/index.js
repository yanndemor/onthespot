import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

import './registrationForm.scss';

const RegistrationForm = ({
  firstname,
  lastname,
  emailRegister,
  passwordRegister,
  passwordRegisterCheck,
  phoneNumber,
  changeField,
  handleRegister,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (passwordRegister === passwordRegisterCheck) {
      handleRegister();
    }
  };
  console.log(firstname);
  return (
    <div className="login-form">
      <h2>Inscription</h2>
      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
        <Field
          name="firstname"
          placeholder="Prenom"
          manageChange={changeField}
          value={firstname}
        />
        <Field
          name="lastname"
          placeholder="Nom"
          manageChange={changeField}
          value={lastname}
        />
        <Field
          name="emailRegister"
          type="email"
          placeholder="Adresse Email"
          manageChange={changeField}
          value={emailRegister}
        />
        <Field
          name="passwordRegister"
          type="password"
          placeholder="Mot de passe"
          manageChange={changeField}
          value={passwordRegister}
        />
        <Field
          name="passwordRegisterCheck"
          type="password"
          placeholder="Mot de passe"
          manageChange={changeField}
          value={passwordRegisterCheck}
        />
        <Field
          name="phoneNumber"
          placeholder="Numero de telephone"
          manageChange={changeField}
          value={phoneNumber}
        />
        <button
          type="submit"
          className="login-form-button"
        >
          Valider
        </button>
      </form>
    </div>
  );
};

RegistrationForm.propTypes = {
  /** value for the firstname */
  firstname: PropTypes.string.isRequired,
  /** value for the lastname */
  lastname: PropTypes.string.isRequired,
  /** value for the emailRegister */
  emailRegister: PropTypes.string.isRequired,
  /** value for the passwordRegister */
  passwordRegister: PropTypes.string.isRequired,
  /** value for the passwordRegisterCheck */
  passwordRegisterCheck: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
  /** value for the phoneNumber */
  phoneNumber: PropTypes.string.isRequired,
  /** called when the form is submitted */
  handleRegister: PropTypes.func.isRequired,

};

export default RegistrationForm;
