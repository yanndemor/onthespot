/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Field from './Field';
import Message from './Message';
import './contact.scss';

const Contact = () => (
  <div className="contact-content">

    <form autoComplete="off" className="login-form-element" onSubmit="">
      <Field
        name="nom"
        placeholder="Nom"
        manageChange="{changeField}"
        value="{lastName}"
      />
      <Field
        name="prénom"
        placeholder="Prénom"
        manageChange="{changeField}"
        value="{firstName}"
      />
      <Field
        name="telephone"
        placeholder="N° de téléphone"
        manageChange="{changeField}"
        value="{telephone}"
      />
      <Field
        name="email"
        placeholder="Adresse Email"
        manageChange="{changeField}"
        value="{email}"
      />
      <Message
        name="message"
        placeholder="Message"
        manageChange="{changeField}"
        value="{email}"
      />

      <button
        type="submit"
        className="contact-button"
      >
        OK
      </button>
    </form>

  </div>
);

export default Contact;
/*  <div className="contact-content">
    <div className="contact-title">
      <h2>Pour nous contacter!</h2>
    </div>
    <div className="contact-detail">
      <h3>Nos Coordonnées</h3>
    </div>
    <div className="phone-detail">
      <p>N° de télephone:0769330566</p>
    </div>
    <div className="form-detail">
      <h3>Contactez nous par mail en remplissant les informations suivantes:</h3>
    </div>
    <form>
      <div>
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="user_name" />
      </div>
      <div>
        <label htmlFor="telephone">N°tel: </label>
        <input type="text" id="telephone" name="user_telephone" />
      </div>
      <div>
        <label htmlFor="mail">e-mail:</label>
        <input type="email" id="mail" name="user_mail" />
      </div>
      <div>
        <label htmlFor="msg">Message :</label>
        <textarea id="msg" name="user_message" />
      </div>
    </form>

  </div> */
