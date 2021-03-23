// == Import npm
import React from 'react';
import { Facebook, Instagram, Mail } from 'react-feather';
import { Link } from 'react-router-dom';
// == Import
import './footer.scss';

// == Composant
const Footer = () => {
  console.log('footer');
  return (
    <div className="footer">
      <div className="footer-mobile d-sm-none">
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
          <Link to="/CGU">
            Mentions Légales
          </Link>
        </div>
      </div>
      <div className="footer-desktop d-none d-sm-flex">
        <div className="footer-desktop-social">
          <div className="social-network">
            <a href="https://oclock.io/">
              <Facebook color="blue" />
            </a>
          </div>
          <div className="social-network">
            <a href="https://oclock.io/">
              <Instagram color="#f0f" />
            </a>
          </div>
          <ul className="list">
            <Link className="link-footer" to="/categories">
              Nos catégories
            </Link>
            <Link className="link-footer" to="/CGU">
              Mentions légales
            </Link>
            <Link className="link-footer" to="/contact">
              Nous contacter
            </Link>
            <Link className="link-footer" to="/qui-sommes-nous">
              Qui sommes nous ?
            </Link>
            <Link className="link-footer" to="/CGV">
              Conditions générales de vente
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

// == Export
export default Footer;
