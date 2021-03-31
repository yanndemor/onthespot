/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Field from './Field';
import Message from './Message';
import './contact.scss';

import { Phone } from 'react-feather';

const Contact = () => (

  <div className="contact-content">

    {/* <div className="contact-content"> */}
    <Phone size={40} className="contact-img" />
    <div className="contact-title">
      <h2>Pour nous contacter!</h2>
    </div>
    <div className="contact-body">
      <div className="contact-detail">
        <h2>Nos Coordonnées</h2>
      </div>
      <div className="phone-detail">
        <h3>N° de télephone</h3>
        <p>(+33) 0769330566</p>
      </div>
      <div className="phone-detail">
        <h3>Adresse email</h3>
        <a href="mailto:customer@onthespot.link">customer@onthespot.link</a>
      </div>
      <div className="phone-detail">
        <h3>Rendez nous un petite visite</h3>
        <p>55b avenue 40230 Capbreton</p>
      </div>
      {/* <div className="form-detail">
        <h3>Contactez nous par mail :</h3>
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
          <input type="username" id="mail" name="user_mail" />
        </div>
        <div>
          <label htmlFor="msg">Message :</label>
          <textarea id="msg" name="user_message" />
        </div>
        <div className="form-detail">
          <h3>Contactez nous par mail:</h3>
        </div>
        <div className="email-detail">
          <p>Email: onthespot@tothebeach.com</p>
        </div>
        <div className="form-detail">
          <h3>Contactez nous rendre une petite visite:</h3>
        </div>
        <div className="address-detail">
          <p>Adresse postale</p>
          <p>55b avenue 40230 Capbreton</p>
        </div>
      </form> */}
    </div>
    {/* </div> */}
  </div>

);

export default Contact;

/* <form autoComplete="off" className="login-form-element" onSubmit="">
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
        name="username"
        placeholder="Adresse Email"
        manageChange="{changeField}"
        value="{username}"
      />
      <Message
        name="message"
        placeholder="Message"
        manageChange="{changeField}"
        value="{username}"
      />

      <button
        type="submit"
        className="contact-button"
      >
        OK
      </button>
    </form> */ 
