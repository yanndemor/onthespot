import React from 'react';
/* import PropTypes from 'prop-types'; */

// == Import : local
import './message.scss';

// == Composant
const Message = () => (
  <div className="content-message">
    <textarea
        // React - state

        // infos de base
      id="msg"
      name="user_message"
    />

    <label htmlFor="msg">
      Message :
    </label>
  </div>
);
export default Message;

