// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
/* import './field.scss'; */

// == Composant
const Count = ({
  value,
  type,
  name,
  placeholder,
  manageChange,
}) => {
  const handleChange = (evt) => {
    manageChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};
export default Count;
