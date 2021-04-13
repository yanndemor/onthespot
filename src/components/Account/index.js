import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import './account.scss';

const Account = ({
  userDetail,
  handleDelete,
  isLogged,
  redirect,
  resetRedirect,
}) => {
  const handleAccount = (evt) => {
    evt.preventDefault();
    handleDelete();
  };

  if (redirect === '/compte') {
    resetRedirect();
  }

  return (

    <div className="account-detail row">
      <div className="account-info col-8">
        <div className="account-description ">
          <h2 className="account-title">Détail du compte</h2>
          <div className="detail">
            <li>nom : {userDetail.lastname}</li>
            <li>prénom : {userDetail.firstname}</li>
            <li>tel: {userDetail.telNumber}</li>
            <li>email: {userDetail.email}</li>
          </div>
        </div>
      </div>

      <div className="button-edit-sup">
        <div className="account-delete">
          {/* eventOnClick to call the request in the userMiddleware to delete the user
           linked to the token in localstorage */}
          <button type="button" onClick={handleAccount}>Suppression du compte </button>
        </div>
        <div className="account-edit">
          {/* Link to the components to edit the userDetails */}
          <Link to="/edit-compte">
            <button type="button">modifier vos coordonnées </button>
          </Link>
        </div>

      </div>

    </div>

  );
};

Account.propTypes = {
  /* userDetail: PropTypes.arrayOf(
    PropTypes.shape({
      lastname: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      telNumber: PropTypes.number.isRequired,
      email: PropTypes.object.isRequired,
    }).isRequired,
  ).isRequired, */
  handleDelete: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  redirect: PropTypes.string,
};

Account.defaultProps = {
  redirect: null,
};

export default Account;
