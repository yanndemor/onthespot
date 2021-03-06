import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Account = ({
  userDetail,
  handleDelete,
  isLogged,
}) => {
  const handleAccount = (evt) => {
    evt.preventDefault();
    handleDelete();
  };
  if (!isLogged) {
    return <Redirect to={{ pathname: '/' }} />;
  }
  return (

    <div className="account-detail row">
      <div className="col-8">
        <div className="account-description ">
          <p className="w-75 text-center">Détail du compte</p>
          <div className="mx-2">
            <li>nom : {userDetail.lastname}</li>
            <li>prénom : {userDetail.firstname}</li>
            <li>tel: {userDetail.telNumber}</li>
            <li>email: {userDetail.email}</li>
          </div>
        </div>
      </div>

      <div>
        <div className="account-delete">
          <button type="button" onClick={handleAccount}>Suppression du compte </button>
        </div>
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
