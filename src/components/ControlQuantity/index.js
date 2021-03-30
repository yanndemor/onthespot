import React from 'react';
import PropTypes from 'prop-types';

/* import Field from 'src/components/LoginForm/Field'; */
import ButtonDown from './ButtonDown';
import ButtonUp from './ButtonUp';
import Count from './Count';

const ControlQuantity = ({
  value,
  name,
  placeholder,
  manageChange,
  changeField2,
}) => (
  <div className="product-quantity">
    <div className="button-plus ">
      <ButtonDown />
    </div>
    <Count
      value={value}
      name={name}
      placeholder="quantité"
      manageChange={manageChange}
    />
    <AddCart
      value={value}
      name={name}
      placeholder="quantité"
      manageChange={changeField2}
    />
    <div className="button-minus ">
      <ButtonUp />
    </div>
  </div>
);
ControlQuantity.propTypes = {
  /** text used as value for the input */
  value: PropTypes.string,
  /** type of the input */
  /* type: PropTypes.number, */
  /** text used as name for the input (and also used as id, with a prefix) */
  name: PropTypes.string.isRequired,
  /** text used as placeholder and label */
  placeholder: PropTypes.string.isRequired,
  /** called when onChange event is received by the input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
ControlQuantity.defaultProps = {
  value: '',

};
export default ControlQuantity;
