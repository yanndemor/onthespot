import React from 'react';
/* import PropTypes from 'prop-types'; */
import PropTypes from 'prop-types';
import './buttonLess.scss';

const ButtonLess = ({ handleQuantityDown, id }) => (
  <button
    className="button-up"
    type="button"
    onClick={() => handleQuantityDown(id)}
  >
    -
  </button>
);
ButtonLess.propTypes = {
  handleQuantityDown: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
export default ButtonLess;
