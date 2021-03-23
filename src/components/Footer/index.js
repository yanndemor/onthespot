// == Import npm
import React from 'react';
import { Facebook, Instagram, Mail } from 'react-feather';
// == Import
import './footer.scss';

// == Composant
const Footer = () => {
  console.log('footer');
  return (
    <div className="footer row">
      <div className="social-network col-3 col-sm-1">
        <a href="https://oclock.io/">
          <Facebook color="blue" />
        </a>
      </div>
      <div className="social-network col-3 col-sm-1">
        <a href="https://oclock.io/">
          <Instagram color="#f0f" />
        </a>
      </div>
      <div className="social-network col-3 col-sm-2">
        <a href="https://oclock.io/">
          <Mail />
        </a>
      </div>
      <div className="social-network text col-3 col-sm-8">
        <a href="https://oclock.io/">
          Mentions Légales
        </a>
      </div>
    </div>
  );
};

// == Export
export default Footer;
