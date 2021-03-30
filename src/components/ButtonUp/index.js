import React from 'react';
/* import PropTypes from 'prop-types'; */

import './buttonUp.scss';

const ButtonUp = ({ handleQuantityUp, name }) => (
  <button
    className="button-up"
    type="button"
    onClick={handleQuantityUp}
  >
    +
  </button>
);

export default ButtonUp;
