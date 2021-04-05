import React from 'react';
/* import PropTypes from 'prop-types'; */

// == Import : local
import './field.scss';

// == Composant
const Field = ({
/*   value,
  type,
  name,
  placeholder,
  manageChange, */
}) => (
  <div className="field-content">
    <input
        // React - state
      value="{value}"
      onChange="{handleChange}"
        // infos de base
      id="{inputId}"
      type="{type}"
      className="field-input"
      placeholder="{placeholder}"
      name="{name}"
    />

    <label
      htmlFor="{inputId}"
      className="field-label"
      placeholder=""
    />
  </div>
);

// Field.propTypes = {
/** text used as value for the input */
// value: PropTypes.string,
/** type of the input */
// type: PropTypes.string,
/** text used as name for the input (and also used as id, with a prefix) */
// name: PropTypes.string.isRequired,
/** text used as placeholder and label */
// placeholder: PropTypes.string.isRequired,
/** called when onChange event is received by the input, two parameters :
   * - new value
   * - name
   */
// manageChange: PropTypes.func.isRequired,
// };

// Valeurs par défaut pour les props
/* Field.defaultProps = {
  value: '',
  type: 'text',
}; */

// == Export
export default Field;
