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
    <div className="form" id="inscription">
      <h2>Inscription</h2>
      <form className="register-form" onSubmit={handleSubmit}>
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
          helpText="Necessite minimum 8 caracteres, dont au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractere spécial parmi : _.!?-@~$€£µ,;:+/"
        />
        <Field
          name="passwordRegisterCheck"
          type="password"
          placeholder="Confirmation Mot de passe"
          manageChange={changeField}
          value={passwordRegisterCheck}
        />
        <Field
          name="phoneNumber"
          placeholder="Numero de telephone"
          manageChange={changeField}
          value={phoneNumber}
        />
        <button>login</button>
        <p className="message">Déja inscrit? <a className="toggle-form" href="#">Connectez vous</a></p>
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
