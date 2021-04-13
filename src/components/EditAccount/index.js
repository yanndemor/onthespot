import React from 'react';
/* import PropTypes from 'prop-types'; */
import { Redirect, Link, useLocation } from 'react-router-dom';
import Field from '../LoginForm/Field';

import './edit-account.scss';

const EditAccount = ({
  userDetail,
  handleEdit,
  /* changeField call to a function update UserField in the auth.action file, 
  defined in the container as well */
  changeField,
  redirect,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
   /*  console.log('handleEdit appelée'); */
   // call to the action editUser defined in container and file action
    handleEdit();
  };
  if (redirect !== null) {
    return <Redirect to={redirect} />;
  }

 /*  console.log('UseLocation: ', useLocation()); */
 /*  console.log(userDetail); */
  return (
    <div className="form" id="connexion">
      <h2>Modifier les champs</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <Field
          name="firstname"
          placeholder="Prenom"
          manageChange={changeField}
          value={userDetail.firstname}
        />
        <Field
          name="lastname"
          placeholder="Nom"
          manageChange={changeField}
          value={userDetail.lastname}
        />
        <Field
          name="email"
          type="email"
          placeholder="Adresse Email"
          manageChange={changeField}
          value={userDetail.email}
        />
        <Field
          name="telNumber"
          placeholder="N° telephone"
          manageChange={changeField}
          value={userDetail.telNumber}

        />
        <button>valider</button>

      </form>
    </div>

  );
};

export default EditAccount;

