import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {
  useParams, Link, Route,

  BrowserRouter as Router,

  Switch,

} from 'react-router-dom';
import './breadcrumb.scss';

const BreadCrumb = () => {
  const routes = [
    {
      path: '/',
      exact: true,
      topbar: () => <h5>Accueil des produits</h5>,
      main: () => <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>Accueil / </Link>,

    },
    {
      path: '/produits/glaces',
      topbar: () => <h5>Produits Glaces</h5>,
      main: () => <><Link to="/">Accueil / </Link><Link to="/produits/glaces" style={{ color: 'blue', textDecoration: 'underline' }}> Produits Glaces</Link></>,
    },
    {
      path: '/produits/snack',
      topbar: () => <h5>Produits Snack</h5>,
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/snack" style={{ color: 'blue', textDecoration: 'underline' }}> Produits Snack</Link></>,
    },
    {
      path: '/produits/boissons',
      topbar: () => <h5>Produits Boissons</h5>,
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/boissons" style={{ color: 'blue', textDecoration: 'underline' }}> Produits Boissons</Link></>,
    },
    {
      path: '/produit/magnum-vanille',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/glaces"> Produits Glaces /</Link><p > magnum vanille</p></>,
    },
    {
      path: '/produit/magnum-chocolat',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/glaces"> Produits Glaces /</Link> <p> magnum chocolat</p></>,
    },
    {
      path: '/produit/magnum-amande',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/glaces"> Produits Glaces /</Link> <p> magnum amande</p></>,
    },
    {
      path: '/produit/cornet-vanille',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/glaces"> Produits Glaces /</Link> <p> cornet vanille</p></>,
    },

    {
      path: '/produit/cornet-chocolat',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/glaces"> Produits Glaces /</Link> <p> cornet chocolat</p></>,
    },
    {
      path: '/produit/calipo-citron',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/glaces"> Produits Glaces /</Link> <p> calipo citron</p></>,
    },
    {
      path: '/produit/fusee',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/glaces"> Produits Glaces /</Link> <p> fusee</p></>,
    },
    // ---------------------------snack-----------------
    {
      path: '/produit/beignet-pomme',
      main: () => <><Link to="/">Accueil /</Link> <Link to="/produits/snack"> Produits Snack /</Link> <p> beignet pomme</p></>,
    },
    {
      path: '/produit/beignet-chocholat-noisette',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/snack"> Produits Snack /</Link> <p> beignet chocolat-noisette</p></>,
    },
    {
      path: '/produit/beignet-sucre',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/snack"> Produits Snack /</Link> <p> beignet sucre</p></>,
    },
    {
      path: '/produit/chouchou-pralines',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/snack"> Produits Snack /</Link> <p> chouchou/pralines</p></>,
    },
  
    // --------------------------boissons-----------------
    {
      path: '/produit/coca-cola-33cl',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/boissons"> Produits Boissons /</Link> <p> canette de coca 33cl</p></>,
    },
    {
      path: '/produit/orangina-33cl',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/boissons"> Produits Boissons /</Link> <p> canette d'orangina 33cl</p></>,
    },
    {
      path: '/produit/sprite-33cl',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/boissons"> Produits Boissons /</Link> <p> canette de sprite 33cl</p></>,
    },
    {
      path: '/produit/fanta-33cl',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/boissons"> Produits Boissons /</Link> <p> canette de fanta 33cl</p></>,
    },
    {
      path: '/produit/pepsi-33cl',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/boissons"> Produits Boissons</Link> <p> canette de pepsi 33cl</p></>,
    },
    {
      path: '/produit/perrier-33cl',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/boissons"> Produits Boissons</Link> <p> canette de perrier 33cl</p></>,
    },
    {
      path: '/produit/vittel-50cl',
      main: () => <><Link to="/">Accueil / </Link> <Link to="/produits/boissons"> Produits Boissons</Link> <p> bouteille vittel 50cl</p></>,
    },
    {
      path: '/panier',
      topbar: () => <h5>Panier</h5>,
      main: () => <><Link to="/">Accueil / </Link> <p> panier</p></>,
    },
    {
      path: '/contact',
      topbar: () => <h5>Contact</h5>,
      main: () => <><Link to="/">Accueil / </Link> <p> contact</p></>,
    },
    {
      path: '/connexion',
      topbar: () => <h5>Connexion</h5>,
      main: () => <><Link to="/">Accueil / </Link> <p> connexion</p></>,
    },
    {
      path: '/commandes',
      topbar: () => <h5>Commandes</h5>,
      main: () => <><Link to="/">Accueil / </Link> <p> connexion</p></>,
    },
  ];
  return (

    <div>

      {/*
        <div className="top-bar">

          <li><Link to="/produits/glaces" activeClassName="li--active">Glaces /</Link></li>
          <li><Link to="/products/snack" activeClassName="li--active">Snack</Link></li>
          <li><Link to="/products/boissons" activeClassName="li--active">Boissons</Link></li>
          <li><Link to="/panier" activeClassName="li--active">Panier</Link></li>
          <li><Link to="/commandes" activeClassName="li--active">Commandes</Link></li>
          <li><Link to="/connexion" activeClassName="li--active">Connexion</Link></li>
        </div>
      </div> */}
      <div className="top-bar">
        {routes.map((route) => (

          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />

        ))}
      </div>

    </div>

  );
};
export default BreadCrumb;
