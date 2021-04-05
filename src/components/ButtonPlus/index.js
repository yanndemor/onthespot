import React from 'react';
/* import PropTypes from 'prop-types'; */
import PropTypes from 'prop-types';
import './buttonPlus.scss';

const ButtonPlus = ({ handleQuantityUp, id }) => (
  <button
    className="button-up"
    type="button"
    onClick={() => handleQuantityUp(id)}
  >
    +
  </button>
);
ButtonPlus.propTypes = {
  handleQuantityUp: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
export default ButtonPlus;
