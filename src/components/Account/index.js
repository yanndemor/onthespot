import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import './account.scss';

const Account = ({
  userDetail,
  handleDelete,
  editRedirect,
  isLogged,
}) => {
  const handleAccount = (evt) => {
    evt.preventDefault();
    handleDelete();
  };
  const handleRedirect = (evt) => {
    evt.preventDefault();
    editRedirect();
  };

  return (

    <div className="account-detail row">
      <div className="account-info col-8">
        <div className="account-description ">
          <h2 className="account-title">Détail du compte</h2>
          <div className="detail mx-2">
            <li>nom : {userDetail.lastname}</li>
            <li>prénom : {userDetail.firstname}</li>
            <li>tel: {userDetail.telNumber}</li>
            <li>email: {userDetail.email}</li>
          </div>
        </div>
      </div>

      <div className="button-edit-sup">
        <div className="account-delete">
          <button type="button" onClick={handleAccount}>Suppression du compte </button>
        </div>
        <div className="account-edit">
          <Link to="/edit-compte">
            <button type="button">modifier vos coordonnées </button>
          </Link>
        </div>
      {/*   <div className="account-delete">
          <button type="button" onClick={handleRedirect}>suivant</button>
        </div> */}
      </div>

    </div>

  );
};

Account.propTypes = {
  userDetail: PropTypes.arrayOf(
    PropTypes.shape({
      lastname: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      telNumber: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};
export default Account;
